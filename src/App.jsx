import React from 'react';
import ÜstBar from './components/ÜstBar.jsx';
import HoşGeldinizKartı from './components/HoşGeldinizKartı.jsx';
import İzinDurumuÖzeti from './components/İzinDurumuÖzeti.jsx';
import AvansBilgileri from './components/AvansBilgileri.jsx';
// Alt barı içeri aktarıyoruz
import AltBar from './components/AltBar.jsx';

export default function App() {
  return (
    <div style={styles.anaEkranKonteyner}>
      {/* Üst ve Orta İçerik Alanı */}
      <div style={styles.icerikAlani}>
        <ÜstBar />
        <HoşGeldinizKartı />
        <İzinDurumuÖzeti />
        <AvansBilgileri />
      </div>
      <AltBar />
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
  },
  icerikAlani: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    overflowY: 'auto',
    padding: '0 0 16px 0', 
    flex: 1,
  }
};