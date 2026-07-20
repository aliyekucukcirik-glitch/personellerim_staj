import React from 'react';
import ÜstBar from './components/ÜstBar.jsx';
import HoşGeldinizKartı from './components/HoşGeldinizKartı.jsx';
import İzinDurumuÖzeti from './components/İzinDurumuÖzeti.jsx';
import AvansBilgileri from './components/AvansBilgileri.jsx';

export default function App() {
  return (
    <div style={styles.anaEkranKonteyner}>
      <ÜstBar />
      <HoşGeldinizKartı />
      <İzinDurumuÖzeti />
      <AvansBilgileri />
    </div>
  );
}

const styles = {
  anaEkranKonteyner: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(248, 247, 252)', 
    display: 'flex',
    flexDirection: 'column',
    gap: '24px', 
    overflowX: 'hidden',
    overflowY: 'auto',
  },
};