// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure the placeholder font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '10 OUT OF 10 Podcast',
  description: 'Your movie podcast channel from Spotify.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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