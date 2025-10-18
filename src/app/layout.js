import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: '10 OUT OF 10 Podcast',
  description: 'Your movie podcast channel from Spotify.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Ensure the body tag no longer has any dynamic font class name */}
      <body>
        <div className="full-page-container">
          <Header />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}