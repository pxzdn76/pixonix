import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting map (basique en mémoire)
const rateLimitMap = new Map();

// Utilitaire de sanitisation XSS
function sanitizeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, (match) => {
    const escapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[match];
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    
    // Rate limit : 5 requêtes par 15 minutes par IP
    const windowMs = 15 * 60 * 1000;
    const currentTime = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, startTime: currentTime };
    
    if (currentTime - rateData.startTime > windowMs) {
      rateData.count = 1;
      rateData.startTime = currentTime;
    } else {
      rateData.count += 1;
      if (rateData.count > 5) {
        return NextResponse.json({ error: 'Trop de requêtes, veuillez réessayer plus tard.' }, { status: 429 });
      }
    }
    rateLimitMap.set(ip, rateData);

    const body = await request.json();
    const { firstName, lastName, company, email, project, message, _honeypot } = body;

    // Honeypot check (anti-spam)
    if (_honeypot) {
      // C'est un bot, on simule un succès
      return NextResponse.json({ message: 'Email envoyé avec succès.' }, { status: 200 });
    }

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs obligatoires ne sont pas remplis.' }, { status: 400 });
    }

    // Sanitisation des entrées pour prévenir les failles XSS
    const safeFirstName = sanitizeHtml(firstName);
    const safeLastName = sanitizeHtml(lastName);
    const safeCompany = sanitizeHtml(company);
    const safeEmail = sanitizeHtml(email);
    const safeProject = sanitizeHtml(project);
    const safeMessage = sanitizeHtml(message);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: process.env.CONTACT_EMAIL || 'contact@pixonix.fr', 
      replyTo: email,
      subject: `Nouveau contact depuis le site web : ${safeFirstName} ${safeLastName} - ${safeProject}`,
      text: `
        Vous avez reçu une nouvelle demande de contact depuis le site Pixonix.fr :

        Prénom : ${safeFirstName}
        Nom : ${safeLastName}
        Entreprise : ${safeCompany || 'Non renseignée'}
        Email : ${safeEmail}
        Projet : ${safeProject}

        Message :
        ${safeMessage}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #023E8A;">Nouvelle demande de projet - Pixonix.fr</h2>
          <p>Vous avez reçu un nouveau message depuis le formulaire de contact du site web :</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Prénom :</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeFirstName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nom :</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeLastName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Entreprise :</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeCompany || 'Non renseignée'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email :</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Projet :</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${safeProject}</td></tr>
          </table>
          <h3 style="margin-top: 30px; color: #023E8A;">Message :</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${safeMessage}</div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Une erreur est survenue lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}
