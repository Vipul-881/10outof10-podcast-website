// src/app/contact/page.js (NEW PAGE CONTENT)
import styles from './ContactPage.module.css';

export default function ContactPage() {
    const emailAddress = 'temporarymail@gmail.com';
    const subject = 'Partnership Inquiry from 10 OUT OF 10 Website';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Partner With Us</h1>
                <p className={styles.message}>
                    If you want to partner up with us drop an email to:
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