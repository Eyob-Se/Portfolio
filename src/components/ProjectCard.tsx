import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  index 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="text-white" size={24} />
          </motion.div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;