import React from 'react';
// Modüler CSS dosyamızı çağırıyoruz
import styles from './ÜstBar.module.css';

export default function ÜstBar() {
  return (
    <div className={styles.ustBarKonteyner}>
      
      {/* 1. SOL ALAN: Hamburger Menü Çizgileri */}
      <button className={styles.buton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6H20M4 12H20M4 18H18" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* 2. ORTA ALAN: Figma'dan Kopyaladığın Orijinal Logo ve Şirket İsmi */}
      <div className={styles.logoAlan}>
        
        {/* 🌟 DÜZELTİLMİŞ VE TEMİZLENMİŞ LOGO SVG 🌟 */}
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" fill="#8B5CF6"/>
          <path d="M10 10C12.7614 10 15 12.2386 15 15V22H5V15C5 12.2386 7.23858 10 10 10Z" fill="#8B5CF6"/>
          <path d="M4 8C5.10457 8 6 8.89543 6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8Z" fill="#EC4899"/>
          <path d="M16 8C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8Z" fill="#EC4899"/>
        </svg>
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