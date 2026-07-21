import React, { useState } from 'react';
import styles from './Ayarlar.module.css';
import { 
  X, Sun, Moon, Sparkles, Globe, QrCode, 
  History, Calendar, Hourglass, Banknote 
} from 'lucide-react';

export default function Ayarlar({ acikMi, kapat }) {
  const [tema, setTema] = useState('acik');
  const [dil, setDil] = useState('TR');

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

  const koyuModAktif = tema === 'koyu';

  return (
    <div className={`${styles.tamSayfaKonteyner} ${koyuModAktif ? styles.koyuTema : ''}`}>
      
      {/* Üst Bar */}
      <div className={styles.ustBar}>
        <span className={styles.baslikYazi}>AYARLAR</span>
        <button className={styles.kapatButon} onClick={kapat}>
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.icerikAlani}>
        
        {/* 1. KART: Tema & Dil */}
        <div className={styles.gradientCerceveKutu}>
          <div className={styles.temaKartIcerik}>
            
            <svg className={styles.dalgaArkaPlan} viewBox="0 0 350 100" fill="none">
              <path className={styles.dalgaCizgi} d="M -20 30 Q 80 70 180 30 T 380 30" />
              <path className={styles.dalgaCizgi} d="M -20 50 Q 80 90 180 50 T 380 50" />
              <path className={styles.dalgaCizgi} d="M -20 70 Q 80 110 180 70 T 380 70" />
            </svg>

            <div className={styles.temaIcerikÖn}>
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

             {/* Uygulama Dili Üzerindeki Kesin Görünür Mor Çizgi */}
                 <div 
                   style={{
                     width: '100%',
                     height: '1.5px',
                     background: 'linear-gradient(90deg, transparent 0%, #c084fc 35%, #a855f7 50%, #c084fc 65%, transparent 100%)',
                     margin: '12px 0',
                     display: 'block',
                     opacity: 0.8
                     }} 
                    />

              {/* Uygulama Dili */}
              <div className={styles.dilSatir}>
                <div className={styles.dilSol}>
                  <Globe color={koyuModAktif ? "#c084fc" : "#8B5CF6"} size={20} strokeWidth={2} />
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
        </div>

        {/* 2. KART: Toggle Switch Ayarları */}
        <div className={styles.ayarlarKart}>
          
          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <QrCode className={styles.ayarIkon} size={20} strokeWidth={2} />
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

          <div className={styles.ayarsatir}>
            <div className={styles.ayarSol}>
              <Banknote className={styles.ayarIkon} size={20} strokeWidth={2} />
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