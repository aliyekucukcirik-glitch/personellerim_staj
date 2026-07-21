import React, { useState } from 'react';
import styles from './SifreSifirla.module.css';
import { X, Info, Globe, User, Send } from 'lucide-react';

export default function SifreSifirla({ acikMi, kapat, girisTipi }) {
  const [alanAdi, setAlanAdi] = useState('');
  const [kullaniciAdi, setKullaniciAdi] = useState('');

  if (!acikMi) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('SMS doğrulama kodu telefonunuza gönderildi!');
    kapat();
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>ŞİFRE SIFIRLA</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* 1. Üst Bilgilendirme Kartı */}
        <div className={styles.bilgiKutusu}>
          <Info className={styles.bilgiIkon} size={22} strokeWidth={2.2} />
          <span className={styles.bilgiMetin}>
            Lütfen “Kullanıcı Adınızı” girin ve daha sonra sms gönder butonuna tıklayın. kayıtlı mobil telefonunuza gelen kod ile bir sonraki adımda, şifre değişikliği yapabilirsiniz.
          </span>
        </div>

        {/* 2. Form Kartı */}
        <form onSubmit={handleSubmit} className={styles.formKart}>
          
          {/* Kurumsal Girişte Alan Adı Görünür */}
          {girisTipi === 'kurumsal' && (
            <div className={styles.inputKutusu}>
              <Globe className={styles.inputIkon} size={20} strokeWidth={2} />
              <input 
                type="text"
                placeholder="Alan Adı"
                value={alanAdi}
                onChange={(e) => setAlanAdi(e.target.value)}
                className={styles.inputAlan}
              />
            </div>
          )}

          {/* Kullanıcı Adı */}
          <div className={styles.inputKutusu}>
            <User className={styles.inputIkon} size={20} strokeWidth={2} />
            <input 
              type="text"
              placeholder="Kullanıcı Adı"
              value={kullaniciAdi}
              onChange={(e) => setKullaniciAdi(e.target.value)}
              className={styles.inputAlan}
            />
          </div>

        </form>

        {/* 3. Sms Gönder Butonu */}
        <button type="submit" onClick={handleSubmit} className={styles.smsButon}>
          <Send size={18} strokeWidth={2.2} />
          <span>Sms Gönder</span>
        </button>

      </div>

    </div>
  );
}