// src/components/EpisodeCard.jsx (MODIFIED)
import Link from 'next/link';
import Image from 'next/image'; // We need Image for optimized thumbnail loading
import { FaSpotify } from 'react-icons/fa';
import styles from './EpisodeCard.module.css'; 

const EpisodeCard = ({ episode }) => {
  const { season, title, description, url, thumbnail } = episode; // Destructure 'thumbnail'
  
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}> {/* New wrapper for flex layout */}
        
        {/* THUMBNAIL SECTION (NEW) */}
        <div className={styles.thumbnailContainer}>
          <Image 
            src={thumbnail}
            alt={`${title} Thumbnail`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="150px"
          />
        </div>
        
        <div className={styles.textDetails}> {/* New wrapper for episode details */}
          <div className={styles.header}>
            <div className={styles.icon}>
              S{season}
            </div>
            <h4 className={styles.title}>
              E{episode.episode}: {title}
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