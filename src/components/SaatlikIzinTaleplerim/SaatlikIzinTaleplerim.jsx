import React, { useState } from 'react';
import styles from './SaatlikIzinTaleplerim.module.css';
import { 
  X, 
  Calendar as CalendarIcon, 
  Plus, 
  Info, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Clock,
  CalendarDays,
  ClipboardCheck,
  Save,
  Trash2
} from 'lucide-react';

export default function SaatlikIzinTaleplerim({ acikMi, kapat }) {
  const [aktifSekme, setAktifSekme] = useState('HAFTA');
  const [formAcik, setFormAcik] = useState(false);

  // Form State'leri
  const [tarih, setTarih] = useState('2026-07-16');
  const [baslangicSaati, setBaslangicSaati] = useState('14:30');
  const [bitisSaati, setBitisSaati] = useState('15:30');
  const [talepTuru, setTalepTuru] = useState('İzin'); // 'İzin' veya 'Görev'
  const [aciklama, setAciklama] = useState('');

  // Modal State'leri
  const [takvimModalAcik, setTakvimModalAcik] = useState(false);
  const [saatModalAcik, setSaatModalAcik] = useState(false);
  const [saatHedef, setSaatHedef] = useState('baslangic');

  const [takvimYil, setTakvimYil] = useState(2026);
  const [takvimAy, setTakvimAy] = useState(6);

  // Oluşturulan Talepler
  const [talepListesi, setTalepListesi] = useState([]);

  if (!acikMi) return null;

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

  // Dinamik Saat Süresi Hesaplama
  const hesaplaSaatFarki = () => {
    if (!baslangicSaati || !bitisSaati) return 1;
    const [bSa, bDk] = baslangicSaati.split(':').map(Number);
    const [bitSa, bitDk] = bitisSaati.split(':').map(Number);
    
    const basDakika = bSa * 60 + bDk;
    const bitDakika = bitSa * 60 + bitDk;
    const fark = (bitDakika - basDakika) / 60;
    
    return fark > 0 ? fark : 1;
  };

  // Takvim Gün Seçimi
  const handleGunSec = (gunNum) => {
    const mStr = String(takvimAy + 1).padStart(2, '0');
    const dStr = String(gunNum).padStart(2, '0');
    setTarih(`${takvimYil}-${mStr}-${dStr}`);
    setTakvimModalAcik(false);
  };

  // Saat Seçim Açma
  const handleSaatAc = (hedef) => {
    setSaatHedef(hedef);
    setSaatModalAcik(true);
  };

  // Form Kaydetme
  const handleKaydet = (e) => {
    e.preventDefault();
    if (!aciklama.trim()) {
      alert("Lütfen bir açıklama giriniz.");
      return;
    }

    const yeniTalep = {
      id: Date.now(),
      tur: talepTuru,
      tarih: formatTarih(tarih),
      saatAraligi: `${baslangicSaati} - ${bitisSaati}`,
      süre: `${hesaplaSaatFarki()} Saat`,
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

  const ayinGunSayisi = new Date(takvimYil, takvimAy + 1, 0).getDate();
  const ilkGunHaftaninGunu = new Date(takvimYil, takvimAy, 1).getDay();
  const boslukSayisi = ilkGunHaftaninGunu === 0 ? 6 : ilkGunHaftaninGunu - 1;

  return (
    <div className={styles.tamSayfaKonteyner}>
      
      {/*  SAATLİK İZİN TALEPLERİM ANA SAYFA */}
      {!formAcik ? (
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>SAATLİK İZİN TALEPLERİM</span>
            <button className={styles.kapatButon} onClick={kapat}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            
            <span className={styles.alantEtiket}>SAATLİK İZİN KULLANIMINIZ</span>

            {/* Üst 3'lü Kullanım Özeti Kartları */}
            <div className={styles.kullanimKartlariGrid}>
              <div className={styles.kullanimKart}>
                <span className={styles.kullanimEtiket}>Geçen Ay</span>
                <span className={styles.kullanimDeger}>00:00</span>
              </div>
              <div className={styles.kullanimKart}>
                <span className={styles.kullanimEtiket}>Bu Ay</span>
                <span className={styles.kullanimDeger}>00:00</span>
              </div>
              <div className={styles.kullanimKart}>
                <span className={styles.kullanimEtiket}>Bu Hafta</span>
                <span className={`${styles.kullanimDeger} ${styles.kullanimDegerMor}`}>00:00</span>
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
                  <Clock size={48} strokeWidth={1.8} />
                </div>
                <span className={styles.bosDurumBaslik}>Listelenecek saatlik izin kaydı bulunamadı</span>
                <span className={styles.bosDurumAciklama}>
                  Yeni bir talep oluşturmak için aşağıdaki ekleme butonuna basabilirsiniz.
                </span>
              </div>
            ) : (
              <div className={styles.talepListesi}>
                {talepListesi.map((item) => (
                  <div key={item.id} className={styles.talepKart}>
                    <div className={styles.talepKartUst}>
                      <span className={styles.talepTurMetin}>{item.tur} Talebi</span>
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
                    <span className={styles.talepTarihMetin}>
                      {item.tarih} | {item.saatAraligi} ({item.süre})
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* + YÜZEN EKLEME BUTONU */}
            <button className={styles.ekleFabButon} onClick={() => setFormAcik(true)}>
              <Plus size={28} strokeWidth={2.8} />
            </button>

          </div>
        </>
      ) : (
        
        /*SAATLİK İZİN TALEBİ OLUŞTURMA SAYFASI  */
        <>
          <div className={styles.ustBar}>
            <span className={styles.baslikYazi}>SAATLİK İZİN TALEBİ</span>
            <button className={styles.kapatButon} onClick={() => setFormAcik(false)}>
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.icerikAlani}>
            <form onSubmit={handleKaydet} className={styles.formKonteyner}>
              
              {/* Mor Bilgilendirme Kutusu */}
              <div className={styles.bilgiKutusu}>
                <Info className={styles.bilgiIkon} size={20} />
                <span className={styles.bilgiMetin}>
                  Lütfen formu dikkatlice doldurun ve izin talebinizi kaydedin. İzin talebinizin onay durumunu talep listesinden takip edebilirsiniz.
                </span>
              </div>

              {/* TARİH SEÇİMİ */}
              <div>
                <span className={styles.alantEtiket}>TARİH</span>
                <div className={styles.tarihKart} onClick={() => setTakvimModalAcik(true)}>
                  <div className={styles.tarihSol}>
                    <div className={styles.tarihIkonKutu}>
                      <CalendarIcon size={20} strokeWidth={2.2} />
                    </div>
                    <span className={styles.tarihDegerYazi}>{formatTarih(tarih)}</span>
                  </div>
                  <ChevronRight size={20} color="#64748b" />
                </div>
              </div>

              {/* SAAT ARALIĞI */}
              <div>
                <span className={styles.alantEtiket}>SAAT ARALIĞI</span>
                <div className={styles.saatAraligiKutu}>
                  <div className={styles.saatSeciciSatir}>
                    
                    {/* Başlangıç Saat Kutusu */}
                    <div 
                      className={`${styles.saatInputKutu} ${styles.baslangicSaat}`}
                      onClick={() => handleSaatAc('baslangic')}
                    >
                      <span className={styles.saatEtiket}>BAŞLANGIÇ</span>
                      <span className={styles.saatDegerMetin}>{baslangicSaati}</span>
                    </div>

                    <ArrowRight className={styles.okSimge} size={18} strokeWidth={2.5} />

                    {/* Bitiş Saat Kutusu */}
                    <div 
                      className={`${styles.saatInputKutu} ${styles.bitisSaat}`}
                      onClick={() => handleSaatAc('bitis')}
                    >
                      <span className={styles.saatEtiket}>BİTİŞ</span>
                      <span className={styles.saatDegerMetin}>{bitisSaati}</span>
                    </div>

                  </div>

                  <div className={styles.saatAltBilgi}>
                    <span className={styles.sureKapsul}>{hesaplaSaatFarki()} Saat</span>
                  </div>
                </div>
              </div>

              {/* TALEP TÜRÜ (İZİN / GÖREV KARTLARI)  */}
              <div>
                <span className={styles.alantEtiket}>TALEP TÜRÜ</span>
                <div className={styles.talepTuruGrid}>
                  
                  {/* İzin Kartı */}
                  <div 
                    className={`${styles.talepTurKart} ${talepTuru === 'İzin' ? styles.talepTurAktif : styles.talepTurPasif}`}
                    onClick={() => setTalepTuru('İzin')}
                  >
                    <CalendarDays className={styles.talepTurIkon} size={28} strokeWidth={2} />
                    <span className={styles.talepTurYazi}>İzin</span>
                  </div>

                  {/* Görev Kartı */}
                  <div 
                    className={`${styles.talepTurKart} ${talepTuru === 'Görev' ? styles.talepTurAktif : styles.talepTurPasif}`}
                    onClick={() => setTalepTuru('Görev')}
                  >
                    <ClipboardCheck className={styles.talepTurIkon} size={28} strokeWidth={2} />
                    <span className={styles.talepTurYazi}>Görev</span>
                  </div>

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

              {/* KAYDET BUTONU */}
              <button type="submit" className={styles.kaydetButon}>
                <Save size={18} />
                <span>Kaydet</span>
              </button>

            </form>
          </div>
        </>
      )}

      {/* ÖZEL TAKVİM POPUP */}
      {takvimModalAcik && (
        <div className={styles.modalOverlay} onClick={() => setTakvimModalAcik(false)}>
          <div className={styles.modalTakvimKutu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.takvimUstBar}>
              <span className={styles.takvimBaslikYazi}>
                {ayAdlari[takvimAy]} {takvimYil}
              </span>
              <div className={styles.takvimOkGrup}>
                <button 
                  type="button" 
                  className={styles.takvimOkButon}
                  onClick={() => setTakvimAy(takvimAy === 0 ? 11 : takvimAy - 1)}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  type="button" 
                  className={styles.takvimOkButon}
                  onClick={() => setTakvimAy(takvimAy === 11 ? 0 : takvimAy + 1)}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className={styles.takvimGunBasliklari}>
              <span>Pt</span><span>Sa</span><span>Ça</span><span>Pe</span><span>Cu</span><span>Ct</span><span>Pz</span>
            </div>

            <div className={styles.takvimGunGrid}>
              {Array.from({ length: boslukSayisi }).map((_, i) => (
                <div key={`bos-${i}`} />
              ))}
              {Array.from({ length: ayinGunSayisi }).map((_, i) => {
                const gunNum = i + 1;
                const mStr = String(takvimAy + 1).padStart(2, '0');
                const dStr = String(gunNum).padStart(2, '0');
                const buGunStr = `${takvimYil}-${mStr}-${dStr}`;
                const seciliMi = tarih === buGunStr;

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

      {/*  SAAT SEÇİCİ MODAL */}
      {saatModalAcik && (
        <div className={styles.modalOverlay} onClick={() => setSaatModalAcik(false)}>
          <div className={styles.saatModalKutu} onClick={(e) => e.stopPropagation()}>
            <span className={styles.saatModalBaslik}>
              {saatHedef === 'baslangic' ? 'Başlangıç Saati Seçin' : 'Bitiş Saati Seçin'}
            </span>
            <div className={styles.saatInputListesi}>
              <select 
                className={styles.saatSelect}
                value={saatHedef === 'baslangic' ? baslangicSaati.split(':')[0] : bitisSaati.split(':')[0]}
                onChange={(e) => {
                  const yeniSaat = `${e.target.value}:${saatHedef === 'baslangic' ? baslangicSaati.split(':')[1] : bitisSaati.split(':')[1]}`;
                  if (saatHedef === 'baslangic') setBaslangicSaati(yeniSaat);
                  else setBitisSaati(yeniSaat);
                }}
              >
                {Array.from({ length: 24 }).map((_, i) => {
                  const val = String(i).padStart(2, '0');
                  return <option key={val} value={val}>{val}</option>;
                })}
              </select>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>:</span>
              <select 
                className={styles.saatSelect}
                value={saatHedef === 'baslangic' ? baslangicSaati.split(':')[1] : bitisSaati.split(':')[1]}
                onChange={(e) => {
                  const yeniDk = `${saatHedef === 'baslangic' ? baslangicSaati.split(':')[0] : bitisSaati.split(':')[0]}:${e.target.value}`;
                  if (saatHedef === 'baslangic') setBaslangicSaati(yeniDk);
                  else setBitisSaati(yeniDk);
                }}
              >
                {['00', '15', '30', '45'].map((dk) => (
                  <option key={dk} value={dk}>{dk}</option>
                ))}
              </select>
            </div>
            <button 
              type="button" 
              className={styles.kaydetButon}
              onClick={() => setSaatModalAcik(false)}
            >
              Tamam
            </button>
          </div>
        </div>
      )}

    </div>
  );
}