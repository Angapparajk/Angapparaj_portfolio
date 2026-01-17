import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="section__container about__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="about__image-wrapper" variants={leftVariants}>
          <div className="about__image-container">
            <motion.img
              src="https://res.cloudinary.com/dglvqybdo/image/upload/v1751218620/image2_cjrmyb.jpg"
              alt="Angapparaj K"
              className="about__image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="about__image-border"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="about__image-dots"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Experience badge */}
          <motion.div
            className="experience__badge"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          >
            <motion.span
              className="experience__number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1+
            </motion.span>
            <span className="experience__text">Years of Learning</span>
          </motion.div>
        </motion.div>

        <motion.div className="about__content" variants={rightVariants}>
          <motion.h2
            className="section__title about__title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            About <span>Me</span>
          </motion.h2>

          <motion.p
            className="about__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="about__description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Full Stack Developer crafting responsive, scalable web apps with clean architecture. Skilled in React.js/Next.js, TypeScript, Tailwind CSS on the frontend, and Node.js, Express, MongoDB, PostgreSQL, Firebase on the backend—with JWT authentication and REST API design.
          </motion.p>

          <motion.p
            className="about__description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Expanding into AI/LLM Engineering—building intelligent systems with RAG pipelines, prompt engineering, embeddings, semantic search, vector databases, and LangChain. Experienced in document processing (OCR/PDF parsing, chunking) for AI-powered automation.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="about__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat__item"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="stat__number"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {stat.number}
                </motion.span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="about__buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/certifications">
              <motion.button
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-award-line"></i>
                View Certifications
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background elements */}
      <div className="about__bg-elements">
        <motion.div
          className="bg-circle"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default About;
