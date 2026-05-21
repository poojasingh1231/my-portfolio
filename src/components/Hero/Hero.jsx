import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className={styles.heroSection}>
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className={styles.badge}>
          <span className={styles.pulseIndicator}></span>
          Available for new opportunities
        </motion.div>
        
        <motion.h1 variants={itemVariants} className={styles.title}>
          Hi, I'm Pooja Singh <br />
          <span className="text-gradient">Senior Frontend Engineer</span><br/>
        </motion.h1>
        
        <motion.p variants={itemVariants} className={styles.subtitle}>
          4+ years of experience building scalable React.js and Next.js applications across healthcare, CMMS, and e-commerce platforms. Obsessed with performance optimization, reusable UI libraries, and AI-driven tools.
        </motion.p>
        
        <motion.div variants={itemVariants} className={styles.ctaGroup}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            View Work <ArrowRight size={18} />
          </a>
          <a href={`${import.meta.env.BASE_URL}Pooja_Singh_CV.pdf`} download="Pooja_Singh_CV.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
            <Download size={18} /> Download CV
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={styles.scrollDown}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
