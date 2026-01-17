import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

/**
 * TimelineItem Component
 * Renders a single project in the timeline with scroll-triggered animations
 * - Even index (0, 2, 4...) → Left side, animates from left
 * - Odd index (1, 3, 5...) → Right side, animates from right
 */
const TimelineItem = ({ project, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: true,
    margin: '-50px',
    amount: 0.3
  });

  const isLeft = index % 2 === 0;

  // Animation variants for left-side cards (slide in from left)
  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Animation variants for right-side cards (slide in from right)
  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Dot animation
  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        type: 'spring',
        stiffness: 200
      }
    }
  };

  return (
    <div
      ref={itemRef}
      className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
    >
      {/* Left side content (for desktop) */}
      <div className="timeline__content timeline__content--left">
        {isLeft && (
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <ProjectCard {...project} />
          </motion.div>
        )}
      </div>

      {/* Center dot marker */}
      <div className="timeline__center">
        <motion.div
          className="timeline__dot"
          variants={dotVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ '--dot-color': project.color }}
        >
          <div className="timeline__dot-inner" />
        </motion.div>
        {/* Connector line from dot to card */}
        <motion.div
          className={`timeline__connector ${isLeft ? 'timeline__connector--left' : 'timeline__connector--right'}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
      </div>

      {/* Right side content (for desktop) */}
      <div className="timeline__content timeline__content--right">
        {!isLeft && (
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <ProjectCard {...project} />
          </motion.div>
        )}
      </div>

      {/* Mobile content (shown only on mobile) */}
      <div className="timeline__content--mobile">
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <ProjectCard {...project} />
        </motion.div>
      </div>
    </div>
  );
};

/**
 * ProjectsTimeline Component
 * Main timeline component that renders all projects in a vertical timeline layout
 * - Desktop/Tablet: Alternating left-right layout with center line
 * - Mobile: Single column with line on the left
 */
const ProjectsTimeline = ({ projects }) => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' });

  // Line grow animation
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="projects__timeline" ref={timelineRef}>
      {/* Vertical timeline line - grows based on content */}
      <motion.div
        className="timeline__line"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ originY: 0 }}
      />

      {/* Timeline items */}
      <div className="timeline__items">
        {projects.map((project, index) => (
          <TimelineItem
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTimeline;
