export interface Env {
  WEB3FORMS_KEY: string;
}

const CHATBOT_CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...CHATBOT_CORS_HEADERS,
    },
  })
}

async function sendEmail(accessKey: string, data: Record<string, string>): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('from_name', 'Thailand Services Chatbot');
    formData.append('subject', 'Nouvelle demande d\'assurance via chatbot');

    // Format the message
    const message = `
Nouvelle demande d'assurance :

Nom: ${data.nom}
Prénom: ${data.prenom}
Email: ${data.email}
Adresse: ${data.adresse}
Type de visa: ${data.visa}
Âge: ${data.age}
Antécédents médicaux: ${data.antecedents}
    `.trim();

    formData.append('message', message);
    if (data.email?.trim()) {
      formData.append('replyto', data.email.trim());
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    return response.ok;
  } catch (error) {
    console.error('Web3Forms error:', error);
    return false;
  }
}

async function sendConfirmationEmail(accessKey: string, clientEmail: string): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('from_name', 'Thailand Services');
    formData.append('subject', 'Demande d\'assurance reçue');
    formData.append('email', clientEmail); // Send to client

    const message = `
Bonjour,

Nous avons bien reçu votre demande d'assurance via notre chatbot.
Nous vous contacterons bientôt avec les informations nécessaires.

Cordialement,
L'équipe Thailand Services
    `.trim();

    formData.append('message', message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    return response.ok;
  } catch (error) {
    console.error('Confirmation email error:', error);
    return false;
  }
}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/' && request.method === 'GET') {
      return new Response(
        '<h1>Thailand Services Chatbot Worker</h1><p>Utilisez le endpoint <code>/chatbot</code> en POST pour envoyer les demandes.</p>',
        {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        }
      );
    }

    if (url.pathname === '/chatbot' && request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CHATBOT_CORS_HEADERS });
    }

    if (url.pathname === '/chatbot' && request.method === 'POST') {
      try {
        const data = await request.json();
        
        // Send email to admin via Web3Forms
        const emailSent = await sendEmail(env.WEB3FORMS_KEY, data);

        // Send confirmation email to client
        await sendConfirmationEmail(env.WEB3FORMS_KEY, data.email);
        
        if (emailSent) {
          return jsonResponse({ success: true }, 200);
        } else {
          return jsonResponse({ error: 'Failed to send email' }, 500);
        }
      } catch (error) {
        console.error(error);
        return jsonResponse({ error: 'Invalid request' }, 400);
      }
    }
    return new Response('Not found', { status: 404 });
  },
};