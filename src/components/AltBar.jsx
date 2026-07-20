import React from 'react';
import styles from './AltBar.module.css';
import { User, QrCode, ScanLine, MapPin } from 'lucide-react';

export default function AltBar() {
  return (
    <div className={styles.altBarSarmaKonteyner}>
      <div className={styles.altBarKonteyner}>
        
        {/* 1. Profil Butonu */}
        <div className={styles.menuEleman}>
          <User color="#94A3B8" size={24} strokeWidth={2} />
          <span className={styles.yazi}>Profil</span>
        </div>

        {/* 2. QR Oluştur Butonu */}
        <div className={styles.morButonGrup}>
          <div className={styles.morButon}>
            <QrCode color="#FFFFFF" size={28} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>QR Oluştur</span>
        </div>

        {/* 3. QR Tara Butonu */}
        <div className={styles.morButonGrup}>
          <div className={styles.morButon}>
            <ScanLine color="#FFFFFF" size={28} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>QR Tara</span>
        </div>

        {/* 4. Konum İçi Butonu */}
        <div className={styles.menuEleman}>
          <MapPin color="#94A3B8" size={24} strokeWidth={2} />
          <span className={styles.yazi}>Konum İçi</span>
        </div>

      </div>
    </div>
  );
}