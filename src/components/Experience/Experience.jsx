import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: '24/7 Software, Pune',
      period: 'Jan 2025 - Apr 2026',
      achievements: [
        'Cut redundant API calls by 45% by optimising client-side data fetching using React Query and React Router.',
        'Reduced page load times by implementing virtualisation for large-scale datasets in a high-traffic CMMS platform.',
        'Standardised 12+ reusable UI components documented with Storybook, accelerating team onboarding.'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'Happiest Minds Technologies, Bengaluru',
      period: 'Apr 2023 - Jan 2025',
      achievements: [
        'Drove 60% increase in engagement by designing a responsive e-magazine platform using Next.js, TypeScript, and ReactJS.',
        'Reduced login-related issues by 40% by implementing a secure authentication system using OAuth and JWT.',
        'Boosted user engagement by developing interactive UI components including carousels and mega menus.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Tech Mahindra, Bengaluru',
      period: 'Aug 2021 - Apr 2023',
      achievements: [
        'Contributed to the frontend development of a large-scale e-commerce platform for BT Consumer Electronics.',
        'Enhanced application performance by implementing lazy loading and optimising Redux state management.',
        'Drove measurable improvements in performance, stability, and code quality through proactive maintenance.'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.expSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className={styles.timelineIcon}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <h4 className={styles.company}>{exp.company}</h4>
              <ul className={styles.achievements}>
                {exp.achievements.map((item, aIdx) => (
                  <li key={aIdx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
