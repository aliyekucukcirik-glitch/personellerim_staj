import React from 'react';
import styles from './AvansBilgileri.module.css';

export default function AvansBilgileri() {
  return (
    <div className={styles.avansKonteyner}>
      
      
      <div className={styles.bolumBaslik}>AVANS BİLGİLERİNİZ</div>
      
      {/* 1. SATIR: Geçmiş Dönem */}
      <div className={styles.avansSatir}>
        <div className={styles.solAlan}>
          <div className={styles.ikon}>🕒</div> 
          <div className={styles.metinGrup}>
            <div className={styles.donemBaslik}>2026-6 Geçmiş Dönem</div>
            <div className={styles.durumBaslik}>Ödenen Avans</div>
          </div>
        </div>
        <div className={styles.tutarYazi}>5000,00 ₺</div>
      </div>

      <div className={styles.ayiriciCizgi} />

      {/* 2. SATIR: Mevcut Dönem */}
      <div className={styles.avansSatir}>
        <div className={styles.solAlan}>
          <div className={styles.ikon}>👛</div> 
          <div className={styles.metinGrup}>
            <div className={styles.donemBaslik}>2026-7 MEVCUT DÖNEM</div>
            <div className={styles.durumBaslik}>Güncel Bakiye</div>
          </div>
        </div>
        <div className={styles.tutarYazi}>0,00 ₺</div>
      </div>

    </div>
  );
}