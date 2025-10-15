// src/components/HeroSection.jsx (UPDATED: CSS Modules)
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';
import styles from './HeroSection.module.css'; // Import styles

// Placeholder link
const SPOTIFY_LINK = "https://open.spotify.com/show/1K9g6ClNj9TIK1CuAs5aOc?si=jppXn7UFQkemWFuGvJu6Dg"; 

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* The diagonal background element */}
      <div className={styles.diagonalBackground}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          
          <h1 className={styles.tagline}>
            TEN OUT OF TEN
          </h1>
          
          <p className={styles.subTagline}>
            Breaking down cinema,one ten at a time.
          </p>
          
          <Link 
            href={SPOTIFY_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.spotifyButton}
          >
            <FaSpotify />
            LISTEN ON SPOTIFY
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;