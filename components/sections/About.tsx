import React from 'react';
import { Code, Camera, Video, Terminal, PenTool, Layout } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, level }: { name: string, icon: any, level: number }) => (
    <div className="bg-[#252526] p-4 rounded border border-[#3e3e42] flex flex-col hover:border-vscode-accent transition-colors">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-[#1e1e1e] rounded mr-3 text-vscode-accent">
                <Icon size={20} />
            </div>
            <h3 className="font-semibold text-vscode-text text-sm">{name}</h3>
        </div>
        <div className="w-full bg-[#1e1e1e] h-1.5 rounded-full overflow-hidden mt-auto">
            <div className="bg-vscode-accent h-full rounded-full" style={{ width: `${level}%` }}></div>
        </div>
        <span className="text-right text-[10px] text-gray-500 mt-1">{level}%</span>
    </div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="h-screen min-h-[600px] flex items-center justify-center px-6 md:px-20 bg-vscode-bg snap-start">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
            {/* ID Card Style Photo */}
            <div className="flex-shrink-0">
                <div className="relative w-64 h-96 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                    {/* Lanyard Hole */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1e1e1e] border border-gray-700 rounded-full z-20"></div>
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-blue-500/50 z-10"></div>
                    
                    <div className="w-full h-full bg-[#1e1e1e] rounded-lg overflow-hidden flex flex-col">
                        {/* Photo area */}
                        <div className="h-2/3 w-full bg-gray-800 relative overflow-hidden group">
                            <img src="https://picsum.photos/400/500?grayscale" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 w-full bg-blue-600/80 text-white text-xs py-1 text-center font-bold tracking-widest">
                                DEVELOPER
                            </div>
                        </div>
                        {/* Info Area */}
                        <div className="p-4 flex flex-col justify-center items-center text-center h-1/3">
                            <h2 className="text-xl font-bold text-white mb-1">Karisma Umiyati</h2>
                            <p className="text-xs text-gray-400 mb-2">ID: 1029384756</p>
                            <div className="flex space-x-2">
                                <div className="w-8 h-2 bg-gray-700 rounded"></div>
                                <div className="w-8 h-2 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4"><span className="text-vscode-accent">const</span> aboutMe <span className="text-vscode-accent">=</span> <span className="text-[#ce9178]">{'{'}</span></h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-[#3e3e42]">
                        I am a versatile creative developer with a passion for building immersive digital experiences. 
                        My code is clean, my designs are sharp, and I thrive at the intersection of logic and artistry.
                        From full-stack development to event documentation, I bring a unique "All-rounder" perspective to every project.
                    </p>
                    <h2 className="text-3xl font-bold text-white mt-4"><span className="text-[#ce9178]">{'}'}</span>;</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <SkillCard name="Web Development" icon={Code} level={90} />
                    <SkillCard name="UI/UX Design" icon={Layout} level={85} />
                    <SkillCard name="Python Basic" icon={Terminal} level={75} />
                    <SkillCard name="Photography" icon={Camera} level={95} />
                    <SkillCard name="Content Creation" icon={Video} level={80} />
                    <SkillCard name="Event Doc" icon={PenTool} level={88} />
                </div>
            </div>
        </div>
    </section>
  );
};