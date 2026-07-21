import React from 'react';
import { Menu, Bell } from 'lucide-react';
import styles from './ÜstBar.module.css';

export default function ÜstBar({ onBildirimTikla }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}>
      {/* Sol Menü Butonu */}
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
        <Menu size={24} color="#1E1B4B" />
      </button>

      {/* Başlık */}
      <span style={{ fontWeight: 800, fontSize: '18px', color: '#1E1B4B', letterSpacing: '0.5px' }}>
        PERSONELLERİM
      </span>

      {/* Sağ İçi Dolu Çan İkonu */}
      <button 
        onClick={onBildirimTikla}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer', 
          position: 'relative',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Bell size={24} color="#1E1B4B" fill="#1E1B4B" />
        {/* Kırmızı Rozet Noktası */}
        <span 
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '8px',
            height: '8px',
            backgroundColor: '#EF4444',
            borderRadius: '50%',
            border: '1.5px solid #F8F7FC'
          }} 
        />
      </button>
    </div>
  );
}