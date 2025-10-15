// src/app/blog/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BLOGS } from '../../../components/data';
import { FaArrowLeft } from 'react-icons/fa';

export default function BlogPost({ params }) {
  // Find the blog post using the slug from the URL
  const blog = BLOGS.find(b => b.slug === params.slug);

  if (!blog) {
    // Next.js way to handle a page not found
    notFound(); 
  }

  const styles = {
    container: { maxWidth: '960px', margin: '0 auto', padding: '3rem 1rem' },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '2rem' },
    backButton: { 
        position: 'absolute', left: '0', backgroundColor: '#8558DB', 
        padding: '0.75rem', borderRadius: '50%', color: 'white', 
        transition: 'opacity 150ms' 
    },
    title: { 
        fontSize: '2.25rem', fontWeight: '800', color: '#4B0082', 
        textAlign: 'center', borderBottom: '4px solid #8558DB', display: 'inline-block'
    },
    imageContainer: { 
        position: 'relative', width: '100%', height: '20rem', margin: '2rem auto', 
        borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
    },
    contentBox: { 
        backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', 
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', display: 'flex', 
        flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', 
        lineHeight: '1.625', color: '#4a5568'
    }
  };


  return (
    <div style={styles.container}>
      
      {/* Header and Back Button */}
      <div style={styles.header}>
        <Link 
          href="/blog" 
          style={styles.backButton}
          aria-label="Go back to blog index"
        >
          <FaArrowLeft style={{ fontSize: '1.25rem' }} />
        </Link>
        <h1 style={styles.title}>
          {blog.title}
        </h1>
      </div>

      {/* Blog Image (If available) */}
      {blog.image && (
        <div style={styles.imageContainer}>
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            style={{ objectFit: 'cover', borderRadius: '0.75rem' }} 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Blog Content */}
      <div style={styles.contentBox}>
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}