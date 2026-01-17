import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';
import experienceData from '../Data/experience.json';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { experiences } = experienceData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="section__container experience__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section__title" variants={itemVariants}>
          My <span>Experience</span>
        </motion.h2>

        <motion.p className="section__subtitle" variants={itemVariants}>
          Professional Journey
        </motion.p>

        {/* Experience Cards */}
        <div className="experience__cards">
          {experiences.map((experience, expIndex) => (
            <motion.div
              key={experience.id}
              className="experience__card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: expIndex * 0.2 }}
            >
              {/* Header */}
              <div className="experience__header">
                <div className="experience__header-left">
                  <motion.div
                    className="experience__icon"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="ri-briefcase-4-fill"></i>
                  </motion.div>
                  <div className="experience__title-info">
                    <h3 className="experience__role">{experience.role}</h3>
                    <p className="experience__company">
                      {experience.company} <span className="experience__type">• {experience.type}</span>
                    </p>
                  </div>
                </div>
                <motion.div
                  className="experience__duration"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + expIndex * 0.2 }}
                >
                  <i className="ri-calendar-line"></i>
                  <span>{experience.duration}</span>
                </motion.div>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="experience__tech-stack"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + expIndex * 0.2 }}
              >
                {experience.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech__badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + expIndex * 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Projects */}
              <div className="experience__projects">
                {experience.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.name}
                    className="experience__project"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.5 + expIndex * 0.2 + projectIndex * 0.2 }}
                  >
                    <div className="project__header">
                      <div className="project__marker">
                        <div className="marker__dot"></div>
                        <div className="marker__line"></div>
                      </div>
                      <div className="project__title-wrapper">
                        <h4 className="project__name">{project.name}</h4>
                        <p className="project__subtitle">{project.subtitle}</p>
                      </div>
                    </div>

                    <ul className="project__points">
                      {project.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="project__point"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.6 + expIndex * 0.2 + projectIndex * 0.2 + pointIndex * 0.08 }}
                          whileHover={{ x: 5 }}
                        >
                          <i className="ri-arrow-right-s-fill"></i>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated background particles */}
      <div className="experience__particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="experience__particle"
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

      {/* Background decoration */}
      <div className="experience__bg">
        <motion.div
          className="experience__bg-blob blob-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="experience__bg-blob blob-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Experience;
