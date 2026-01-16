import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'react', label: 'React' },
    { id: 'htmlcss', label: 'HTML/CSS/JS' },
  ];

  const projects = [
    {
      id: 1,
      title: 'HRMS System',
      category: 'fullstack',
      image: '/assets/hrms.png',
      url: 'https://hrms-xi-teal.vercel.app/',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: '#667eea',
    },
    {
      id: 2,
      title: 'Task Manager',
      category: 'fullstack',
      image: '/assets/task_manager.png',
      url: 'https://taskmanagement-dun.vercel.app/',
      tech: ['React', 'Node.js','Express', 'MongoDB'],
      color: '#f093fb',
    },
    {
      id: 3,
      title: 'College Kart',
      category: 'fullstack',
      image: '/assets/collegekart.png',
      url: 'https://college-kart-lemon.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: '#4facfe',
    },
    {
      id: 4,
      title: 'Healthcare App',
      category: 'fullstack',
      image: '/assets/helathacre.png',
      url: 'https://niroggyan-healthcare.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: '#43e97b',
    },
    {
      id: 5,
      title: 'Nxt Watch',
      category: 'react',
      image: '/assets/nxt-watch.png',
      url: 'https://nxttub.ccbp.tech/',
      tech: ['React', 'REST API', 'CSS'],
      color: '#fa709a',
    },
    {
      id: 6,
      title: 'Nxt Trendz',
      category: 'react',
      image: '/assets/nxt-trendz.png',
      url: 'https://nxt-trendz-three-delta.vercel.app/',
      tech: ['React', 'JavaScript', 'CSS'],
      color: '#a8edea',
    },
    {
      id: 7,
      title: 'Jobby App',
      category: 'react',
      image: '/assets/Jooby.png',
      url: 'https://jobby-ebon.vercel.app/',
      tech: ['React', 'REST API', 'CSS'],
      color: '#fed6e3',
    },
    {
      id: 8,
      title: 'Quiz App',
      category: 'react',
      image: '/assets/quiz.jpg',
      url: 'https://quiz-react-six-blond.vercel.app/',
      tech: ['React', 'JavaScript'],
      color: '#ffecd2',
    },
    {
      id: 9,
      title: 'Food Website',
      category: 'htmlcss',
      image: '/assets/food.png',
      url: 'https://angapparajk.github.io/Food-Project/',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: '#a1c4fd',
    },
    {
      id: 10,
      title: 'Todo Wiz',
      category: 'htmlcss',
      image: '/assets/todo.png',
      url: 'https://angapparajk.github.io/todowiz/',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: '#c2e9fb',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="section__container projects__container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p
          className="section__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Portfolio
        </motion.p>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.1 }}
        >
          <span>Latest</span> Projects
        </motion.h2>

        {/* Category filter tabs */}
        <motion.div
          className="projects__filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter__btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  className="filter__indicator"
                  layoutId="filterIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project__card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                style={{ '--card-color': project.color }}
              >
                <div className="project__image-wrapper">
                  <motion.img
                    src={project.image}
                    alt={project.title}
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

                <motion.div
                  className="project__info"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h4 className="project__title">{project.title}</h4>
                  <div className="project__tech">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="tech__tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Animated border on hover */}
                <motion.div
                  className="project__card-glow"
                  animate={{
                    opacity: hoveredProject === project.id ? 0.5 : 0,
                  }}
                  style={{ background: project.color }}
                />
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Background effects */}
      <div className="projects__bg">
        <motion.div
          className="projects__bg-gradient"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 78, 5, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 78, 5, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 78, 5, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default Projects;
