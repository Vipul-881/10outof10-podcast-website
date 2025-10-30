// src/app/layout.js (MODIFIED to include Vercel Analytics)

// Import the Vercel Analytics component
import { Analytics } from '@vercel/analytics/react';

// Import the global CSS file
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Metadata for the page (SEO and browser tabs)
export const metadata = {
  title: 'Ten Out Of Ten Podcast',
  description: 'Your movie podcast channel from Spotify.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Font is applied via the global CSS file */}
      <body>
        <div className="full-page-container">
          <Header />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
        
        {/* CRITICAL: Add the Vercel Analytics component here */}
        <Analytics />
      </body>
    </html>
  );
}
