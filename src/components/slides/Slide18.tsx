import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, MessageCircleQuestion, Leaf, Sparkles } from 'lucide-react';

export function Slide18A() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-teal-50/50 p-12">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-10%] opacity-10 text-emerald-500"
      >
        <Leaf size={600} strokeWidth={0.5} />
      </motion.div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] opacity-10 text-teal-500"
      >
        <Leaf size={500} strokeWidth={0.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="z-10 flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-8 glass-card rounded-full text-emerald-600 mb-10 shadow-2xl border-4 border-white"
        >
          <HeartHandshake size={80} strokeWidth={1.5} />
        </motion.div>

        <h1 className="font-display text-7xl font-bold tracking-tight text-gray-900 mb-16 drop-shadow-sm">
          Cảm ơn các bạn đã lắng nghe!
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="glass-card p-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden rounded-3xl"
        >
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" 
          />
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-emerald-200" size={28} />
            <p className="text-xl uppercase tracking-widest text-emerald-200 font-bold">Thông điệp cuối</p>
            <Sparkles className="text-emerald-200" size={28} />
          </div>
          <p className="text-4xl font-display font-medium leading-relaxed">
            "Cần ngừng cuộc chiến chống lại vi sinh, thay vào đó hãy <span className="text-emerald-200 font-bold drop-shadow-md">cân bằng, chung sống hòa bình</span>, tận dụng lợi khuẩn để bảo vệ sức khỏe và môi trường."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Slide18B() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-12">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500"
      >
        <MessageCircleQuestion size={800} strokeWidth={0.2} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="z-10 flex flex-col items-center text-center"
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-10 glass-card rounded-full text-blue-600 mb-12 shadow-2xl border-4 border-white bg-white/80"
        >
          <MessageCircleQuestion size={100} strokeWidth={1.5} />
        </motion.div>

        <h1 className="font-display text-7xl font-bold tracking-tight text-gray-900 mb-8 drop-shadow-sm">
          Q&A
        </h1>
        
        <p className="text-3xl text-gray-600 font-medium bg-white/60 px-10 py-5 rounded-full shadow-md border border-white">
          Các bạn có câu hỏi nào không?
        </p>
      </motion.div>
    </div>
  );
}
