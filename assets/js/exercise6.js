const processImage = () => {
  const input = document.getElementById("imageInput");
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);
  const quality = parseFloat(document.getElementById("quality").value);
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const outputImage = document.getElementById("outputImage");
  const downloadBtn = document.getElementById("downloadBtn");

  if (input.files.length === 0) {
    alert("Please select an image file");
    return;
  }

  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = func = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = func = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
      outputImage.src = compressedDataUrl;
      downloadBtn.style.display = "inline";
      downloadBtn.onclick = func = () => {
        const link = document.createElement("a");
        link.href = compressedDataUrl;
        link.download = "compressed_image.jpg";
        link.click();
      };
    };
  };
};
