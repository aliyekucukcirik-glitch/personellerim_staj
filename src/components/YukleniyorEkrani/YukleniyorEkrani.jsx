import React from 'react';
import styles from './YukleniyorEkrani.module.css';
import sirketLogo from '../../assets/sirket-logo.png';

export default function YukleniyorEkrani() {
  return (
    <div className={styles.anaKonteyner}>
      
      {/* Arka Plandaki Soft Parıltılar */}
      <div className={styles.auraPembe} />
      <div className={styles.auraMor} />

      {/* Ortadaki Beyaz Dairesel Kart */}
      <div className={styles.daireKart}>
        
        {/* Şirket Logosu */}
        <img 
          src={sirketLogo} 
          alt="Personellerim Logo" 
          className={styles.logoGorsel} 
        />

        {/* Başlıklar */}
        <span className={styles.anaBaslik}>Personellerim</span>
        <span className={styles.altBaslik}>Personel Devam Kontrol Sistemi</span>

        {/* Versiyon Rozeti */}
        <div className={styles.versiyonRozet}>
          <span className={styles.versiyonYazi}>v3.3.2</span>
        </div>

      </div>

    </div>
  );
}