document.addEventListener("DOMContentLoaded", () => {
  if (typeof Html5Qrcode === "undefined") {
    console.error("Html5Qrcode is not loaded!");
    return;
  }

  const html5QrCode = new Html5Qrcode("reader"); // Use Html5Qrcode instead of Html5QrcodeScanner
  const config = {
    fps: 10,
    qrbox: { width: 250, height: 250 },
  };

  const onScanSuccess = (decodedText) => {
    document.getElementById("result").innerText = `Scanned: ${decodedText}`;
  };

  const onScanFailure = (error) => {
    console.warn(`QR Scan Error: ${error}`);
  };

  html5QrCode.start(
    { facingMode: "environment" },
    config,
    onScanSuccess,
    onScanFailure
  );
});
