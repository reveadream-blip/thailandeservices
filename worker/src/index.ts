export interface Env {
  GITHUB_TOKEN: string;
  // CHATBOT_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/chatbot' && request.method === 'POST') {
      try {
        const data = await request.json();
        // Create GitHub issue
        const issueBody = `Nouvelle demande d'assurance :\n\n${Object.entries(data).map(([k, v]) => `- ${k}: ${v}`).join('\n')}`;
        const response = await fetch('https://api.github.com/repos/reveadream-blip/thailandeservices/issues', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'Nouvelle demande d\'assurance',
            body: issueBody,
          }),
        });
        if (response.ok) {
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } else {
          console.error('GitHub API error:', await response.text());
          return new Response(JSON.stringify({ error: 'Failed to create issue' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Invalid request' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
    return new Response('Not found', { status: 404 });
  },
};