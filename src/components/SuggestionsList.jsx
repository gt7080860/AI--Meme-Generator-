import React from 'react';

const SuggestionsList = ({ suggestions, onApplySuggestion }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        AI Suggestions ✨
      </h2>
      
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onApplySuggestion(suggestion)}
            className="w-full text-left p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-colors border-2 border-transparent hover:border-purple-300"
          >
            <div className="font-bold text-purple-700 text-sm mb-1">
              {suggestion.top}
            </div>
            <div className="font-bold text-pink-700 text-sm">
              {suggestion.bottom}
            </div>
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center">
        💡 Click any suggestion to apply it
      </p>
    </div>
  );
};

export default SuggestionsList;