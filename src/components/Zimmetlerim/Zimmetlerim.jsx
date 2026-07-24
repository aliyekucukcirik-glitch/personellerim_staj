import React, { useState } from 'react';
import styles from './Zimmetlerim.module.css';
import { X, MapPin } from 'lucide-react';

export default function Zimmetlerim({ acikMi, kapat }) {
  const [aktifSekme, setAktifSekme] = useState('ZİMMETLİ');

  if (!acikMi) return null;

  // Örnek Zimmet Verisi
  const zimmetler = [
    {
      id: 1,
      urunAdi: "iPhone 14 Pro Max 256GB",
      kategori: "MOBİL CİHAZ",
      durum: "ZİMMETLİ",
      seriNo: "F2NLK90-XYZ123",
      konum: "İDARİ BİNA",
      tarih: "17 Temmuz 2026",
      gorsel: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // Sekmeye Göre Filtreleme
  const filtrelenmisZimmetler = zimmetler.filter(z => {
    if (aktifSekme === 'TÜMÜ') return true;
    return z.durum === aktifSekme;
  });

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>ZİMMETLERİM</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* Filtre Sekmeleri */}
        <div className={styles.sekmelerKonteyner}>
          {['ZİMMETLİ', 'İADE EDİLDİ', 'DEVREDİLİYOR', 'TÜMÜ'].map((sekme) => (
            <button
              key={sekme}
              className={`${styles.sekmeButon} ${aktifSekme === sekme ? styles.sekmeButonAktif : ''}`}
              onClick={() => setAktifSekme(sekme)}
            >
              {sekme}
            </button>
          ))}
        </div>

        {/* Zimmet Kart Listesi */}
        <div className={styles.kartListesi}>
          {filtrelenmisZimmetler.length > 0 ? (
            filtrelenmisZimmetler.map((item) => (
              <div key={item.id} className={styles.zimmetKart}>
                
                {/* Üst Kısım: Görsel & Başlık */}
                <div className={styles.kartUst}>
                  <div className={styles.gorselKutusu}>
                    <img src={item.gorsel} alt={item.urunAdi} className={styles.urunGorsel} />
                  </div>
                  
                  <div className={styles.kartUstSag}>
                    <span className={styles.durumRozet}>{item.durum}</span>
                    <h3 className={styles.urunAdi}>{item.urunAdi}</h3>
                    <span className={styles.kategoriAdi}>{item.kategori}</span>
                  </div>
                </div>

                {/* Alt Kısım: Seri No / Konum / Tarih */}
                <div className={styles.kartAlt}>
                  <div className={styles.solDetay}>
                    <span className={styles.seriNoMetin}>
                      SERİ NO: <span className={styles.seriNoDeger}>{item.seriNo}</span>
                    </span>
                    <div className={styles.konumMetin}>
                      <MapPin size={13} />
                      <span>{item.konum}</span>
                    </div>
                  </div>

                  <div className={styles.sagDetay}>
                    <span className={styles.tarihEtiket}>ZİMMET TARİHİ</span>
                    <span className={styles.tarihDeger}>{item.tarih}</span>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className={styles.bosDurum}>
              Bu kategoride listelenecek zimmet kaydı bulunamadı.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}