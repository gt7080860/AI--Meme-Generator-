import { GROQ_API_KEY, GROQ_API_URL, DEFAULT_MODEL, getAIPrompt, FALLBACK_SUGGESTIONS } from '../utils/constants';
import { convertImageToBase64 } from '../utils/memeGenerator';

/**
 * Generates meme text from API based on selected category.
 * @param {File} imageFile - Uploaded image file
 * @param {string} category - Meme category (e.g. 'relatable', 'dark_humor')
 */
export const generateMemeTextFromAPI = async (imageFile, category = "relatable") => {
  try {
    const base64Image = await convertImageToBase64(imageFile);

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: base64Image }
              },
              {
                type: 'text',
                // 👇 dynamically use category — can be 'relatable' or 'dark_humor'
                text: getAIPrompt(category)
              }
            ]
          }
        ],
        temperature: 0.8,
        max_tokens: 1000
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    const content = data.choices[0].message.content;
    const jsonMatch = content.match(/\[[\s\S]*\]/);

    if (jsonMatch) return JSON.parse(jsonMatch[0]);
    else throw new Error('Could not parse AI response');

  } catch (error) {
    console.error('Error calling Groq API:', error);
    return FALLBACK_SUGGESTIONS;
  }
};
