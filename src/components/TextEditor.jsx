import React from 'react';
import { Download } from 'lucide-react';
import { downloadMeme } from '../utils/memeGenerator';

const TextEditor = ({ topText, bottomText, onTopTextChange, onBottomTextChange, imagePreview }) => {
  const handleDownload = () => {
    downloadMeme(imagePreview, topText, bottomText);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Customize Text
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Top Text
          </label>
          <input
            type="text"
            value={topText}
            onChange={(e) => onTopTextChange(e.target.value)}
            placeholder="Enter top text..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bottom Text
          </label>
          <input
            type="text"
            value={bottomText}
            onChange={(e) => onBottomTextChange(e.target.value)}
            placeholder="Enter bottom text..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
        </div>
      </div>

      {imagePreview && (topText || bottomText) && (
        <button
          onClick={handleDownload}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download Meme
        </button>
      )}
    </div>
  );
};

export default TextEditor;