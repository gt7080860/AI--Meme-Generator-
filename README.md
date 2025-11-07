# AI Meme Creator

An AI-powered meme generator that uses Groq's API to suggest funny meme captions based on uploaded images.

## Features
- 📤 Upload images (PNG, JPG, GIF)
- 🤖 AI-powered meme text suggestions using Groq API
- ✏️ Manual text editing
- 👁️ Live meme preview with text overlay
- 💾 Download finished memes as PNG

## Installation

1. **Clone or create the project:**
```bash
npx create-react-app meme-creator
cd meme-creator
```

2. **Copy all the provided files into their respective locations:**
   - Copy `package.json` to root
   - Copy `public/index.html` to public folder
   - Copy all `src/` files to their respective folders

3. **Install dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm start
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure
```
meme-creator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ImageUploader.jsx      # Image upload component
│   │   ├── MemePreview.jsx        # Meme preview with text overlay
│   │   ├── TextEditor.jsx         # Text input and download
│   │   └── SuggestionsList.jsx    # AI suggestions display
│   ├── services/
│   │   └── groqService.js         # Groq API integration
│   ├── utils/
│   │   ├── constants.js           # API keys and constants
│   │   └── memeGenerator.js       # Canvas utilities
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── index.js                   # React entry point
├── package.json
└── README.md
```

## How to Use

1. **Upload an image** - Click the upload area or drag and drop a movie scene or any image
2. **Generate AI suggestions** - Click "Generate Meme Text with AI" button
3. **Choose or edit text** - Select from AI suggestions or manually edit the top and bottom text
4. **Download** - Click "Download Meme" to save your creation

## Technologies Used
- **React 18** - Frontend framework
- **Tailwind CSS** - Styling (via CDN)
- **Groq API** - AI vision model (Llama 4 Scout)
- **Lucide React** - Icons
- **Canvas API** - Meme generation

## Security Note
⚠️ **Important**: The API key is currently hardcoded in `src/utils/constants.js`. 

**For production use:**
- Move API key to environment variables (.env file)
- Create a backend server (Node.js, Python, etc.) to handle API calls
- Never expose API keys in frontend code
- Add rate limiting and authentication

## API Configuration

The app uses Groq API with these settings:
- **Model:** `meta-llama/llama-4-scout-17b-16e-instruct`
- **Temperature:** 0.8 (for creative responses)
- **Max Tokens:** 1000

To change the model or settings, edit `src/utils/constants.js`.

## Troubleshooting

**Issue: API calls failing**
- Check if the API key is valid
- Verify internet connection
- Check browser console for errors
- Fallback suggestions will be used if API fails

**Issue: Download not working**
- Ensure the image is fully loaded
- Check browser console for errors
- Try a different browser

**Issue: Tailwind styles not loading**
- Verify the CDN link in `public/index.html`
- Clear browser cache
- Check browser console for errors

## Future Enhancements
- [ ] Add more meme templates
- [ ] Support for video memes
- [ ] Social media sharing
- [ ] Meme gallery/history
- [ ] Custom font options
- [ ] Backend API for better security

## License
MIT

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

---

Made with ❤️ using React and Groq AI