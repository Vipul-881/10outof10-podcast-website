// src/app/layout.js (COMPLETE CODE)

// Import the global CSS file
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Metadata for the page (SEO and browser tabs)
export const metadata = {
  title: '10 OUT OF 10 Podcast',
  description: 'Your movie podcast channel from Spotify.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Font is applied via the global CSS file */}
      <body>
        {/* The full-page-container class from globals.css ensures Header, Main, and Footer fill the screen */}
        <div className="full-page-container">
          <Header />
          {/* Main content area, flex-grow: 1 ensures it takes up all vertical space */}
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          {/* The modified Footer is rendered here */}
          <Footer />
        </div>
      </body>
    </html>
  );
}