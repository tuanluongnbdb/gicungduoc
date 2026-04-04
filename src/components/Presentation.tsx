import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { slides } from './slides';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoScale, setAutoScale] = useState(1);
  const [userScale, setUserScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Base resolution of slides: 1280x720 (16:9)
        const availableHeight = clientHeight - (isFullscreen ? 0 : 60); // Leave space for controls if not fullscreen
        const scaleX = clientWidth / 1280;
        const scaleY = availableHeight / 720;
        setAutoScale(Math.min(scaleX, scaleY) * (isFullscreen ? 1 : 0.98)); // Increased to 0.98 for maximum visibility
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [isFullscreen]);

  const toggleFullScreen = () => {
    if (isFullscreen) {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => setIsFullscreen(false));
      } else {
        setIsFullscreen(false);
      }
    } else {
      try {
        const docEl = document.documentElement as any;
        const promise = (docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.msRequestFullscreen)?.call(docEl);
        if (promise) {
          promise.catch(() => {
            // Fallback to CSS fullscreen if native fails (e.g., in iframe)
            setIsFullscreen(true);
          });
        } else {
          setIsFullscreen(true);
        }
      } catch (e) {
        setIsFullscreen(true);
      }
    }
  };

  const handleZoomIn = () => setUserScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setUserScale(prev => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setUserScale(1);

  const CurrentSlideComponent = slides[currentSlide];

  const finalScale = autoScale * userScale;

  return (
    <div className={`flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 ${
      isFullscreen 
        ? 'fixed inset-0 z-[100] bg-[#f5f5f7] p-0' 
        : 'w-screen h-screen'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/10 blur-[100px] pointer-events-none" />
      
      {/* Main Slide Container Wrapper */}
      <div ref={containerRef} className="w-full h-full flex-1 flex items-center justify-center relative z-10 pb-12">
        <div 
          style={{ 
            width: 1280, 
            height: 720, 
            transform: `scale(${finalScale})`,
            transformOrigin: 'center center'
          }}
          className={`glass-panel relative overflow-hidden flex flex-col shrink-0 shadow-2xl transition-transform duration-300 ease-out ${isFullscreen ? 'rounded-none border-none' : ''}`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full absolute inset-0"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-4 py-2 rounded-full z-50 transition-all duration-500 ${
        isFullscreen ? 'bottom-6' : 'bottom-4'
      }`}>
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1.5 skeuo-button disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 hover:text-blue-600"
        >
          <ChevronLeft size={18} />
        </button>
        
        <div className="flex items-center gap-1 px-3 font-mono text-xs text-gray-500 font-medium">
          <span className="text-gray-900">{currentSlide + 1}</span>
          <span className="opacity-40">/</span>
          <span>{slides.length}</span>
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-1.5 skeuo-button disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 hover:text-blue-600"
        >
          <ChevronRight size={18} />
        </button>

        <div className="w-px h-4 bg-gray-300 mx-1" />

        <button 
          onClick={toggleFullScreen}
          className="p-1.5 skeuo-button text-gray-700 hover:text-blue-600"
          title={isFullscreen ? "Thu nhỏ" : "Phóng to"}
        >
          {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>

        <div className="w-px h-4 bg-gray-300 mx-1" />

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleZoomOut}
            className="p-1.5 skeuo-button text-gray-700 hover:text-blue-600"
            title="Thu nhỏ nội dung"
          >
            <ZoomOut size={16} />
          </button>
          
          <div className="flex items-center gap-2 group relative">
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.01" 
              value={userScale} 
              onChange={(e) => setUserScale(parseFloat(e.target.value))}
              className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-[10px] font-mono text-gray-500 w-8 text-center">
              {Math.round(userScale * 100)}%
            </span>
          </div>

          <button 
            onClick={handleZoomIn}
            className="p-1.5 skeuo-button text-gray-700 hover:text-blue-600"
            title="Phóng to nội dung"
          >
            <ZoomIn size={16} />
          </button>

          <button 
            onClick={resetZoom}
            className="p-1.5 skeuo-button text-gray-700 hover:text-blue-600"
            title="Đặt lại tỷ lệ"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
