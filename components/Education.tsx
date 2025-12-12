import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-darker relative">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Degree */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-display font-black text-white uppercase"><span className="text-primary">04.</span> Education</h2>
                  <span className="h-px flex-grow bg-slate-800"></span>
                  <span className="font-jp text-slate-600 font-bold">教育</span>
              </div>
              
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-surface p-8 border border-slate-700/50 clip-cut-corner">
                    <div className="flex items-start gap-4">
                       <div className="bg-darker p-3 text-white border border-slate-700">
                          <GraduationCap size={28} />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white font-display uppercase">{edu.institution}</h3>
                          <p className="text-primary font-bold tracking-wide text-sm mb-2">{edu.degree}</p>
                          <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                             <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                             <span className="text-xs font-mono text-slate-400">{edu.location}</span>
                          </div>
                          <div className="mt-4 bg-darker/50 p-3 border-l-2 border-secondary">
                             <p className="text-xs text-secondary font-bold mb-1 uppercase tracking-wider">Relevant Coursework</p>
                             <p className="text-sm text-slate-400 leading-relaxed">{edu.coursework}</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-display font-black text-white uppercase"><span className="text-secondary">#</span> Certifications</h2>
                  <span className="h-px flex-grow bg-slate-800"></span>
                  <span className="font-jp text-slate-600 font-bold">資格</span>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 bg-surface/30 border border-slate-800 hover:border-secondary transition-colors group"
                  >
                    <div className="mt-1 text-secondary group-hover:text-white transition-colors">
                        <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-display tracking-wide group-hover:text-secondary transition-colors">{cert.name}</h4>
                      <p className="text-xs font-mono text-slate-500 mb-2">{cert.issuer} // {cert.year}</p>
                      {cert.details && (
                         <div className="flex flex-wrap gap-1">
                             {cert.details.slice(0, 3).map((d, i) => (
                                 <span key={i} className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-400 border border-slate-700">{d}</span>
                             ))}
                             {cert.details.length > 3 && <span className="text-[10px] px-1.5 py-0.5 text-primary">+more</span>}
                         </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;