import React, { useState, useEffect } from 'react';
import ÜstBar from './components/ÜstBar.jsx';
import HoşGeldinizKartı from './components/HoşGeldinizKartı.jsx';
import İzinDurumuÖzeti from './components/İzinDurumuÖzeti.jsx';
import AvansBilgileri from './components/AvansBilgileri.jsx';
import AltBar from './components/AltBar.jsx';
import ProfilMenusu from './components/ProfilMenusu/ProfilMenusu.jsx';
import ProfilBilgileri from './components/ProfilMenusu/ProfilBilgileri.jsx';
import Ayarlar from './components/ProfilMenusu/Ayarlar.jsx';
import Bildirimler from './components/ProfilMenusu/Bildirimler.jsx';
import SifreDegistir from './components/ProfilMenusu/SifreDegistir.jsx';
import GirisEkrani from './components/GirisEkrani/GirisEkrani.jsx';
import YukleniyorEkrani from './components/YukleniyorEkrani/YukleniyorEkrani.jsx';
import KareKodOluştur from './components/KareKodOluştur/KareKodOluştur.jsx';
import KareKodOkut from './components/KareKodOkut/KareKodOkut.jsx';
import KonumIci from './components/KonumIci/KonumIci.jsx';
import YanMenu from './components/YanMenu/YanMenu.jsx';
import VardiyaPlanim from './components/VardiyaPlanim/VardiyaPlanim.jsx';
import GirisCikisBilgilerim from './components/GirisCikisBilgilerim/GirisCikisBilgilerim.jsx';
import MaasBilgilerim from './components/MaasBilgilerim/MaasBilgilerim.jsx';
import IzinTaleplerim from './components/IzinTaleplerim/IzinTaleplerim.jsx';
import SaatlikIzinTaleplerim from './components/SaatlikIzinTaleplerim/SaatlikIzinTaleplerim.jsx';
import AvansTaleplerim from './components/AvansTaleplerim/AvansTaleplerim.jsx';
import Zimmetlerim from './components/Zimmetlerim/Zimmetlerim.jsx';
import EtkinlikListesi from './components/EtkinlikListesi/EtkinlikListesi.jsx';
import GorevListem from './components/GorevListem/GorevListem.jsx';

export default function App() {
  const [yukleniyor, setYukleniyor] = useState(true);
  const [girisYapildi, setGirisYapildi] = useState(true);
  const [profilAcik, setProfilAcik] = useState(false);
  const [profilBilgileriAcik, setProfilBilgileriAcik] = useState(false);
  const [ayarlarAcik, setAyarlarAcik] = useState(false);
  const [bildirimlerAcik, setBildirimlerAcik] = useState(false);
  const [sifreDegistirAcik, setSifreDegistirAcik] = useState(false);
  const [kareKodAcik, setKareKodAcik] = useState(false);
  const [kareKodOkutAcik, setKareKodOkutAcik] = useState(false);
  const [konumIciAcik, setKonumIciAcik] = useState(false);
  const [yanMenuAcik, setYanMenuAcik] = useState(false);
  const [vardiyaPlanimAcik, setVardiyaPlanimAcik] = useState(false);
  const [girisCikisAcik, setGirisCikisAcik] = useState(false);
  const [maasBilgilerimAcik, setMaasBilgilerimAcik] = useState(false);
  const [izinTaleplerimAcik, setIzinTaleplerimAcik] = useState(false);
  const [saatlikIzinAcik, setSaatlikIzinAcik] = useState(false);
  const [avansTaleplerimAcik, setAvansTaleplerimAcik] = useState(false);
  const [zimmetlerimAcik, setZimmetlerimAcik] = useState(false);
  const [etkinlikListesiAcik, setEtkinlikListesiAcik] = useState(false);
  const [gorevListesiAcik, setGorevListesiAcik] = useState(false);

  useEffect(() => {
    const zamanlayici = setTimeout(() => {
      setYukleniyor(false);
    }, 2500);

    return () => clearTimeout(zamanlayici);
  }, []);

  const handleSifreGuncellendi = () => {
    setSifreDegistirAcik(false);
    setGirisYapildi(false);
  };

  const handleOturumuKapat = () => {
    setProfilAcik(false);
    setGirisYapildi(false);
  };

  if (yukleniyor) {
    return <YukleniyorEkrani />;
  }

  if (!girisYapildi) {
    return <GirisEkrani onGirisBasarili={() => setGirisYapildi(true)} />;
  }

  return (
    <div style={styles.anaEkranKonteyner}>
      <ProfilMenusu 
        acikMi={profilAcik} 
        kapat={() => setProfilAcik(false)} 
        onProfilBilgileriAc={() => {
          setProfilAcik(false);
          setProfilBilgileriAcik(true);
        }}
        onAyarlarAc={() => {
          setProfilAcik(false);
          setAyarlarAcik(true);
        }}
        onBildirimlerAc={() => {
          setProfilAcik(false);
          setBildirimlerAcik(true);
        }}
        onSifreDegistirAc={() => {
          setProfilAcik(false);
          setSifreDegistirAcik(true);
        }}
        onOturumuKapat={handleOturumuKapat}
      />
      
      <ProfilBilgileri 
        acikMi={profilBilgileriAcik} 
        kapat={() => setProfilBilgileriAcik(false)} 
      />
      
      <Ayarlar 
        acikMi={ayarlarAcik} 
        kapat={() => setAyarlarAcik(false)} 
      />
      
      <Bildirimler 
        acikMi={bildirimlerAcik} 
        kapat={() => setBildirimlerAcik(false)} 
      />
      
      <SifreDegistir 
        acikMi={sifreDegistirAcik} 
        kapat={() => setSifreDegistirAcik(false)} 
        onSifreGuncellendi={handleSifreGuncellendi}
      />
      
      <KareKodOluştur 
        acikMi={kareKodAcik} 
        kapat={() => setKareKodAcik(false)} 
      />
      
      <KareKodOkut 
        acikMi={kareKodOkutAcik} 
        kapat={() => setKareKodOkutAcik(false)} 
      />
      
      <KonumIci 
        acikMi={konumIciAcik} 
        kapat={() => setKonumIciAcik(false)} 
      />
      
      <YanMenu 
        acikMi={yanMenuAcik} 
        kapat={() => setYanMenuAcik(false)}
        onOturumuKapat={handleOturumuKapat} 
        onVardiyaPlanimAc={() => setVardiyaPlanimAcik(true)}
        onGirisCikisAc={() => setGirisCikisAcik(true)}
        onMaasBilgilerimAc={() => setMaasBilgilerimAcik(true)}
        onIzinTaleplerimAc={() => setIzinTaleplerimAcik(true)}
        onSaatlikIzinAc={() => setSaatlikIzinAcik(true)}
        onAvansTaleplerimAc={() => setAvansTaleplerimAcik(true)}
        onZimmetlerimAc={() => setZimmetlerimAcik(true)}
        onEtkinlikListesiAc={() => setEtkinlikListesiAcik(true)}
        onGorevListesiAc={() => setGorevListesiAcik(true)}
      />

      <VardiyaPlanim 
        acikMi={vardiyaPlanimAcik} 
        kapat={() => setVardiyaPlanimAcik(false)} 
      />

      <GirisCikisBilgilerim 
        acikMi={girisCikisAcik} 
        kapat={() => setGirisCikisAcik(false)} 
      />

      <MaasBilgilerim 
        acikMi={maasBilgilerimAcik} 
        kapat={() => setMaasBilgilerimAcik(false)} 
      />

      <IzinTaleplerim 
        acikMi={izinTaleplerimAcik} 
        kapat={() => setIzinTaleplerimAcik(false)} 
      />

      <SaatlikIzinTaleplerim 
        acikMi={saatlikIzinAcik} 
        kapat={() => setSaatlikIzinAcik(false)} 
      />

      <AvansTaleplerim 
        acikMi={avansTaleplerimAcik} 
        kapat={() => setAvansTaleplerimAcik(false)} 
      />

      <Zimmetlerim 
        acikMi={zimmetlerimAcik} 
        kapat={() => setZimmetlerimAcik(false)} 
      />

      <EtkinlikListesi 
        acikMi={etkinlikListesiAcik} 
        kapat={() => setEtkinlikListesiAcik(false)} 
      />

      <GorevListem 
        acikMi={gorevListesiAcik} 
        kapat={() => setGorevListesiAcik(false)} 
      />

      <div style={styles.icerikAlani} className="gizliScroll">
        <ÜstBar 
          onMenuTikla={() => setYanMenuAcik(true)} 
          onBildirimTikla={() => setBildirimlerAcik(true)} 
        />
        <HoşGeldinizKartı />
        <İzinDurumuÖzeti />
        <AvansBilgileri />
      </div>
      
      <AltBar 
        profilAcik={profilAcik} 
        onProfilTikla={() => setProfilAcik(!profilAcik)}
        onQrTikla={() => setKareKodAcik(true)}
        onQrTaraTikla={() => setKareKodOkutAcik(true)}
        onKonumIciTikla={() => setKonumIciAcik(true)}
      />
    </div>
  );
}

const styles = {
  anaEkranKonteyner: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F8F7FC', 
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
  },
  icerikAlani: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px', 
    overflowY: 'auto',
    padding: '0 20px 100px 20px', 
    flex: 1,
    boxSizing: 'border-box',
  }
};