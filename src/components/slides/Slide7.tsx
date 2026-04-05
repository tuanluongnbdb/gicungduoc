import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, PlaneTakeoff, Eye, Lightbulb, AlertCircle, Calendar, Beaker } from 'lucide-react';

export function Slide7A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <FlaskConical className="text-blue-500" size={32} />
        Alexander Fleming - Phát hiện tình cờ
      </motion.h2>

      <div className="flex gap-8 flex-1 mt-4">
        {/* The Setup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 flex flex-col gap-6"
        >
          <div className="glass-card p-8 border-l-8 border-l-blue-500 shadow-2xl relative overflow-hidden">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 text-blue-100 opacity-50"
            >
              <Calendar size={100} />
            </motion.div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-xl font-mono text-lg font-bold shadow-sm">1928</span>
              <h3 className="font-bold text-2xl">Bối cảnh</h3>
            </div>
            <p className="text-xl text-gray-700 relative z-10 leading-relaxed">
              Tháng 9/1928, Fleming đi nghỉ mát và <span className="text-red-600 font-bold">quên đậy nắp đĩa petri</span> đang nuôi vi khuẩn.
            </p>
          </div>

          <div className="glass-card p-8 flex-1 bg-gradient-to-br from-gray-50 to-slate-50 flex flex-col justify-center shadow-2xl relative overflow-hidden">
            <motion.div 
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 text-slate-200 opacity-50"
            >
              <PlaneTakeoff size={100} />
            </motion.div>
            <div className="flex items-center gap-4 mb-6 text-slate-600 relative z-10">
              <Eye size={32} />
              <h3 className="font-bold text-2xl">Khi trở về...</h3>
            </div>
            <div className="flex gap-4 items-center relative z-10">
              <p className="text-xl text-gray-700 leading-relaxed flex-1">
                Ông thấy nấm mốc mọc trong đĩa — và điều kỳ lạ: <span className="text-emerald-600 font-bold">xung quanh chỗ nấm mọc không có vi khuẩn nào</span>.
              </p>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=200" 
                  alt="Microbiology lab discovery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Discovery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-emerald-200 opacity-50"
          >
            <Lightbulb size={140} />
          </motion.div>

          <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-inner relative z-10">
            <Lightbulb size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold text-emerald-900 mb-8 relative z-10">Penicillin</h3>
          
          <div className="w-48 h-48 rounded-full border-8 border-emerald-200 bg-emerald-50/50 relative flex items-center justify-center mb-8 shadow-[inset_0_0_30px_rgba(16,185,129,0.2)] z-10">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-teal-600/80 rounded-full blur-md absolute" 
            />
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-red-400/50 absolute animate-[spin_20s_linear_infinite]" />
            <p className="text-white font-black text-2xl drop-shadow-lg z-20">NẤM MỐC</p>
          </div>

          <p className="text-2xl text-emerald-800 font-bold mb-4 relative z-10">Phát hiện tình cờ vĩ đại!</p>
          <p className="text-lg text-emerald-700 font-medium relative z-10">Loại nấm mốc <span className="italic">Penicillium</span> hay mọc trên bánh mì ôi.</p>
        </motion.div>
      </div>
    </div>
  );
}
