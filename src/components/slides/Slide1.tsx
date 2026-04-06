import React from 'react';
import { motion } from 'motion/react';
import { Dna, Microscope, Activity } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
          alt="Laboratory Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] opacity-10 text-blue-500"
      >
        <Dna size={600} strokeWidth={0.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 flex flex-col items-center text-center max-w-4xl px-6"
      >
        <div className="flex items-center gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="p-3 glass-card rounded-2xl text-blue-600 shadow-lg">
                <Microscope size={32} strokeWidth={1.5} />
              </div>
              <div className="p-3 glass-card rounded-2xl text-indigo-600 shadow-lg">
                <Activity size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Kỷ nguyên mới của Y học: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Khai phá tiềm năng từ thế giới vi sinh vật</span>
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6" />

        <div className="glass-card px-6 py-3 flex flex-col items-center gap-2">
          <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Nhóm thuyết trình</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <p className="text-sm font-semibold text-gray-800">Bùi Minh Nhật</p>
            <p className="text-sm font-semibold text-gray-800">Huỳnh Hạo Hạo</p>
            <p className="text-sm font-semibold text-gray-800">Mai Phương Uyên</p>
            <p className="text-sm font-semibold text-gray-800">Nguyễn Dương Tuấn Luông</p>
          </div>
          <p className="text-gray-500 mt-1 text-[10px]">{new Date().toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </motion.div>
    </div>
  );
}
