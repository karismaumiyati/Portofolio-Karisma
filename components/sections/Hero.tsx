import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [code, setCode] = useState('');
  const fullCode = `/**
 * CREATIVE PORTFOLIO
 * KARISMA UMIYATI
 */

const Developer = {
  name: "Karisma Umiyati",
  role: "Creative Developer",
  skills: ["Web", "UI/UX", "Content"],
  status: "Ready to Create"
};

Developer.init();`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="h-screen min-h-[600px] flex items-center justify-center relative overflow-hidden bg-vscode-bg p-8 snap-start">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center w-full">
        
        {/* Laptop Illustration */}
        <div className="relative w-full max-w-[550px] aspect-[16/10] bg-gray-900 rounded-t-xl border-[2px] border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden mb-2 group perspective-1000 transform transition-transform duration-700 hover:scale-[1.02]">
            {/* Screen Content */}
            <div className="absolute inset-[8px] bg-[#1e1e1e] rounded flex flex-col items-center justify-center overflow-hidden">
                 {/* Scanline */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full animate-scan pointer-events-none opacity-20"></div>
                 
                 {/* Editor UI */}
                 <div className="absolute top-0 left-0 w-full h-5 bg-[#2d2d2d] flex items-center px-2 space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>

                 <div className="text-left p-6 w-full h-full pt-10 font-mono text-sm sm:text-base leading-relaxed z-10">
                     <div className="text-blue-400">
                        <pre className="whitespace-pre-wrap">
                            <code dangerouslySetInnerHTML={{ 
                                __html: code.replace(/\/\*\*([\s\S]*?)\*\//g, '<span class="text-green-600 font-bold">$1</span>') // Comments
                                            .replace(/const|new|return/g, '<span class="text-purple-400">$&</span>')
                                            .replace(/"(.*?)"/g, '<span class="text-orange-300">"$1"</span>')
                                            .replace(/Developer/g, '<span class="text-yellow-300">Developer</span>')
                             }} />
                             <span className="animate-pulse">|</span>
                        </pre>
                     </div>
                 </div>
            </div>
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
        </div>

        {/* Laptop Base */}
        <div className="w-[650px] h-4 bg-gray-800 rounded-b-xl shadow-xl relative mb-8 flex justify-center border-t border-gray-900">
            <div className="w-24 h-1.5 bg-gray-700 rounded-b-md"></div>
            {/* Reflection */}
            <div className="absolute top-5 w-full h-12 bg-gradient-to-b from-blue-500/10 to-transparent blur-2xl rounded-[50%]"></div>
        </div>
      </div>
    </section>
  );
};