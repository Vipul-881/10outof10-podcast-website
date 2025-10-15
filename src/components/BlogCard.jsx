'use client'; // <-- CRUCIAL: Marks this as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './BlogCard.module.css'; // You'll create this next

export default function BlogCard({ blog }) {
  const [isHovered, setIsHovered] = useState(false);
    
  // The event handlers are now safe inside this Client Component
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link 
        href={`/blog/${blog.slug}`} 
        className={styles.card}
        onMouseEnter={handleMouseEnter} // Event handler is safe here
        onMouseLeave={handleMouseLeave} // Event handler is safe here
    >
      {/* Blog Card Content */}
      <div className={styles.details}>
        <h3 className={styles.title} style={{ color: isHovered ? '#8558DB' : '#4B0082' }}>
          {blog.title}
        </h3>
        <p className={styles.date}>{blog.date}</p>
        <p className={styles.description}>{blog.description}</p>
      </div>

      <div className={styles.readMoreButton}>
        Read Blog
      </div>
    </Link>
  );
}