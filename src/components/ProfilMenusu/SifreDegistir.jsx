import React, { useState } from 'react';
import styles from './SifreDegistir.module.css';
import { X, Info, Lock, Eye, EyeOff } from 'lucide-react';

export default function SifreDegistir({ acikMi, kapat, onSifreGuncellendi }) {
  const [eskiSifre, setEskiSifre] = useState('');
  const [yeniSifre, setYeniSifre] = useState('');
  const [yeniSifreTekrar, setYeniSifreTekrar] = useState('');

  const [eskiGoster, setEskiGoster] = useState(false);
  const [yeniGoster, setYeniGoster] = useState(false);
  const [tekrarGoster, setTekrarGoster] = useState(false);

  if (!acikMi) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSifreGuncellendi) {
      onSifreGuncellendi();
    }
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>ŞİFRE DEĞİŞTİR</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* 1. Üst Bilgilendirme Kartı */}
        <div className={styles.bilgiKutusu}>
          <Info className={styles.bilgiIkon} size={22} strokeWidth={2.2} />
          <span className={styles.bilgiMetin}>
            Şifre değiştirme işleminden sonra otomatik olarak giriş sayfasına yönlendirileceksiniz.
          </span>
        </div>

        {/* 2. Form Kartı */}
        <form onSubmit={handleSubmit} className={styles.formKart}>
          
          {/* Eski Şifre */}
          <div className={styles.inputKutusu}>
            <Lock className={styles.inputIkon} size={20} strokeWidth={2} />
            <input 
              type={eskiGoster ? 'text' : 'password'}
              placeholder="Eski Şifre"
              value={eskiSifre}
              onChange={(e) => setEskiSifre(e.target.value)}
              className={styles.inputAlan}
            />
            <button 
              type="button" 
              className={styles.gozButon}
              onClick={() => setEskiGoster(!eskiGoster)}
            >
              {eskiGoster ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
            </button>
          </div>

          {/* Yeni Şifre */}
          <div className={styles.inputKutusu}>
            <Lock className={styles.inputIkon} size={20} strokeWidth={2} />
            <input 
              type={yeniGoster ? 'text' : 'password'}
              placeholder="Yeni Şifre"
              value={yeniSifre}
              onChange={(e) => setYeniSifre(e.target.value)}
              className={styles.inputAlan}
            />
            <button 
              type="button" 
              className={styles.gozButon}
              onClick={() => setYeniGoster(!yeniGoster)}
            >
              {yeniGoster ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
            </button>
          </div>

          {/* Yeni Şifre Tekrar */}
          <div className={styles.inputKutusu}>
            <Lock className={styles.inputIkon} size={20} strokeWidth={2} />
            <input 
              type={tekrarGoster ? 'text' : 'password'}
              placeholder="Yeni Şifre Tekrar"
              value={yeniSifreTekrar}
              onChange={(e) => setYeniSifreTekrar(e.target.value)}
              className={styles.inputAlan}
            />
            <button 
              type="button" 
              className={styles.gozButon}
              onClick={() => setTekrarGoster(!tekrarGoster)}
            >
              {tekrarGoster ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
            </button>
          </div>

          {/* Uyarı Metni */}
          <span className={styles.uyariMetin}>
            Şifre En Az 6 Karakter olmalıdır
          </span>

          <button type="submit" className={styles.degistirButon}>
            Şifreyi Değiştir
          </button>

        </form>

      </div>

    </div>
  );
}