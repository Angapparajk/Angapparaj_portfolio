import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { id: 1, name: 'React.js', image: '/assets/react.png', color: '#61DAFB' },
    { id: 2, name: 'Node.js', image: '/assets/node.png', color: '#339933' },
    { id: 3, name: 'SQL', image: '/assets/SQL.png', color: '#4479A1' },
    { id: 4, name: 'JavaScript', image: '/assets/javascript.png', color: '#F7DF1E' },
    { id: 5, name: 'Flexbox', image: '/assets/flexbox.png', color: '#E34F26' },
    { id: 6, name: 'Static Website', image: '/assets/static.png', color: '#1572B6' },
    { id: 7, name: 'Python', image: '/assets/python.png', color: '#3776AB' },
    { id: 8, name: 'Git & Command Line', image: '/assets/git_commandline.png', color: '#F05032' },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="certifications-page">
      {/* Animated background */}
      <div className="certifications__bg">
        <motion.div
          className="bg-blob blob-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-blob blob-2"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section__container certifications__container">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="back-button">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="back-button-inner"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Back to Home</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="certifications__header"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Certifications</span> (Full Stack)
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            My Professional Achievements & Credentials
          </motion.p>
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          className="certifications__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification__card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px ${cert.color}30`,
              }}
              style={{ '--cert-color': cert.color }}
            >
              {/* Glow effect */}
              <motion.div
                className="certification__glow"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                style={{ background: cert.color }}
              />

              {/* Certificate image */}
              <div className="certification__image-wrapper">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="certification__image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Certificate name badge */}
              <motion.div
                className="certification__badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span>{cert.name}</span>
              </motion.div>

              {/* Verified icon */}
              <motion.div
                className="certification__verified"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
              >
                <i className="ri-verified-badge-fill"></i>
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="certification__shine"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="certifications__stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">8+</span>
            <span className="stat-label">Certifications</span>
          </motion.div>
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">100%</span>
            <span className="stat-label">Completion Rate</span>
          </motion.div>
          {/* <motion.div
            className="stat-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="stat-number">Full Stack</span>
            <span className="stat-label">Expertise</span>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
