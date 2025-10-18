// src/app/contact/page.js (NEW PAGE CONTENT)
import styles from './ContactPage.module.css';

export default function ContactPage() {
    const emailAddress = 'tenoutoftenfilms@gmail.com';
    const subject = 'Partnership Inquiry from 10 OUT OF 10 Website';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Work With Us</h1>
                <p className={styles.message}>
                    Whether it’s film submissions, collaborations, or partnerships — we’d love to hear from you at
                </p>
                
                {/* Email link: Uses the mailto protocol to open the user's email client */}
                <a href={mailtoLink} className={styles.emailLink}>
                    {emailAddress}
                </a>
                
                <p className={styles.closing}>
                    We look forward to hearing from you!
                </p>
            </div>
        </div>
    );
}