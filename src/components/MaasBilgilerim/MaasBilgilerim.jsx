import React, { useState } from 'react';
import styles from './MaasBilgilerim.module.css';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, PlusCircle, MinusCircle } from 'lucide-react';

export default function MaasBilgilerim({ acikMi, kapat }) {
  const [yil, setYil] = useState(2026);
  const [ay, setAy] = useState(7);
  const [toplamlarAcik, setToplamlarAcik] = useState(false);
  const [acikSatirIndex, setAcikSatirIndex] = useState(null);

  if (!acikMi) return null;

  // Yıl & Ay Değiştiriciler
  const handleYilDegistir = (yon) => setYil((prev) => (yon === 'ileri' ? prev + 1 : prev - 1));
  const handleAyDegistir = (yon) => {
    setAy((prev) => {
      if (yon === 'ileri') return prev === 12 ? 1 : prev + 1;
      return prev === 1 ? 12 : prev - 1;
    });
  };

  const ayFormat = ay < 10 ? `0${ay}` : ay;

  // Satır Akordeon Mantığı 
  const handleSatirTikla = (index) => {
    setAcikSatirIndex(acikSatirIndex === index ? null : index);
  };

  const veriler = [
    { tarih: "01/Çarşamba", kazanc: "₺ 0.00", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "02/Perşembe", kazanc: "₺ 0.00", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "03/Cuma", kazanc: "₺ 0.00", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
    { tarih: "04/Cumartesi", kazanc: "₺ 0.00", durum: "Hafta Tatili", serit: styles.seritTatil, pill: styles.pillTatil },
    { tarih: "06/Pazartesi", kazanc: "₺ 1.500,00", durum: "Normal", serit: styles.seritNormal, pill: styles.pillNormal, dolu: true },
    { tarih: "07/Salı", kazanc: "₺ 1.800,00", durum: "Fazla Mesai", serit: styles.seritFazlaMesai, pill: styles.pillFazlaMesai, dolu: true },
    { tarih: "08/Çarşamba", kazanc: "₺ 0.00", durum: "Devamsız", serit: styles.seritDevamsiz, pill: styles.pillDevamsiz },
  ];

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>MAAŞ BİLGİLERİM</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* YIL VE AY SEÇİCİ BARLARI */}
        <div className={styles.seciciBar}>
          <div className={styles.seciciKutu}>
            <button className={styles.okButon} onClick={() => handleYilDegistir('geri')}>
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <span className={styles.seciciMetin}>Yıl: {yil}</span>
            <button className={styles.okButon} onClick={() => handleYilDegistir('ileri')}>
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>

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

        {/* TABLO BAŞLIKLARI */}
        <div className={styles.tabloBaslikBar}>
          <span className={`${styles.sutunBaslik} ${styles.sutunBaslikSol}`}>TARİH</span>
          <span className={styles.sutunBaslik}>Kazanç</span>
          <span className={styles.sutunBaslik}>Mesai Notu</span>
        </div>

        {/* LİSTE */}
        <div className={styles.listeKonteyner}>
          {veriler.map((item, index) => (
            <div key={index} className={styles.satirGrubu}>
              <div className={styles.listeSatir} onClick={() => handleSatirTikla(index)}>
                <div className={`${styles.solSerit} ${item.serit}`} />
                <span className={styles.tarihMetin}>{item.tarih}</span>
                <span className={`${styles.kazancMetin} ${item.dolu ? styles.kazancDolu : ''}`}>
                  {item.kazanc}
                </span>
                <span className={`${styles.etiketPill} ${item.pill}`}>{item.durum}</span>
              </div>

              {/* TIKLANINCA ALTINDA AÇILAN DETAY KARTLARI */}
              {acikSatirIndex === index && (
                <div className={styles.satirDetayAlani}>
                  <div className={`${styles.detayKutu} ${styles.detayNormal}`}>
                    <span className={styles.detayMetin}>Normal Mesai:</span>
                    <span className={styles.detayTutar}>₺ 0,00</span>
                  </div>
                  <div className={`${styles.detayKutu} ${styles.detayYesil}`}>
                    <span className={styles.detayMetin}>Fazla Mesai:</span>
                    <span className={styles.detayTutar}>₺ 0,00</span>
                  </div>
                  <div className={`${styles.detayKutu} ${styles.detayKirmizi}`}>
                    <span className={styles.detayMetin}>Eksik Çalışma:</span>
                    <span className={styles.detayTutar}>₺ 0,00</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TOPLAMLAR BUTONU VE DETAY KARTI   */}
        <div className={styles.toplamlarKonteyner}>
          <div className={styles.toplamlarUstBar} onClick={() => setToplamlarAcik(!toplamlarAcik)}>
            <span className={styles.toplamlarBaslik}>Toplamlar</span>
            
            {!toplamlarAcik ? (
              <div className={styles.toplamlarRozet}>
                <span>Aylık Maaş : ₺ 42.500,00</span>
                <ChevronRight size={16} strokeWidth={2.5} />
              </div>
            ) : (
              <ChevronUp className={styles.okAc} size={22} strokeWidth={2.5} />
            )}
          </div>

          {/*  DETAYLARI İÇEREN AÇILIR KART  */}
          {toplamlarAcik && (
            <div className={styles.toplamlarDetayAlani} onClick={(e) => e.stopPropagation()}>
              
              {/* Aylık Net Ücret */}
              <div className={styles.netUcretKart}>
                <span className={styles.netUcretEtiket}>Aylık Net Ücret</span>
                <span className={styles.netUcretTutar}>₺ 42.500,00</span>
              </div>

              {/* Çalışma Süreleri &  Grafik */}
              <div className={styles.calismaSureleriKutu}>
                <span className={styles.surelerBaslik}>ÇALIŞMA SÜRELERİ</span>
                <div className={styles.grafikVeLejant}>
                  
                  {/*  Grafik */}
                  <div className={styles.simitGrafikKonteyner}>
                    <div className={styles.simitGrafik}>
                      <div className={styles.grafikIcDaire}>
                        <span className={styles.gunSayi}>23</span>
                        <span className={styles.gunMetin}>Gün</span>
                      </div>
                    </div>
                  </div>

                  {/* Yan açıklama Listesi */}
                  <div className={styles.grafikLejantListesi}>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#10b981' }} />
                      <span>Normal Gün</span>
                      <span className={styles.sayiBold} style={{ color: '#10b981' }}>18</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#10b981' }} />
                      <span>Yıllık İzin</span>
                      <span className={styles.sayiBold}>0</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#ef4444' }} />
                      <span>Devamsız</span>
                      <span className={styles.sayiBold} style={{ color: '#ef4444' }}>4</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#3b82f6' }} />
                      <span>Ücretli İzin</span>
                      <span className={styles.sayiBold}>0</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#a855f7' }} />
                      <span>Hafta Tatili</span>
                      <span className={styles.sayiBold} style={{ color: '#a855f7' }}>1</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#f43f5e' }} />
                      <span>Rapor</span>
                      <span className={styles.sayiBold}>0</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#cbd5e1' }} />
                      <span>Resmi Tatil</span>
                      <span className={styles.sayiBold}>0</span>
                    </div>
                    <div className={styles.grafikLejantItem}>
                      <span className={styles.nokta} style={{ background: '#64748b' }} />
                      <span>Ücretsiz İzin</span>
                      <span className={styles.sayiBold}>0</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Kazanç Detayları Kartı */}
              <div className={`${styles.detayKartKutu} ${styles.kazancKart}`}>
                <div className={`${styles.kartUstBaslik} ${styles.kazancBaslikColor}`}>
                  <PlusCircle size={18} />
                  <span>KAZANÇ DETAYLARI</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Normal Gün Mesai Ücreti</span>
                  <span className={styles.tutarSiyah}>₺ 26.100,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Resmi Tatil Mesai Ücreti</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Hafta Tatili Mesai Ücreti</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>İzin Ücreti</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Fazla Mesai Ücreti</span>
                  <span className={styles.tutarYesil}>+ ₺ 3.450,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Hafta Tatili FM Ücreti</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Resmi Tatil FM Ücreti</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Ek Kazançlar</span>
                  <span className={styles.tutarYesil}>+ ₺ 1.500,00</span>
                </div>
              </div>

              {/* Kesinti Detayları Kartı */}
              <div className={`${styles.detayKartKutu} ${styles.kesintiKart}`}>
                <div className={`${styles.kartUstBaslik} ${styles.kesintiBaslikColor}`}>
                  <MinusCircle size={18} />
                  <span>KESİNTİ DETAYLARI</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Eksik Çalışma Kesintisi</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Alınan Avans Toplamı</span>
                  <span className={styles.tutarKirmizi}>- ₺ 5.000,00</span>
                </div>
                <div className={styles.detaySatir}>
                  <span>Ek Kesintiler</span>
                  <span className={styles.tutarGri}>₺ 0,00</span>
                </div>
              </div>

              {/* Net Kazanç Barı */}
              <div className={styles.netKazancBar}>
                <span>Net Kazanç</span>
                <span>₺ 42.450,00</span>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}