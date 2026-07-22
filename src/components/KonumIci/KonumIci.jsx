import React, { useState, useEffect } from 'react';
import styles from './KonumIci.module.css';
import { X, Building2, Map, DoorOpen, Coffee } from 'lucide-react';

import arkaplanDesen from '../../assets/arkaplandesen.png';
import konumIciGorsel from '../../assets/konumiçi.png';

export default function KonumIci({ acikMi, kapat }) {
  const [secilenMod, setSecilenMod] = useState(null);
  const [sayac, setSayac] = useState(5);

  useEffect(() => {
    let timer;
    if ((secilenMod === 'yesilModal' || secilenMod === 'kirmiziModal') && sayac > 0) {
      timer = setInterval(() => {
        setSayac((prev) => prev - 1);
      }, 1000);
    } else if (sayac === 0) {
      setSecilenMod(null);
      setSayac(5);
    }
    return () => clearInterval(timer);
  }, [secilenMod, sayac]);

  if (!acikMi) return null;

  const handleDamlaAc = (mod) => {
    setSecilenMod(mod);
    setSayac(5);
  };

  const handleIslemTıkla = () => {
    setSecilenMod('uyari');
  };

  const handleHaritadaGoster = () => {
    window.open("https://www.google.com/maps/place/Worksoft+Yaz%C4%B1l%C4%B1m+M%C3%BChendisli%C4%9Fi+San.+Tic.+Ltd.+%C5%9Eti./@37.2050635,33.3012734,18.18z/data=!4m6!3m5!1s0x14d98d9f461c88a7:0x6d2b7ac05884ec1d!8m2!3d37.2050272!4d33.3008464!16s%2Fg%2F11tnvsdm43?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>KONUM İÇİ GİRİŞ/ÇIKIŞ</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* HİZALANMIŞ ÜST KART GRUBU */}
        <div className={styles.ustKartGrubu}>
          <span className={styles.altBaslik}>En Yakın Lokasyon</span>

          <div className={styles.enYakinKart}>
            <div className={styles.kartUst}>
              <Building2 className={styles.binaIkon} size={22} />
              <div className={styles.lokasyonDetay}>
                <span className={styles.lokasyonBaslik}>İdari Bina</span>
                <span className={styles.lokasyonAlt}>İş Yeri Giriş / Çıkış</span>
              </div>
            </div>
            
            <div className={styles.haritaLink} onClick={handleHaritadaGoster}>
              <span>Konumu haritada görmek için tıklayın.↗</span>
            </div>
          </div>
        </div>

        {/* ORTA RADAR ALANI */}
        <div className={styles.radarAlani}>
          <img 
            src={arkaplanDesen} 
            alt="Arka Plan Dalgaları" 
            className={styles.arkaplanDesenGorsel} 
          />

          <img 
            src={konumIciGorsel} 
            alt="Konum İçi Şekiller" 
            className={styles.konumIciGorsel} 
          />

          <div 
            className={styles.yesilAlanTiklama} 
            onClick={() => handleDamlaAc('yesilModal')} 
          />

          <div 
            className={styles.kirmiziAlanTiklama} 
            onClick={() => handleDamlaAc('kirmiziModal')} 
          />
        </div>

        {/* EN ALT KONUM KARTI */}
        <div className={styles.altKonumKart}>
          <Map className={styles.haritaIkon} size={22} />
          <div className={styles.konumMetin}>
            <span className={styles.konumSatir1}>MEVCUT KONUM: Genel Merkez - İdari Bina</span>
            <span className={styles.konumSatir2}>15 metreye kadar doğru</span>
          </div>
        </div>

      </div>

      {/* BOTTOM SHEET MODAL */}
      {(secilenMod === 'yesilModal' || secilenMod === 'kirmiziModal') && (
        <div className={styles.modalKarartma} onClick={() => setSecilenMod(null)}>
          <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
            
            {secilenMod === 'yesilModal' ? (
              <>
                <DoorOpen className={styles.sheetIkon} size={32} />
                <span className={styles.sheetBaslik}>İdari Bina</span>
                <span className={styles.sheetAltMetin}>İş Yeri Giriş / Çıkış</span>
              </>
            ) : (
              <>
                <Coffee className={styles.sheetIkon} size={32} />
                <span className={styles.sheetBaslik}>İdari Bina</span>
                <span className={styles.sheetAltMetin}>Mola / Dinlenme</span>
              </>
            )}

            <div className={styles.butonGrup}>
              <button 
                className={`${styles.yuvarlakButon} ${styles.yesilButon}`}
                onClick={handleIslemTıkla}
              >
                Giriş
              </button>
              <button 
                className={`${styles.yuvarlakButon} ${styles.kirmiziButon}`}
                onClick={handleIslemTıkla}
              >
                Çıkış
              </button>
            </div>

            <span className={styles.vazgecMetin} onClick={() => setSecilenMod(null)}>
              Vazgeç ({sayac} sn.)
            </span>

          </div>
        </div>
      )}

      {/* VARDİYA UYARI POP-UP */}
      {secilenMod === 'uyari' && (
        <div className={`${styles.modalKarartma} ${styles.modalMerkez}`} onClick={() => setSecilenMod(null)}>
          <div className={styles.uyariKutu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.bilgiIkonHalka}>i</div>

            <span className={styles.uyariMetin}>
              Sayın Aliye Küçükcırık, Tanımlı bir vardiya kaydı bulunamadı. (60094)
            </span>

            <button className={styles.morKapatButon} onClick={() => setSecilenMod(null)}>
              Kapat
            </button>
          </div>
        </div>
      )}

    </div>
  );
}