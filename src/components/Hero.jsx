import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Angapparaj K';

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting) {
        if (currentIndex <= fullName.length) {
          setDisplayText(fullName.slice(0, currentIndex));
          currentIndex++;
          if (currentIndex > fullName.length) {
            setTimeout(() => {
              isDeleting = true;
              typeEffect();
            }, 2000);
            return;
          }
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(fullName.slice(0, currentIndex));
          currentIndex--;
          if (currentIndex < 0) {
            isDeleting = false;
            currentIndex = 0;
          }
        }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(255, 78, 5, 0.3)',
        '0 0 40px rgba(255, 78, 5, 0.5)',
        '0 0 20px rgba(255, 78, 5, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header id="home" className="hero">
      {/* Animated background particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="section__container hero__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__content">
          <motion.p className="hero__greeting" variants={itemVariants}>
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              👋
            </motion.span>{' '}
            <span className="highlight">Hello</span> I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            <span className="typing-text">{displayText}</span>
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.h2 className="hero__title" variants={itemVariants}>
            <span>Full Stack</span> Developer
          </motion.h2>

          <motion.p className="hero__description" variants={itemVariants}>
            Building scalable, AI-powered web apps with React, Next.js, TypeScript & MERN stack. I craft accessible, user-centric interfaces backed by secure Node.js/Express REST APIs.
            <br /><br />
            Expanding into AI/LLM Engineering—RAG pipelines, prompt engineering, semantic search, vector databases, LangChain, and document processing (OCR/PDF parsing).
          </motion.p>

          <motion.div className="hero__buttons" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="btn hero__btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <i className="ri-arrow-right-line"></i>
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero__image-wrapper"
          variants={imageVariants}
          animate={floatAnimation}
        >
          <motion.div className="hero__image-glow" variants={glowVariants} animate="animate" />
          <motion.img
            src="https://res.cloudinary.com/dglvqybdo/image/upload/v1751218620/image2_cjrmyb.jpg"
            alt="Angapparaj K"
            className="hero__image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="hero__image-decoration">
            <motion.div
              className="decoration-circle"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-wheel" />
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </header>
  );
};

export default Hero;
