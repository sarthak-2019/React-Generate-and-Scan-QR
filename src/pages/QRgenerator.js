import React, { useState } from "react";
import QRcode from "qrcode.react";

function QRgenerator() {
  const [qr, setQr] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    setQr(event.target.value);
    if (event.target.value === "") {
      setFlag(false);
    }
  };

  const resetQR = () => {
    setQr("");
    setFlag(false);
  };
  const generateQR = () => {
    if (qr == "") {
      alert("Please Enter the QR text");
      return;
    }
    setFlag(true);
  };
  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <span>QR Generator</span>
      <input
        style={{
          marginTop: 30,
          width: "100%",
          minHeight: "40px",
          fontSize: "22px",
        }}
        value={qr}
        onChange={handleChange}
        placeholder="Enter the Text Here"
      />
      <div>
        {flag ? (
          <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      {flag ? null : (
        <div>
          <button
            style={{ padding: "20px", cursor: "pointer" }}
            onClick={generateQR}
          >
            Generate A QR
          </button>
        </div>
      )}
      <div>
        {flag ? (
          <button
            style={{ padding: "20px", cursor: "pointer" }}
            onClick={downloadQR}
          >
            Download A QR
          </button>
        ) : null}
      </div>
      <div>
        {flag ? (
          <button
            style={{ padding: "20px", cursor: "pointer" }}
            onClick={resetQR}
          >
            Reset A QR
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default QRgenerator;
