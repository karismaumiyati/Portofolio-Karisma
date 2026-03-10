import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

export const FiberSkyProject: React.FC = () => {
  return (
    <section id="fiber-sky" className="h-screen min-h-[600px] flex items-center justify-center px-6 md:px-20 bg-vscode-bg border-t border-[#3e3e42] relative overflow-hidden snap-start">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Text Side */}
        <div className="w-full md:w-1/3 space-y-6 z-10">
             <div>
                <span className="text-blue-400 font-mono text-sm">01. Project</span>
                <h2 className="text-4xl font-bold text-white mb-2">Fiber Sky Indonesia</h2>
                <div className="h-1 w-20 bg-blue-500"></div>
             </div>
            
             <div className="bg-[#252526] p-6 rounded-lg border-l-4 border-blue-500 shadow-xl">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Developed a high-performance corporate website for an Internet Service Provider. 
                    The interface prioritizes clarity, trust, and ease of package selection.
                </p>
             </div>

             <div className="flex flex-wrap gap-2 font-mono text-xs text-blue-300">
                <span className="bg-[#1e1e1e] border border-blue-900 px-3 py-1 rounded">React.js</span>
                <span className="bg-[#1e1e1e] border border-blue-900 px-3 py-1 rounded">Tailwind</span>
                <span className="bg-[#1e1e1e] border border-blue-900 px-3 py-1 rounded">Framer Motion</span>
             </div>

             <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                 <span className="border-b border-transparent group-hover:border-blue-400 pb-0.5">Visit Website</span>
                 <ExternalLink size={16} />
             </button>
        </div>

        {/* Visual Side - Browser Mockups */}
        <div className="w-full md:w-2/3 relative group">
            {/* Main Desktop View */}
            <div className="relative z-20 bg-[#1e1e1e] rounded-lg border border-[#3e3e42] shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#3e3e42]">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto bg-[#1e1e1e] px-3 py-0.5 rounded text-[10px] text-gray-500 flex items-center w-64">
                        <Globe size={10} className="mr-2" /> fibersky.co.id
                    </div>
                </div>
                <img src="https://picsum.photos/800/500?random=1" className="w-full h-auto object-cover" alt="Fiber Sky Desktop" />
            </div>

            {/* Floating Mobile View */}
            <div className="absolute -bottom-10 -right-5 w-48 z-30 bg-black rounded-[2rem] border-[4px] border-gray-800 shadow-xl overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100 hidden md:block">
                 <div className="absolute top-0 w-full h-6 bg-gray-800 flex justify-center z-10"><div className="w-16 h-4 bg-black rounded-b-lg"></div></div>
                 <img src="https://picsum.photos/300/600?random=2" className="w-full h-full object-cover" alt="Fiber Sky Mobile" />
            </div>
        </div>
      </div>
    </section>
  );
};