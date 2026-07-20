import React from 'react';
// Modüler CSS dosyamızı çağırıyoruz
import styles from './ÜstBar.module.css';
import SirketLogosu from '../assets/sirket-logo.png'; 

export default function ÜstBar() {
  return (
    <div className={styles.ustBarKonteyner}>
      
     {/* 1. SOL ALAN: Hamburger Menü Çizgileri */}
       <button className={styles.buton}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
      </button>

      {/* 2. ORTA ALAN: Gerçek Logo ve Şirket İsmi */}
      <div className={styles.logoAlan}>
        {/* img etiketiyle gerçek logoyu basıyoruz */}
        <img 
          src={SirketLogosu} 
          alt="Personellerim Kurumsal Logo" 
          className={styles.kurumsalLogo}
        />
        <span className={styles.logoYazi}>PERSONELLERİM</span>
      </div>

      {/* 3. SAĞ ALAN: Bildirim Zili ve İkonları */}
      <button className={styles.bildirimButon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#1E1B4B"/>
        </svg>
        {/* Bildirim rozetinin siyah zemin ve turuncu ön yüz detayları */}
        <div className={styles.bildirimNoktaDis} />
        <div className={styles.bildirimNoktaIc} />
      </button>

    </div>
  );
}