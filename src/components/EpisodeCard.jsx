// src/components/EpisodeCard.jsx (MODIFIED)
import Link from 'next/link';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import styles from './EpisodeCard.module.css'; 

const EpisodeCard = ({ episode }) => {
  // Removed season and episode from destructuring, only need title, description, url, and thumbnail
  const { title, description, url, thumbnail } = episode; 
  
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        
        {/* THUMBNAIL SECTION (No change needed here) */}
        <div className={styles.thumbnailContainer}>
          <Image 
            src={thumbnail}
            alt={`${title} Thumbnail`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="150px"
          />
        </div>
        
        <div className={styles.textDetails}>
          <div className={styles.header}>
            {/* REMOVED: The 'icon' div that previously displayed S# E# */}
            
            {/* MODIFIED: The title now stands alone without the S# E# prefix */}
            <h4 className={styles.title}>
              {title}
            </h4>
          </div>
          
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      
      <Link 
        href={url} 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.spotifyButton}
      >
        <FaSpotify className={styles.spotifyButtonIcon} /> 
        PLAY ON SPOTIFY
      </Link>
    </div>
  );
};

export default EpisodeCard;