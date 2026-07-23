import React, { useState } from 'react';
import styles from './IzinTaleplerim.module.css';
import { 
  X, 
  Calendar, 
  Plus, 
  Info, 
  ArrowRight, 
  ChevronDown, 
  Send 
} from 'lucide-react';

export default function IzinTaleplerim({ acikMi, kapat }) {
  const [aktifSekme, setAktifSekme] = useState('HAFTA');
  const [formAcik, setFormAcik] = useState(false);
  
  // Form State'leri
  const [baslangicTarihi, setBaslangicTarihi] = useState('2026-07-16');
  const [bitisTarihi, setBitisTarihi] = useState('2026-07-17');
  const [secilenIzinTuru, setSecilenIzinTuru] = useState('Yıllık İzin');
  const [dropdownAcik, setDropdownAcik] = useState(false);
  const [aciklama, setAciklama] = useState('');

  // Oluşturulan Talepler Listesi
  const [talepListesi, setTalepListesi] = useState([]);

  if (!acikMi) return null;

  // İzin Türü Seçenekleri Listesi
  const izinTurleri = [
    "seçim yapılmadı",
    "Yıllık İzin",
    "yıllık ücretli izin",
    "doğum izni",
    "periyodik kontrol izni",
    "babalık izni",
    "evlenme izni",
    "engelli çocuk tedavisi izni",
    "ölüm izni",
    "doğum izni(ücretsiz)",
    "yol izni(ücretsiz)",
    "ücretsiz izin",
    "ücretli idari izin",
    "dış görev",
    "iş kazası raporu(ücretsiz)"
  ];

  // Tarih Formatlama (YYYY-MM-DD -> DD.MM.YYYY)
  const formatTarih = (tarihStr) => {
    if (!tarihStr) return '';
    const [y, m, d] = tarihStr.split('-');
    return `${d}.${m}.${y}`;
  };

  // Dinamik Gün Sayısı Hesaplama
  const hesaplaGunSayisi = () => {
    if (!baslangicTarihi || !bitisTarihi) return 0;
    const bas = new Date(baslangicTarihi);
    const bit = new Date(bitisTarihi);
    const farkMs = bit - bas;
    const gun = Math.ceil(farkMs / (1000 * 60 * 60 * 24)) + 1;
    return gun > 0 ? gun : 0;
  };

  // Dinamik İşe Dönüş Tarihi Hesaplama 
  const hesaplaIseDonusTarihi = () => {
    if (!bitisTarihi) return '';
    const bit = new Date(bitisTarihi);
    bit.setDate(bit.getDate() + 1);
    const y = bit.getFullYear();
    const m = String(bit.getMonth() + 1).padStart(2, '0');
    const d = String(bit.getDate()).padStart(2, '0');
    return `${d}.${m}.${y}`;
  };

  // Formu Gönderip Talebi Kaydetme
  const handleTalepGonder = (e) => {
    e.preventDefault();
    if (!aciklama.trim()) {
      alert("Lütfen bir açıklama giriniz.");
      return;
    }

    const yeniTalep = {
      id: Date.now(),
      tur: secilenIzinTuru,
      baslangic: formatTarih(baslangicTarihi),
      bitis: formatTarih(bitisTarihi),
      durum: "Onay Bekliyor"
    };

    setTalepListesi([yeniTalep, ...talepListesi]);
    setFormAcik(false); // Ana sayfaya döner
    setAciklama('');
  };

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/* İZİN TALEPLERİM ANA SAYFASI */}
      {!formAcik ? (
        <>
          {/* Üst Bar */}
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>İZİN TALEPLERİM</span>
            <button className={styles.kapatButon} onClick={kapat}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            
            {/* Kalan İzin Süresi Bakiyesi */}
            <div className={styles.bakiyeKart}>
              <div className={styles.bakiyeSol}>
                <div className={styles.bakiyeIkonKutusu}>
                  <Calendar size={22} strokeWidth={2.2} />
                </div>
                <div className={styles.bakiyeMetinGrup}>
                  <span className={styles.bakiyeEtiket}>KALAN İZİN SÜRESİ</span>
                  <span className={styles.bakiyeAltMetin}>Yıllık İzin Bakiyeniz</span>
                </div>
              </div>
              <span className={styles.bakiyeGun}>14 Gün</span>
            </div>

            {/* Filtre Sekmeleri */}
            <div className={styles.sekmelerKonteyner}>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'HAFTA' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('HAFTA')}
              >
                BU HAFTA
              </button>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'AY' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('AY')}
              >
                BU AY
              </button>
              <button 
                className={`${styles.sekmeButon} ${aktifSekme === 'YIL' ? styles.sekmeButonAktif : ''}`}
                onClick={() => setAktifSekme('YIL')}
              >
                BU YIL
              </button>
            </div>

            {/* Liste veya Boş Durum */}
            {talepListesi.length === 0 ? (
              <div className={styles.bosDurumKonteyner}>
                <div className={styles.bosDurumDaire}>
                  <Calendar size={48} strokeWidth={1.8} />
                </div>
                <span className={styles.bosDurumBaslik}>Listelenecek İzin Kaydı Bulunamadı</span>
                <span className={styles.bosDurumAciklama}>
                  Belirttiğiniz tarih aralığında aktif bir talebiniz yoktur. Yeni bir talep oluşturmak için aşağıdaki ekleme butonuna basabilirsiniz.
                </span>
              </div>
            ) : (
              <div className={styles.talepListesi}>
                {talepListesi.map((item) => (
                  <div key={item.id} className={styles.talepKart}>
                    <div className={styles.talepKartUst}>
                      <span className={styles.talepTurMetin}>{item.tur}</span>
                      <span className={styles.talepDurumPill}>{item.durum}</span>
                    </div>
                    <span className={styles.talepTarihMetin}>
                      {item.baslangic} - {item.bitis}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* + EKLEME BUTONU */}
            <button className={styles.ekleFabButon} onClick={() => setFormAcik(true)}>
              <Plus size={28} strokeWidth={2.8} />
            </button>

          </div>
        </>
      ) : (
        
        /* İZİN TALEBİ OLUŞTURMA SAYFASI */
        <>
          {/* Üst Bar */}
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>İZİN TALEBİ</span>
            <button className={styles.kapatButon} onClick={() => setFormAcik(false)}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            <form onSubmit={handleTalepGonder} className={styles.formKonteyner}>
              
              {/* Mor Bilgilendirme Kutusu */}
              <div className={styles.bilgiKutusu}>
                <Info className={styles.bilgiIkon} size={20} />
                <span className={styles.bilgiMetin}>
                  Lütfen formu dikkatlice doldurun ve izin talebinizi kaydedin. İzin talebinizin onay durumunu talep listesinden takip edebilirsiniz.
                </span>
              </div>

              {/* TARİH ARALIĞI KARTI */}
              <div>
                <span className={styles.alantEtiket}>TARİH ARALIĞI</span>
                <div className={styles.tarihAraligiKutu}>
                  
                  <div className={styles.tarihSeciciSatir}>
                    {/* Başlangıç Tarihi Kutusu */}
                    <div className={`${styles.tarihInputKutu} ${styles.baslangicKutu}`}>
                      <span className={styles.tarihInputEtiket}>BAŞLANGIÇ</span>
                      <span className={styles.tarihDegerMetin}>{formatTarih(baslangicTarihi)}</span>
                      <input 
                        type="date" 
                        className={styles.gizliDateInput}
                        value={baslangicTarihi}
                        onChange={(e) => setBaslangicTarihi(e.target.value)}
                      />
                    </div>

                    <ArrowRight className={styles.okSimge} size={18} strokeWidth={2.5} />

                    {/* Bitiş Tarihi Kutusu */}
                    <div className={`${styles.tarihInputKutu} ${styles.bitisKutu}`}>
                      <span className={styles.tarihInputEtiket}>BİTİŞ</span>
                      <span className={styles.tarihDegerMetin}>{formatTarih(bitisTarihi)}</span>
                      <input 
                        type="date" 
                        className={styles.gizliDateInput}
                        value={bitisTarihi}
                        onChange={(e) => setBitisTarihi(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Dinamik Gün Sayısı ve İşe Dönüş */}
                  <div className={styles.tarihAltBilgi}>
                    <span className={styles.gunKapsul}>{hesaplaGunSayisi()} gün</span>
                    <span className={styles.iseDonusMetin}>
                      İşe dönüş: {hesaplaIseDonusTarihi()}
                    </span>
                  </div>

                </div>
              </div>

              {/* İZİN TÜRÜ SEÇİMİ */}
              <div className={styles.izinTuruKonteyner}>
                <span className={styles.alantEtiket}>İZİN TÜRÜ</span>
                <div 
                  className={styles.izinTuruKart} 
                  onClick={() => setDropdownAcik(!dropdownAcik)}
                >
                  <div className={styles.izinTuruSol}>
                    <div className={styles.izinTuruIkonKutu}>
                      <Calendar size={20} strokeWidth={2.2} />
                    </div>
                    <span className={styles.izinTuruMetin}>{secilenIzinTuru}</span>
                  </div>
                  <ChevronDown size={20} color="#64748b" />
                </div>

                {/* Açılır Dropdown Liste */}
                {dropdownAcik && (
                  <div className={styles.dropdownMenu}>
                    {izinTurleri.map((tur, idx) => (
                      <div 
                        key={idx} 
                        className={styles.dropdownItem}
                        onClick={() => {
                          setSecilenIzinTuru(tur);
                          setDropdownAcik(false);
                        }}
                      >
                        {tur}
                      </div>
                    ))}
                  </div>
                )}
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

              {/* TALEP GÖNDER BUTONU */}
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