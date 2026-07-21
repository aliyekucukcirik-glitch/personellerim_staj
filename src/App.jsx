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

export default function App() {
  const [profilAcik, setProfilAcik] = useState(false);
  const [profilBilgileriAcik, setProfilBilgileriAcik] = useState(false);
  const [ayarlarAcik, setAyarlarAcik] = useState(false);
  const [bildirimlerAcik, setBildirimlerAcik] = useState(false);
  const [sifreDegistirAcik, setSifreDegistirAcik] = useState(false);

  const handleSifreGuncellendi = () => {
    setSifreDegistirAcik(false);
    alert('Şifreniz başarıyla değiştirildi! Giriş sayfasına yönlendiriliyorsunuz.');
    // Giriş ekranı bileşeni yapıldığında buraya yönlendirme state'i gelecek
  };

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