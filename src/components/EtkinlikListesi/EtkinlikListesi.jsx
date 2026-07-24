import React, { useState } from 'react';
import styles from './EtkinlikListesi.module.css';
import { X, Clock, MapPin } from 'lucide-react';

export default function EtkinlikListesi({ acikMi, kapat }) {
  const [aktifSekme, setAktifSekme] = useState('Tümü');

  if (!acikMi) return null;

  const etkinlikler = [
    {
      id: 1,
      ay: "TEMMUZ",
      gun: "22",
      gunAdi: "Çarşamba",
      baslik: "Yıl Sonu Değerlendirme Toplantısı",
      saat: "14:00 - 15:30",
      konum: "Genel Merkez • Konferans Salonu",
      durum: "Aktif",
      isAktif: true
    },
    {
      id: 2,
      ay: "MAYIS",
      gun: "21",
      gunAdi: "Perşembe",
      baslik: "İş Sağlığı ve Güvenliği Eğitimi",
      saat: "10:00 - 12:00",
      konum: "Genel Merkez • Eğitim Odası",
      durum: "Geçmiş",
      isAktif: false
    }
  ];

  // Sekmeye Göre Filtreleme
  const filtrelenmisEtkinlikler = etkinlikler.filter(item => {
    if (aktifSekme === 'Tümü') return true;
    return item.durum === aktifSekme;
  });

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>ETKİNLİK LİSTESİ</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* Filtre Sekmeleri */}
        <div className={styles.sekmelerKonteyner}>
          {['Tümü', 'Aktif', 'Gelecek', 'Geçmiş', 'İptal'].map((sekme) => (
            <button
              key={sekme}
              className={`${styles.sekmeButon} ${aktifSekme === sekme ? styles.sekmeButonAktif : ''}`}
              onClick={() => setAktifSekme(sekme)}
            >
              {sekme}
            </button>
          ))}
        </div>

        {/* Bilet Etkinlik Listesi */}
        <div className={styles.etkinlikListesi}>
          {filtrelenmisEtkinlikler.length > 0 ? (
            filtrelenmisEtkinlikler.map((item) => (
              <div key={item.id} className={styles.biletKart}>
                
                {/* Bilet Sol Tarih Koçanı */}
                <div className={`${styles.biletSol} ${item.isAktif ? styles.biletSolAktif : styles.biletSolGecmis}`}>
                  <span className={styles.tarihAy}>{item.ay}</span>
                  <span className={styles.tarihGun}>{item.gun}</span>
                  <span className={styles.tarihGunAdi}>{item.gunAdi}</span>
                </div>

                {/* Bilet Ayrım Çentikleri ve Kesik Çizgi */}
                <div className={styles.biletKesikCizgi}>
                  <div className={styles.centikUst} />
                  <div className={styles.centikAlt} />
                </div>

                {/* Bilet Sağ Detay Gövdesi */}
                <div className={styles.biletSag}>
                  <h3 className={styles.etkinlikBaslik}>{item.baslik}</h3>
                  
                  <div className={styles.detaySatir}>
                    <Clock size={14} className={styles.detayIkon} />
                    <span>{item.saat}</span>
                  </div>

                  <div className={styles.detaySatir}>
                    <MapPin size={14} className={styles.detayIkon} />
                    <span>{item.konum}</span>
                  </div>

                  <span className={`${styles.durumRozet} ${item.isAktif ? styles.durumRozetAktif : styles.durumRozetGecmis}`}>
                    {item.durum}
                  </span>
                </div>

              </div>
            ))
          ) : (
            <div className={styles.bosDurum}>
              Bu kategoride etkinlik kaydı bulunmamaktadır.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}