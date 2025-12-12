import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS, EXTRACURRICULARS, ADDITIONAL_INFO } from '../constants';
import { Trophy, Users, Star, Globe, Medal } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute -right-20 bottom-20 text-[200px] font-black font-display text-white opacity-[0.02] rotate-90 pointer-events-none select-none">
          HONORS
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-2">
             <span className="text-primary">05.</span> Achievements
          </h2>
          <div className="font-jp text-xl text-slate-500">実績と活動</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Awards */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-darker p-1 relative"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>
             <div className="p-8 h-full bg-surface/50 border border-slate-800">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-yellow-500/10 text-yellow-500 border border-yellow-500/50">
                        <Trophy size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-widest">Honors & Awards</h3>
                </div>
                <div className="space-y-6">
                    {AWARDS.map((award, i) => (
                        <div key={award.id} className="relative pl-6 border-l-2 border-slate-700 hover:border-yellow-500 transition-colors group">
                            <h4 className="text-white font-bold group-hover:text-yellow-400 transition-colors">{award.title}</h4>
                            {award.description && <p className="text-sm text-slate-400 mt-1">{award.description}</p>}
                            <span className="text-xs font-mono text-slate-500 block mt-2 text-right">{award.year}</span>
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>

          {/* Leadership & Extra */}
          <div className="space-y-8">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-darker p-8 border border-slate-800 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-secondary/30"></div>
                <div className="flex items-center gap-3 mb-6">
                    <Users className="text-secondary" size={24} />
                    <h3 className="text-xl font-bold text-white font-display uppercase">Leadership</h3>
                </div>
                <ul className="space-y-6">
                    {EXTRACURRICULARS.map((item, idx) => (
                        <li key={idx}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="text-white font-bold">{item.role}</h4>
                                {item.period && <span className="text-xs font-mono text-secondary">{item.period}</span>}
                            </div>
                            <p className="text-sm text-slate-400">{item.description}</p>
                        </li>
                    ))}
                </ul>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-surface to-darker p-8 border border-slate-800"
             >
                <div className="flex items-center gap-3 mb-6">
                    <Globe className="text-primary" size={24} />
                    <h3 className="text-xl font-bold text-white font-display uppercase">Data / Misc</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-800 pb-1">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                            {ADDITIONAL_INFO.languages.map((lang, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 text-xs text-white border border-slate-600">{lang}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-800 pb-1">Interests</h4>
                        <div className="flex flex-wrap gap-2">
                            {ADDITIONAL_INFO.interests.map((int, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 text-xs text-white border border-slate-600">{int}</span>
                            ))}
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;