export interface Env {
  // CHATBOT_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/chatbot' && request.method === 'POST') {
      try {
        const data = await request.json();
        // Store in KV or send email, etc.
        // For now, log
        console.log('Chatbot data:', data);
        // You can use env.CHATBOT_KV.put('key', JSON.stringify(data));
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
    return new Response('Not found', { status: 404 });
  },
};