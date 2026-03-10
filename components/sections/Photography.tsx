import React, { useState, useEffect, useCallback } from 'react';
import { FolderOpen, HardDrive, Image as ImageIcon, X, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Photography: React.FC = () => {
  const [activeDrive, setActiveDrive] = useState<'internal' | 'external'>('internal');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const internalPhotos = [
    { id: 1, name: 'Concert_Main_Stage.jpg', size: '2.4 MB' },
    { id: 2, name: 'Crowd_Euphoria.jpg', size: '3.1 MB' },
    { id: 3, name: 'Artist_Solo.raw', size: '15 MB' },
    { id: 4, name: 'Backstage_Access.jpg', size: '1.8 MB' },
    { id: 5, name: 'Lighting_Setup.png', size: '4.2 MB' },
    { id: 6, name: 'Final_Bow.jpg', size: '2.9 MB' },
  ];

  const externalPhotos = [
    { id: 7, name: 'Street_Life.jpg', size: '5.4 MB' },
    { id: 8, name: 'Urban_Night.jpg', size: '4.1 MB' },
    { id: 9, name: 'Neon_Signs.raw', size: '22 MB' },
    { id: 10, name: 'Portrait_Mode.jpg', size: '3.8 MB' },
    { id: 11, name: 'Nature_Walk.png', size: '6.2 MB' },
    { id: 12, name: 'Sunset_Vibes.jpg', size: '1.9 MB' },
  ];

  const currentPhotos = activeDrive === 'internal' ? internalPhotos : externalPhotos;
  
  const getPhotoUrl = (id: number) => {
      const seed = activeDrive === 'internal' ? 30 + id : 60 + id;
      return `https://picsum.photos/1200/800?random=${seed}`;
  }

  const handlePhotoClick = (index: number) => {
      setSelectedPhotoIndex(index);
  }

  const closeLightbox = () => {
      setSelectedPhotoIndex(null);
  }

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev !== null && prev < currentPhotos.length - 1 ? prev + 1 : 0));
    }
  }, [selectedPhotoIndex, currentPhotos.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : currentPhotos.length - 1));
    }
  }, [selectedPhotoIndex, currentPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  return (
    <section id="photography" className="h-screen min-h-[600px] flex items-center justify-center px-4 bg-vscode-bg border-t border-[#3e3e42] snap-start relative">
      {/* Finder Window Style */}
      <div className="w-full max-w-5xl bg-[#1e1e1e] rounded-xl border border-[#3e3e42] shadow-2xl overflow-hidden flex flex-col h-[80vh]">
        
        {/* Finder Header */}
        <div className="h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-[#1e1e1e] space-x-4 shrink-0">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex space-x-2 text-gray-400">
                <div className="hover:bg-white/10 p-1 rounded"><span className="text-xs">❮</span></div>
                <div className="hover:bg-white/10 p-1 rounded"><span className="text-xs">❯</span></div>
            </div>
            <div className="flex-1 text-center text-xs text-gray-300 font-semibold">
                {activeDrive === 'internal' ? 'Internal_Storage/Events' : 'External_Drive/Portfolio'}
            </div>
            <div className="w-20"></div> {/* Spacer */}
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-16 md:w-48 bg-[#252526]/50 backdrop-blur border-r border-[#3e3e42] p-2 md:p-4 flex flex-col space-y-4 text-xs text-gray-400 shrink-0">
                <div>
                    <span className="hidden md:block text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-500">Favorites</span>
                    
                    <div 
                        onClick={() => setActiveDrive('internal')}
                        className={`flex items-center space-x-2 py-1 px-2 rounded cursor-pointer transition-colors ${activeDrive === 'internal' ? 'bg-[#37373d] text-white' : 'hover:bg-[#37373d] text-vscode-text'}`}
                    >
                        <FolderOpen size={14} className={activeDrive === 'internal' ? "text-blue-400" : "text-gray-400"} />
                        <span className="hidden md:block">All Photos</span>
                    </div>

                    <div 
                        onClick={() => setActiveDrive('external')}
                        className={`flex items-center space-x-2 py-1 px-2 rounded cursor-pointer transition-colors ${activeDrive === 'external' ? 'bg-[#37373d] text-white' : 'hover:bg-[#37373d] text-vscode-text'}`}
                    >
                        <HardDrive size={14} className={activeDrive === 'external' ? "text-blue-400" : "text-gray-400"} />
                        <span className="hidden md:block">External Drive</span>
                    </div>
                </div>
                <div className="hidden md:block">
                     <span className="text-[10px] font-bold uppercase tracking-wider mb-2 block text-gray-500">Tags</span>
                     <div className="flex items-center space-x-2 py-1 px-2">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <span>Selects</span>
                     </div>
                     <div className="flex items-center space-x-2 py-1 px-2">
                         <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                         <span>Edited</span>
                     </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="flex-1 bg-[#1e1e1e] p-6 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {currentPhotos.map((photo, i) => (
                        <div key={photo.id} onClick={() => handlePhotoClick(i)} className="group flex flex-col items-center cursor-pointer p-4 rounded-lg hover:bg-[#094771]/30 border border-transparent hover:border-[#094771]/50 transition-all">
                            <div className="relative w-full aspect-square bg-[#252526] rounded shadow-lg overflow-hidden mb-3 border border-gray-700">
                                <img 
                                    src={`https://picsum.photos/400/400?random=${activeDrive === 'internal' ? 30+photo.id : 60+photo.id}`} 
                                    alt={photo.name} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                />
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 size={14} className="text-white drop-shadow-md" />
                                </div>
                            </div>
                            <span className="text-xs text-vscode-text font-medium text-center bg-transparent px-2 rounded group-hover:bg-[#094771] group-hover:text-white truncate max-w-full w-full">
                                {photo.name}
                            </span>
                            <span className="text-[10px] text-gray-500 mt-0.5 group-hover:text-blue-200">{photo.size}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
          {selectedPhotoIndex !== null && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                onClick={closeLightbox}
              >
                  <div className="relative max-w-7xl max-h-full w-full flex flex-col items-center justify-center group" onClick={(e) => e.stopPropagation()}>
                      {/* Close & Controls */}
                      <div className="absolute top-0 right-0 z-20 m-4 flex space-x-4">
                          <button onClick={closeLightbox} className="p-2 bg-red-500/80 rounded-full hover:bg-red-600 text-white transition-colors">
                              <X size={24} />
                          </button>
                      </div>

                      {/* Navigation Buttons */}
                      <button 
                        onClick={handlePrev}
                        className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-20"
                      >
                          <ChevronLeft size={32} />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-20"
                      >
                          <ChevronRight size={32} />
                      </button>
                      
                      <motion.img 
                        key={selectedPhotoIndex}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
                        src={getPhotoUrl(currentPhotos[selectedPhotoIndex].id)} 
                        alt="Full Screen" 
                      />
                      
                      <div className="mt-4 text-center">
                          <h3 className="text-white text-xl font-bold">{currentPhotos[selectedPhotoIndex].name}</h3>
                          <p className="text-gray-400 text-sm">{currentPhotos[selectedPhotoIndex].size}</p>
                          <p className="text-gray-500 text-xs mt-1">
                              {selectedPhotoIndex + 1} / {currentPhotos.length}
                          </p>
                      </div>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
};