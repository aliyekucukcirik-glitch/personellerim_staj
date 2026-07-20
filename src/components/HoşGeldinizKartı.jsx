import React from 'react';
import styles from './HoşGeldinizKartı.module.css';

export default function HoşGeldinizKartı() {
  return (
    <div className={styles.kartKonteyner}>
      
     
      <div className={styles.selamlamaGrup}>
        <div className={styles.hosGeldinizYazi}>HOŞ GELDİNİZ!</div>
        <div className={styles.isimYazi}>ALİYE KÜÇÜKCIRIK</div>
        <div className={styles.idYazi}>ID: 00055-01</div>
      </div>

      
      <div className={styles.vardiyaKarti}>
        <div className={styles.vardiyaBaslik}>YARINKİ VARDİYA BİLGİNİZ</div>
        <div className={styles.vardiyaTuru}>Normal Mesai</div>
        
        <div className={styles.vardiyaDetaySatir}>
          <span>04.07.2026</span>
          <div className={styles.ayiriciCizgi} />
          <span>Başlangıç saati: 08:30</span>
          <div className={styles.noktaIkon} />
          <span>Bitiş Saati: 19:00</span>
        </div>
      </div>

    </div>
  );
}