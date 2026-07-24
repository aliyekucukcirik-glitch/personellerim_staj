import React, { useState } from 'react';
import styles from './AvansTaleplerim.module.css';
import { 
  X, 
  Plus, 
  Info, 
  List, 
  ChevronRight, 
  ChevronDown, 
  Send, 
  Trash2,
  WalletCards
} from 'lucide-react';

export default function AvansTaleplerim({ acikMi, kapat }) {
  const [aktifSekme, setAktifSekme] = useState('HAFTA');
  const [formAcik, setFormAcik] = useState(false);

  // Form State'leri
  const [secilenAvansTipi, setSecilenAvansTipi] = useState('Avans tipi seç');
  const [dropdownAcik, setDropdownAcik] = useState(false);
  const [tutar, setTutar] = useState('0,00');
  const [aciklama, setAciklama] = useState('');

  // Oluşturulan Talepler Listesi
  const [talepListesi, setTalepListesi] = useState([]);

  if (!acikMi) return null;

  const avansTipleri = [
    "seçim yapılmadı",
    "Avans",
    "İlaç Parası"
  ];

  // Formu Gönderip Kaydetme
  const handleTalepGonder = (e) => {
    e.preventDefault();
    if (secilenAvansTipi === 'Avans tipi seç' || secilenAvansTipi === 'seçim yapılmadı') {
      alert("Lütfen bir avans tipi seçiniz.");
      return;
    }
    if (!aciklama.trim()) {
      alert("Lütfen bir açıklama giriniz.");
      return;
    }

    const yeniTalep = {
      id: Date.now(),
      tip: secilenAvansTipi,
      tutar: tutar.endsWith('₺') ? tutar : `${tutar} ₺`,
      durum: "Onay Bekliyor"
    };

    setTalepListesi([yeniTalep, ...talepListesi]);
    setFormAcik(false); // Ana sayfaya döner
    setSecilenAvansTipi('Avans tipi seç');
    setTutar('0,00');
    setAciklama('');
  };

  // Talebi Silme
  const handleTalepSil = (id) => {
    setTalepListesi(talepListesi.filter(t => t.id !== id));
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* AVANS TALEPLERİM ANA SAYFASI */}
      {!formAcik ? (
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>AVANS TALEPLERİM</span>
            <button className={styles.kapatButon} onClick={kapat}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            
            {/* Üst 2'li Özet Kartlar */}
            <div className={styles.ozetGrid}>
              <div className={styles.ozetKart}>
                <span className={styles.ozetEtiket}>2026-6 - GEÇMİŞ</span>
                <span className={styles.ozetTutar}>0,00 ₺</span>
              </div>
              <div className={`${styles.ozetKart} ${styles.ozetKartMevcut}`}>
                <span className={styles.ozetEtiket}>2026-7 - MEVCUT</span>
                <span className={styles.ozetTutar}>0,00 ₺</span>
              </div>
            </div>

            {/* Filtre Sekmeleri */}
            <div className={styles.sekmelerKonteyner}>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'HAFTA' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('HAFTA')}
              >
                Bu Hafta
              </button>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'AY' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('AY')}
              >
                Bu Ay
              </button>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'YIL' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('YIL')}
              >
                Bu Yıl
              </button>
            </div>

            {/* Liste veya Boş Durum */}
            {talepListesi.length === 0 ? (
              <div className={styles.bosDurumKonteyner}>
                <div className={styles.bosDurumDaire}>
                  <WalletCards size={46} strokeWidth={1.8} />
                </div>
                <span className={styles.bosDurumBaslik}>Listelenecek avans talep kaydı bulunamadı</span>
                <span className={styles.bosDurumAciklama}>
                  Yeni bir talep oluşturmak için aşağıdaki ekleme butonuna basabilirsiniz.
                </span>
              </div>
            ) : (
              <div className={styles.talepListesi}>
                {talepListesi.map((item) => (
                  <div key={item.id} className={styles.talepKart}>
                    <div className={styles.talepKartUst}>
                      <span className={styles.talepTurMetin}>{item.tip} Talebi</span>
                      <div className={styles.talepSagGrup}>
                        <span className={styles.talepDurumPill}>{item.durum}</span>
                        <button 
                          className={styles.silButon}
                          onClick={() => handleTalepSil(item.id)}
                          title="Talebi Sil"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <span className={styles.talepTutarMetin}>{item.tutar}</span>
                  </div>
                ))}
              </div>
            )}

            {/* + FAB EKLEME BUTONU */}
            <button className={styles.ekleFabButon} onClick={() => setFormAcik(true)}>
              <Plus size={28} strokeWidth={2.8} />
            </button>

          </div>
        </>
      ) : (
        
        /* AVANS TALEBİ OLUŞTURMA FORM SAYFASI */
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>AVANS TALEBİ</span>
            <button className={styles.kapatButon} onClick={() => setFormAcik(false)}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            <form onSubmit={handleTalepGonder} className={styles.formKonteyner}>
              
              {/* Bilgilendirme Kutusu */}
              <div className={styles.bilgiKutusu}>
                <Info className={styles.bilgiIkon} size={20} />
                <span className={styles.bilgiMetin}>
                  Lütfen formu dikkatlice doldurun ve avans talebinizi kaydedin. Avans talebinizin onay durumunu talep listesinden takip edebilirsiniz.
                </span>
              </div>

              {/* AVANS TİPİ SEÇİMİ */}
              <div className={styles.avansTipiKonteyner}>
                <span className={styles.alantEtiket}>AVANS TİPİ</span>
                <div 
                  className={styles.avansTipiKart}
                  onClick={() => setDropdownAcik(!dropdownAcik)}
                >
                  <div className={styles.avansTipiSol}>
                    <div className={styles.avansTipiIkonKutu}>
                      <List size={20} strokeWidth={2.2} />
                    </div>
                    <span className={`${styles.avansTipiMetin} ${secilenAvansTipi === 'Avans tipi seç' ? styles.avansTipiMetinGri : ''}`}>
                      {secilenAvansTipi}
                    </span>
                  </div>
                  {dropdownAcik ? (
                    <ChevronDown size={20} color="#64748b" />
                  ) : (
                    <ChevronRight size={20} color="#64748b" />
                  )}
                </div>

                {/* Dropdown Açılır Liste */}
                {dropdownAcik && (
                  <div className={styles.dropdownMenu}>
                    {avansTipleri.map((tip, idx) => (
                      <div 
                        key={idx}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setSecilenAvansTipi(tip);
                          setDropdownAcik(false);
                        }}
                      >
                        {tip}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* AVANS TUTARI */}
              <div>
                <span className={styles.alantEtiket}>AVANS TUTARI</span>
                <div className={styles.tutarKart}>
                  <span className={styles.tlSimgesi}>₺</span>
                  <input 
                    type="text" 
                    className={styles.tutarInput}
                    value={tutar}
                    onChange={(e) => setTutar(e.target.value)}
                    placeholder="0,00"
                  />
                </div>
              </div>

              {/* AÇIKLAMA ALANI */}
              <div>
                <span className={styles.alantEtiket}>AÇIKLAMA</span>
                <textarea 
                  className={styles.aciklamaInput}
                  placeholder="Açıklama boş geçilmez."
                  value={aciklama}
                  onChange={(e) => setAciklama(e.target.value)}
                />
              </div>

              {/* TALEBİ GÖNDER BUTONU */}
              <button type="submit" className={styles.gonderButon}>
                <Send size={18} />
                <span>Talebi Gönder</span>
              </button>

            </form>
          </div>
        </>
      )}

    </div>
  );
}