import React from 'react';
import { Upload } from 'lucide-react';

const ImageUploader = ({ onImageUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(file, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <label className="block">
        <div className="border-4 border-dashed border-purple-300 rounded-xl p-8 text-center cursor-pointer hover:border-purple-500 transition-colors">
          <Upload className="mx-auto mb-3 text-purple-500" size={48} />
          <p className="text-gray-700 font-semibold mb-2">
            Click to upload or drag & drop
          </p>
          <p className="text-gray-500 text-sm">
            PNG, JPG or GIF (max. 10MB)
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;