import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // All skills for marquee animation
  const allSkills = [
    { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB' },
    { name: 'Next.js', icon: 'ri-nextjs-fill', color: '#FFFFFF' },
    { name: 'TypeScript', icon: 'ri-braces-fill', color: '#3178C6' },
    { name: 'JavaScript', icon: 'ri-javascript-fill', color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: 'ri-css3-fill', color: '#06B6D4' },
    { name: 'CSS3', icon: 'ri-css3-fill', color: '#1572B6' },
    { name: 'Node.js', icon: 'ri-nodejs-fill', color: '#339933' },
    { name: 'Express.js', icon: 'ri-server-fill', color: '#FFFFFF' },
    { name: 'REST APIs', icon: 'ri-links-fill', color: '#FF6B6B' },
    { name: 'Python', icon: 'ri-terminal-box-fill', color: '#3776AB' },
    { name: 'JWT Auth', icon: 'ri-shield-keyhole-fill', color: '#D63AFF' },
    { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'ri-database-fill', color: '#336791' },
    { name: 'MySQL', icon: 'ri-database-fill', color: '#00758F' },
    { name: 'Firebase', icon: 'ri-fire-fill', color: '#FFCA28' },
    { name: 'LLM', icon: 'ri-brain-fill', color: '#A855F7' },
    { name: 'RAG', icon: 'ri-search-eye-fill', color: '#22C55E' },
    { name: 'Prompt Engineering', icon: 'ri-quill-pen-fill', color: '#F59E0B' },
    { name: 'Embeddings', icon: 'ri-bubble-chart-fill', color: '#38BDF8' },
    { name: 'Vector Database', icon: 'ri-database-2-fill', color: '#10B981' },
    { name: 'LangChain', icon: 'ri-links-fill', color: '#4ADE80' },
    { name: 'OpenAI API', icon: 'ri-openai-fill', color: '#10A37F' },
    { name: 'Claude API', icon: 'ri-robot-fill', color: '#D97757' },
    { name: 'Semantic Search', icon: 'ri-search-2-fill', color: '#60A5FA' },
    { name: 'Document Chunking', icon: 'ri-file-copy-2-fill', color: '#F97316' },
    { name: 'OCR / PDF Parsing', icon: 'ri-file-text-fill', color: '#EF4444' },
    { name: 'Claude AI', icon: 'ri-robot-fill', color: '#D97757' },
    { name: 'ChatGPT', icon: 'ri-openai-fill', color: '#10A37F' },
    { name: 'GitHub Copilot', icon: 'ri-github-fill', color: '#FFFFFF' },
    { name: 'Postman', icon: 'ri-send-plane-fill', color: '#FF6C37' },
    { name: 'Git', icon: 'ri-git-branch-fill', color: '#F05032' },
    { name: 'GitHub', icon: 'ri-github-fill', color: '#FFFFFF' },
    { name: 'Vercel', icon: 'ri-cloud-fill', color: '#FFFFFF' },
    { name: 'VS Code', icon: 'ri-code-s-slash-fill', color: '#007ACC' },
  ];

  // Skills organized by categories for the grid section
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'ri-layout-4-fill',
      skills: [
        { name: 'React.js', icon: 'ri-reactjs-fill', color: '#61DAFB' },
        { name: 'Next.js', icon: 'ri-nextjs-fill', color: '#FFFFFF' },
        { name: 'TypeScript', icon: 'ri-braces-fill', color: '#3178C6' },
        { name: 'JavaScript', icon: 'ri-javascript-fill', color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: 'ri-css3-fill', color: '#06B6D4' },
        { name: 'CSS3', icon: 'ri-css3-fill', color: '#1572B6' },
      ],
    },
    {
      title: 'Backend',
      icon: 'ri-server-fill',
      skills: [
        { name: 'Node.js', icon: 'ri-nodejs-fill', color: '#339933' },
        { name: 'Express.js', icon: 'ri-server-fill', color: '#FFFFFF' },
        { name: 'REST APIs', icon: 'ri-links-fill', color: '#FF6B6B' },
        { name: 'Python', icon: 'ri-terminal-box-fill', color: '#3776AB' },
        { name: 'JWT Auth', icon: 'ri-shield-keyhole-fill', color: '#D63AFF' },
      ],
    },
    {
      title: 'Databases',
      icon: 'ri-database-2-fill',
      skills: [
        { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'ri-database-fill', color: '#336791' },
        { name: 'MySQL', icon: 'ri-database-fill', color: '#00758F' },
        { name: 'Firebase', icon: 'ri-fire-fill', color: '#FFCA28' },
      ],
    },
    {
    title: 'AI / LLM Engineering',
    icon: 'ri-robot-2-fill',
    skills: [
      { name: 'LLM', icon: 'ri-brain-fill', color: '#A855F7' },
      { name: 'RAG', icon: 'ri-search-eye-fill', color: '#22C55E' },
      { name: 'Prompt Engineering', icon: 'ri-quill-pen-fill', color: '#F59E0B' },
      { name: 'Embeddings', icon: 'ri-bubble-chart-fill', color: '#38BDF8' },
      { name: 'Vector Database', icon: 'ri-database-2-fill', color: '#10B981' },
      { name: 'LangChain', icon: 'ri-links-fill', color: '#4ADE80' },
      { name: 'OpenAI API', icon: 'ri-openai-fill', color: '#10A37F' },
      { name: 'Claude API', icon: 'ri-robot-fill', color: '#D97757' },
      { name: 'Semantic Search', icon: 'ri-search-2-fill', color: '#60A5FA' },
      { name: 'Document Chunking', icon: 'ri-file-copy-2-fill', color: '#F97316' },
      { name: 'OCR / PDF Parsing', icon: 'ri-file-text-fill', color: '#EF4444' },
    ],
    },
    {
      title: 'AI & Dev Tools',
      icon: 'ri-robot-fill',
      skills: [
        { name: 'Claude AI', icon: 'ri-robot-fill', color: '#D97757' },
        { name: 'ChatGPT', icon: 'ri-openai-fill', color: '#10A37F' },
        { name: 'GitHub Copilot', icon: 'ri-github-fill', color: '#FFFFFF' },
        { name: 'Postman', icon: 'ri-send-plane-fill', color: '#FF6C37' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'ri-git-branch-fill',
      skills: [
        { name: 'Git', icon: 'ri-git-branch-fill', color: '#F05032' },
        { name: 'GitHub', icon: 'ri-github-fill', color: '#FFFFFF' },
        { name: 'Vercel', icon: 'ri-cloud-fill', color: '#FFFFFF' },
        { name: 'VS Code', icon: 'ri-code-s-slash-fill', color: '#007ACC' },
      ],
    },
  ];

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

        {/* Skills organized by categories */}
        <div className="skills__categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill__category"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
            >
              <motion.div
                className="category__header"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </motion.div>

              <motion.div className="category__skills" variants={containerVariants}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill__card"
                    initial={{ opacity: 0, rotateX: -30, y: 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, rotateX: 0, y: 0 }
                        : { opacity: 0, rotateX: -30, y: 50 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.15 + index * 0.08,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{
                      rotateY: 10,
                      rotateX: -10,
                      scale: 1.05,
                      z: 50,
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="skill__card-glow"
                      style={{ background: skill.color }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                    />
                    <div className="skill__card-content">
                      <motion.i
                        className={skill.icon}
                        style={{ color: skill.color }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span>{skill.name}</span>
                    </div>
                    <motion.div
                      className="skill__card-shine"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
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
