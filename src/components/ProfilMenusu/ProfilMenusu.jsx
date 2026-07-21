import React from 'react';
import styles from './ProfilMenusu.module.css';
import { User, Settings, Lock, LogOut } from 'lucide-react';

export default function ProfilMenusu({ acikMi, kapat, onProfilBilgileriAc }) {
  if (!acikMi) return null;

  return (
    <div className={styles.karartmaKatmani} onClick={kapat}>
      <div className={styles.baloncukGrubu} onClick={(e) => e.stopPropagation()}>
        
        {/* 1. Profil Bilgileri Butonu */}
        <button 
          className={`${styles.baloncukEleman} ${styles.profilAnaBaloncuk}`}
          onClick={onProfilBilgileriAc}
        >
          <div className={styles.profilIkonKutusu}>
            <User color="#FFFFFF" size={20} strokeWidth={2.2} />
          </div>
          <span className={styles.yazi}>Profil Bilgileri</span>
        </button>

        {/* 2. Ayarlar */}
        <button className={`${styles.baloncukEleman} ${styles.esitBaloncuk}`}>
          <Settings color="#64748B" size={20} strokeWidth={2} />
          <span className={styles.yazi}>Ayarlar</span>
        </button>

        {/* 3. Şifre Değiştir */}
        <button className={`${styles.baloncukEleman} ${styles.esitBaloncuk}`}>
          <Lock color="#64748B" size={20} strokeWidth={2} />
          <span className={styles.yazi}>Şifre Değiştir</span>
        </button>

        {/* 4. Oturumu Kapat */}
        <button className={`${styles.baloncukEleman} ${styles.esitBaloncuk} ${styles.cikisBaloncuk}`}>
          <LogOut color="#EF4444" size={20} strokeWidth={2} />
          <span className={`${styles.yazi} ${styles.cikisYazi}`}>Oturumu Kapat</span>
        </button>

      </div>
    </div>
  );
}