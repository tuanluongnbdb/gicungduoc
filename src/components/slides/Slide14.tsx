import React from 'react';
import { motion } from 'motion/react';
import { Activity, ArrowRight, Bug, PiggyBank, Droplet, Users, DollarSign, ShieldCheck, AlertTriangle } from 'lucide-react';

export function Slide14A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12 flex items-center gap-6"
      >
        <Droplet className="text-blue-500" size={48} />
        Insulin - Từ lợn đến vi khuẩn (Phần 1)
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* The Problem */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-10 border-l-8 border-l-blue-500 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-100 opacity-50"
          >
            <Activity size={200} />
          </motion.div>

          <div className="flex items-center gap-4 mb-8 text-blue-800 relative z-10">
            <div className="p-4 bg-blue-100 rounded-2xl shadow-inner">
              <Activity size={40} />
            </div>
            <h3 className="font-bold text-4xl">Đái tháo đường</h3>
          </div>
          <div className="bg-white/80 p-8 rounded-3xl shadow-sm border border-blue-100 relative z-10">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">Cơ thể không tạo được insulin (chất điều chỉnh đường huyết).</p>
            <div className="flex items-center gap-4 p-6 bg-red-50 rounded-2xl border border-red-200">
              <AlertTriangle className="text-red-500" size={32} />
              <p className="text-2xl font-bold text-red-600">Không có insulin = Nguy cơ tử vong.</p>
            </div>
          </div>
        </motion.div>

        {/* The Past */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-br from-rose-50 to-red-50 border-rose-200 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-rose-200 opacity-50"
          >
            <PiggyBank size={200} />
          </motion.div>

          <div className="flex items-center justify-between mb-8 relative z-10">
            <h3 className="font-bold text-4xl text-rose-900">Trước năm 1978</h3>
            <span className="px-4 py-2 bg-rose-200 text-rose-800 rounded-xl text-lg font-bold shadow-sm">Quá khứ</span>
          </div>
          
          <div className="flex items-center gap-6 mb-8 p-6 bg-white/80 rounded-3xl shadow-sm border border-rose-100 relative z-10">
            <div className="p-4 bg-rose-100 rounded-2xl shadow-inner">
              <PiggyBank className="text-rose-600" size={40} />
            </div>
            <p className="text-2xl font-bold text-rose-900">Lấy từ tụy lợn và bò</p>
          </div>

          <ul className="space-y-6 text-xl text-rose-800/90 relative z-10 bg-white/60 p-8 rounded-3xl border border-rose-100 flex-1">
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-rose-400" /> 1 bệnh nhân cần 2-3 con lợn/năm</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-rose-400" /> Rất đắt (100 USD/lọ năm 1970)</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full bg-rose-400" /> Không đủ cho tất cả bệnh nhân</li>
            <li className="flex items-center gap-4 text-red-600 font-bold bg-red-50 p-4 rounded-xl border border-red-100"><AlertTriangle size={24} /> 5-10% bệnh nhân bị dị ứng</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide14B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12 flex items-center gap-6"
      >
        <Droplet className="text-blue-500" size={48} />
        Insulin - Từ lợn đến vi khuẩn (Phần 2)
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* The Solution */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-b from-blue-50 to-indigo-50 border-blue-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-blue-200 opacity-50"
          >
            <Bug size={180} />
          </motion.div>

          <div className="p-6 bg-blue-100 text-blue-600 rounded-full mb-8 shadow-inner relative z-10">
            <Bug size={48} />
          </div>
          <h3 className="font-display text-4xl font-bold text-blue-900 mb-4 relative z-10">Giải pháp (Từ 1978)</h3>
          <p className="text-xl text-blue-800 mb-10 relative z-10 bg-white/60 p-6 rounded-2xl border border-blue-100">Đưa "công thức" vào vi khuẩn để chúng tạo ra insulin giống hệt người.</p>

          <div className="flex flex-col gap-4 w-full mt-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-6 bg-white rounded-2xl shadow-md text-xl font-bold text-gray-700 border border-blue-100">Nuôi vi khuẩn trong bể lớn</motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto text-blue-400"><ArrowRight size={32} className="rotate-90" /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-6 bg-white rounded-2xl shadow-md text-xl font-bold text-gray-700 border border-blue-100">Vi khuẩn sản xuất insulin</motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto text-blue-400"><ArrowRight size={32} className="rotate-90" /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="p-6 bg-white rounded-2xl shadow-md text-xl font-bold text-gray-700 border border-blue-100">Thu hoạch insulin</motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-xl text-2xl font-bold shadow-inner border border-blue-200">Chỉ 2-3 tuần/mẻ!</motion.div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-emerald-200 opacity-50"
          >
            <ShieldCheck size={200} />
          </motion.div>

          <h3 className="font-display text-4xl font-bold text-emerald-900 mb-12 text-center relative z-10">Kết quả hiện nay</h3>

          <div className="space-y-8 relative z-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-6 bg-white/80 p-6 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <Users size={40} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-4xl mb-1">70 Triệu</p>
                <p className="text-xl text-emerald-700 font-medium">người dùng trên thế giới</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-center gap-6 bg-white/80 p-6 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <DollarSign size={40} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-4xl mb-1">10-15 USD</p>
                <p className="text-xl text-emerald-700 font-medium">giá giảm mạnh (từ 100$)</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-6 bg-white/80 p-6 rounded-3xl shadow-md border border-emerald-100 transform hover:scale-105 transition-transform">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                <ShieldCheck size={40} />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-4xl mb-1">0%</p>
                <p className="text-xl text-emerald-700 font-medium">không còn ai bị dị ứng</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
