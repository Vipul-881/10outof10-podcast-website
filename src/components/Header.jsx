// src/components/Header.jsx 
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // CRUCIAL: Ensure this import is correct

const NAV_LINKS = [
  { name: 'HOME', href: '/' },
  { name: 'OUR WORK', href: '/work' },
  { name: 'BLOG', href: '/blog' },
  // FIX: Anchor link is now relative to the current page
  { name: 'CONTACT US', href: '#contact' }, 
  { name: 'OUR TEAM', href: '/team' },
];

const Header = () => {
  return (
    // Applies .header styles
    <header className={styles.header}> 
      {/* Applies .container styles */}
      <div className={styles.container}>
        
        {/* Logo and Podcast Name (10outof10) */}
        {/* Applies .logoContainer styles which contains margin-right: auto */}
        <Link href="/" className={styles.logoContainer}> 
          {/* Using a placeholder for your logo */}
          <div style={{ position: 'relative', width: '2rem', height: '2rem' }}> 
             {/* Replace with your actual logo image file */}
             <Image src="/assets/logo.svg" alt="10 OUT 10 Logo" fill /> 
          </div>
          <span className={styles.logoText}>10 OUT OF 10</span>
        </Link>

        {/* Navigation Links */}
        {/* Applies .nav styles */}
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
      </div>
    </header>
  );
};

export default Header;