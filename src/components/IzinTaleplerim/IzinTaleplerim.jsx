import React, { useState } from 'react';
import styles from './IzinTaleplerim.module.css';
import { 
  X, 
  Calendar as CalendarIcon, 
  Plus, 
  Info, 
  ArrowRight, 
  ChevronDown, 
  Send,
  Trash2,
  ChevronLeft,
  ChevronRight
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

  // ÖZEL TAKVİM MODAL STATE'LERİ
  const [takvimModalAcik, setTakvimModalAcik] = useState(false);
  const [takvimHedef, setTakvimHedef] = useState('baslangic'); // 'baslangic' veya 'bitis'
  const [takvimYil, setTakvimYil] = useState(2026);
  const [takvimAy, setTakvimAy] = useState(6); // 0: Ocak, 6: Temmuz

  // Oluşturulan Talepler Listesi
  const [talepListesi, setTalepListesi] = useState([]);

  if (!acikMi) return null;

  const izinTurleri = [
    "Seçim Yapılmadı",
    "Yıllık İzin",
    "yıllık ücretli izin",
    "Doğum İzni",
    "Periyodik Kontrol İzni",
    "Babalık İzni",
    "Evlenme İzni",
    "Engelli Çocuk Tedavisi İzni",
    "Ölüm İzni",
    "Doğum İzni(Ücretsiz)",
    "Yol İzni(Ücretsiz)",
    "Ücretsiz İzin",
    "Ücretli İdari İzin",
    "Dış Görev",
    "İş Kazası Raporu(Ücretsiz)"
  ];

  const ayAdlari = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
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

  // Takvim Açma Fonksiyonu
  const handleTakvimAc = (hedef) => {
    setTakvimHedef(hedef);
    const mevcutTarihStr = hedef === 'baslangic' ? baslangicTarihi : bitisTarihi;
    if (mevcutTarihStr) {
      const [y, m] = mevcutTarihStr.split('-');
      setTakvimYil(parseInt(y));
      setTakvimAy(parseInt(m) - 1);
    }
    setTakvimModalAcik(true);
  };

  // Takvimden Gün Seçildiğinde
  const handleGunSec = (gunSayi) => {
    const mStr = String(takvimAy + 1).padStart(2, '0');
    const dStr = String(gunSayi).padStart(2, '0');
    const secilenStr = `${takvimYil}-${mStr}-${dStr}`;

    if (takvimHedef === 'baslangic') {
      setBaslangicTarihi(secilenStr);
      // Eğer bitis başlangıçtan küçük kalırsa eşitle
      if (new Date(secilenStr) > new Date(bitisTarihi)) {
        setBitisTarihi(secilenStr);
      }
    } else {
      setBitisTarihi(secilenStr);
    }
    setTakvimModalAcik(false);
  };

  // Takvim Ay Değiştirme
  const handleTakvimAyDegistir = (yon) => {
    if (yon === 'ileri') {
      if (takvimAy === 11) {
        setTakvimAy(0);
        setTakvimYil(takvimYil + 1);
      } else {
        setTakvimAy(takvimAy + 1);
      }
    } else {
      if (takvimAy === 0) {
        setTakvimAy(11);
        setTakvimYil(takvimYil - 1);
      } else {
        setTakvimAy(takvimAy - 1);
      }
    }
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
      gunSayisi: hesaplaGunSayisi(),
      durum: "Onay Bekliyor"
    };

    setTalepListesi([yeniTalep, ...talepListesi]);
    setFormAcik(false);
    setAciklama('');
  };

  // Talebi Silme
  const handleTalepSil = (id) => {
    setTalepListesi(talepListesi.filter(t => t.id !== id));
  };

  // Ayın gün sayısını ve ilk gün ofsetini hesaplama
  const ayinGunSayisi = new Date(takvimYil, takvimAy + 1, 0).getDate();
  const ilkGunHaftaninGunu = new Date(takvimYil, takvimAy, 1).getDay(); // 0: Pazar
  const boslukSayisi = ilkGunHaftaninGunu === 0 ? 6 : ilkGunHaftaninGunu - 1; // Pzt=0 yap

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/*  İZİN TALEPLERİM ANA SAYFASI */}
      {!formAcik ? (
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>İZİN TALEPLERİM</span>
            <button className={styles.kapatButon} onClick={kapat}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            
            <div className={styles.bakiyeKart}>
              <div className={styles.bakiyeSol}>
                <div className={styles.bakiyeIkonKutusu}>
                  <CalendarIcon size={22} strokeWidth={2.2} />
                </div>
                <div className={styles.bakiyeMetinGrup}>
                  <span className={styles.bakiyeEtiket}>KALAN İZİN SÜRESİ</span>
                  <span className={styles.bakiyeAltMetin}>Yıllık İzin Bakiyeniz</span>
                </div>
              </div>
              <span className={styles.bakiyeGun}>14 Gün</span>
            </div>

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

            {talepListesi.length === 0 ? (
              <div className={styles.bosDurumKonteyner}>
                <div className={styles.bosDurumDaire}>
                  <CalendarIcon size={48} strokeWidth={1.8} />
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
                    <div className={styles.talepKartAlt}>
                      <span className={styles.talepTarihMetin}>
                        {item.baslangic} - {item.bitis} ({item.gunSayisi} Gün)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className={styles.ekleFabButon} onClick={() => setFormAcik(true)}>
              <Plus size={28} strokeWidth={2.8} />
            </button>

          </div>
        </>
      ) : (
        
        /* İZİN TALEBİ OLUŞTURMA SAYFASI  */
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>İZİN TALEBİ</span>
            <button className={styles.kapatButon} onClick={() => setFormAcik(false)}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            <form onSubmit={handleTalepGonder} className={styles.formKonteyner}>
              
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
                    {/* Başlangıç Kutusuna Tıklayınca Özel Takvim Açılır */}
                    <div 
                      className={`${styles.tarihInputKutu} ${styles.baslangicKutu}`}
                      onClick={() => handleTakvimAc('baslangic')}
                    >
                      <span className={styles.tarihInputEtiket}>BAŞLANGIÇ</span>
                      <span className={styles.tarihDegerMetin}>{formatTarih(baslangicTarihi)}</span>
                    </div>

                    <ArrowRight className={styles.okSimge} size={18} strokeWidth={2.5} />

                    {/* Bitiş Kutusuna Tıklayınca Özel Takvim Açılır */}
                    <div 
                      className={`${styles.tarihInputKutu} ${styles.bitisKutu}`}
                      onClick={() => handleTakvimAc('bitis')}
                    >
                      <span className={styles.tarihInputEtiket}>BİTİŞ</span>
                      <span className={styles.tarihDegerMetin}>{formatTarih(bitisTarihi)}</span>
                    </div>
                  </div>

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
                      <CalendarIcon size={20} strokeWidth={2.2} />
                    </div>
                    <span className={styles.izinTuruMetin}>{secilenIzinTuru}</span>
                  </div>
                  <ChevronDown size={20} color="#64748b" />
                </div>

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

              <button type="submit" className={styles.gonderButon}>
                <Send size={18} />
                <span>Talebi Gönder</span>
              </button>

            </form>
          </div>
        </>
      )}

      {/* ÖZEL TAKVİM POPUP MODALI */}
      {takvimModalAcik && (
        <div className={styles.modalOverlay} onClick={() => setTakvimModalAcik(false)}>
          <div className={styles.modalTakvimKutu} onClick={(e) => e.stopPropagation()}>
            
            {/* Takvim Üst Başlık ve Ay Değiştirici */}
            <div className={styles.takvimUstBar}>
              <span className={styles.takvimBaslikYazi}>
                {ayAdlari[takvimAy]} {takvimYil}
              </span>
              <div className={styles.takvimOkGrup}>
                <button 
                  type="button"
                  className={styles.takvimOkButon}
                  onClick={() => handleTakvimAyDegistir('geri')}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  type="button"
                  className={styles.takvimOkButon}
                  onClick={() => handleTakvimAyDegistir('ileri')}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Gün Adları */}
            <div className={styles.takvimGunBasliklari}>
              <span>Pt</span><span>Sa</span><span>Ça</span><span>Pe</span><span>Cu</span><span>Ct</span><span>Pz</span>
            </div>

            {/* Takvim Günleri Grid */}
            <div className={styles.takvimGunGrid}>
              {/* Boşluklar */}
              {Array.from({ length: boslukSayisi }).map((_, i) => (
                <div key={`bos-${i}`} />
              ))}

              {/* Ayın Günleri */}
              {Array.from({ length: ayinGunSayisi }).map((_, i) => {
                const gunNum = i + 1;
                const mStr = String(takvimAy + 1).padStart(2, '0');
                const dStr = String(gunNum).padStart(2, '0');
                const buGunStr = `${takvimYil}-${mStr}-${dStr}`;

                const seciliMi = 
                  takvimHedef === 'baslangic' 
                    ? baslangicTarihi === buGunStr 
                    : bitisTarihi === buGunStr;

                return (
                  <button
                    key={gunNum}
                    type="button"
                    className={`${styles.takvimGunBtn} ${seciliMi ? styles.takvimGunSecili : ''}`}
                    onClick={() => handleGunSec(gunNum)}
                  >
                    {gunNum}
                  </button>
                );
              })}
            </div>

            {/* Kapat Butonu */}
            <button 
              type="button"
              className={styles.takvimKapatBtn}
              onClick={() => setTakvimModalAcik(false)}
            >
              Vazgeç
            </button>

          </div>
        </div>
      )}

    </div>
  );
}