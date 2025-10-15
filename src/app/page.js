// src/app/page.js (UPDATED: Standard CSS/Inline Styles)
import HeroSection from '../components/HeroSection';
import EpisodeCard from '../components/EpisodeCard';
import GuestCard from '../components/GuestCard';
import { EPISODES, GUESTS, ABOUT_TEXT } from '../components/data';

// Styles for the page layout (mimicking Tailwind layout utilities)
const styles = {
    container: {
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '3rem 1rem', 
    },
    section: {
        marginBottom: '4rem', 
    },
    title: {
        fontSize: '1.875rem', 
        fontWeight: '700',
        textAlign: 'center',
        color: '#4B0082',
        marginBottom: '2rem',
    },
    aboutSection: {
        padding: '2.5rem 1rem', 
        backgroundColor: 'white',
        borderRadius: '0.75rem', 
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
        maxWidth: '56rem', 
        margin: '0 auto',
        marginBottom: '4rem',
    },
    // Flex/Grid styles for responsiveness (max 2 per row)
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '2rem',
    },
    '@media (min-width: 768px)': {
        gridContainer: {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
    }
};

// Merged styles for grid container for the element
const episodeGridStyle = {
    ...styles.gridContainer,
    // Add media query hook for 2 columns on desktop
    '@media (min-width: 768px)': {
        ...styles.gridContainer['@media (min-width: 768px)'],
    }
};


export default function Home() {
  const popularEpisodes = EPISODES.filter(ep => ep.isPopular);
  const latestEpisodes = EPISODES.filter(ep => ep.isLatest);

  return (
    <div style={{ minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* Main Content Sections */}
      <div style={styles.container}>
        
        {/* 2. POPULAR EPISODES */}
        <section style={styles.section}>
          <h2 style={styles.title}>POPULAR EPISODES</h2>
          {/* Note: In a real project, you would use a separate CSS file for the complex grid logic */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {popularEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* 3. ABOUT US */}
        <section style={styles.aboutSection}>
          <h2 style={{...styles.title, marginBottom: '1.5rem'}}>ABOUT US</h2>
          <div style={{ padding: '0 1rem'}}>
            <p style={{fontSize: '1.125rem', color: '#4a5568', lineHeight: '1.625', textAlign: 'center'}}>
              {ABOUT_TEXT}
            </p>
          </div>
        </section>

        {/* 4. LATEST EPISODES */}
        <section style={styles.section}>
          <h2 style={styles.title}>LATEST EPISODES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {latestEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* 5. PROMINENT GUESTS */}
        <section>
          <h2 style={styles.title}>Prominent Guests</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {GUESTS.map(guest => (
              <GuestCard key={guest.id} guest={guest} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}