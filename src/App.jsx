import React, { useState } from 'react';
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

export default function App() {
  const [girisYapildi, setGirisYapildi] = useState(true);
  const [profilAcik, setProfilAcik] = useState(false);
  const [profilBilgileriAcik, setProfilBilgileriAcik] = useState(false);
  const [ayarlarAcik, setAyarlarAcik] = useState(false);
  const [bildirimlerAcik, setBildirimlerAcik] = useState(false);
  const [sifreDegistirAcik, setSifreDegistirAcik] = useState(false);

 // Şifre güncellendiğinde veya Oturumu Kapat'a basıldığında giriş ekranına yönlendirir
  const handleSifreGuncellendi = () => {
    setSifreDegistirAcik(false);
    setGirisYapildi(false);
  };
  // Oturumu kapat butonuna basılınca çalışan fonksiyon
  const handleOturumuKapat = () => {
    setProfilAcik(false);
    setGirisYapildi(false);
  };

  // Eğer giriş yapılmamışsa Giriş Ekranı gösterilir
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

      <div style={styles.icerikAlani}>
        <ÜstBar onBildirimTikla={() => setBildirimlerAcik(true)} />
        <HoşGeldinizKartı />
        <İzinDurumuÖzeti />
        <AvansBilgileri />
      </div>
      
      <AltBar 
        profilAcik={profilAcik} 
        onProfilTikla={() => setProfilAcik(!profilAcik)} 
      />
    </div>
  );
}

const styles = {
  anaEkranKonteyner: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#F8F7FC', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
  },
  icerikAlani: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    overflowY: 'auto',
    paddingBottom: '16px ', 
    flex: 1,
  }
};