import React from 'react';
import ÜstBar from './components/ÜstBar.jsx';
import HoşGeldinizKartı from './components/HoşGeldinizKartı.jsx';

export default function App() {
  return (
    <div style={styles.anaEkranKonteyner}>
      <ÜstBar />
      <HoşGeldinizKartı />
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
    gap: '16px', /* dikey boşluk bıraktık kartlar arası*/ 
    overflowX: 'hidden',
    overflowY: 'auto',
  },
};