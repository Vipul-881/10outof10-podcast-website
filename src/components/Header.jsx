// src/components/Header.jsx (MODIFIED: Contact link changed to /contact)
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import styles from './Header.module.css'; 

const NAV_LINKS = [
  { name: 'HOME', href: '/' },
  { name: 'OUR WORK', href: '/work' },
  { name: 'BLOG', href: '/blog' },
  // MODIFIED: Changed href from '#contact' to the new page route '/contact'
  { name: 'CONTACT US', href: '/contact' }, 
  { name: 'OUR TEAM', href: '/team' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Effect to manage body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);


  return (
    <header className={styles.header}> 
      <div className={styles.container}>
        
        {/* Logo and Podcast Name (10outof10) */}
        <Link href="/" className={styles.logoContainer} onClick={() => setIsMenuOpen(false)}> 
          <div style={{ position: 'relative', width: '2rem', height: '2rem' }}> 
             <Image src="/assets/logo.svg" alt="10 OUT 10 Logo" fill /> 
          </div>
          <span className={styles.logoText}>10 OUT OF 10</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={styles.navLink}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Icon (Hamburger) */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Slide-out Menu */}
      <nav className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={styles.mobileNavLink}
                onClick={toggleMenu} // Closes menu when a link is clicked
              >
                {link.name}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;