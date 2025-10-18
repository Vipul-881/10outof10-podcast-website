// src/components/TeamMemberCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import styles from './TeamMemberCard.module.css';

const TeamMemberCard = ({ member }) => {
  const { firstName, lastName, position, tenure, image, instagram } = member;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image}
          alt={`${firstName} ${lastName}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 50vw, 33vw" // Responsive sizes for performance
          className={styles.memberImage}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.position}>{position}</h4>
        <h3 className={styles.name}>{firstName}</h3>
        <h3 className={styles.name}>{lastName}</h3>
        <p className={styles.tenure}>{tenure}</p>
        
        {instagram && ( // Conditionally render Instagram button
          <Link 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.instagramButton}
            aria-label={`Visit ${firstName}'s Instagram profile`}
          >
            <FaInstagram size={20} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;