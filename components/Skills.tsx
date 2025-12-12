import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-darker relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/20 skew-x-[-12deg] -z-10 border-l border-slate-800"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Skills</span>
            </h2>
            <div className="h-2 w-full bg-surface mt-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-20 bg-primary animate-[moveRight_2s_linear_infinite]"></div>
            </div>
          </div>
          <span className="text-4xl font-black text-slate-800/50 font-jp hidden md:block select-none">技術スキル</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Decor */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 group-hover:opacity-100 transition duration-500 blur clip-cut-corner"></div>
              
              <div className="relative bg-surface h-full p-6 clip-cut-corner border border-slate-700/50 group-hover:border-transparent transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Cpu size={40} className="text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-700 pb-2">
                  <span className="text-secondary">0{idx + 1}.</span> {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      variants={item}
                      className="px-3 py-1 bg-darker text-sm font-mono text-slate-300 border border-slate-700 hover:border-primary hover:text-primary transition-colors cursor-crosshair relative overflow-hidden group/tag"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/tag:translate-y-0 transition-transform"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;