// src/app/team/page.js (MODIFIED)
import TeamMemberCard from '../../components/TeamMemberCard';
import { TEAM_MEMBERS } from '../../components/data';
import styles from './TeamPage.module.css'; // Will create this CSS Module

export const metadata = {
  title: 'Ten Out Of Ten Podcast',
  description: 'Meet the dedicated team behind the 10 OUT OF 10 podcast.',
};

// --- NEW CSS MODULE FOR TEAM PAGE LAYOUT ---
// Create src/app/team/TeamPage.module.css with the content below
// (Can't put media queries in inline styles directly in JS)

export default function OurTeamPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Meet the Team</h1>

      <div className={styles.teamGrid}>
        {TEAM_MEMBERS.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
