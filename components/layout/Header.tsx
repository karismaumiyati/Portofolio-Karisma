import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../../constants';
import { LayoutTemplate, Minus, Square, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <div ref={headerRef} className="h-8 bg-vscode-header flex items-center justify-between px-2 select-none z-50 relative border-b border-black">
      <div className="flex items-center space-x-1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VSCode" className="w-4 h-4 ml-1 mr-2" />
        <div className="flex text-[13px] text-[#cccccc]">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="relative">
              <span 
                onClick={() => handleMenuClick(item.name)}
                className={`px-3 py-1 cursor-default ${activeMenu === item.name ? 'bg-[#505050] text-white rounded-sm' : ''}`}
              >
                {item.name}
              </span>
              {activeMenu === item.name && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[#252526] border border-[#454545] shadow-2xl rounded-sm py-1 z-50">
                  <div className="px-4 py-1.5 hover:bg-[#094771] hover:text-white cursor-pointer text-sm flex justify-between">
                    <span>New File</span>
                    <span className="text-gray-500 text-xs ml-4">Ctrl+N</span>
                  </div>
                  <div className="px-4 py-1.5 hover:bg-[#094771] hover:text-white cursor-pointer text-sm flex justify-between">
                    <span>Open File...</span>
                    <span className="text-gray-500 text-xs ml-4">Ctrl+O</span>
                  </div>
                   <div className="px-4 py-1.5 hover:bg-[#094771] hover:text-white cursor-pointer text-sm flex justify-between">
                    <span>Save</span>
                    <span className="text-gray-500 text-xs ml-4">Ctrl+S</span>
                  </div>
                  <div className="border-t border-[#454545] my-1"></div>
                  <div className="px-4 py-1.5 hover:bg-[#094771] hover:text-white cursor-pointer text-sm">Exit</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-vscode-text/60 text-xs font-medium absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        Karisma Umiyati - Portfolio
      </div>

      <div className="flex items-center">
        <div className="h-8 w-10 flex items-center justify-center hover:bg-[#505050] cursor-pointer text-vscode-text">
           <LayoutTemplate size={14} />
        </div>
        <div className="h-8 w-10 flex items-center justify-center hover:bg-[#505050] cursor-pointer text-vscode-text">
           <Minus size={14} />
        </div>
        <div className="h-8 w-10 flex items-center justify-center hover:bg-[#505050] cursor-pointer text-vscode-text">
           <Square size={12} />
        </div>
        <div className="h-8 w-10 flex items-center justify-center hover:bg-[#e81123] hover:text-white cursor-pointer text-vscode-text">
           <X size={14} />
        </div>
      </div>
    </div>
  );
};