import React, { useState } from 'react';
import styles from './KareKodOkut.module.css';
import { X, MapPin, Check, Clock } from 'lucide-react';

export default function KareKodOkut({ acikMi, kapat }) {
  const [modalDurumu, setModalDurumu] = useState(null);

  if (!acikMi) return null;

  const handleEkranTiklama = () => {
    if (modalDurumu === null) {
      setModalDurumu('giris');
    } else if (modalDurumu === 'giris') {
      setModalDurumu('cikis');
    } else {
      setModalDurumu(null);
    }
  };

  const handleModalKapat = (e) => {
    e.stopPropagation();
    setModalDurumu(null);
  };

  return (
    <div className={styles.tamSayfaKonteyner} onClick={handleEkranTiklama}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>KARE KOD OKUT</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* KAMERA ÇERÇEVESİ */}
        <div className={styles.kameraKutusu}>
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

      {/* POP-UP */}
      {modalDurumu && (
        <div className={styles.modalKarartma} onClick={handleEkranTiklama}>
          <div className={styles.modalKart} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalKapat} onClick={handleModalKapat}>
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
            )}2

          </div>
        </div>
      )}

    </div>
  );
}