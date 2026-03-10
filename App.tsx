import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { ActivityBar } from './components/layout/ActivityBar';
import { SideBar } from './components/layout/SideBar';
import { StatusBar } from './components/layout/StatusBar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { FiberSkyProject } from './components/sections/FiberSkyProject';
import { QuizProject } from './components/sections/QuizProject';
import { PionirProject } from './components/sections/PionirProject';
import { UiUxProject } from './components/sections/UiUxProject';
import { PythonProjects } from './components/sections/PythonProjects';
import { Photography } from './components/sections/Photography';
import { Contact } from './components/sections/Contact';
import { MouseTrail } from './components/ui/MouseTrail';
import { FILE_TABS } from './constants';
import { SectionId } from './types';
import { X, Code2, FileJson, FileType, Video, FileText, Image, FileCode, Info } from 'lucide-react';

function App() {
  const [activeActivity, setActiveActivity] = useState('explorer');
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [showOrientationAlert, setShowOrientationAlert] = useState(false);

  // Scroll to section logic
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check orientation logic
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      if (isMobile && isPortrait) {
        setShowOrientationAlert(true);
      } else {
        setShowOrientationAlert(false);
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  // Intersection Observer to update active tab based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    FILE_TABS.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getTabIcon = (iconStr: string) => {
     switch (iconStr) {
       case 'tsx': return <Code2 size={13} className="text-[#519aba] mr-1.5" />;
       case 'json': return <FileJson size={13} className="text-[#cbcb41] mr-1.5" />;
       case 'css': return <FileType size={13} className="text-[#42a5f5] mr-1.5" />;
       case 'js': return <Code2 size={13} className="text-[#f1e05a] mr-1.5" />;
       case 'video': return <Video size={13} className="text-[#ff6b6b] mr-1.5" />;
       case 'fig': return <FileCode size={13} className="text-[#a259ff] mr-1.5" />;
       case 'py': return <Code2 size={13} className="text-[#3572a5] mr-1.5" />;
       case 'img': return <Image size={13} className="text-[#b07219] mr-1.5" />;
       case 'md': return <FileText size={13} className="text-[#9e9e9e] mr-1.5" />;
       default: return <FileText size={13} className="text-[#9e9e9e] mr-1.5" />;
     }
  }

  return (
    <div className="flex flex-col h-screen bg-vscode-bg text-vscode-text font-sans overflow-hidden">
      <MouseTrail />
      <Header />
      
      <div className="flex flex-1 overflow-hidden relative z-10">
        <div className="hidden sm:flex flex-col h-full bg-vscode-activity z-40 border-r border-[#1e1e1e]">
           <ActivityBar 
               activeTab={activeActivity} 
               setActiveTab={setActiveActivity} 
               toggleSidebar={() => setSidebarVisible(!sidebarVisible)}
               sidebarVisible={sidebarVisible}
           />
        </div>
        
        <div className={`${sidebarVisible ? 'flex' : 'hidden'} md:flex flex-col h-full bg-vscode-sidebar z-30 border-r border-[#1e1e1e] absolute md:static`}>
           <SideBar 
               scrollToSection={scrollToSection} 
               activeSection={activeSection} 
               visible={sidebarVisible} 
               activeActivity={activeActivity}
           />
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden min-w-0">
            {/* Editor Tabs */}
            <div className="flex bg-[#252526] overflow-x-auto no-scrollbar border-b border-[#252526]">
                {FILE_TABS.map((tab) => (
                    <div 
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={`flex items-center px-3 py-2 text-[13px] cursor-pointer border-r border-[#252526] min-w-fit select-none h-9 ${
                            activeSection === tab.id 
                            ? 'bg-[#1e1e1e] text-white border-t border-t-vscode-accent' 
                            : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2a2a2a]'
                        }`}
                    >
                        {getTabIcon(tab.icon)}
                        <span className={`${activeSection === tab.id ? 'text-white' : 'text-[#969696] italic'}`}>
                             {tab.name}
                        </span>
                        {activeSection === tab.id && <X size={14} className="ml-2 p-0.5 hover:bg-[#4b4b4b] rounded-sm text-white" />}
                    </div>
                ))}
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto scroll-smooth relative" id="main-scroll">
                <Hero />
                <About />
                <FiberSkyProject />
                <QuizProject />
                <PionirProject />
                <UiUxProject />
                <PythonProjects />
                <Photography />
                <Contact />
            </div>
        </div>
      </div>

      <StatusBar activeSection={activeSection} />

      {/* VS Code Style Notification Toast */}
      {showOrientationAlert && (
          <div className="fixed bottom-10 right-4 z-[100] max-w-sm w-full bg-[#252526] border border-[#454545] shadow-2xl rounded-sm animate-float">
              <div className="flex items-center justify-between px-3 py-2 bg-[#1e1e1e] border-b border-[#454545]">
                  <div className="flex items-center text-vscode-accent text-xs font-bold">
                      <Info size={14} className="mr-2" />
                      Recommendation
                  </div>
                  <X 
                    size={14} 
                    className="cursor-pointer text-gray-400 hover:text-white" 
                    onClick={() => setShowOrientationAlert(false)}
                  />
              </div>
              <div className="p-4 flex gap-3">
                  <div className="text-sm text-gray-300">
                      Rekomendasi dibuka landscape atau dengan laptop/desktop untuk pengalaman terbaik.
                  </div>
              </div>
              <div className="px-3 py-2 flex gap-2 justify-end">
                   <button 
                      onClick={() => setShowOrientationAlert(false)}
                      className="px-3 py-1 text-xs bg-[#0e639c] text-white hover:bg-[#1177bb] rounded-sm"
                   >
                       Dismiss
                   </button>
              </div>
          </div>
      )}
    </div>
  );
}

export default App;