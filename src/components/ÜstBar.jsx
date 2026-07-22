import React from 'react';
import { Menu, Bell } from 'lucide-react';
import styles from './ÜstBar.module.css';

export default function ÜstBar({ onMenuTikla, onBildirimTikla }) {
  return (
    <div className={styles.ustBarKonteyner}>
      {/* Sol Menü Butonu */}
      <button className={styles.buton} onClick={onMenuTikla}>
        <Menu size={24} color="#1E1B4B" />
      </button>

      {/* Başlık / Logo Alanı */}
      <div className={styles.logoAlan}>
        <span className={styles.logoYazi}>PERSONELLERİM</span>
      </div>

      {/* Sağ Bildirim İkonu */}
      <button className={styles.bildirimButon} onClick={onBildirimTikla}>
        <Bell size={24} color="#1E1B4B" fill="#1E1B4B" />
        {/* Kırmızı Rozet Noktaları */}
        <span className={styles.bildirimNoktaDis} />
        <span className={styles.bildirimNoktaIc} />
      </button>
    </div>
  );
}