import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'angapparajk424@gmail.com',
      href: 'mailto:angapparajk424@gmail.com',
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '8778897919',
      href: 'tel:8778897919',
    },
  ];

  const socialLinks = [
    {
      icon: 'ri-mail-line',
      href: 'mailto:angapparajk424@gmail.com',
      label: 'Email',
      color: '#EA4335',
    },
    {
      icon: 'ri-github-line',
      href: 'https://github.com/Angapparajk',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: 'ri-linkedin-fill',
      href: 'https://www.linkedin.com/in/angapparaj-karunakaran/',
      label: 'LinkedIn',
      color: '#0A66C2',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="contact" className="contact" ref={ref}>
      <motion.div
        className="section__container contact__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="contact__content" variants={itemVariants}>
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Contact <span>Me!</span>
          </motion.h2>

          <motion.p
            className="section__subtitle"
            variants={itemVariants}
          >
            I'm Ready to Contribute
          </motion.p>

          {/* Contact info cards */}
          <motion.div className="contact__info" variants={containerVariants}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="contact__card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(255, 78, 5, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="contact__card-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={info.icon}></i>
                </motion.div>
                <div className="contact__card-content">
                  <span className="contact__card-label">{info.label}</span>
                  <span className="contact__card-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="contact__social"
            variants={containerVariants}
          >
            <motion.p className="social__title" variants={itemVariants}>
              Connect with me
            </motion.p>
            <motion.div className="social__links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    boxShadow: `0 10px 30px ${social.color}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--social-color': social.color }}
                >
                  <i className={social.icon}></i>
                  <motion.span
                    className="social__tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated divider */}
          <motion.div
            className="contact__divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          {/* Copyright */}
          <motion.div
            className="contact__copyright"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <p>
              Designed & Built by{' '}
              <span className="highlight">Angapparaj K</span>
            </p>
            <p className="copyright__year">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated background particles */}
      <div className="contact__particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="contact__particle"
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

      {/* Background decorations */}
      <div className="contact__bg">
        <motion.div
          className="contact__bg-blob blob-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="contact__bg-blob blob-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>
    </footer>
  );
};

export default Contact;
