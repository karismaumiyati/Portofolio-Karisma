import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Code2, Image, FileJson, FileType, FileText, Video, ExternalLink, GitBranch, Search, MoreHorizontal } from 'lucide-react';
import { FILE_TABS } from '../../constants';
import { SectionId } from '../../types';

interface SideBarProps {
  scrollToSection: (id: SectionId) => void;
  activeSection: SectionId;
  visible: boolean;
  activeActivity: string;
}

export const SideBar: React.FC<SideBarProps> = ({ scrollToSection, activeSection, visible, activeActivity }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!visible) return null;

  const renderContent = () => {
    switch (activeActivity) {
      case 'explorer':
        return renderExplorer();
      case 'git':
        return renderSourceControl();
      case 'extensions':
        return renderExtensions();
      default:
        return (
           <div className="p-4 text-xs text-gray-400">
             View not implemented.
           </div>
        );
    }
  };

  const renderSourceControl = () => (
    <div className="flex flex-col h-full">
      <div className="h-9 px-4 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-vscode-text/60 shrink-0">
        <span>Source Control</span>
        <div className="flex gap-2">
           <Search size={14} />
           <MoreHorizontal size={14} />
        </div>
      </div>
      <div className="px-4 py-2 flex-1 overflow-y-auto">
         <div className="flex items-center text-xs text-gray-400 mb-2">
            <GitBranch size={14} className="mr-2" />
            <span>master*</span>
         </div>
         <div className="bg-[#2d2d2d] rounded p-2 mb-4">
             <input type="text" placeholder="Message (Ctrl+Enter to commit)" className="w-full bg-transparent border-none outline-none text-xs text-white placeholder-gray-500" />
         </div>
         
         <div className="text-xs uppercase font-bold text-vscode-text/60 mb-2 flex items-center">
            <ChevronDown size={14} className="mr-1" />
            <span>Changes (7)</span>
         </div>
         
         {FILE_TABS.slice(0, 5).map(file => (
             <div key={file.id} className="flex items-center px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer group text-xs text-gray-400">
                 <span className="w-4 text-yellow-500 font-bold mr-1">M</span>
                 <span>{file.name}</span>
                 <span className="ml-auto opacity-0 group-hover:opacity-100 text-[10px] text-vscode-text">src/components</span>
             </div>
         ))}

         <div className="mt-8 pt-4 border-t border-[#3e3e42]">
             <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-2 bg-[#007acc] text-white text-xs rounded hover:bg-[#0062a3] transition-colors">
                 <ExternalLink size={12} className="mr-2" />
                 Open GitHub Profile
             </a>
         </div>
      </div>
    </div>
  );

  const renderExtensions = () => {
      const extensions = [
          { name: 'VS Code Theme', publisher: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', desc: 'Main Identity' },
          { name: 'Python', publisher: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', desc: 'Data Science & Scripting' },
          { name: 'JavaScript (ES6)', publisher: 'Standard', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', desc: 'Interactive Logic' },
          { name: 'HTML5', publisher: 'W3C', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', desc: 'Structure' },
          { name: 'CSS3', publisher: 'W3C', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', desc: 'Styling & Animation' },
          { name: 'Canva', publisher: 'Design', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg', desc: 'Graphic Design Tool' },
          { name: 'GitHub', publisher: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', desc: 'Version Control' },
          { name: 'WordPress', publisher: 'Automattic', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg', desc: 'CMS Development' },
      ];

      return (
        <div className="flex flex-col h-full">
            <div className="h-9 px-4 flex items-center text-xs font-bold tracking-wider uppercase text-vscode-text/60 shrink-0">
                EXTENSIONS
            </div>
            <div className="px-2 pb-2 shrink-0">
                <input type="text" placeholder="Search Extensions..." className="w-full bg-[#3c3c3c] text-white text-xs px-2 py-1 outline-none border border-transparent focus:border-[#007acc]" />
            </div>
            <div className="flex-1 overflow-y-auto">
                {extensions.map((ext, idx) => (
                    <div key={idx} className="flex p-2 hover:bg-[#2a2d2e] cursor-pointer border-l-2 border-transparent hover:border-vscode-text">
                        <img src={ext.icon} alt={ext.name} className="w-8 h-8 object-contain mr-3" />
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-xs font-bold text-vscode-text truncate">{ext.name}</span>
                            <span className="text-[10px] text-gray-500 truncate">{ext.desc}</span>
                            <span className="text-[10px] text-vscode-accent mt-1">Installed</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
  };

  const renderExplorer = () => (
      <div className="flex flex-col h-full">
        <div className="h-9 px-4 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-vscode-text/60 shrink-0">
            <span>Explorer</span>
            <MoreHorizontal size={14} />
        </div>
        
        {/* Project Folder */}
        <div className="flex-1 overflow-y-auto">
            <div 
            className="flex items-center px-1 py-1 cursor-pointer hover:bg-[#37373d] text-sm text-vscode-text font-bold"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span className="ml-1 text-xs uppercase">KARISMA-PORTFOLIO</span>
            </div>

            {isOpen && (
            <div className="flex flex-col">
                {FILE_TABS.map((file) => (
                <div 
                    key={file.id}
                    onClick={() => scrollToSection(file.id)}
                    className={`flex items-center px-4 py-1 cursor-pointer text-[13px] hover:bg-[#2a2d2e] border-l border-transparent ${activeSection === file.id ? 'bg-[#37373d] text-white border-vscode-accent' : 'text-vscode-text/80'}`}
                >
                    <span className="mr-2">{getIcon(file.icon)}</span>
                    {file.name}
                </div>
                ))}
            </div>
            )}
        </div>

        {/* Outline / Timeline Mock - Pushed to bottom properly */}
        <div className="shrink-0 border-t border-[#3e3e42]">
            <div className="px-2 py-1 flex items-center cursor-pointer hover:bg-[#37373d] text-vscode-text/70">
                <ChevronRight size={14} />
                <span className="ml-1 text-xs font-bold uppercase">OUTLINE</span>
            </div>
            <div className="px-2 py-1 flex items-center cursor-pointer hover:bg-[#37373d] text-vscode-text/70">
                <ChevronRight size={14} />
                <span className="ml-1 text-xs font-bold uppercase">TIMELINE</span>
            </div>
             <div className="px-2 py-1 flex items-center cursor-pointer hover:bg-[#37373d] text-vscode-text/70">
                <ChevronRight size={14} />
                <span className="ml-1 text-xs font-bold uppercase">NPM SCRIPTS</span>
            </div>
        </div>
    </div>
  );

  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case 'tsx': return <Code2 size={14} className="text-[#007acc]" />;
      case 'json': return <FileJson size={14} className="text-yellow-400" />;
      case 'css': return <FileType size={14} className="text-blue-400" />;
      case 'js': return <Code2 size={14} className="text-yellow-300" />;
      case 'video': return <Video size={14} className="text-red-400" />;
      case 'fig': return <FileType size={14} className="text-purple-400" />;
      case 'py': return <Code2 size={14} className="text-green-400" />;
      case 'img': return <Image size={14} className="text-orange-400" />;
      case 'md': return <FileText size={14} className="text-gray-300" />;
      default: return <FileText size={14} />;
    }
  };

  return (
    <div className="w-64 bg-vscode-sidebar text-vscode-text flex flex-col border-r border-[#1e1e1e] select-none shrink-0 h-full">
       {renderContent()}
    </div>
  );
};