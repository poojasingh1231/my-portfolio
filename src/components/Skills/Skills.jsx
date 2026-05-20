import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core & Styling',
      skills: [
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'SCSS / Material UI', level: 90 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js / Next.js', level: 95 },
        { name: 'Redux / Toolkit', level: 92 },
        { name: 'React Query', level: 90 },
        { name: 'AG Grid / Storybook', level: 85 },
      ]
    },
    {
      title: 'Workflow & AI Tools',
      skills: [
        { name: 'Git / REST APIs / GraphQL', level: 90 },
        { name: 'Jest / Testing Library', level: 85 },
        { name: 'Claude / Cursor / ChatGPT', level: 90 },
        { name: 'Agentic AI / Prompt Eng.', level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <div className={styles.grid}>
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div 
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
