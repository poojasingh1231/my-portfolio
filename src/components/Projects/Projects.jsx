import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Activity } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI Resume Reviewer',
      tags: ['Next.js', 'Tailwind CSS', 'Vercel AI SDK', 'React'],
      problem: 'Needed a performant, automated way to extract text from PDFs client-side and provide instant ATS scoring and actionable career feedback.',
      solution: 'Built a production-ready application using Next.js and Vercel AI SDK to stream real-time AI analysis. Implemented client-side PDF extraction to optimize bandwidth.',
      metrics: { lighthouse: 98, loadTime: '0.8s' },
      demo: '#',
      github: 'https://github.com/poojasingh1231/resume-reviewer'
    },
    {
      title: 'Personal Developer Portfolio',
      tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
      problem: 'Required a digital presence that acts as living proof of frontend expertise—balancing complex micro-animations with a flawless Lighthouse performance score.',
      solution: 'Built a sleek, modular React application using Vite and vanilla CSS modules. Implemented fluid micro-animations with Framer Motion to create a premium user experience.',
      metrics: { lighthouse: 100, loadTime: '0.4s' },
      demo: '#',
      github: 'https://github.com/poojasingh1231/my-portfolio'
    },
    {
      title: 'Weekday Date Range Picker',
      tags: ['React', 'Date Validation', 'Component Library', 'CSS'],
      problem: 'Enterprise applications often require complex date-range selections that strictly exclude weekends, which is tedious and error-prone to build from scratch.',
      solution: 'Developed a highly customizable, lightweight React component tailored specifically for weekday date range selection, featuring robust validation and an intuitive UI.',
      metrics: { lighthouse: 100, loadTime: '0.1s' },
      demo: '#',
      github: 'https://github.com/poojasingh1231/weekday-date-range-picker'
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.links}>
                <a href={project.github} className={styles.iconLink} aria-label="GitHub Repository"><GitBranch size={20} /></a>
                <a href={project.demo} className={styles.iconLink} aria-label="Live Demo"><ExternalLink size={20} /></a>
              </div>
            </div>

            <div className={styles.tags}>
              {project.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.content}>
              <div className={styles.storyBlock}>
                <span className={styles.storyLabel}>Problem:</span>
                <p>{project.problem}</p>
              </div>
              <div className={styles.storyBlock}>
                <span className={styles.storyLabel}>Solution:</span>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className={styles.metricsBanner}>
              <Activity size={16} className={styles.metricIcon} />
              <div className={styles.metric}>
                <span>Lighthouse:</span> 
                <strong className={styles.score}>{project.metrics.lighthouse}</strong>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metric}>
                <span>Load Time:</span> 
                <strong>{project.metrics.loadTime}</strong>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
