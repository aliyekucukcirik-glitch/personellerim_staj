import React, { useState } from 'react';
import styles from './GirisEkrani.module.css';
import { User, Lock, Eye, EyeOff, Globe } from 'lucide-react';
import sirketLogo from '../../assets/sirket-logo.png';

export default function GirisEkrani({ onGirisBasarili }) {
  // 'standart' veya 'kurumsal'
  const [girisTipi, setGirisTipi] = useState('standart');

  // Input State'leri
  const [alanAdi, setAlanAdi] = useState('');
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');

  // Şifre Göster/Gizle State'i
  const [sifreGoster, setSifreGoster] = useState(false);
  const [kullaniciGoster, setKullaniciGoster] = useState(false);

  const handleGiris = (e) => {
    e.preventDefault();
    if (onGirisBasarili) {
      onGirisBasarili();
    }
  };

  return (
    <div className={styles.anaKonteyner}>
      <div className={styles.icerikAlani}>
        
        {/* LOGO VE BAŞLIK */}
        <div className={styles.logoAlani}>
          {/* 🌟 PNG LOGO EKLENDİ 🌟 */}
          <img 
            src={sirketLogo} 
            alt="Şirket Logosu" 
            className={styles.logoGorsel} 
          />

          <span className={styles.anaBaslik}>PERSONELLERİM</span>
          <span className={styles.altBaslik}>Personel Devam Kontrol Sistemi</span>
        </div>

        {/* KAPSÜL kurumsal/standart */}
        <div className={styles.tabKapsul}>
          <button 
            className={`${styles.tabButon} ${girisTipi === 'standart' ? styles.tabButonAktif : ''}`}
            onClick={() => setGirisTipi('standart')}
          >
            Standart Giriş
          </button>
          <button 
            className={`${styles.tabButon} ${girisTipi === 'kurumsal' ? styles.tabButonAktif : ''}`}
            onClick={() => setGirisTipi('kurumsal')}
          >
            Kurumsal Giriş
          </button>
        </div>

        {/* FORM KARTI */}
        <form onSubmit={handleGiris} className={styles.formKart}>
          
          {/* KURUMSAL GİRİŞ SEÇİLİNCE YUKARIDAN AŞAĞI ANİMASYONLA GELEN ALAN ADI */}
          {girisTipi === 'kurumsal' && (
            <div className={styles.animasyonluAlan}>
              <div className={styles.inputKutusu}>
                <Globe className={styles.inputIkon} size={20} strokeWidth={2} />
                <input 
                  type="text"
                  placeholder="Alan Adı"
                  value={alanAdi}
                  onChange={(e) => setAlanAdi(e.target.value)}
                  className={styles.inputAlan}
                />
                <span className={styles.alanAdiSonek}>.personellerim.com</span>
              </div>
              <span className={styles.uyariMetin}>
                https://api.personellerim.com
              </span>
            </div>
          )}

          {/* KULLANICI ADI */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div className={styles.inputKutusu}>
              <User className={styles.inputIkon} size={20} strokeWidth={2} />
              <input 
                type="text"
                placeholder="Kullanıcı Adı"
                value={kullaniciAdi}
                onChange={(e) => setKullaniciAdi(e.target.value)}
                className={styles.inputAlan}
              />
              <button 
                type="button" 
                className={styles.gozButon}
                onClick={() => setKullaniciGoster(!kullaniciGoster)}
              >
                {kullaniciGoster ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
              </button>
            </div>
            <span className={styles.uyariMetin}>
              Kullanıcı Adı Boş Geçilmez.
            </span>
          </div>

          {/* ŞİFRE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div className={styles.inputKutusu}>
              <Lock className={styles.inputIkon} size={20} strokeWidth={2} />
              <input 
                type={sifreGoster ? 'text' : 'password'}
                placeholder="Şifre"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
                className={styles.inputAlan}
              />
              <button 
                type="button" 
                className={styles.gozButon}
                onClick={() => setSifreGoster(!sifreGoster)}
              >
                {sifreGoster ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
              </button>
            </div>
            <span className={styles.uyariMetin}>
              Şifre Alanı En Az 6 Karakter Olmalı.
            </span>
          </div>

          {/* GİRİŞ YAP BUTONU */}
          <button type="submit" className={styles.girisButon}>
            Giriş Yap
          </button>

        </form>

        {/* ŞİFREMİ UNUTTUM */}
        <button type="button" className={styles.sifremiUnuttumButon}>
          Şifremi Unuttum
        </button>

      </div>
    </div>
  );
}