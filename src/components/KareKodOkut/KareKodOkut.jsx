import React, { useState } from 'react';
import styles from './KareKodOkut.module.css';
import { X, MapPin, Check, Clock } from 'lucide-react';

export default function KareKodOkut({ acikMi, kapat }) {
  const [modalDurumu, setModalDurumu] = useState(null);

  if (!acikMi) return null;

  // Kamera çerçevesine basıldığında Giriş kartını açar
  const handleKameraTiklama = (e) => {
    e.stopPropagation();
    setModalDurumu('giris');
  };

  // Pop-up kartına tıklandığında geçişleri kontrol eder (Giriş -> Çıkış -> Kapanış)
  const handleModalKartTiklama = (e) => {
    e.stopPropagation();
    if (modalDurumu === 'giris') {
      setModalDurumu('cikis');
    } else if (modalDurumu === 'cikis') {
      setModalDurumu(null);
    }
  };

  // X Butonuna basıldığında modalı kapatır
  const handleModalKapat = (e) => {
    e.stopPropagation();
    setModalDurumu(null);
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>KARE KOD OKUT</span>
        <button type="button" className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* KAMERA ÇERÇEVESİ (Tıklama Alanı) */}
        <div className={styles.kameraKutusu} onClick={handleKameraTiklama}>
          <div className={`${styles.koselik} ${styles.solUst}`} />
          <div className={`${styles.koselik} ${styles.sagUst}`} />
          <div className={`${styles.koselik} ${styles.solAlt}`} />
          <div className={`${styles.koselik} ${styles.sagAlt}`} />
          
          <div className={styles.lazerCizgi} />
        </div>

        {/* METİNLER VE KONUM KARTI */}
        <div className={styles.altGrup}>
          <span className={styles.odakYazi}>Lütfen Kare Kodunu Odaklayın</span>

          <div className={styles.konumKart}>
            <MapPin className={styles.konumIkon} size={20} />
            <div className={styles.konumMetinGrubu}>
              <span>MEVCUT KONUM :</span>
              <span className={styles.konumKoyu}>15 metreye kadar doğru.</span>
            </div>
          </div>

          <span className={styles.altAciklama}>
            Kamerayı koda yaklaştırın ve çerçevenin içine hizalayın.
          </span>
        </div>

      </div>

      {/* POP-UP (Giriş / Çıkış Başarılı Kartı) */}
      {modalDurumu && (
        <div className={styles.modalKarartma} onClick={() => setModalDurumu(null)}>
          <div className={styles.modalKart} onClick={handleModalKartTiklama}>
            <button type="button" className={styles.modalKapat} onClick={handleModalKapat}>
              <X size={24} strokeWidth={2.2} />
            </button>

            {/* GİRİŞ BAŞARILI POP-UP */}
            {modalDurumu === 'giris' && (
              <>
                <div className={`${styles.basariKart} ${styles.yesilGradient}`}>
                  <div className={styles.tikDaire}>
                    <Check size={26} color="#2bbd8e" strokeWidth={3} />
                  </div>
                  <span className={styles.basariAnaBaslik}>Giriş Başarılı</span>
                  <span className={styles.basariSaat}>İşlem Saati: 09:00</span>
                </div>

                <div className={styles.altSonucBilgi}>
                  <Clock size={18} color="#64748b" />
                  <span>Bugünkü giriş kaydınız başarıyla alındı.</span>
                </div>
              </>
            )}

            {/* ÇIKIŞ BAŞARILI POP-UP */}
            {modalDurumu === 'cikis' && (
              <>
                <div className={`${styles.basariKart} ${styles.kirmiziGradient}`}>
                  <div className={styles.tikDaire}>
                    <Check size={26} color="#ee5253" strokeWidth={3} />
                  </div>
                  <span className={styles.basariAnaBaslik}>Çıkış Başarılı</span>
                  <span className={styles.basariSaat}>İşlem Saati: 18:00</span>
                </div>

                <div className={styles.altSonucBilgi}>
                  <Clock size={18} color="#64748b" />
                  <span>Bugünkü çıkış kaydınız başarıyla alındı.</span>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}