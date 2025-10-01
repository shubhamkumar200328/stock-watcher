import { Inngest } from 'inngest';

export const inngest = new Inngest({
  id: 'stockwatcher',
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } },
});
