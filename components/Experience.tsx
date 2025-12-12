import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, Activity } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-row-reverse items-end gap-4 text-right"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                Work <span className="text-secondary">Experience</span>
            </h2>
             <div className="h-2 w-full bg-surface mt-2 relative overflow-hidden flex justify-end">
                <div className="h-full w-20 bg-secondary animate-[moveLeft_2s_linear_infinite]"></div>
            </div>
          </div>
          <span className="text-4xl font-black text-slate-800/50 font-jp hidden md:block select-none">職務経験</span>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] bg-slate-800 md:-translate-x-1/2"></div>

          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${idx % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-darker border-2 border-secondary rounded-full md:-translate-x-[5px] z-20 shadow-[0_0_10px_#00F0FF]"></div>

              {/* Content Side */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12' : 'md:order-last md:pl-12 pl-8'}`}>
                 <div className="text-secondary font-mono text-sm mb-1 flex items-center gap-2 md:justify-end">
                    {idx % 2 !== 0 && <Calendar size={14} />}
                    {exp.period}
                    {idx % 2 === 0 && <Calendar size={14} />}
                 </div>
                 <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                 <div className="text-lg text-primary font-bold mb-4 font-sans uppercase tracking-wider">{exp.company}</div>
                 
                 {/* Card for Details */}
                 <div className={`bg-surface/50 border border-slate-700 p-6 clip-cut-corner hover:border-secondary/50 transition-colors relative group`}>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <ul className={`space-y-3 text-slate-400 text-sm ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                        {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                             {point}
                        </li>
                        ))}
                    </ul>
                 </div>
              </div>

              {/* Empty Side for Layout Balance */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;