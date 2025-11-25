// src/components/WorkCard.jsx (MODIFIED: Conditional Learn More Button)
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import styles from './WorkCard.module.css'; 

const WorkCard = ({ work }) => {
  // Destructure all required props, including the optional 'link'
  const { title, type, year, role, description, link, image } = work;
  
  return (
    <div className={styles.card}>
      
      {/* Top section: Contains main info and optional image */}
      <div className={styles.headerContent}>
        <div className={styles.textHeader}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subInfo}>
              {type} • {year}
          </p>
          <p className={styles.role}>{role}</p>
        </div>

        {/* Conditional Image Container */}
        {image && (
          <div className={styles.imageContainer}>
            <Image 
              src={image}
              alt={`${title} Artwork`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.workImage}
            />
          </div>
        )}
      </div>

      {/* Description below the header section */}
      <p className={styles.description}>{description}</p>

      {/* CRUCIAL MODIFICATION: Conditionally render the button ONLY if 'link' exists */}
      {link && (
          <Link 
            href={link} 
            className={styles.learnMoreButton}
          >
            Watch Now ▶
            //<FaArrowRight size={12} />
          </Link>
      )}
    </div>
  );
};

export default WorkCard;
