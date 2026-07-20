import React from 'react';
// CSS dosyasını 'styles' adıyla içeri aktarıyoruz
import styles from './ÜstBar.module.css';

export default function ÜstBar() {
  return (
    <div className={styles.ustBarKonteyner}>
      
      {/* SOL ALAN: Hamburger Menü Çizgileri */}
      <button className={styles.buton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6H20M4 12H20M4 18H18" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* ORTA ALAN: Logo ve Şirket İsmi */}
      <div className={styles.logoAlan}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={styles.logoIkon}>
          <path d="M4 18V11C4 7.13401 7.13401 4 11 4H13C16.866 4 20 7.13401 20 11V18" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="7" cy="11" r="1.5" fill="#8B5CF6"/>
          <circle cx="17" cy="11" r="1.5" fill="#8B5CF6"/>
          <circle cx="12" cy="16" r="1.5" fill="#8B5CF6"/>
        </svg>
        <span className={styles.logoYazi}>PERSONELLERİM</span>
      </div>

      {/* SAĞ ALAN: Bildirim Zili */}
      <button className={styles.bildirimButon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#1E1B4B"/>
        </svg>
        <div className={styles.bildirimNoktaDis} />
        <div className={styles.bildirimNoktaIc} />
      </button>

    </div>
  );
}