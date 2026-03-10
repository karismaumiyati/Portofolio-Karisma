import React from 'react';
import { Film } from 'lucide-react';

export const QuizProject: React.FC = () => {
  return (
    <section id="quiz" className="h-screen min-h-[700px] flex items-center justify-center px-6 md:px-20 bg-[#121212] text-gray-300 relative border-t border-[#3e3e42] overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col justify-center h-full">
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 font-serif tracking-widest uppercase flex items-center justify-center gap-3">
                <Film size={24} /> Sekawan vs Setan
            </h2>
            <p className="text-gray-500 mt-2 font-mono text-sm">Interactive Web Experience • Promo Campaign</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-[60vh] md:h-[500px]">
            {/* Main Cinematic Scene */}
            <div className="relative group overflow-hidden rounded-lg border border-red-900/30 bg-black shadow-lg md:col-span-2 md:row-span-2">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://picsum.photos/800/600?random=4" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Cinematic Scene" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white text-xl font-bold uppercase tracking-wider">The Survival Quiz</h3>
                    <p className="text-red-400 text-xs mt-1">A branching narrative experience where your choices determine your fate.</p>
                </div>
            </div>

            {/* Character Portrait */}
            <div className="relative group overflow-hidden rounded-lg border border-red-900/30 bg-black shadow-lg md:col-span-1 md:row-span-1">
                 <img src="https://picsum.photos/400/300?random=5" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Character Portrait" />
                 <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-white text-sm font-bold border-l-2 border-red-500 pl-2">Character Select</span>
                 </div>
            </div>

            {/* Texture/Detail Shot */}
             <div className="relative group overflow-hidden rounded-lg border border-red-900/30 bg-black shadow-lg md:col-span-1 md:row-span-1">
                 <img src="https://picsum.photos/400/300?random=66" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Detail" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                     <span className="text-2xl font-bold text-white/30 group-hover:text-red-600 transition-colors duration-300 uppercase">Don't Blink</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};