import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import MemePreview from './components/MemePreview';
import TextEditor from './components/TextEditor';
import SuggestionsList from './components/SuggestionsList';
import { generateMemeTextFromAPI } from './services/groqService';
import { Wand2, Loader2 } from 'lucide-react';

function App() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [tone, setTone] = useState('relatable'); // 🆕 added tone state

  const handleImageUpload = (file, preview) => {
    setImage(file);
    setImagePreview(preview);
    setSuggestions([]);
    setTopText('');
    setBottomText('');
  };

  const generateMemeText = async () => {
    if (!image) return;
    setIsGenerating(true);

    try {
      // 🆕 pass tone to your service function
      const generatedSuggestions = await generateMemeTextFromAPI(image, tone);
      setSuggestions(generatedSuggestions);
      setTopText(generatedSuggestions[0].top);
      setBottomText(generatedSuggestions[0].bottom);
    } catch (error) {
      console.error('Error generating meme text:', error);
      alert('Failed to generate meme text. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const applySuggestion = (suggestion) => {
    setTopText(suggestion.top);
    setBottomText(suggestion.bottom);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          🎬 AI Meme Creator
        </h1>
        <p className="text-white/90 text-center mb-8">
          Upload a movie scene and let AI suggest the perfect meme text!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <ImageUploader onImageUpload={handleImageUpload} />

            {/* 🆕 Tone Selector */}
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-white">
              <label className="block mb-2 font-semibold">🎭 Select Humor Tone:</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-white/20 text-white p-2 rounded-md focus:outline-none"
              >
                <option value="relatable">Relatable</option>
                <option value="sarcastic">Sarcastic</option>
                <option value="wholesome">Wholesome</option>
                <option value="chaotic">Chaotic</option>
              </select>
            </div>

            {imagePreview && (
              <MemePreview
                imagePreview={imagePreview}
                topText={topText}
                bottomText={bottomText}
              />
            )}

            {imagePreview && (
              <button
                onClick={generateMemeText}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Generating Magic...
                  </>
                ) : (
                  <>
                    <Wand2 size={24} />
                    Generate Meme Text with AI
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <TextEditor
              topText={topText}
              bottomText={bottomText}
              onTopTextChange={setTopText}
              onBottomTextChange={setBottomText}
              imagePreview={imagePreview}
            />

            {suggestions.length > 0 && (
              <SuggestionsList
                suggestions={suggestions}
                onApplySuggestion={applySuggestion}
              />
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">🔧 About:</h3>
          <p className="text-sm leading-relaxed">
            This app uses Groq's AI API with vision capabilities to analyze your images and suggest funny meme captions based on popular culture references.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
