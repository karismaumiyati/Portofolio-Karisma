import React from 'react';
import { PlayCircle } from 'lucide-react';

export const PionirProject: React.FC = () => {
  return (
    <section id="pionir" className="min-h-screen py-20 flex items-center justify-center px-4 md:px-12 bg-vscode-bg border-t border-[#3e3e42] snap-start">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
        <div className="flex items-center mb-6 border-b border-[#3e3e42] pb-4">
             <h2 className="text-xl font-bold text-vscode-text">
                <span className="text-purple-500 mr-2">PIONIR 2025</span>
                <span className="text-gray-500 font-normal">| Official Event Documentation</span>
            </h2>
        </div>

        {/* Youtube Style Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[500px]">
            {/* Main Video Area */}
            <div className="w-full aspect-video lg:flex-1 lg:h-full bg-black rounded-lg overflow-hidden relative group shadow-lg border border-[#3e3e42]">
                 <img src="https://picsum.photos/1280/720?random=6" className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity" alt="Main Video" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="text-white drop-shadow-xl group-hover:scale-110 transition-transform cursor-pointer w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                 </div>
                 <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                     <h3 className="text-white font-bold text-lg md:text-2xl">PIONIR 2025: THE OFFICIAL AFTER MOVIE</h3>
                     <p className="text-gray-300 text-xs md:text-sm mt-1">Experience the euphoria. 500+ Participants. 3 Days of Innovation.</p>
                 </div>
            </div>

            {/* Sidebar List (Up Next) */}
            <div className="w-full lg:w-96 h-auto lg:h-full flex flex-col gap-3 lg:overflow-y-auto pr-1 custom-scrollbar">
                <div className="flex justify-between items-center pb-2">
                    <h4 className="text-gray-400 text-sm font-bold uppercase">Up Next</h4>
                    <span className="text-xs text-vscode-accent cursor-pointer">Autoplay On</span>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-3 cursor-pointer hover:bg-[#2a2d2e] p-2 rounded transition-colors group">
                        <div className="w-32 md:w-36 h-20 md:h-24 bg-gray-800 rounded overflow-hidden relative flex-shrink-0 border border-gray-700">
                            <img src={`https://picsum.photos/300/200?random=${10+i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="thumb" />
                            <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">03:4{i}</span>
                        </div>
                        <div className="flex flex-col py-0.5">
                            <h5 className="text-gray-200 text-sm font-medium line-clamp-2 leading-tight group-hover:text-blue-400">PIONIR 2025: Day {i} Highlights & Interviews</h5>
                            <span className="text-gray-500 text-xs mt-1">Karisma U. • 10K Views</span>
                            <span className="text-gray-600 text-[10px]">2 days ago</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};