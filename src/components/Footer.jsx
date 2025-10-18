// src/components/Footer.jsx (UPDATED: CSS Modules, id="contact")
import Link from 'next/link';
import { FaSpotify, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from './Footer.module.css'; // Import styles

// Social Links Data
const SOCIAL_LINKS = [
  { icon: FaSpotify, name: 'Spotify', url: 'https://open.spotify.com/show/1K9g6ClNj9TIK1CuAs5aOc?si=jppXn7UFQkemWFuGvJu6Dg' },
  { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/tenoutoftenfilms?igsh=dGJtbjh3cTR0dHN4' },
  { icon: FaApple, name: 'Apple Podcast', url: 'https://podcasts.apple.com/us/podcast/ten-out-of-ten/id1564755200' },
  { icon: FaGooglePlay, name: 'Gaana', url: 'https://gaana.com/podcast/ten-out-of-ten-season-1' }, 
];

const Footer = () => {
  return (
    // ADDED id="contact"
    <footer id="contact" className={styles.footer}> 
      <div className={styles.contentWrapper}>
        <div className={styles.mainLayout}>
          
          {/* Left Side: Social & Podcast Links */}
          <div className={styles.listenSection}>
            <h3>Listen & Connect</h3>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <link.icon style={{ fontSize: '1.5rem' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Email Box */}
          <div className={styles.formContainer}>
            <h3>Send us an Email</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Your email address"
                className={styles.inputField}
              />
              <textarea 
                placeholder="Your message"
                rows="3"
                className={styles.inputField}
              ></textarea>
              <button 
                type="submit"
                className={styles.submitButton}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright or additional info */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} 10 OUT OF 10 Podcast. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;