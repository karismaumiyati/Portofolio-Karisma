import React from 'react';
import { GitBranch, RotateCw, XCircle, AlertTriangle, Bell, Radio } from 'lucide-react';
import { FILE_TABS } from '../../constants';
import { SectionId } from '../../types';

interface StatusBarProps {
  activeSection: SectionId;
}

export const StatusBar: React.FC<StatusBarProps> = ({ activeSection }) => {
  const currentFile = FILE_TABS.find(f => f.id === activeSection) || FILE_TABS[0];

  return (
    <div className="h-6 bg-vscode-status text-white flex items-center justify-between px-3 text-xs select-none z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded">
          <GitBranch size={12} className="mr-1" />
          <span>main*</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded">
          <RotateCw size={12} className="mr-1" />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/20 px-1 rounded">
          <XCircle size={12} />
          <span>0</span>
          <AlertTriangle size={12} />
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded hidden sm:flex">
            <Radio size={12} className="mr-1 animate-pulse" />
            <span>Go Live</span>
        </div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded">
          Ln {Math.floor(Math.random() * 100) + 1}, Col {Math.floor(Math.random() * 50) + 1}
        </div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded">
          Spaces: 2
        </div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded">
          UTF-8
        </div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded font-medium">
          {currentFile.language}
        </div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};