import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Folder, ArrowUpRight, Code, Database } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-between"
        >
           <div className="flex items-center gap-4">
              <div className="w-2 h-16 bg-primary"></div>
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter leading-none">
                    Select <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Projects</span>
                </h2>
              </div>
           </div>
           <div className="hidden md:block text-right">
              <div className="font-jp text-4xl font-black text-slate-700">プロジェクト</div>
              <div className="font-mono text-secondary text-sm">LOADING DATA...</div>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
               {/* Cyber Frame */}
               <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/50 to-transparent clip-diagonal opacity-50 group-hover:opacity-100 transition-all"></div>
               
               <div className="relative h-full bg-darker p-1 clip-diagonal">
                  <div className="h-full bg-surface p-6 clip-diagonal flex flex-col relative overflow-hidden">
                      {/* Scanline effect */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDI1Ii8+Cjwvc3ZnPg==')] pointer-events-none"></div>
                      
                      <div className="flex justify-between items-start mb-6">
                         <div className="p-3 bg-darker border border-slate-700 text-secondary rounded-sm group-hover:text-primary group-hover:border-primary transition-colors">
                            <Code size={24} />
                         </div>
                         {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                <ArrowUpRight size={20} />
                            </a>
                         )}
                      </div>

                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors uppercase tracking-wide">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed font-sans">
                        {project.description}
                      </p>

                      <div className="mt-auto border-t border-slate-700/50 pt-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, tIdx) => (
                                <span key={tIdx} className="text-[10px] uppercase tracking-wider font-mono text-secondary bg-secondary/5 px-2 py-1 border border-secondary/20 rounded-none">
                                {tech}
                                </span>
                            ))}
                          </div>
                      </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;