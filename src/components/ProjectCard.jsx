import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ id, title, description, image, url, tech, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project__card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ '--card-color': color }}
    >
      <div className="project__image-wrapper">
        <motion.img
          src={image}
          alt={title}
          className="project__image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="project__overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="project__icon"
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <i className="ri-external-link-line"></i>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="project__info">
        <h4 className="project__title">{title}</h4>
        {description && <p className="project__description">{description}</p>}
        <div className="project__tech">
          {tech.map((techItem) => (
            <motion.span
              key={techItem}
              className="tech__tag"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {techItem}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="project__card-glow"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        style={{ background: color }}
      />
    </motion.a>
  );
};

export default ProjectCard;
