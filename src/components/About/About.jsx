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
          <p className={styles.bio}>
            I am a Senior Frontend Engineer with a proven track record of building 
            <span className="text-gradient"> scalable, high-performance</span> web applications. 
            With 4+ years of experience across healthcare, CMMS, and e-commerce, I specialize in 
            reducing API calls, boosting user engagement, and developing modular component architectures. 
            My expertise includes React.js, Next.js, and integrating Agentic AI tools into everyday workflows.
          </p>
          
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
