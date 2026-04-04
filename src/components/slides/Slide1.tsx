import React from 'react';
import { motion } from 'motion/react';
import { Dna, Microscope, Activity } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
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
        className="z-10 flex flex-col items-center text-center max-w-4xl px-8"
      >
        <div className="flex gap-6 mb-8">
          <div className="p-4 glass-card rounded-2xl text-blue-600">
            <Microscope size={48} strokeWidth={1.5} />
          </div>
          <div className="p-4 glass-card rounded-2xl text-indigo-600">
            <Activity size={48} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="font-display text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Ứng dụng của <br />
          <span className="text-gradient">Công nghệ Vi sinh vật</span> <br />
          trong Y học
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-12" />

        <div className="glass-card px-10 py-6 flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Nhóm thuyết trình</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <p className="text-lg font-semibold text-gray-800">Bùi Minh Nhật</p>
            <p className="text-lg font-semibold text-gray-800">Huỳnh Hạo Hạo</p>
            <p className="text-lg font-semibold text-gray-800">Mai Phương Uyên</p>
            <p className="text-lg font-semibold text-gray-800">Nguyễn Dương Tuấn Luông</p>
          </div>
          <p className="text-gray-500 mt-2 text-sm">{new Date().toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </motion.div>
    </div>
  );
}
