import React from "react";
import "./AyatGenerator.css";

function AyatGenerator() {
  const getBibleQuetos = () => {
    return {
      title: "Ester 8:9",
      message:
        "Maka pada hari itu juga— yaitu pada tanggal 23 bulan Siwa, Raja memanggil para sekretarisnya, dan Mordekai memerintahkan mereka untuk menulis surat kepada seluruh warga bangsa Yahudi dan kepada semua pejabat di seluruh wilayah kekuasaan Raja Ahasweros— mulai dari India di wilayah timur hingga ke Etiopia di wilayah barat. Para sekretaris menulis semua surat-surat dalam bahasa dan tulisan yang digunakan di setiap wilayah. Mereka pun menulis surat yang ditujukan kepada orang Yahudi di dalam bahasa Yahudi.",
    };
  };
  const { title, message } = getBibleQuetos();
  return (
    <div className="AyatGenerator">
      <div className="title">{title}</div>
      <div className="message">{message}</div>
    </div>
  );
}

export default AyatGenerator;
