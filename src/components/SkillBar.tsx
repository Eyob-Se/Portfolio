import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  percentage, 
  color = 'bg-blue-400' 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;