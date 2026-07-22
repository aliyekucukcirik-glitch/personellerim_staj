import React, { useState, useEffect } from 'react';
import styles from './KareKodOluştur.module.css';
import { X, MapPin, AlertCircle, Check, Clock } from 'lucide-react';

export default function KareKodOluştur({ acikMi, kapat }) {
  const [secilenMod, setSecilenMod] = useState(null);
  const [adim, setAdim] = useState('qr');
  const [kalanSure, setKalanSure] = useState(20);

  useEffect(() => {
    let timer;
    if (secilenMod && adim === 'qr' && kalanSure > 0) {
      timer = setInterval(() => {
        setKalanSure((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [secilenMod, adim, kalanSure]);

  if (!acikMi) return null;

  const handleModAc = (mod) => {
    setSecilenMod(mod);
    setAdim('qr');
    setKalanSure(20);
  };

  const handleModalKapat = () => {
    setSecilenMod(null);
    setAdim('qr');
  };

  // 1. Dış Ekrandaki Sembolik Karekod
  const SembolikQR = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="0" y="0" width="44" height="44" fill="black" />
      <rect x="8" y="8" width="28" height="28" fill="white" />
      <rect x="16" y="16" width="12" height="12" fill="black" />

      <rect x="0" y="56" width="44" height="44" fill="black" />
      <rect x="8" y="64" width="28" height="28" fill="white" />
      <rect x="16" y="72" width="12" height="12" fill="black" />

      <rect x="70" y="0" width="12" height="38" fill="black" />
      <rect x="57" y="13" width="38" height="12" fill="black" />

      <rect x="54" y="56" width="20" height="20" fill="black" />
      <rect x="78" y="56" width="22" height="14" fill="black" />
      <rect x="54" y="80" width="24" height="20" fill="black" />
      <rect x="82" y="74" width="18" height="26" fill="black" />
    </svg>
  );

  // 2. POP-UP İÇİNDEKİ DÜZGÜN KAREKOD 
  const NetQR = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      {/* Sol Üst Göz */}
      <rect x="5" y="5" width="30" height="30" fill="black"/>
      <rect x="10" y="10" width="20" height="20" fill="white"/>
      <rect x="15" y="15" width="10" height="10" fill="black"/>

      {/* Sağ Üst Göz */}
      <rect x="65" y="5" width="30" height="30" fill="black"/>
      <rect x="70" y="10" width="20" height="20" fill="white"/>
      <rect x="75" y="15" width="10" height="10" fill="black"/>

      {/* Sol Alt Göz */}
      <rect x="5" y="65" width="30" height="30" fill="black"/>
      <rect x="10" y="70" width="20" height="20" fill="white"/>
      <rect x="15" y="75" width="10" height="10" fill="black"/>

      {/* Detay Blokları */}
      <rect x="42" y="5" width="8" height="8" fill="black"/>
      <rect x="52" y="15" width="8" height="8" fill="black"/>
      <rect x="42" y="25" width="8" height="8" fill="black"/>
      <rect x="5" y="42" width="8" height="8" fill="black"/>
      <rect x="20" y="42" width="15" height="8" fill="black"/>
      <rect x="42" y="42" width="16" height="16" fill="black"/>
      <rect x="65" y="42" width="8" height="16" fill="black"/>
      <rect x="80" y="42" width="15" height="8" fill="black"/>
      <rect x="42" y="65" width="8" height="15" fill="black"/>
      <rect x="55" y="65" width="15" height="8" fill="black"/>
      <rect x="75" y="65" width="20" height="8" fill="black"/>
      <rect x="42" y="85" width="15" height="10" fill="black"/>
      <rect x="65" y="80" width="10" height="15" fill="black"/>
      <rect x="80" y="80" width="15" height="15" fill="black"/>
    </svg>
  );

  // 3.DOKUNAN EL İKONU
  const TemizDokunanEl = ({ renkkodu }) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={renkkodu} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 11V3a1.5 1.5 0 0 0-3 0v8" />
      <path d="M9 7.5a1.5 1.5 0 0 0-3 0V13" />
      <path d="M12 6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M15 8a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1.5a7 7 0 0 1-5-2.2L3 14" />
    </svg>
  );

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>KARE KOD OLUŞTUR</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* Konum Bilgi Kartı */}
        <div className={styles.konumKart}>
          <MapPin className={styles.konumIkon} size={18} />
          <div className={styles.konumDetay}>
            <span className={styles.konumBaslik}>Konum</span>
            <span className={styles.konumAlt}>Genel Merkez</span>
            <span className={styles.konumAlt}>İdari Bina</span>
            <span className={styles.konumAlt}>Konuma Uzaklık : 18 metre.</span>
          </div>
        </div>

        {/* QR KUTULARI VE UZUN ÇİZGİ */}
        <div className={styles.qrAlani}>
          <div className={styles.baglantiCizgisi} />

          {/* YEŞİL KART (GİRİŞ) */}
          <div 
            className={`${styles.qrKart} ${styles.yesilKart}`}
            onClick={() => handleModAc('giris')}
          >
            <div className={styles.qrGorselKapsayi}>
              <SembolikQR />
            </div>
            <div className={styles.parmakIkon}>
              <TemizDokunanEl renkkodu="#10b981" />
            </div>
          </div>

          {/* KIRMIZI KART (ÇIKIŞ) */}
          <div 
            className={`${styles.qrKart} ${styles.kirmiziKart}`}
            onClick={() => handleModAc('cikis')}
          >
            <div className={styles.qrGorselKapsayi}>
              <SembolikQR />
            </div>
            <div className={styles.parmakIkon}>
              <TemizDokunanEl renkkodu="#ef4444" />
            </div>
          </div>
        </div>

        {/* Alt Uyarı Metni */}
        <div className={styles.altUyari}>
          <AlertCircle className={styles.uyariIkon} size={20} />
          <span className={styles.uyariYazi}>Taratmak istediğiniz QR koda dokunun.</span>
        </div>

      </div>

      {/* MODAL / POP-UP AKIŞI */}
      {secilenMod && (
        <div className={styles.modalKarartma} onClick={handleModalKapat}>
          <div 
            className={`${styles.modalKart} ${secilenMod === 'giris' ? styles.modalYesilBorder : styles.modalKirmiziBorder}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalKapat} onClick={handleModalKapat}>
              <X size={22} strokeWidth={2.5} />
            </button>

            {/* 1. AŞAMA: POP-UP */}
            {adim === 'qr' && (
              <>
                <span className={`${styles.modalBaslikTekst} ${secilenMod === 'giris' ? styles.yesilYazi : styles.kirmiziYazi}`}>
                  • {secilenMod === 'giris' ? 'Giriş Kodu' : 'Çıkış Kodu'}
                </span>

                {/* DÜZGÜN VE NET KAREKOD */}
                <div className={styles.modalQrNet} onClick={() => setAdim('basarili')}>
                  <NetQR />
                </div>

                <span className={styles.sureEtiket}>KOD GEÇERLİLİK SÜRESİ</span>
                
                <div className={`${styles.sayacKapsul} ${secilenMod === 'giris' ? styles.yesilSayac : styles.kirmiziSayac}`}>
                  <span className={styles.sayacRakam}>
                    00:{kalanSure < 10 ? `0${kalanSure}` : kalanSure}
                  </span>
                  <span className={styles.sayacMetin}>saniye</span>
                </div>

                <div className={`${styles.modalKonumKutu} ${secilenMod === 'giris' ? styles.yesilKonumBg : styles.kirmiziKonumBg}`}>
                  <MapPin size={16} />
                  <span>Mevcut Konum : 15 metreye kadar doğru</span>
                </div>

                <span className={styles.modalAltBilgi}>
                  Telefonunuzun bu yüzünü okuyucu cihaza çevirin ve QR kodu taratın.
                </span>
              </>
            )}

            {/* 2. AŞAMA: BAŞARILI SONUÇ */}
            {adim === 'basarili' && (
              <>
                <div className={`${styles.basariKart} ${secilenMod === 'giris' ? styles.yesilGradient : styles.kirmiziGradient}`}>
                  <div className={styles.tikDaire}>
                    <Check size={26} color={secilenMod === 'giris' ? '#10b981' : '#ef4444'} strokeWidth={3} />
                  </div>
                  <span className={styles.basariAnaBaslik}>
                    {secilenMod === 'giris' ? 'Giriş Başarılı' : 'Çıkış Başarılı'}
                  </span>
                  <span className={styles.basariSaat}>
                    İşlem Saati: {secilenMod === 'giris' ? '09:00' : '18:00'}
                  </span>
                </div>

                <div className={styles.altSonucBilgi}>
                  <Clock size={18} color="#64748b" />
                  <span>
                    {secilenMod === 'giris' 
                      ? 'Bugünkü giriş kaydınız başarıyla alındı.' 
                      : 'Bugünkü çıkış kaydınız başarıyla alındı.'}
                  </span>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}