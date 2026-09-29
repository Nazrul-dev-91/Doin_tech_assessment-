import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'signin' || hash === 'signup') return hash;
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'signin' || hash === 'signup') {
        setCurrentPage(hash);
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {currentPage === 'signin' && <SignIn onNavigate={navigateTo} />}
      {currentPage === 'signup' && <SignUp onNavigate={navigateTo} />}
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
    </div>
  );
}

export default App;

