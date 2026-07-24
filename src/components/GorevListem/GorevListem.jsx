import React, { useState } from 'react';
import styles from './GorevListem.module.css';
import { X, Calendar } from 'lucide-react';

export default function GorevListem({ acikMi, kapat }) {
  const [aktifDurum, setAktifDurum] = useState('Onay Bekliyor');
  const [aktifZaman, setAktifZaman] = useState('Bu Hafta');

  if (!acikMi) return null;

  // Carusel Durum Filtre Seçenekleri
  const durumFiltreleri = [
    'Onay Bekliyor',
    'Yeni Görev',
    'İade Edildi',
    'Görevli Değişti',
    'Onaylandı',
    'Onay Gerekmeyen',
    'İptal Edildi',
    'Tümü'
  ];

  // Görseldeki Görev Verileri
  const gorevler = [
    {
      id: 1,
      yuzde: "%65",
      isTuruncu: true,
      baslik: "Yeni Personel Dosyaları",
      atayan: "Atayan: İK Müdürü Selin Ç.",
      sonTarih: "20.07.2026",
      durum: "Onay Bekliyor",
      rozetTip: "sari",
      vurgulu: true
    },
    {
      id: 2,
      yuzde: "%0",
      isTuruncu: false,
      baslik: "Ürün Sayımı - Depo B",
      atayan: "Atayan: Depo Sorumlusu Mert Y.",
      sonTarih: "25.07.2026",
      durum: "Yeni Görev",
      rozetTip: "mor",
      vurgulu: false
    }
  ];

  // Filtreleme Mantığı
  const filtrelenmisGorevler = gorevler.filter(g => {
    if (aktifDurum === 'Tümü') return true;
    return g.durum === aktifDurum;
  });

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>GÖREV LİSTEM</span>
        <button 
          type="button" 
          className={styles.kapatButon} 
          onClick={kapat}
          aria-label="Kapat"
        >
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* YANA KAYDIRILABİLİR FİLTRELEME */}
        <div className={styles.carouselKonteyner}>
          {durumFiltreleri.map((durum) => (
            <button
              key={durum}
              type="button"
              className={`${styles.glassKapsul} ${aktifDurum === durum ? styles.glassKapsulAktif : ''}`}
              onClick={() => setAktifDurum(durum)}
            >
              {durum}
            </button>
          ))}
        </div>

        {/* 2. ZAMAN SEKMELERİ (Bu Hafta / Bu Ay / Bu Yıl) */}
        <div className={styles.sekmelerKonteyner}>
          {['Bu Hafta', 'Bu Ay', 'Bu Yıl'].map((zaman) => (
            <button
              key={zaman}
              type="button"
              className={`${styles.sekmeButon} ${aktifZaman === zaman ? styles.sekmeButonAktif : ''}`}
              onClick={() => setAktifZaman(zaman)}
            >
              {zaman}
            </button>
          ))}
        </div>

        {/* Görev Kart Listesi */}
        <div className={styles.gorevListesi}>
          {filtrelenmisGorevler.length > 0 ? (
            filtrelenmisGorevler.map((item) => (
              <div 
                key={item.id} 
                className={`${styles.gorevKart} ${item.vurgulu ? styles.gorevKartVurgu : ''}`}
              >
                
                {/* Kart Üst: Yüzde Dairesi  ve Başlık */}
                <div className={styles.kartUst}>
                  <div className={`${styles.yuzdeDaire} ${item.isTuruncu ? styles.yuzdeDaireTuruncu : styles.yuzdeDaireGri}`}>
                    {item.yuzde}
                  </div>
                  <div className={styles.baslikMetinKutusu}>
                    <h3 className={styles.gorevBaslik}>{item.baslik}</h3>
                    <span className={styles.atayanYazi}>{item.atayan}</span>
                  </div>
                </div>

                {/* Kart Alt: Tarih ve Durum Rozeti */}
                <div className={styles.kartAlt}>
                  <div className={styles.tarihGrup}>
                    <Calendar size={15} className={styles.tarihIkon} />
                    <span>Son tarih: {item.sonTarih}</span>
                  </div>

                  <span className={`${styles.durumRozet} ${item.rozetTip === 'sari' ? styles.rozetSari : styles.rozetMor}`}>
                    {item.durum}
                  </span>
                </div>

              </div>
            ))
          ) : (
            <div className={styles.bosDurum}>
              Bu filtreye ait görev kaydı bulunmamaktadır.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}