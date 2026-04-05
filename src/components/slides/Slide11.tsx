import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, PlaneTakeoff, Eye, Lightbulb, AlertCircle, Calendar, Beaker } from 'lucide-react';

export function Slide11A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Alexander Fleming - Phát hiện tình cờ
      </motion.h2>

      <div className="flex gap-6 flex-1 mt-4">
        {/* The Setup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 flex flex-col gap-4"
        >
          <div className="glass-card p-6 border-l-8 border-l-blue-500 shadow-xl relative overflow-hidden">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 text-blue-100 opacity-50"
            >
              <Calendar size={80} />
            </motion.div>
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-lg font-mono text-base font-bold shadow-sm">1928</span>
              <h3 className="font-bold text-xl">Bối cảnh</h3>
            </div>
            <p className="text-lg text-gray-600 relative z-10">Alexander Fleming, nhà khoa học ở Scotland.</p>
          </div>

          <div className="glass-card p-6 flex-1 bg-gradient-to-br from-gray-50 to-slate-50 flex flex-col justify-center shadow-xl relative overflow-hidden">
            <motion.div 
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 text-slate-200 opacity-50"
            >
              <PlaneTakeoff size={80} />
            </motion.div>
            <div className="flex items-center gap-3 mb-4 text-slate-600 relative z-10">
              <PlaneTakeoff size={28} />
              <h3 className="font-bold text-xl">Chuyện gì xảy ra?</h3>
            </div>
            <ul className="space-y-3 text-lg text-gray-600 relative z-10">
              <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>• Tháng 9/1928, Fleming đi nghỉ mát.</motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>• Trước khi đi, ông nuôi vi khuẩn trong đĩa petri.</motion.li>
              <motion.li 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
                className="text-red-600 font-bold bg-red-50 p-2.5 rounded-lg border border-red-100 shadow-sm"
              >
                • Ông quên không đậy nắp kín!
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* The Discovery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 text-emerald-200 opacity-50"
          >
            <Eye size={100} />
          </motion.div>

          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4 shadow-inner relative z-10">
            <Eye size={28} />
          </div>
          <h3 className="font-display text-2xl font-bold text-emerald-900 mb-6 relative z-10">Khi trở về...</h3>
          
          <div className="w-40 h-40 rounded-full border-8 border-emerald-200 bg-emerald-50/50 relative flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)] z-10">
            {/* Simulated Petri Dish */}
            <div className="absolute inset-2.5 rounded-full border-2 border-emerald-100/50" />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-teal-600/80 rounded-full blur-md absolute" 
            /> {/* Mold */}
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-red-400/50 absolute animate-[spin_20s_linear_infinite]" /> {/* Clear zone */}
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-5 right-5 w-4 h-4 bg-amber-500/60 rounded-full blur-[2px]" /> {/* Bacteria */}
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute top-8 left-8 w-5 h-5 bg-amber-500/60 rounded-full blur-[2px]" /> {/* Bacteria */}
          </div>

          <p className="text-lg text-emerald-800 font-medium mb-2 relative z-10">Thấy nấm mốc mọc trong đĩa.</p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-lg text-emerald-700 font-bold bg-white/80 backdrop-blur-sm p-2.5 rounded-lg shadow-md relative z-10"
          >
            Điều kỳ lạ: Xung quanh nấm mốc KHÔNG CÓ vi khuẩn nào!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide11B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Alexander Fleming - Phát hiện tình cờ
      </motion.h2>

      <div className="flex gap-6 flex-1 mt-4">
        {/* The Result */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ rotate: [0, 15, -15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 text-blue-200 opacity-50"
          >
            <Lightbulb size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-6 text-blue-700 relative z-10">
            <div className="p-2.5 bg-blue-100 rounded-xl shadow-inner">
              <Lightbulb size={28} />
            </div>
            <h3 className="font-bold text-xl">Phát hiện: Penicillin</h3>
          </div>
          <ul className="space-y-4 text-lg text-blue-900/80 relative z-10">
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              • Nấm mốc tên <span className="font-bold italic text-blue-800">Penicillium</span> (nấm xanh trên bánh mì ôi).
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              • Nấm tiết ra một chất giết vi khuẩn.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
              className="bg-white/80 p-3.5 rounded-xl shadow-md border border-blue-100 mt-3"
            >
              • Fleming gọi chất đó là <span className="font-bold text-2xl text-blue-600 block mt-1.5">Penicillin</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* The Problem */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 text-red-200"
          >
            <AlertCircle size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 text-red-600 relative z-10">
            <div className="p-2.5 bg-red-100 rounded-xl shadow-inner">
              <AlertCircle size={28} />
            </div>
            <h3 className="font-bold text-xl">Vấn đề lớn</h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-xl text-red-800 leading-relaxed relative z-10 bg-white/60 p-5 rounded-2xl border border-red-100 shadow-sm"
          >
            Từ 1928 đến 1941, <span className="font-bold text-red-900 bg-red-100 px-2 py-1 rounded-lg">không ai biết cách sản xuất đủ</span> penicillin để làm thuốc.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
