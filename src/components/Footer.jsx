// src/components/Footer.jsx (MODIFIED: Client Component for Redirection)
'use client'; // CRUCIAL: Must be a client component for event handlers and useRouter

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import { FaSpotify, FaInstagram, FaApple, FaPodcast } from 'react-icons/fa';
import styles from './Footer.module.css';

// Update these social links with your actual URLs
const SOCIAL_LINKS = [
    { name: 'Spotify', icon: FaSpotify, href: 'YOUR_SPOTIFY_URL' },
    { name: 'Instagram', icon: FaInstagram, href: 'YOUR_INSTAGRAM_URL' },
    { name: 'Apple Podcasts', icon: FaApple, href: 'YOUR_APPLE_PODCAST_URL' },
    { name: 'Gaana/Podcast', icon: FaPodcast, href: 'YOUR_GAANA_URL' },
];

const Footer = () => {
    const router = useRouter();

    // New handler to redirect to the contact page
    const handleSendClick = (e) => {
        e.preventDefault(); // Stop the default button submission behavior
        
        // You could add logic here to check if fields are filled before redirecting
        
        // Redirect to the new Contact Us page
        router.push('/contact');
    };

    return (
        // Ensure the footer has the ID for the Contact US anchor link
        <footer id="contact" className={styles.footer}>
            <div className={styles.contentWrapper}>
                <div className={styles.mainLayout}>

                    {/* LEFT SIDE: Social Links (No change) */}
                    <div className={styles.listenSection}>
                        <h3>Listen & Connect</h3>
                        <div className={styles.socialLinks}>
                            {SOCIAL_LINKS.map((link) => (
                                <Link key={link.name} href={link.href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <link.icon size={24} />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} 10 OUT OF 10. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;