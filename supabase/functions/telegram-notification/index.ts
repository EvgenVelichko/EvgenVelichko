import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const TELEGRAM_BOT_TOKEN = Deno.env.get('7769244956:AAH33jtHMqAM3Q8Oks5o4T_jUL5L2d91amM') || '';
const TELEGRAM_CHAT_ID = Deno.env.get('1418643598') || '';

serve(async (req) => {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message, timestamp } = await req.json();
      
      const formattedMessage = `
📨 New Contact Form Message

👤 From: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
🕒 Time: ${new Date(timestamp).toLocaleString()}
`;

      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: formattedMessage,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send Telegram message');
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      });
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 405,
  });
});