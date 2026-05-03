'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [services, setServices] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const defaultServices = [
    { id: 1, title: 'Instalaciones Eléctricas', description: 'Instalaciones seguras y profesionales', icon: '🔌' },
    { id: 2, title: 'Mantenimiento Eléctrico', description: 'Mantenimiento preventivo y correctivo', icon: '🔧' },
    { id: 3, title: 'Domótica', description: 'Automatización inteligente del hogar', icon: '🏠' },
    { id: 4, title: 'Paneles Solares', description: 'Energía solar sostenible', icon: '☀️' },
    { id: 5, title: 'Instalación de AC', description: 'Aire acondicionado profesional', icon: '❄️' },
    { id: 6, title: 'Mantenimiento de AC', description: 'Mantenimiento de sistemas de refrigeración', icon: '🌬️' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('services');
      setServices(saved ? JSON.parse(saved) : defaultServices);
    }
  }, []);

  const handleLogin = (password) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setShowLoginModal(false);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleSaveServices = (updatedServices) => {
    setServices(updatedServices);
    if (typeof window !== 'undefined') {
      localStorage.setItem('services', JSON.stringify(updatedServices));
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} setShowLoginModal={setShowLoginModal} />
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
      <Hero />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>
        <ServiceGrid services={services} />
      </section>
      {isAdmin && <AdminPanel services={services} onSaveServices={handleSaveServices} onLogout={() => setIsAdmin(false)} />}
    </div>
  );
}

// ... (componentes restantes en el archivo completo abajo)
