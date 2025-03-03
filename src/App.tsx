import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeScene from './components/ThreeScene';
import AnimatedText from './components/AnimatedText';
import AnimatedSection from './components/AnimatedSection';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const designProjects = [
    {
      title: "Brand Identity",
      description: "Complete rebrand for a tech startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Print Design",
      description: "Magazine layout and typography",
      image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Mobile app interface design",
      image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const devProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack React & Node.js application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization with D3.js",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile App",
      description: "React Native application for iOS & Android",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${scrolled ? 'mt-4' : 'mt-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={`container mx-auto max-w-6xl ${scrolled ? 'bg-gray-800/40' : 'bg-gray-800/30'} backdrop-blur-sm rounded-full shadow-md transition-all duration-300`}>
          <div className="px-6 py-3 flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-md font-bold text-white">Eyob <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>Seleshi</span></span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden text-gray-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav 
                className="md:hidden bg-gray-800/60 py-4 px-6 rounded-b-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-200 hover:text-blue-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 px-4 pt-32 md:pt-40">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <AnimatedText 
                text="Where Design Meets Development"
                className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              />
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I craft visually stunning designs and build powerful, scalable applications.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a 
                  href="#portfolio" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-800 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-2 text-center">My Portfolio</h2>
              <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                A selection of my recent work across design and development
              </p>
            </AnimatedSection>

            {/* Design Projects */}
            <AnimatedSection delay={0.2} className="mb-16">
              <div className="flex items-center mb-8">
                <Palette className="text-blue-400 mr-2" size={24} />
                <h3 className="text-2xl font-bold">Graphic Design</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designProjects.map((project, index) => (
                  <ProjectCard 
                    key={`design-${index}`}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Development Projects */}
            <AnimatedSection delay={0.4}>
              <div className="flex items-center mb-8">
                <Code className="text-blue-400 mr-2" size={24} />
                <h3 className="text-2xl font-bold">Development</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devProjects.map((project, index) => (
                  <ProjectCard 
                    key={`dev-${index}`}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
              <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                With expertise in both design and development, I bring a unique perspective to every project
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Palette className="text-blue-400 mr-2" size={24} />
                  <h3 className="text-2xl font-bold">Design Skills</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  With over 1 years of experience in graphic design, I specialize in creating visually compelling and user-centered designs.
                </p>
                <h4 className="font-bold mb-3">Tools & Expertise:</h4>
                <SkillBar skill="Adobe Creative Suite" percentage={95} />
                <SkillBar skill="Figma & Sketch" percentage={90} />
                <SkillBar skill="Brand Identity" percentage={85} />
                <SkillBar skill="Typography & Color Theory" percentage={88} />
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Code className="text-blue-400 mr-2" size={24} />
                  <h3 className="text-2xl font-bold">Development Skills</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  With 2+ years in software development, I build robust, scalable applications with a focus on performance and user experience.
                </p>
                <h4 className="font-bold mb-3">Technologies:</h4>
                <SkillBar skill="React & TypeScript" percentage={92} color="bg-blue-500" />
                <SkillBar skill="Node.js & Express" percentage={88} color="bg-blue-500" />
                <SkillBar skill="MongoDB & PostgreSQL" percentage={85} color="bg-blue-500" />
                <SkillBar skill="React Native" percentage={80} color="bg-blue-500" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
              <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                Interested in working together? Let's discuss your project
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2}>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your message"
                    ></motion.textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-gray-300 mb-6">
                    Feel free to reach out through the form or directly via email or social media.
                  </p>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="text-blue-400 mr-3" size={20} />
                      <a href="mailto:hello@janedoe.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                        messieyob346@gmail.com
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Eyob Seleshi. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;