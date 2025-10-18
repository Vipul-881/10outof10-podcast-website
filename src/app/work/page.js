// src/app/work/page.js (MODIFIED TO USE CSS MODULES)
import WorkCard from '../../components/WorkCard';
import { COMPLETED_WORKS, UPCOMING_WORKS } from '../../components/data';
import styles from './WorkPage.module.css'; // Import the new CSS Module

export default function OurWorkPage() {
  return (
    <div className={styles.container}>
      
      {/* COMPLETED WORKS SECTION */}
      <section>
        <h1 className={styles.sectionTitle}>Our Work</h1>
        <div className={styles.workGrid}>
          {COMPLETED_WORKS.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* UPCOMING WORKS SECTION */}
      <section>
        <h2 className={styles.sectionTitle}>Upcoming Projects</h2>
        
        {UPCOMING_WORKS.length > 0 ? (
          // Renders upcoming works if the array is not empty
          <div className={styles.workGrid}>
            {UPCOMING_WORKS.map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        ) : (
          // Renders the fun text if the array is empty
          <div className={styles.placeholderText}>
            Creativity is brewing! Check back soon for exciting new projects. 🎬🍿
          </div>
        )}
      </section>

    </div>
  );
}