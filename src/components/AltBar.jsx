import React from 'react';
import styles from './AltBar.module.css';
import { User, QrCode, ScanLine, MapPin } from 'lucide-react';

export default function AltBar() {
  return (
    <div className={styles.altBarKonteyner}>
      
      {/* 1. Profil Butonu */}
      <button className={styles.menuEleman}>
        <User color="#94A3B8" size={24} strokeWidth={2} />
        <span className={styles.yazi}>Profil</span>
      </button>

      {/* 2. QR Oluştur Butonu */}
      <button className={styles.menuEleman}>
        <div className={styles.morButon}>
          <QrCode color="#FFFFFF" size={26} strokeWidth={2} />
        </div>
        <span className={styles.yazi} style={{ color: '#94A3B8' }}>QR Oluştur</span>
      </button>

      {/* 3. QR Tara Butonu */}
      <button className={styles.menuEleman}>
        <div className={styles.morButon}>
          <ScanLine color="#FFFFFF" size={26} strokeWidth={2} />
        </div>
        <span className={styles.yazi} style={{ color: '#94A3B8' }}>QR Tara</span>
      </button>

      {/* 4. Konum İçi Butonu */}
      <button className={styles.menuEleman}>
        <MapPin color="#94A3B8" size={24} strokeWidth={2} />
        <span className={styles.yazi}>Konum İçi</span>
      </button>

    </div>
  );
}