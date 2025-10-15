// src/app/blog/page.js (MODIFIED)
import BlogCard from '../../components/BlogCard'; 
import { BLOGS } from '../../components/data';

// Styles (converted from Tailwind/inline to standard objects)
const styles = {
    container: {
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '3rem 1rem', 
        minHeight: '70vh'
    },
    title: {
        fontSize: '2.25rem', // text-4xl
        fontWeight: '800',
        textAlign: 'center',
        color: '#4B0082',
        marginBottom: '3rem', // mb-12
    },
    grid: {
        // MODIFIED: Sets the grid to a single column (1fr) regardless of screen size.
        display: 'grid',
        gridTemplateColumns: '1fr', 
        gap: '2rem', // gap between rows
        // Optional: center the grid if the cards have a max-width, 
        // but for full-width cards, this is fine.
    }
};

export default function BlogIndexPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Latest Blogs</h1>
      
      <div style={styles.grid}>
        {BLOGS.map(blog => (
          // Use the client component here
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      
    </div>
  );
}