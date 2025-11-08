export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
export const GROQ_API_URL = process.env.REACT_APP_GROQ_API_URL;
export const DEFAULT_MODEL = process.env.REACT_APP_DEFAULT_MODEL;

export const FALLBACK_SUGGESTIONS = [
  { top: "WHEN YOU TRY TO EXPLAIN", bottom: "BUT NOBODY GETS IT" },
  { top: "ME: I'LL SLEEP EARLY TONIGHT", bottom: "ALSO ME AT 3AM:" },
  { top: "NOBODY:", bottom: "ABSOLUTELY NOBODY:" },
  { top: "IT'S FINE", bottom: "EVERYTHING IS FINE" }
];

// Dynamic AI prompt with tone selection (includes "dark humor")
export const getAIPrompt = (tone = "relatable") => `
You are a viral meme creator who deeply understands internet humor, Gen Z slang, and pop culture trends.

Analyze this image and suggest 4 creative, funny meme captions inspired by current social media humor (Instagram, X/Twitter, Reddit, YouTube).
Use formats people actually post — short, punchy, and highly relatable. You can include references to trending topics, emotions, or situations if relevant.

Tone style: **${tone.toUpperCase()}** — all memes should reflect this humor mood.

If the tone is "dark" or "dark humor", allow slightly edgy, ironic, or sarcastic jokes — 
but keep them harmless, clever, and relatable (no offensive, political, or NSFW content).

For each suggestion, provide:
- A short "top text" (setup/context)
- A short "bottom text" (punchline/payoff)

Rules:
- Keep each line under 12 words.
- Make at least one meme reference something trending or iconic (movie, viral phrase, reaction, etc.)
- Avoid offensive, political, or NSFW content.

Return ONLY a JSON array in this exact format:
[
  {"top": "TOP TEXT HERE", "bottom": "BOTTOM TEXT HERE"},
  {"top": "TOP TEXT HERE", "bottom": "BOTTOM TEXT HERE"},
  {"top": "TOP TEXT HERE", "bottom": "BOTTOM TEXT HERE"},
  {"top": "TOP TEXT HERE", "bottom": "BOTTOM TEXT HERE"}
]`;
