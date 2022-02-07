import { Grid, Button, Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiQrcode, mdiQrcodeScan } from "@mdi/js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Scan and Generate a QR</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link to="/qr_generator">
          <button style={{ padding: "20px" }}>Generate A QR</button>
        </Link>
        <Link to="/qr_scanner">
          <button style={{ padding: "20px" }}>Scan A QR</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
