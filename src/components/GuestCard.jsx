// src/components/GuestCard.jsx (UPDATED: CSS Modules)
import Image from 'next/image';
import styles from './GuestCard.module.css'; // Import styles

const GuestCard = ({ guest }) => {
  const { name, bio, img } = guest;

  return (
    <div className={styles.card}>
      {/* Guest Image Container */}
      <div className={styles.imageContainer}>
        <Image 
          src={img} 
          alt={name} 
          fill 
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Guest Details */}
      <div className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

export default GuestCard;