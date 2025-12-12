import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker text-center text-slate-500 text-sm border-t border-slate-800 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-darker text-xs font-mono text-secondary border border-slate-800">
         END_OF_LINE
      </div>
      <div className="container mx-auto px-6">
        <p className="mb-2 font-display text-slate-300">SYSTEM ARCHITECT: {PROFILE.name}</p>
        <p className="font-mono text-xs opacity-50">&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED. INITIATED IN OOTY, INDIA.</p>
      </div>
    </footer>
  );
};

export default Footer;