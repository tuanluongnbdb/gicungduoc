import React from 'react';
import { motion } from 'motion/react';
import { Bug, ArrowRight, ShieldCheck, Users, DollarSign, Droplet } from 'lucide-react';

export function Slide10A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4"
      >
        <Droplet className="text-blue-500" size={36} />
        Vi khuẩn sản xuất Insulin
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* The Solution */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-b from-blue-50 to-indigo-50 border-blue-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-blue-200 opacity-50"
          >
            <Bug size={140} />
          </motion.div>

          <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-6 shadow-inner relative z-10">
            <Bug size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold text-blue-900 mb-3 relative z-10">Giải pháp (Từ 1978)</h3>
          <p className="text-lg text-blue-800 mb-4 relative z-10 bg-white/60 p-4 rounded-2xl border border-blue-100">Đưa "công thức" vào vi khuẩn để chúng tạo ra insulin giống hệt người.</p>

          <div className="flex flex-col gap-2 w-full mt-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-3 bg-white rounded-2xl shadow-md text-base font-bold text-gray-700 border border-blue-100">Nuôi trong bể lớn (100.000L)</motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto text-blue-400"><ArrowRight size={24} className="rotate-90" /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-3 bg-white rounded-2xl shadow-md text-base font-bold text-gray-700 border border-blue-100">Vi khuẩn sản xuất insulin</motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto text-blue-400"><ArrowRight size={24} className="rotate-90" /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="p-3 bg-white rounded-2xl shadow-md text-base font-bold text-gray-700 border border-blue-100">Thu hoạch sau 2-3 tuần</motion.div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-emerald-200 opacity-50"
          >
            <ShieldCheck size={140} />
          </motion.div>

          <h3 className="font-display text-2xl font-bold text-emerald-900 mb-8 text-center relative z-10">Kết quả hiện nay</h3>

          <div className="space-y-6 relative z-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-4 bg-white/80 p-4 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <Users size={28} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-2xl mb-0.5">70 Triệu</p>
                <p className="text-base text-emerald-700 font-medium">người dùng toàn cầu</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-center gap-4 bg-white/80 p-4 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <DollarSign size={28} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-2xl mb-0.5">10-15 USD</p>
                <p className="text-base text-emerald-700 font-medium">giá giảm mạnh</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-4 bg-white/80 p-4 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-2xl mb-0.5">0%</p>
                <p className="text-base text-emerald-700 font-medium">tỷ lệ dị ứng</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
