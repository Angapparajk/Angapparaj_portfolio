import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';
import skillsData from '../Data/skills.json';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { allSkills, skillCategories } = skillsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="section__container skills__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section__title" variants={titleVariants}>
          My <span>Skills</span>
        </motion.h2>

        <motion.p className="section__subtitle" variants={titleVariants}>
          Technologies I work with
        </motion.p>

        {/* Infinite scrolling marquee */}
        <div className="skills__marquee">
          <motion.div
            className="skills__track"
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <motion.div
                key={index}
                className="skill__tag"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: `0 10px 30px ${skill.color}40`,
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <i className={skill.icon} style={{ color: skill.color }}></i>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills organized by categories - Column Layout */}
        <div className="skills__grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill__column"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
            >
              <div className="column__header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>

              <ul className="column__skills">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    className="column__skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="skills__bg-decoration">
        <motion.div
          className="decoration-blob blob-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="decoration-blob blob-2"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default Skills;
