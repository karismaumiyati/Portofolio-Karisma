import React from 'react';

export const UiUxProject: React.FC = () => {
  return (
    <section id="uiux" className="h-screen min-h-[600px] flex flex-col items-center justify-center px-6 md:px-20 bg-vscode-bg border-t border-[#3e3e42] snap-start">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            UI/UX Competition Project
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-xs md:text-sm">Designed with user-centric principles. Process involved empathy mapping, wireframing, and high-fidelity prototyping.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-[140px] h-[280px] md:w-[200px] md:h-[400px] border-[4px] md:border-[6px] border-gray-800 rounded-[1.5rem] md:rounded-[2rem] bg-gray-900 shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-3 md:h-4 bg-gray-800 rounded-b-lg z-20"></div>
                
                {/* Screen */}
                <img src={`https://picsum.photos/280/580?random=${20+i}`} alt={`UI Screen ${i}`} className="w-full h-full object-cover" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 p-2 text-center">
                    <div>
                        <h3 className="text-white font-bold text-sm md:text-base mb-1">Screen {i}</h3>
                        <p className="text-gray-400 text-[10px] md:text-xs">Figma Prototype. Focus on accessibility.</p>
                    </div>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
};