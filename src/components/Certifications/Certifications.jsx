import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certs = [
    {
      title: 'B.Tech, Computer Science & Eng.',
      issuer: 'Lovely Professional University',
      date: '2016 - 2020',
      link: '#'
    },
    {
      title: 'Star Team Award',
      issuer: 'Happiest Minds Technologies',
      date: 'CareerEdge Project',
      link: '#'
    },
    {
      title: 'Formal Commendation',
      issuer: 'Technical Lead',
      date: 'Happiest Health Project',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className={styles.certSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education & Achievements
      </motion.h2>

      <div className={styles.grid}>
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx}
            className={`${styles.card} glass`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className={styles.iconWrapper}>
              <Award size={24} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{cert.title}</h3>
              <div className={styles.meta}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.date}>{cert.date}</span>
              </div>
            </div>
            <a href={cert.link} className={styles.linkIcon} aria-label="View Certificate">
              <ExternalLink size={20} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
