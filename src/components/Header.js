import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>XimiChat</h2>
            <span>AI Solutions</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Trang chủ</a>
            <a href="#solutions" onClick={() => scrollToSection('solutions')}>Giải pháp</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>Bảng giá</a>
            <a href="#about" onClick={() => scrollToSection('about')}>Về chúng tôi</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Liên hệ</a>
          </nav>

          <div className="header-actions">
            <a href="tel:0888889805" className="btn btn-primary">
              Tư vấn miễn phí
            </a>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;