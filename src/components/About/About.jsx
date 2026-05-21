import { motion } from 'framer-motion';
import { Code2, Laptop, Rocket, Cpu } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'API Calls Reduced', value: '45%' },
    { label: 'UI Reusability', value: '12+' },
  ];

  const focusAreas = [
    { icon: <Code2 size={24} />, title: 'Frontend Architecture', desc: 'Scalable and maintainable React/Next.js systems.' },
    { icon: <Rocket size={24} />, title: 'Performance Optimization', desc: 'Lighthouse 100, Core Web Vitals, bundle size reduction.' },
    { icon: <Laptop size={24} />, title: 'UI/UX Engineering', desc: 'Pixel-perfect implementations with complex animations.' },
    { icon: <Cpu size={24} />, title: 'AI Integration', desc: 'Building interfaces for LLMs and AI-powered tools.' },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className={styles.grid}>
        <motion.div 
          className={styles.bioContainer}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.bioWrapper} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <p className={styles.bio} style={{ marginBottom: 0 }}>
              I am a Frontend Developer with 4.8 years of experience building scalable, responsive, and user focused web applications using React.js, Next.js, JavaScript, TypeScript, Redux, HTML, and CSS.
            </p>
            <p className={styles.bio} style={{ marginBottom: 0 }}>
              I enjoy turning complex business requirements into clean, intuitive, and high performing user interfaces. My work experience includes building enterprise level applications in domains like facility management, CMMS, e-commerce, and healthcare, where I have worked on dynamic forms, data intensive grids, reusable components, performance optimization, API integrations, and modern frontend architecture.
            </p>
            <p className={styles.bio} style={{ marginBottom: 0 }}>
              I have hands on experience working with large React codebases, refactoring legacy code, improving UI performance, writing maintainable components, and collaborating closely with backend teams, product managers, designers, and QA teams to deliver production ready features.
            </p>
            <p className={styles.bio} style={{ marginBottom: 0 }}>
              What makes me different is that I do not just focus on writing code that works. I focus on writing code that is clean, scalable, easy to understand, and useful for real users. I care about good UI, smooth user experience, code quality, and continuous learning.
            </p>
            <p className={styles.bio} style={{ marginBottom: 0 }}>
              Currently, I am focused on growing as a strong frontend engineer by building better products, improving system design knowledge, and exploring how AI tools can make development faster and smarter.
            </p>
          </div>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.focusContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={styles.focusTitle}>Current Focus Areas</h3>
          <div className={styles.focusGrid}>
            {focusAreas.map((area, idx) => (
              <div key={idx} className={`${styles.focusCard} glass`}>
                <div className={styles.iconWrapper}>{area.icon}</div>
                <div>
                  <h4 className={styles.cardTitle}>{area.title}</h4>
                  <p className={styles.cardDesc}>{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
