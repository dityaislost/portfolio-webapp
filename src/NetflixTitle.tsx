import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-3.png'; // Update with the path to your logo

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.warn("Autoplay blocked by browser. Interaction required for sound."));
  };

  useEffect(() => {
    // Start animation and attempt sound play immediately on mount
    setIsClicked(true);
    handlePlaySound();

    const timer = setTimeout(() => {
      navigate('/browse');
    }, 3500); // 3.5 seconds to allow for the logo animation to finish

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default NetflixTitle;
