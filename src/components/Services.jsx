import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development with MERN',
      description:
        'I build responsive, scalable web apps using MongoDB, Express.js, React, and Node.js. With clean code and a focus on performance and accessibility, I deliver smooth, user-friendly experiences from frontend to backend.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Responsive Design',
      description:
        'I make sure websites look great and work perfectly on all screen sizes, from mobile phones to desktops. Every pixel matters!',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: 'ri-tools-line',
      title: 'Performance Optimization',
      description:
        'I improve website loading speed and user experience by optimizing front-end code and assets, ensuring a smooth browsing experience.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="service" className="services" ref={ref}>
      <motion.div
        className="section__container services__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span>My</span> Services
        </motion.h2>

        <motion.p
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I can do for you
        </motion.p>

        <motion.div className="services__grid" variants={containerVariants}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service__card"
              variants={cardVariants}
              whileHover={{
                y: -20,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ perspective: '1000px' }}
            >
              {/* Glowing background effect */}
              <motion.div
                className="service__card-glow"
                style={{ background: service.gradient }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              />

              {/* Card content */}
              <div className="service__card-inner">
                <motion.div
                  className="service__icon-wrapper"
                  style={{ background: service.gradient }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={service.icon}></i>
                </motion.div>

                <h4 className="service__title">{service.title}</h4>
                <p className="service__description">{service.description}</p>

                <motion.div
                  className="service__number"
                  initial={{ opacity: 0.1 }}
                  whileHover={{ opacity: 0.2 }}
                >
                  0{index + 1}
                </motion.div>
              </div>

              {/* Animated border */}
              <motion.div
                className="service__card-border"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(135deg, transparent, ${service.gradient.match(/#[a-fA-F0-9]{6}/)[0]}, transparent)`,
                }}
              />

              {/* Shine effect */}
              <motion.div
                className="service__shine"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated background particles */}
      <div className="services__particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="services__particle"
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
      <div className="services__bg">
        <motion.div
          className="services__bg-blob blob-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="services__bg-blob blob-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Services;
