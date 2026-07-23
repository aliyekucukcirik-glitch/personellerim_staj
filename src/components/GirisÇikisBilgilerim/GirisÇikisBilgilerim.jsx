import React, { useState } from 'react';
import styles from './GirisCikisBilgilerim.module.css';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function GirisCikisBilgilerim({ acikMi, kapat }) {
  const [yil, setYil] = useState(2026);
  const [ay, setAy] = useState(7);
  const [toplamlarAcik, setToplamlarAcik] = useState(false);

  if (!acikMi) return null;

  // Yıl Değiştirme
  const handleYilDegistir = (yon) => {
    setYil((prev) => (yon === 'ileri' ? prev + 1 : prev - 1));
  };

  // Ay Değiştirme
  const handleAyDegistir = (yon) => {
    setAy((prev) => {
      if (yon === 'ileri') return prev === 12 ? 1 : prev + 1;
      return prev === 1 ? 12 : prev - 1;
    });
  };

  // Ay Formatı 
  const ayFormat = ay < 10 ? `0${ay}` : ay;

  // Örnek Liste Verileri
  const veriler = [
    { tarih: "01/Çarşamba", giris: "-", cikis: "-", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "02/Perşembe", giris: "-", cikis: "-", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "03/Cuma", giris: "-", cikis: "-", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "04/Cumartesi", giris: "-", cikis: "-", durum: "Hafta Tatili", serit: styles.seritTatil, pill: styles.pillTatil },
    { tarih: "06/Pazartesi", giris: "09:00", cikis: "18:00", durum: "Normal", serit: styles.seritNormal, pill: styles.pillNormal },
    { tarih: "07/Salı", giris: "08:30", cikis: "20:30", durum: "Fazla Mesai", serit: styles.seritFazlaMesai, pill: styles.pillFazlaMesai },
    { tarih: "08/Çarşamba", giris: "-", cikis: "-", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
  ];

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>GİRİŞ - ÇIKIŞ BİLGİLERİM</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* YIL VE AY SEÇİCİ BARLARI */}
        <div className={styles.seciciBar}>
          {/* Yıl Seçici */}
          <div className={styles.seciciKutu}>
            <button className={styles.okButon} onClick={() => handleYilDegistir('geri')}>
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <span className={styles.seciciMetin}>Yıl: {yil}</span>
            <button className={styles.okButon} onClick={() => handleYilDegistir('ileri')}>
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Ay Seçici */}
          <div className={styles.seciciKutu}>
            <button className={styles.okButon} onClick={() => handleAyDegistir('geri')}>
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <span className={styles.seciciMetin}>Ay: {ayFormat}</span>
            <button className={styles.okButon} onClick={() => handleAyDegistir('ileri')}>
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/*TABLO BAŞLIKLARI */}
        <div className={styles.tabloBaslikBar}>
          <span className={`${styles.sutunBaslik} ${styles.sutunBaslikSol}`}>TARİH</span>
          <span className={styles.sutunBaslik}>GİRİŞ</span>
          <span className={styles.sutunBaslik}>ÇIKIŞ</span>
          <span className={styles.sutunBaslik}>MESAİ NOTU</span>
        </div>

        {/*  LİSTE */}
        <div className={styles.listeKonteyner}>
          {veriler.map((item, index) => (
            <div key={index} className={styles.listeSatir}>
              <div className={`${styles.solSerit} ${item.serit}`} />
              <span className={styles.tarihMetin}>{item.tarih}</span>
              <span className={item.giris === "-" ? styles.tireMetin : styles.saatMetin}>{item.giris}</span>
              <span className={item.cikis === "-" ? styles.tireMetin : styles.saatMetin}>{item.cikis}</span>
              <span className={`${styles.etiketPill} ${item.pill}`}>{item.durum}</span>
            </div>
          ))}
        </div>

        {/*  TOPLAMLAR BUTONU VE AÇILIR KART */}
        <div 
          className={styles.toplamlarKonteyner}
          onClick={() => setToplamlarAcik(!toplamlarAcik)}
        >
          <div className={styles.toplamlarUstBar}>
            <span className={styles.toplamlarBaslik}>Toplamlar</span>
            
            {!toplamlarAcik ? (
              <div className={styles.toplamlarRozet}>
                <span>Devamsızlık: 4 Gün</span>
                <ChevronRight size={16} strokeWidth={2.5} />
              </div>
            ) : (
              <ChevronUp className={styles.okAc} size={22} strokeWidth={2.5} />
            )}
          </div>

          {/* AÇILIR İZGARA DETAYI */}
          {toplamlarAcik && (
            <div className={styles.toplamlarDetayAlani} onClick={(e) => e.stopPropagation()}>
              <div className={styles.ozetIzgara}>
                
                <div className={`${styles.ozetKutu} ${styles.bgYesil}`}>
                  <span className={styles.ozetEtiket}>Normal Gün / Saat</span>
                  <span className={styles.ozetDeger}>1 Gün / 9 saat</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgYesil}`}>
                  <span className={styles.ozetEtiket}>Normal Gün Fazla Mesai</span>
                  <span className={styles.ozetDeger}>--</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgPembe}`}>
                  <span className={styles.ozetEtiket}>Eksik Çalışma</span>
                  <span className={styles.ozetDeger}>--</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgMavi}`}>
                  <span className={styles.ozetEtiket}>Saatlik İzin</span>
                  <span className={styles.ozetDeger}>--</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgMavi}`}>
                  <span className={styles.ozetEtiket}>Resmi Tatil / Fazla Mesai</span>
                  <span className={styles.ozetDeger}>0 Gün / 12 Saat</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgMor}`}>
                  <span className={styles.ozetEtiket}>Hafta Tatili / Fazla Mesai</span>
                  <span className={styles.ozetDeger}>1 Gün / --</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgYesil}`}>
                  <span className={styles.ozetEtiket}>Yıllık İzin / Rapor</span>
                  <span className={styles.ozetDeger}>0 / 0</span>
                </div>

                <div className={`${styles.ozetKutu} ${styles.bgSari}`}>
                  <span className={styles.ozetEtiket}>Ücretli / Ücretsiz İzin</span>
                  <span className={styles.ozetDeger}>0 / 0</span>
                </div>

              </div>

              {/* Devamsızlık Alt Satır */}
              <div className={styles.devamsizlikSatir}>
                <span className={styles.devamsizlikEtiket}>Devamsızlık</span>
                <span className={styles.devamsizlikDeger}>4 Gün</span>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}