import React from 'react';
import ÜstBar from './components/ÜstBar.jsx';

export default function App() {
  return (
    <div style={styles.anaEkranKonteyner}>
      <ÜstBar />
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
    overflowX: 'hidden',
    overflowY: 'auto',
  },
};