import React, { useState } from 'react';
import styles from './Ayarlar.module.css';
import { 
  X, Sun, Moon, Sparkles, Globe, LayoutGrid, 
  History, Calendar, Hourglass, Wallet 
} from 'lucide-react';

export default function Ayarlar({ acikMi, kapat }) {
  // Tema State'i: 'acik', 'koyuy', 'otomatik'
  const [tema, setTema] = useState('acik');
  
  // Dil State'i: 'TR', 'EN'
  const [dil, setDil] = useState('TR');

  // Toggle Switch State'leri
  const [togglelar, setTogglelar] = useState({
    girisCikis: false,
    vardiya: true,
    yillikIzin: true,
    saatlikIzin: true,
    avans: true
  });

  if (!acikMi) return null;

  const toggleDegistir = (anahtar) => {
    setTogglelar(prev => ({ ...prev, [anahtar]: !prev[anahtar] }));
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>AYARLAR</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* 1. KART: Tema ve Dil  */}
        <div className={styles.temaKart}>
          
          {/* Arka Plan Dalga Efekti */}
          <svg className={styles.dalgaArkaPlan} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80C100 120 200 40 400 90V200H0V80Z" fill="#C084FC" fillOpacity="0.1" />
            <path d="M0 110C120 60 250 140 400 70V200H0V110Z" fill="#A855F7" fillOpacity="0.08" />
            <path d="M0 140C150 100 280 160 400 110V200H0V140Z" fill="#9333EA" fillOpacity="0.06" />
          </svg>

          <div className={styles.temaIcerik}>
            <span className={styles.etiket}>TEMA AYARLARI</span>

            <div className={styles.radioGrubu}>
              
              {/* Açık Tema */}
              <button className={styles.radioSatir} onClick={() => setTema('acik')}>
                <div className={`${styles.radioHalka} ${tema === 'acik' ? styles.radioHalkaSecili : ''}`}>
                  {tema === 'acik' && <div className={styles.radioNokta} />}
                </div>
                <span className={`${styles.radioYazi} ${tema === 'acik' ? styles.radioYaziSecili : ''}`}>
                  <Sun size={18} strokeWidth={2.2} /> Açık
                </span>
              </button>

              {/* Koyu Tema */}
              <button className={styles.radioSatir} onClick={() => setTema('koyu')}>
                <div className={`${styles.radioHalka} ${tema === 'koyu' ? styles.radioHalkaSecili : ''}`}>
                  {tema === 'koyu' && <div className={styles.radioNokta} />}
                </div>
                <span className={`${styles.radioYazi} ${tema === 'koyu' ? styles.radioYaziSecili : ''}`}>
                  <Moon size={18} strokeWidth={2} /> Koyu
                </span>
              </button>

              {/* Otomatik Tema */}
              <button className={styles.radioSatir} onClick={() => setTema('otomatik')}>
                <div className={`${styles.radioHalka} ${tema === 'otomatik' ? styles.radioHalkaSecili : ''}`}>
                  {tema === 'otomatik' && <div className={styles.radioNokta} />}
                </div>
                <span className={`${styles.radioYazi} ${tema === 'otomatik' ? styles.radioYaziSecili : ''}`}>
                  <Sparkles size={18} strokeWidth={2} /> Otomatik
                </span>
              </button>

            </div>

            {/* Uygulama Dili */}
            <div className={styles.dilSatir}>
              <div className={styles.dilSol}>
                <Globe color="#8B5CF6" size={20} strokeWidth={2} />
                <span>Uygulama Dili</span>
              </div>
              <div className={styles.dilKutusu}>
                <button 
                  className={`${styles.dilButon} ${dil === 'TR' ? styles.dilButonAktif : ''}`}
                  onClick={() => setDil('TR')}
                >
                  TR
                </button>
                <button 
                  className={`${styles.dilButon} ${dil === 'EN' ? styles.dilButonAktif : ''}`}
                  onClick={() => setDil('EN')}
                >
                  EN
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. KART: Çalışan Toggle Switch Ayarları */}
        <div className={styles.ayarlarKart}>
          
          {/* Giriş & Çıkış Hareketleri */}
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <LayoutGrid className={styles.ayarIkon} size={20} strokeWidth={2} />
              <div className={styles.ayarMetin}>
                <span className={styles.ayarBaslik}>Giriş & Çıkış Hareketleri</span>
                <span className={styles.ayarAciklama}>Gün içindeki giriş-çıkışlarınızı listeler.</span>
              </div>
            </div>
            <div 
              className={`${styles.toggleSwitch} ${togglelar.girisCikis ? styles.toggleSwitchAcik : ''}`}
              onClick={() => toggleDegistir('girisCikis')}
            >
              <div className={`${styles.toggleNokta} ${togglelar.girisCikis ? styles.toggleNoktaAcik : ''}`} />
            </div>
          </div>

          {/* Vardiya Bilginiz */}
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <History className={styles.ayarIkon} size={20} strokeWidth={2} />
              <div className={styles.ayarMetin}>
                <span className={styles.ayarBaslik}>Vardiya Bilginiz</span>
                <span className={styles.ayarAciklama}>Bugünkü vardiya ve mola sürelerinizi gösterir.</span>
              </div>
            </div>
            <div 
              className={`${styles.toggleSwitch} ${togglelar.vardiya ? styles.toggleSwitchAcik : ''}`}
              onClick={() => toggleDegistir('vardiya')}
            >
              <div className={`${styles.toggleNokta} ${togglelar.vardiya ? styles.toggleNoktaAcik : ''}`} />
            </div>
          </div>

          {/* Yıllık İzin Durumunuz */}
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <Calendar className={styles.ayarIkon} size={20} strokeWidth={2} />
              <div className={styles.ayarMetin}>
                <span className={styles.ayarBaslik}>Yıllık İzin Durumunuz</span>
                <span className={styles.ayarAciklama}>Hakedilen ve kullanılan yıllık izin durumunuzu gösterir.</span>
              </div>
            </div>
            <div 
              className={`${styles.toggleSwitch} ${togglelar.yillikIzin ? styles.toggleSwitchAcik : ''}`}
              onClick={() => toggleDegistir('yillikIzin')}
            >
              <div className={`${styles.toggleNokta} ${togglelar.yillikIzin ? styles.toggleNoktaAcik : ''}`} />
            </div>
          </div>

          {/* Saatlik İzin Kullanımınız */}
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <Hourglass className={styles.ayarIkon} size={20} strokeWidth={2} />
              <div className={styles.ayarMetin}>
                <span className={styles.ayarBaslik}>Saatlik İzin Kullanımınız</span>
                <span className={styles.ayarAciklama}>Haftalık ve Aylık saatlik izin kullanımınızı gösterir.</span>
              </div>
            </div>
            <div 
              className={`${styles.toggleSwitch} ${togglelar.saatlikIzin ? styles.toggleSwitchAcik : ''}`}
              onClick={() => toggleDegistir('saatlikIzin')}
            >
              <div className={`${styles.toggleNokta} ${togglelar.saatlikIzin ? styles.toggleNoktaAcik : ''}`} />
            </div>
          </div>

          {/* Avans Bilgileriniz */}
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <Wallet className={styles.ayarIkon} size={20} strokeWidth={2} />
              <div className={styles.ayarMetin}>
                <span className={styles.ayarBaslik}>Avans Bilgileriniz</span>
                <span className={styles.ayarAciklama}>Mevcut ve geçmiş dönem avans tutarınızı gösterir.</span>
              </div>
            </div>
            <div 
              className={`${styles.toggleSwitch} ${togglelar.avans ? styles.toggleSwitchAcik : ''}`}
              onClick={() => toggleDegistir('avans')}
            >
              <div className={`${styles.toggleNokta} ${togglelar.avans ? styles.toggleNoktaAcik : ''}`} />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}