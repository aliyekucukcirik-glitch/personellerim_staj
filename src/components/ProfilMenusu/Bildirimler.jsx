import React, { useState } from 'react';
import styles from './Bildirimler.module.css';
import { 
  X, CheckCheck, History, Calendar, 
  Banknote 
} from 'lucide-react';

export default function Bildirimler({ acikMi, kapat }) {
  const [filtre, setFiltre] = useState('tumu');

  const [bildirimler, setBildirimler] = useState([
    {
      id: 1,
      tip: 'enYeni',
      ustEtiket: 'EN YENİ • 2 SAAT ÖNCE',
      baslik: 'Vardiya Güncellendi',
      ozet: 'Yarınki vardiyanız 08:30-19:00 olarak güncellendi.',
      okundu: false,
      ikon: 'history',
      renk: 'purple'
    },
    {
      id: 2,
      tip: 'cerceve',
      baslik: 'İzin Talebiniz Onaylandı',
      ozet: '15-17 Temmuz tarihli izin talebiniz onaylandı.',
      zaman: '14:20',
      okundu: false,
      ikon: 'calendar',
      renk: 'green'
    },
    {
      id: 3,
      tip: 'cerceve',
      baslik: 'Avans Talebi Alındı',
      ozet: '5.000,00 TL tutarındaki avans talebiniz alınmıştır.',
      zaman: '11:15',
      okundu: false,
      ikon: 'banknote',
      renk: 'yellow'
    },
    {
      id: 4,
      tip: 'cerceve',
      baslik: 'Vardiya Değişimi',
      ozet: 'Cumartesi günü için vardiya değişimi onaylandı.',
      zaman: '2 gün önce',
      okundu: false,
      ikon: 'history',
      renk: 'purple'
    },
    {
      id: 5,
      tip: 'normal',
      baslik: 'Avans Talebi Alındı',
      ozet: '5.000,00 TL tutarındaki avans talebiniz alınmıştır.',
      zaman: '5 gün önce',
      okundu: true,
      ikon: 'banknote',
      renk: 'gray'
    },
    {
      id: 6,
      tip: 'normal',
      baslik: 'Vardiya Değişimi',
      ozet: 'Cumartesi günü için vardiya değişimi onaylandı.',
      zaman: '1 hafta önce',
      okundu: true,
      ikon: 'history',
      renk: 'gray'
    }
  ]);

  if (!acikMi) return null;

  const tumunuOku = () => {
    setBildirimler(prev => prev.map(b => ({ ...b, okundu: true })));
  };

  const okunmamisSayisi = bildirimler.filter(b => !b.okundu).length;

  const gorunurBildirimler = bildirimler.filter(b => {
    if (filtre === 'okunmamis') return !b.okundu;
    return true;
  });

  const renderIkon = (ikonAdi, renk) => {
    let color = "#94A3B8";
    if (renk === 'green') color = "#10B981";
    if (renk === 'yellow') color = "#F59E0B";
    if (renk === 'purple') color = "#8B5CF6";

    if (ikonAdi === 'calendar') return <Calendar color={color} size={18} strokeWidth={2.2} />;
    if (ikonAdi === 'banknote') return <Banknote color={color} size={18} strokeWidth={2.2} />;
    return <History color={color} size={18} strokeWidth={2.2} />;
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>BİLDİRİMLER</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Filtre Butonları */}
      <div className={styles.filtreBar}>
        <button 
          className={`${styles.filtreButon} ${filtre === 'tumu' ? styles.filtreButonAktif : ''}`}
          onClick={() => setFiltre('tumu')}
        >
          Tümü
        </button>

        {/*  Kenarlıklı Okunmamış Butonu */}
        <button 
          className={`${styles.filtreButon} ${filtre === 'okunmamis' ? styles.filtreButonAktif : styles.glassKapsul}`}
          onClick={() => setFiltre('okunmamis')}
        >
          Okunmamış ({okunmamisSayisi})
        </button>

        <button className={`${styles.filtreButon} ${styles.tumunuOkuButon}`} onClick={tumunuOku}>
          <CheckCheck size={16} strokeWidth={2.5} /> Tümünü Oku
        </button>
      </div>

      {/* Bildirim Akışı */}
      <div className={styles.listeKonteyner}>
        
        {/* Sol Dikey Çizgi */}
        <div className={styles.timelineCizgi} />

        {gorunurBildirimler.map((item) => (
          <div key={item.id} className={styles.bildirimSatir}>
            
            {/* Sol İkon Kutusu */}
            <div className={styles.solIkonKutusu}>
              {renderIkon(item.ikon, item.okundu ? 'gray' : item.renk)}
            </div>

            {/* KART TİPLERİ */}
            {!item.okundu && item.tip === 'enYeni' ? (
              /* En Yeni Mor Kart */
              <div className={styles.morKart}>
                <div className={styles.morKartIkonSol}>
                  <History color="#FFFFFF" size={22} strokeWidth={2} />
                </div>
                <div className={styles.morKartSag}>
                  <span className={styles.morKartUst}>{item.ustEtiket}</span>
                  <span className={styles.morKartBaslik}>{item.baslik}</span>
                  <span className={styles.morKartOzet}>{item.ozet}</span>
                </div>
              </div>
            ) : !item.okundu && item.tip === 'cerceve' ? (
              /* Gradient Çerçeveli Kartlar */
              <div className={`${styles.gradientCerceve} ${
                item.renk === 'green' ? styles.yesilCerceve :
                item.renk === 'yellow' ? styles.sariCerceve : styles.morIcerikCerceve
              }`}>
                <div className={styles.beyazKart}>
                  <span className={styles.kartBaslik}>{item.baslik}</span>
                  <span className={styles.kartOzet}>{item.ozet}</span>
                  {item.zaman && <span className={styles.kartZaman}>{item.zaman}</span>}
                </div>
              </div>
            ) : (
              /* Okunmuş Normal Beyaz Kart */
              <div className={styles.beyazKart}>
                <span className={styles.kartBaslik}>{item.baslik}</span>
                <span className={styles.kartOzet}>{item.ozet}</span>
                {item.zaman && <span className={styles.kartZaman}>{item.zaman}</span>}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}