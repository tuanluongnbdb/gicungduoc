import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Heart, Swords, Pill, Syringe, Sparkles } from 'lucide-react';

export function Slide3A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Swords className="text-blue-500" size={32} />
        Vi sinh vật — Kẻ thù hay bạn bè?
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* Misconception */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-8 border-l-8 border-l-red-500 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-red-100 opacity-50"
          >
            <ShieldAlert size={140} />
          </motion.div>

          <div className="flex items-center gap-4 mb-6 text-red-800 relative z-10">
            <div className="p-3 bg-red-100 rounded-2xl shadow-inner">
              <ShieldAlert size={32} />
            </div>
            <h3 className="font-bold text-2xl">Quan niệm sai lầm</h3>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed relative z-10 mb-6">
            Nhiều người nghĩ vi sinh vật <span className="text-red-600 font-bold">toàn gây bệnh</span> — nhưng thực ra điều đó không đúng.
          </p>
          <div className="h-32 rounded-2xl overflow-hidden relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=500" 
              alt="Bacteria under microscope" 
              className="w-full h-full object-cover grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Reality */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-emerald-200 opacity-50"
          >
            <Heart size={140} />
          </motion.div>

          <div className="flex items-center gap-4 mb-6 text-emerald-800 relative z-10">
            <div className="p-3 bg-emerald-100 rounded-2xl shadow-inner">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-2xl text-emerald-900">Sự thật bất ngờ</h3>
          </div>
          
          <div className="flex gap-6 relative z-10 flex-1">
            <ul className="space-y-4 text-lg text-emerald-900/90 bg-white/60 p-6 rounded-3xl border border-emerald-100 flex-1">
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                Hỗ trợ tiêu hóa thức ăn
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                Tổng hợp các vitamin thiết yếu
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                Bảo vệ cơ thể khỏi vi khuẩn xấu
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide3B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Sparkles className="text-purple-500" size={32} />
        Sức mạnh kỳ diệu
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="glass-card p-10 max-w-4xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl relative overflow-hidden rounded-[2rem]"
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 text-white/10"
          >
            <Sparkles size={240} />
          </motion.div>

          <p className="text-3xl font-display font-medium leading-relaxed mb-10 relative z-10">
            Con người đã học cách tận dụng vi sinh vật để tạo ra <span className="text-yellow-300 font-bold">thuốc, vaccine</span>, và nhiều liệu pháp điều trị kỳ diệu khác.
          </p>

          <div className="flex gap-8 items-start relative z-10">
            <div className="grid grid-cols-1 gap-4 w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4"
              >
                <Pill size={32} className="text-blue-200" />
                <p className="font-bold">Thuốc</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4"
              >
                <Syringe size={32} className="text-indigo-200" />
                <p className="font-bold">Vaccine</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4"
              >
                <Sparkles size={32} className="text-purple-200" />
                <p className="font-bold">Liệu pháp mới</p>
              </motion.div>
            </div>
            
            <div className="flex-1 h-48 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Medical research" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
