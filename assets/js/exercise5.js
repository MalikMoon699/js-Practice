const generateQR = () => {
  let qrText = document.getElementById("qrText").value;
  let qrContainer = document.getElementById("qrContainer");

  if (qrText.trim() === "") {
    alert("Please enter text or a URL");
    return;
  }

  qrContainer.innerHTML = "";
  let qrImage = document.createElement("img");
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    qrText
  )}`;
  qrContainer.appendChild(qrImage);
};


show.addEventListener("click",()=>{
if (qrText.type === "password") {
  qrText.type = "text";
  show.innerHTML = "Hidden";
} else {
  qrText.type = "password";
  show.innerHTML = "show";
}
});

