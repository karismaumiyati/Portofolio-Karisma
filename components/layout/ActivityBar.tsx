import React from 'react';
import { Files, Search, GitGraph, Play, LayoutGrid, Settings, UserCircle } from 'lucide-react';

interface ActivityBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleSidebar: () => void;
  sidebarVisible: boolean;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({ activeTab, setActiveTab, toggleSidebar, sidebarVisible }) => {
  const icons = [
    { id: 'explorer', icon: Files },
    { id: 'search', icon: Search },
    { id: 'git', icon: GitGraph },
    { id: 'debug', icon: Play },
    { id: 'extensions', icon: LayoutGrid },
  ];

  const handleClick = (id: string) => {
    if (activeTab === id && sidebarVisible) {
      toggleSidebar();
    } else {
      if (!sidebarVisible) toggleSidebar();
      setActiveTab(id);
    }
  };

  return (
    <div className="w-12 bg-vscode-activity flex flex-col justify-between items-center py-2 z-40 border-r border-[#1e1e1e] h-full">
      <div className="flex flex-col space-y-4 mt-2">
        {icons.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer p-2 border-l-2 w-full flex justify-center ${
              activeTab === item.id && sidebarVisible
                ? 'border-vscode-text text-white'
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            <item.icon size={24} strokeWidth={1.5} />
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-4 mb-2">
        <div className="cursor-pointer p-2 text-gray-500 hover:text-white flex justify-center">
          <UserCircle size={24} strokeWidth={1.5} />
        </div>
        <div className="cursor-pointer p-2 text-gray-500 hover:text-white flex justify-center">
          <Settings size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};