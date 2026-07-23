import React, { useState } from 'react';
import styles from './VardiyaPlanim.module.css';
import { X, Info, ArrowDown, ArrowUp } from 'lucide-react';

export default function VardiyaPlanim({ acikMi, kapat }) {
  const [secilenGun, setSecilenGun] = useState(null);

  if (!acikMi) return null;

  // Takvim Veri Yapısı 
  const takvimVerisi = [
    { hafta: "2 Hafta Önce", gun: "29", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Önce", gun: "30", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Önce", gun: "1", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Önce", gun: "2", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Önce", gun: "3", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Önce", gun: "4", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "2 Hafta Önce", gun: "5", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },

    { hafta: "Geçen Hafta", gun: "6", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Geçen Hafta", gun: "7", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Geçen Hafta", gun: "8", tip: "Onaylı İzin", tipAdi: "Onaylı İzin Güne Atanan Vardiya", sinif: styles.onayliIzin },
    { hafta: "Geçen Hafta", gun: "9", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Geçen Hafta", gun: "10", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Geçen Hafta", gun: "11", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Geçen Hafta", gun: "12", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },

    { hafta: "Bu Hafta", gun: "13", tip: "Onaylı İzin", tipAdi: "Onaylı İzin Güne Atanan Vardiya", sinif: styles.onayliIzin },
    { hafta: "Bu Hafta", gun: "14", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai, gunAdi: "Pazartesi", ay: "Temmuz" },
    { hafta: "Bu Hafta", gun: "15", tip: "Resmi Tatil", tipAdi: "Resmi Tatil Mesaisi", sinif: styles.resmiTatil },
    { hafta: "Bu Hafta", gun: "16", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Bu Hafta", gun: "17", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Bu Hafta", gun: "18", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "Bu Hafta", gun: "19", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },

    { hafta: "Gelecek Hafta", gun: "20", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "Gelecek Hafta", gun: "21", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "Gelecek Hafta", gun: "22", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "Gelecek Hafta", gun: "23", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "Gelecek Hafta", gun: "24", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "Gelecek Hafta", gun: "25", tip: "Hafta Tatili", tipAdi: "Hafta Tatili Güne Atanan Vardiya", sinif: styles.haftaTatili },
    { hafta: "Gelecek Hafta", gun: "26", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },

    { hafta: "2 Hafta Sonra", gun: "27", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Sonra", gun: "28", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "2 Hafta Sonra", gun: "29", tip: "Varsayılan", tipAdi: "Varsayılan Vardiya", sinif: styles.varsayilanVardiya },
    { hafta: "2 Hafta Sonra", gun: "30", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Sonra", gun: "31", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Sonra", gun: "1", tip: "Normal", tipAdi: "Normal Mesai", sinif: styles.normalMesai },
    { hafta: "2 Hafta Sonra", gun: "2", tip: "Hafta Tatili", tipAdi: "Hafta Tatili Güne Atanan Vardiya", sinif: styles.haftaTatili }
  ];

  const handleGunTikla = (item) => {
    setSecilenGun(item);
  };

  // İzin veya Hafta Tatili Kontrolü 
  const isIzinVeyaTatil = secilenGun && (secilenGun.tip === "Onaylı İzin" || secilenGun.tip === "Hafta Tatili");

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>VARDİYA PLANIM</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* Bilgi Kutusu */}
        <div className={styles.bilgiKutusu}>
          <Info className={styles.bilgiIkon} size={20} />
          <span className={styles.bilgiMetin}>
            Takvim günlerine dokunarak, atanan vardiya detaylarına ulaşabilirsiniz.
          </span>
        </div>

        {/* TAKVİM GRID */}
        <div className={styles.takvimKonteyner}>
          
          {/* Boş Sütun Köşesi ve Gün Başlıkları */}
          <div />
          {["Pzt", "Sal", "Çar", "Per", "Cum", "Cts", "Pzr"].map((gun, index) => (
            <div key={index} className={styles.gunBaslik}>{gun}</div>
          ))}

          {/* 5 Haftalık Satırlar */}
          {["2 Hafta Önce", "Geçen Hafta", "Bu Hafta", "Gelecek Hafta", "2 Hafta Sonra"].map((haftaAdi, hIndex) => (
            <React.Fragment key={hIndex}>
              {/* Hafta Sol Etiketi */}
              <div className={`${styles.haftaEtiket} ${haftaAdi === "Bu Hafta" ? styles.buHaftaEtiket : ""}`}>
                {haftaAdi}
              </div>

              {/* O Haftaya Ait 7 Gün */}
              {takvimVerisi
                .filter((item) => item.hafta === haftaAdi)
                .map((item, gIndex) => (
                  <div 
                    key={gIndex} 
                    className={`${styles.gunHucresi} ${item.sinif}`}
                    onClick={() => handleGunTikla(item)}
                  >
                    <span className={styles.gunSayi}>{item.gun}</span>
                    <span className={styles.gunTip}>{item.tip}</span>
                  </div>
                ))}
            </React.Fragment>
          ))}

        </div>

        {/*  AÇIKLAMA LİSTESİ  */}
        <div className={styles.lejantListesi}>
          <div className={styles.lejantEleman}>
            <div className={`${styles.lejantKutu} ${styles.normalKutu}`} />
            <div className={styles.lejantMetinGrup}>
              <span className={styles.lejantBaslik}>Normal Mesai</span>
              <span className={styles.lejantAciklama}>Herhangi bir normal mesai gününe atanan vardiya.</span>
            </div>
          </div>

          <div className={styles.lejantEleman}>
            <div className={`${styles.lejantKutu} ${styles.varsayilanKutu}`} />
            <div className={styles.lejantMetinGrup}>
              <span className={styles.lejantBaslik}>Varsayılan Vardiya</span>
              <span className={styles.lejantAciklama}>Özel vardiya ataması yapılmayan gün.</span>
            </div>
          </div>

          <div className={styles.lejantEleman}>
            <div className={`${styles.lejantKutu} ${styles.resmiKutu}`} />
            <div className={styles.lejantMetinGrup}>
              <span className={styles.lejantBaslik}>Resmi Tatil Mesaisi</span>
              <span className={styles.lejantAciklama}>Resmi tatil gününe atanan vardiya.</span>
            </div>
          </div>

          <div className={styles.lejantEleman}>
            <div className={`${styles.lejantKutu} ${styles.haftaKutu}`} />
            <div className={styles.lejantMetinGrup}>
              <span className={styles.lejantBaslik}>Hafta Tatili Güne Atanan Vardiya</span>
              <span className={styles.lejantAciklama}>Hafta tatili olan güne atanan vardiya.</span>
            </div>
          </div>

          <div className={styles.lejantEleman}>
            <div className={`${styles.lejantKutu} ${styles.izinKutu}`} />
            <div className={styles.lejantMetinGrup}>
              <span className={styles.lejantBaslik}>Onaylı İzin Güne Atanan Vardiya</span>
              <span className={styles.lejantAciklama}>Onaylanmış izin talebi olan güne atanan vardiya.</span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. POP-UP  */}
      {secilenGun && (
        <div className={styles.modalKarartma} onClick={() => setSecilenGun(null)}>
          <div className={styles.modalKutu} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalKapat} onClick={() => setSecilenGun(null)}>
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Dinamik Tarih Başlığı */}
            <span className={styles.modalTarihBaslik}>
              {secilenGun.gun} Temmuz Pazartesi
            </span>

            {/* Saat Kutuları */}
            <div className={styles.saatKutulari}>
              {/* Başlangıç Saati */}
              <div className={styles.saatKart}>
                <span className={styles.saatEtiket}>Başlangıç Saati</span>
                <div className={styles.saatDegerGrup}>
                  <span className={styles.saatDeger}>
                    {isIzinVeyaTatil ? "-" : "09:00"}
                  </span>
                  {!isIzinVeyaTatil && <ArrowDown className={styles.okYesil} size={18} strokeWidth={3} />}
                </div>
              </div>

              {/* Bitiş Saati */}
              <div className={styles.saatKart}>
                <span className={styles.saatEtiket}>Bitiş Saati</span>
                <div className={styles.saatDegerGrup}>
                  <span className={styles.saatDeger}>
                    {isIzinVeyaTatil ? "-" : "18:00"}
                  </span>
                  {!isIzinVeyaTatil && <ArrowUp className={styles.okKirmizi} size={18} strokeWidth={3} />}
                </div>
              </div>
            </div>

            {/* Alt Vardiya Tipi Metni */}
            <div className={styles.vardiyaTipEtiket}>
              Vardiya Tipi: {secilenGun.tipAdi}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}