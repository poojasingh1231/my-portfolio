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
      title: 'Happiest Health — e-Magazine',
      tags: ['Next.js', 'TypeScript', 'OAuth', 'Storybook'],
      problem: 'Healthcare professionals needed a secure, engaging, and highly responsive digital magazine platform with advanced content filtering.',
      solution: 'Developed a Next.js frontend with secure OAuth/JWT authentication and interactive UI components, driving a 60% increase in user engagement.',
      metrics: { lighthouse: 98, loadTime: '0.9s' },
      demo: '#',
      github: '#'
    },
    {
      title: 'BT Consumer Electronics',
      tags: ['ReactJS', 'Redux', 'Lazy Loading'],
      problem: 'A large-scale e-commerce platform suffered from slow load times and state management bottlenecks during the critical checkout flow.',
      solution: 'Implemented lazy loading and optimized Redux state management, delivering a seamless checkout experience and measurable performance improvements.',
      metrics: { lighthouse: 95, loadTime: '1.1s' },
      demo: '#',
      github: '#'
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
