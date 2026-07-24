import React, { useState } from 'react';
import styles from './YanMenu.module.css';
import { 
  X, 
  ChevronRight, 
  ChevronDown, 
  Calendar, 
  FileText, 
  Briefcase, 
  ClipboardList, 
  ClipboardCheck, 
  LogOut,
  CalendarDays,
  Grid,
  Wallet,
  Hourglass
} from 'lucide-react';

import sirketLogo from '../../assets/sirket-logo.png';

export default function YanMenu({ 
  acikMi, 
  kapat, 
  onOturumuKapat, 
  onVardiyaPlanimAc, 
  onGirisCikisAc, 
  onMaasBilgilerimAc,
  onIzinTaleplerimAc,
  onSaatlikIzinAc,
  onAvansTaleplerimAc,
  onZimmetlerimAc,
  onEtkinlikListesiAc
}) {
  const [acikAkordeon, setAcikAkordeon] = useState(null);

  if (!acikMi) return null;

  const handleAkordeonToggle = (menuAdi) => {
    if (acikAkordeon === menuAdi) {
      setAcikAkordeon(null);
    } else {
      setAcikAkordeon(menuAdi);
    }
  };

  // Oturumu kapat butonuna tıklanınca çalışan fonksiyon
  const handleCikisYap = () => {
    kapat(); 
    if (onOturumuKapat) {
      onOturumuKapat(); 
    }
  };

  // Vardiya Planım tıklanınca çalışacak fonksiyon
  const handleVardiyaPlanimTikla = () => {
    kapat(); // Yan menüyü kapatır
    if (onVardiyaPlanimAc) {
      onVardiyaPlanimAc(); // Vardiya Planım sayfasını açar
    }
  };

  // Giriş - Çıkış Bilgilerim tıklanınca çalışacak fonksiyon
  const handleGirisCikisTikla = () => {
    kapat(); // Yan menüyü kapatır
    if (onGirisCikisAc) {
      onGirisCikisAc(); // Giriş - Çıkış Bilgilerim sayfasını açar
    }
  };

  // Maaş Bilgilerim tıklanınca çalışacak fonksiyon
  const handleMaasBilgilerimTikla = () => {
    kapat(); // Yan menüyü kapatır
    if (onMaasBilgilerimAc) {
      onMaasBilgilerimAc(); // Maaş Bilgilerim sayfasını açar
    }
  };

  // İzin Taleplerim tıklanınca çalışacak fonksiyon
  const handleIzinTaleplerimTikla = () => {
    kapat(); // Yan menüyü kapatır
    if (onIzinTaleplerimAc) {
      onIzinTaleplerimAc(); // İzin Taleplerim sayfasını açar
    }
  };

  // Saatlik İzin Taleplerim tıklanınca çalışacak fonksiyon
  const handleSaatlikIzinTikla = () => {
    kapat(); // Yan menüyü kapatır
    if (onSaatlikIzinAc) {
      onSaatlikIzinAc(); // Saatlik İzin Taleplerim sayfasını açar
    }
  };

  const handleAvansTaleplerimTikla = () => {
  kapat();
  if (onAvansTaleplerimAc) onAvansTaleplerimAc();
};

const handleZimmetlerimTikla = () => {
    kapat();
    if (onZimmetlerimAc) onZimmetlerimAc();
  };

 const handleEtkinlikListesiTiklama = () => {
  kapat();
  if (onEtkinlikListesiAc) onEtkinlikListesiAc();
 };

  return (
    <div className={styles.overlay} onClick={kapat}>
      <div className={styles.menuPaneli} onClick={(e) => e.stopPropagation()}>
        
        {/* Üst Bar */}
        <div className={styles.ustBar}>
          <div className={styles.logoGrup}>
            <img src={sirketLogo} alt="Şirket Logo" className={styles.logoGorsel} />

            <div className={styles.baslikMetin}>
              <span className={styles.anaBaslik}>Personellerim</span>
              <span className={styles.altBaslik}>Personel Devam Kontrol Sistemi</span>
            </div>
          </div>

          <button className={styles.kapatButon} onClick={kapat}>
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <span className={styles.kategoriEtiket}>PERSONEL İŞLEMLERİ</span>

        {/* Menü Listesi */}
        <div className={styles.menuListesi}>
          
          {/* 1. ÇALIŞMA PLANIM */}
          <div 
            className={`${styles.menuKart} ${acikAkordeon === 'calismaPlanim' ? styles.menuKartAktif : ''}`}
            onClick={() => handleAkordeonToggle('calismaPlanim')}
          >
            <div className={styles.solIkonYazi}>
              <Calendar className={styles.solIkon} size={20} />
              <span>Çalışma Planım</span>
            </div>
            {acikAkordeon === 'calismaPlanim' ? (
              <ChevronDown className={styles.sagOk} size={18} />
            ) : (
              <ChevronRight className={styles.sagOk} size={18} />
            )}
          </div>

          {acikAkordeon === 'calismaPlanim' && (
            <div className={styles.altMenuListesi}>
              {/* Vardiya Planım */}
              <div className={styles.altMenuKart} onClick={handleVardiyaPlanimTikla}>
                <CalendarDays className={styles.altIkon} size={18} />
                <span>Vardiya Planım</span>
              </div>

              {/* Giriş - Çıkış Bilgilerim */}
              <div className={styles.altMenuKart} onClick={handleGirisCikisTikla}>
                <Grid className={styles.altIkon} size={18} />
                <span>Giriş - Çıkış Bilgilerim</span>
              </div>

              {/* Maaş Bilgilerim */}
              <div className={styles.altMenuKart} onClick={handleMaasBilgilerimTikla}>
                <Wallet className={styles.altIkon} size={18} />
                <span>Maaş Bilgilerim</span>
              </div>
            </div>
          )}

          {/* 2. TALEPLERİM */}
          <div 
            className={`${styles.menuKart} ${acikAkordeon === 'taleplerim' ? styles.menuKartAktif : ''}`}
            onClick={() => handleAkordeonToggle('taleplerim')}
          >
            <div className={styles.solIkonYazi}>
              <FileText className={styles.solIkon} size={20} />
              <span>Taleplerim</span>
            </div>
            {acikAkordeon === 'taleplerim' ? (
              <ChevronDown className={styles.sagOk} size={18} />
            ) : (
              <ChevronRight className={styles.sagOk} size={18} />
            )}
          </div>

          {acikAkordeon === 'taleplerim' && (
            <div className={styles.altMenuListesi}>
              {/* İzin Taleplerim */}
              <div className={styles.altMenuKart} onClick={handleIzinTaleplerimTikla}>
                <CalendarDays className={styles.altIkon} size={18} />
                <span>İzin Taleplerim</span>
              </div>

              {/*  Saatlik İzin Taleplerim */}
              <div className={styles.altMenuKart} onClick={handleSaatlikIzinTikla}>
                <Hourglass className={styles.altIkon} size={18} />
                <span>Saatlik İzin Taleplerim</span>
              </div>

              <div className={styles.altMenuKart} onClick={handleAvansTaleplerimTikla}>
                <Wallet className={styles.altIkon} size={18} />
                <span>Avans Taleplerim</span>
              </div>
            </div>
          )}

          {/* 3. ZİMMETLERİM */}
         <div className={styles.menuKart} onClick={handleZimmetlerimTikla} style={{ cursor: 'pointer' }}>
          <div className={styles.solIkonYazi}>
           <Briefcase className={styles.solIkon} size={20} />
          <span>Zimmetlerim</span>
        </div>
          <ChevronRight className={styles.sagOk} size={18} />
        </div>

          {/* 4. ETKİNLİK LİSTEM */}
          <div className={styles.menuKart} onClick={handleEtkinlikListesiTikla} style={{ cursor: 'pointer' }}>
                <div className={styles.solIkonYazi}>
                <ClipboardList className={styles.solIkon} size={20} />
               <span>Etkinlik Listem</span>
           </div>
               <ChevronRight className={styles.sagOk} size={18} />
            </div>

          {/* 5. GÖREVLERİM */}
          <div className={styles.menuKart}>
            <div className={styles.solIkonYazi}>
              <ClipboardCheck className={styles.solIkon} size={20} />
              <span>Görevlerim</span>
            </div>
            <ChevronRight className={styles.sagOk} size={18} />
          </div>

        </div>

        <div className={styles.altAltKisim}>
          <span className={styles.versiyonYazi}>v3.3.2</span>
          <button className={styles.cikisButon} onClick={handleCikisYap}>
            <LogOut size={20} />
            <span>Oturumu Kapat</span>
          </button>
        </div>

      </div>
    </div>
  );
}