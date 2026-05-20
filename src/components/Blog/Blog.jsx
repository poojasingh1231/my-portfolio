import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import styles from './Blog.module.css';

const Blog = () => {
  const posts = [
    {
      title: 'You are probably underusing Claude Code. Here is how I finally unlocked it',
      excerpt: 'Discover how to fully leverage Claude Code for your development workflow and unlock its true potential in your daily tasks.',
      date: 'Recent',
      readTime: '4 min read',
      link: 'https://medium.com/@poojasingh.work7/you-are-probably-underusing-claude-code-here-is-how-i-finally-unlocked-it-57dda20ee57f'
    },
    {
      title: 'Understanding Redux Toolkit: Cleaner State Management',
      excerpt: 'A practical guide on mastering Redux Toolkit for cleaner and more efficient state management in React applications (Beginner to Advanced).',
      date: 'Recent',
      readTime: '5 min read',
      link: 'https://medium.com/@poojasingh.work7/understanding-redux-toolkit-cleaner-state-management-in-react-beginner-to-advanced-8a837b11e994'
    },
    {
      title: 'ReactJS vs Next.js: Side-by-Side Comparison',
      excerpt: 'An in-depth comparison of features, SEO capabilities, and use cases to help you choose the right framework for your next project.',
      date: 'Recent',
      readTime: '6 min read',
      link: 'https://medium.com/@poojasingh.work7/%EF%B8%8F-reactjs-vs-next-js-side-by-side-comparison-of-features-seo-and-use-cases-80cc4323dd47'
    }
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Recent Notes
      </motion.h2>

      <div className={styles.grid}>
        {posts.map((post, idx) => (
          <motion.article 
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={14} /> {post.date}
              </span>
              <span className={styles.metaItem}>
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
            <h3 className={styles.title}>
              <a href={post.link}>{post.title}</a>
            </h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <a href={post.link} className={styles.readMore}>
              Read Article <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
