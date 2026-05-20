import { motion } from 'framer-motion';
import { Mail, GitBranch, Briefcase, Send, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className={styles.subtitle}>
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          className={styles.infoBox}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Phone size={24} /></div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+919501050346">+91 9501050346</a>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Mail size={24} /></div>
            <div>
              <h3>Email</h3>
              <a href="mailto:poojasingh.work7@gmail.com">poojasingh.work7@gmail.com</a>
            </div>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/pooja-singh-638119148/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
              <Briefcase size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/poojasingh1231" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
              <GitBranch size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
