import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: 'ABOUT', jp: '私について', href: '#' },
    { name: 'SKILLS', jp: 'スキル', href: '#skills' },
    { name: 'EXPERIENCE', jp: '経験', href: '#experience' },
    { name: 'PROJECTS', jp: 'プロジェクト', href: '#projects' },
    { name: 'EDUCATION', jp: '教育', href: '#education' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-darker/90 backdrop-blur-md border-secondary/20 py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative group cursor-pointer z-50">
           <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center transform skew-x-[-12deg] group-hover:bg-primary group-hover:text-darker transition-all">
                    <span className="font-display font-bold text-primary text-xl transform skew-x-[12deg] group-hover:text-darker">GS</span>
               </div>
               <div className="hidden sm:flex flex-col">
                   <span className="text-xs font-mono text-secondary tracking-widest">SYSTEM.ONLINE</span>
                   <span className="text-[10px] font-jp text-slate-500">ガウタム・シン</span>
               </div>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="group relative flex flex-col items-center"
            >
              <span className="font-display font-bold text-sm tracking-wider text-slate-400 group-hover:text-white transition-colors z-10">
                {link.name}
              </span>
              <span className="text-[10px] font-jp text-primary/0 group-hover:text-primary transition-all absolute -bottom-4 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {link.jp}
              </span>
              <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-110 transition-transform skew-x-[-12deg] -z-0"></span>
            </a>
          ))}
          <a href="#contact" className="px-6 py-1 border border-secondary text-secondary font-mono text-sm hover:bg-secondary hover:text-darker transition-all clip-cut-corner">
            CONNECT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary p-2 border border-secondary/50 bg-secondary/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        <motion.div 
          initial={false}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-darker/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden border-l border-primary/30"
        >
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-10 right-[-50px] text-[200px] font-bold text-primary opacity-10 rotate-90 font-display">MENU</div>
          </div>
          
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="relative text-2xl font-display font-bold text-slate-300 hover:text-white transition-colors group"
              onClick={handleNavClick}
            >
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
              {link.name}
              <span className="block text-sm font-jp text-secondary text-center opacity-50">{link.jp}</span>
            </a>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left shadow-[0_0_10px_#00F0FF]"
        style={{ scaleX }}
      />
    </motion.header>
  );
};

export default Header;