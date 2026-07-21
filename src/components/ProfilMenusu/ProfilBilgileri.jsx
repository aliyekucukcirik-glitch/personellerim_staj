import React from 'react';
import styles from './ProfilBilgileri.module.css';
import { X, User, Smartphone, Mail, Building2, UserCheck, Camera } from 'lucide-react';

export default function ProfilBilgileri({ acikMi, kapat }) {
  if (!acikMi) return null;

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>PROFİL BİLGİLERİ</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* İçerik */}
      <div className={styles.icerikAlani}>
        
        {/* 1. KART: Avatar & İsim */}
        <div className={styles.profilKart}>
          <div className={styles.avatarKonteyner}>
            <div className={styles.avatarDaire}>
              <User color="#cbd5e1" size={54} strokeWidth={1.5} />
            </div>
            <div className={styles.kameraRozet}>
              <Camera color="#8b5cf6" size={15} strokeWidth={2.2} />
            </div>
          </div>
          <span className={styles.kullaniciAdi}>Aliye Küçükcırık</span>
          <span className={styles.idRozet}>ID: 00055-01</span>
        </div>

        {/* 2. KART: İletişim Bilgileri */}
        <div className={styles.bilgiKart}>
          <div className={styles.satir}>
            <Smartphone className={styles.ikon} size={20} strokeWidth={2} />
            <span className={styles.degerYazi}>+90 (544) 153 85 71</span>
          </div>
          <div className={styles.satir}>
            <Mail className={styles.ikon} size={20} strokeWidth={2} />
            <span className={styles.degerYazi}>aliye2105@gmail.com</span>
          </div>
        </div>

        {/* 3. KART: Departman ve Pozisyon */}
        <div className={styles.departmanKart}>
          <div className={styles.blok}>
            <span className={styles.etiket}>DEPARTMAN</span>
            <div className={styles.satir}>
              <Building2 className={styles.ikon} size={20} strokeWidth={2} />
              <span className={styles.degerYazi}>Yazılım Geliştirme Bölümü</span>
            </div>
          </div>

          <div className={styles.blok}>
            <span className={styles.etiket}>POZİSYON/UNVAN</span>
            <div className={styles.satir}>
              <UserCheck className={styles.ikon} size={20} strokeWidth={2} />
              <span className={styles.degerYazi}>Front-End Developer Stajyeri</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}