import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Mail, MapPin, Phone, ChevronDown, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullName = PROFILE.name.toUpperCase();
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        fullName
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return fullName[index];
            }
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"[
              Math.floor(Math.random() * 36)
            ];
          })
          .join("")
      );

      if (iteration >= fullName.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Decorative Grid Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-secondary/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-20 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent md:block hidden"></div>
      <div className="absolute top-0 right-20 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent md:block hidden"></div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Holographic Label */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1 mb-8 border border-secondary/50 bg-secondary/10 text-secondary font-mono text-xs tracking-widest clip-cut-corner"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-secondary animate-pulse"></div>
            SYSTEM INITIALIZED // V2.5
          </motion.div>
          
          {/* Main Title with Japanese Subtitle */}
          <div className="relative mb-6">
              <h2 className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl md:text-9xl font-black text-white/5 whitespace-nowrap font-display select-none">
                GOWTHAM
              </h2>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter font-display relative z-10 glitch-hover cursor-default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {displayText}
              </motion.h1>
              <motion.div 
                  className="text-primary font-jp font-bold text-lg md:text-2xl mt-2 tracking-[0.5em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
              >
                  ガウタム・シン・サウド
              </motion.div>
          </div>

          <motion.div 
            className="flex items-center justify-center gap-4 text-xl md:text-2xl text-slate-300 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
             <span className="text-primary">&lt;</span>
             <span className="border-b-2 border-primary/50">{PROFILE.title}</span>
             <span className="text-primary">/&gt;</span>
          </motion.div>

          <motion.p 
            className="max-w-2xl mx-auto text-slate-400 leading-relaxed mb-10 text-lg border-l-2 border-secondary/30 pl-6 text-left font-sans"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            {PROFILE.objective}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href={`mailto:${PROFILE.email}`} className="group relative px-8 py-3 bg-transparent overflow-hidden clip-cut-corner">
              <div className="absolute inset-0 bg-primary/10 border border-primary group-hover:bg-primary group-hover:text-darker transition-all"></div>
              <div className="relative flex items-center gap-2 text-primary group-hover:text-darker font-display font-bold tracking-wider">
                  <Mail size={18} /> EMAIL_ME
              </div>
            </a>
            
            <a href={`tel:${PROFILE.phone}`} className="group relative px-8 py-3 bg-transparent overflow-hidden clip-cut-corner">
              <div className="absolute inset-0 bg-secondary/10 border border-secondary group-hover:bg-secondary group-hover:text-darker transition-all"></div>
              <div className="relative flex items-center gap-2 text-secondary group-hover:text-darker font-display font-bold tracking-wider">
                  <Phone size={18} /> CALL_ME
              </div>
            </a>
          </motion.div>
          
          <div className="mt-8 flex justify-center gap-4 text-xs font-mono text-slate-500">
             <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" /> {PROFILE.location}</span>
             <span>|</span>
             <span className="text-secondary">STATUS: ONLINE</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] tracking-widest text-secondary font-mono">SCROLL</span>
        <ChevronDown className="text-secondary" />
      </motion.div>
    </section>
  );
};

export default Hero;