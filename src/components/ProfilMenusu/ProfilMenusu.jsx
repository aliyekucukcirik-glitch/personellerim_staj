import React from 'react';
import styles from './ProfilMenusu.module.css';
import { User, Settings, Bell, Lock, LogOut } from 'lucide-react';

export default function ProfilMenusu({ acikMi, kapat }) {
  if (!acikMi) return null;

  return (
    <div className={styles.karartmaKatmani} onClick={kapat}>
      <div className={styles.popupKonteyner} onClick={(e) => e.stopPropagation()}>
        
        {/* 1. Profil Bilgileri */}
        <button className={styles.menuElemani}>
          <div className={`${styles.ikonKutusu} ${styles.profilAktifKutu}`}>
            <User color="#FFFFFF" size={18} strokeWidth={2.2} />
          </div>
          <span className={styles.yazi}>Profil Bilgileri</span>
        </button>

        {/* 2. Ayarlar */}
        <button className={styles.menuElemani}>
          <div className={styles.ikonKutusu}>
            <Settings color="#64748B" size={18} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>Ayarlar</span>
        </button>

        {/* 3. Bildirim Tercihleri */}
        <button className={styles.menuElemani}>
          <div className={styles.ikonKutusu}>
            <Bell color="#64748B" size={18} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>Bildirim Tercihleri</span>
        </button>

        {/* 4. Şifre Değiştir */}
        <button className={styles.menuElemani}>
          <div className={styles.ikonKutusu}>
            <Lock color="#64748B" size={18} strokeWidth={2} />
          </div>
          <span className={styles.yazi}>Şifre Değiştir</span>
        </button>

        {/* 5. Oturumu Kapat */}
        <button className={styles.menuElemani}>
          <div className={`${styles.ikonKutusu} ${styles.cikisKutusu}`}>
            <LogOut color="#EF4444" size={18} strokeWidth={2} />
          </div>
          <span className={`${styles.yazi} ${styles.cikisYazi}`}>Oturumu Kapat</span>
        </button>

      </div>
    </div>
  );
}