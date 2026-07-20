import React from 'react';
import styles from './İzinDurumuÖzeti.module.css';

export default function İzinDurumuÖzeti() {
  return (
    <div className={styles.ozetKonteyner}>
      
      {/* 1. BÖLÜM: Yıllık İzin Durumu */}
      <div className={styles.bolumBaslik}>YILLIK İZİN DURUMUNUZ</div>
      <div className={styles.yillikSatir}>
        <span>Kalan Yıllık İzin Günü</span>
        <span className={styles.morYazi}>12 Gün</span>
      </div>

      <div className={styles.ayiriciCizgi} />

      {/* 2. BÖLÜM: Saatlik İzin Kullanımı */}
      <div className={styles.bolumBaslik}>SAATLİK İZİN KULLANIMINIZ</div>
      
      <div className={styles.kutularAlani}>
        {/* Geçen Ay Kutusu */}
        <div className={styles.izinKutusu}>
          <div className={styles.kutuBaslik}>GEÇEN AY</div>
          <div className={styles.kutuDeger}>04:30 Saat</div>
        </div>

        {/* Bu Ay Kutusu */}
        <div className={styles.izinKutusu}>
          <div className={styles.kutuBaslik}>BU AY</div>
          <div className={styles.kutuDeger}>00:00 Saat</div>
        </div>

        {/* Bu Hafta Kutusu */}
        <div className={styles.izinKutusu}>
          <div className={styles.kutuBaslik}>BU HAFTA</div>
          <div className={styles.kutuDeger}>00:00 Saat</div>
        </div>
      </div>

    </div>
  );
}