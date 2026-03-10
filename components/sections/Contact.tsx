import React from 'react';
import { Github, Linkedin, Instagram, Mail, Code2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="h-screen min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e1e1e] to-black text-center border-t border-[#3e3e42] relative overflow-hidden snap-start">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="z-10 bg-[#252526]/30 backdrop-blur-md p-10 rounded-2xl border border-white/5 shadow-2xl flex flex-col items-center max-w-2xl mx-4">
            <div className="mb-6 p-4 bg-black rounded-full border border-gray-800 shadow-lg animate-float">
                <Code2 size={48} className="text-blue-500" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Let's Build Together
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
                Open for collaborations, freelance projects, or just a tech talk.
            </p>
            
            <div className="flex space-x-8 mb-8">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                    <div className="p-4 bg-[#2d2d2d] rounded-full text-white group-hover:bg-vscode-accent transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                        <Github size={24} />
                    </div>
                    <span className="text-[10px] text-gray-500 group-hover:text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                    <div className="p-4 bg-[#2d2d2d] rounded-full text-white group-hover:bg-[#0077b5] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                        <Linkedin size={24} />
                    </div>
                     <span className="text-[10px] text-gray-500 group-hover:text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                    <div className="p-4 bg-[#2d2d2d] rounded-full text-white group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                        <Instagram size={24} />
                    </div>
                     <span className="text-[10px] text-gray-500 group-hover:text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                </a>
            </div>

            <a href="mailto:karisma@example.com" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Mail size={18} />
                Send Me an Email
            </a>
       </div>
       
       <footer className="absolute bottom-6 text-[10px] text-gray-600 font-mono">
           &copy; 2025 KARISMA UMIYATI. <span className="text-vscode-accent">Visual Studio Code Portfolio Theme</span>
       </footer>
    </section>
  );
};