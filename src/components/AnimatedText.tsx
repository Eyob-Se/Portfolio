import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', once = false }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Animation variants for each word
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Split text into words
  const words = text.split(' ');

  return (





    
    <motion.div
      className={`w-full flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 mb-2"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;