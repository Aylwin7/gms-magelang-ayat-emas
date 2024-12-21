import React from "react";
import logo from "./LOGO.png";
import * as htmlToImage from "html-to-image";
import AyatGenerator from "./AyatGenerator/AyatGenerator.tsx";
import "./App.css";

function App() {
  const saveToImage = () => {
    const element = document.getElementById("App");
    if (!element) return;
    htmlToImage.toJpeg(element, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "gms-magelang-ayat-emas-2024.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="container">
      <div className="App" id="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AyatGenerator />
      </div>
    <div className="save-button-container">
      <button  id="save-button" onClick={saveToImage} className="save-button">
        SIMPAN GAMBAR
      </button>
    </div>
    </div>
  );
}

export default App;
