import React, { useState } from "react";
import QrScan from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      window.location.href = data;
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <span>QR Scanner</span>
      <div style={{ marginTop: 30 }}>
        <QrScan
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ height: 240, width: 320 }}
        />
      </div>
    </div>
  );
}

export default QRscanner;
