import React from 'react';

const MemePreview = ({ imagePreview, topText, bottomText }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <div className="relative bg-black rounded-xl overflow-hidden">
        <img
          src={imagePreview}
          alt="Meme Preview"
          className="w-full"
        />
        {topText && (
          <div className="absolute top-4 left-0 right-0 text-center">
            <span 
              className="text-white text-2xl font-black uppercase"
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
              }}
            >
              {topText}
            </span>
          </div>
        )}
        {bottomText && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span 
              className="text-white text-2xl font-black uppercase"
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
              }}
            >
              {bottomText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemePreview;