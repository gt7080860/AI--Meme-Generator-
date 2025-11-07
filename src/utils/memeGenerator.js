export const downloadMeme = (imagePreview, topText, bottomText) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw image
    ctx.drawImage(img, 0, 0);
    
    // Set text style
    const fontSize = Math.floor(img.width / 15);
    ctx.font = `bold ${fontSize}px Impact, Arial Black, sans-serif`;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 15;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    // Draw top text
    if (topText) {
      const topY = fontSize / 2;
      ctx.strokeText(topText.toUpperCase(), canvas.width / 2, topY);
      ctx.fillText(topText.toUpperCase(), canvas.width / 2, topY);
    }
    
    // Draw bottom text
    if (bottomText) {
      const bottomY = canvas.height - fontSize * 1.5;
      ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
      ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
    }
    
    // Download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'meme.png';
      a.click();
      URL.revokeObjectURL(url);
    });
  };
  
  img.src = imagePreview;
};

export const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};