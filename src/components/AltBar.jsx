import React from 'react';
import styles from './AltBar.module.css';
import { User, QrCode, ScanLine, MapPin } from 'lucide-react';

//  App.jsx'ten gelen profilAcik ve onProfilTikla prop'larını burada karşılıyoruz
export default function AltBar({ profilAcik, onProfilTikla }) {
  return (
    <div className={styles.altBarSarmaKonteyner}>
      <div className={styles.altBarKonteyner}>
        
        {/* 1. Profil Butonu - Tıklama fonksiyonu bağlandı */}
        <div 
          className={styles.menuEleman} 
          onClick={onProfilTikla}
          style={{ cursor: 'pointer' }}
        >
          <User color={profilAcik ? "#8B5CF6" : "#64748B"} size={24} strokeWidth={2} />
          <span className={styles.yazi} style={{ color: profilAcik ? "#8B5CF6" : "#64748B" }}>
            Profil
          </span>
        </div>

        {/* 2. QR Oluştur Butonu */}
        <div className={styles.morButonGrup}>
          <div className={styles.morButon}>
            <QrCode color="#FFFFFF" size={24} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>QR Oluştur</span>
        </div>

        {/* 3. QR Tara Butonu */}
        <div className={styles.morButonGrup}>
          <div className={styles.morButon}>
            <ScanLine color="#FFFFFF" size={24} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>QR Tara</span>
        </div>

        {/* 4. Konum İçi Butonu */}
        <div className={styles.menuEleman}>
          <MapPin color="#64748B" size={24} strokeWidth={2} />
          <span className={styles.yazi}>Konum İçi</span>
        </div>

      </div>
    </div>
  );
}