import React from 'react';
import { motion } from 'motion/react';
import { Activity, AlertTriangle, PiggyBank, DollarSign, Users, Droplet } from 'lucide-react';

export function Slide9A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4"
      >
        <Droplet className="text-blue-500" size={36} />
        Insulin - Từ lợn đến vi khuẩn
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* The Problem */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 border-l-8 border-l-blue-500 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-100 opacity-50"
          >
            <Activity size={140} />
          </motion.div>

          <div className="flex items-center gap-3 mb-6 text-blue-800 relative z-10">
            <div className="p-3 bg-blue-100 rounded-2xl shadow-inner">
              <Activity size={28} />
            </div>
            <h3 className="font-bold text-2xl">Đái tháo đường</h3>
          </div>
          <div className="bg-white/80 p-6 rounded-3xl shadow-sm border border-blue-100 relative z-10">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">Cơ thể không tạo được insulin (chất điều chỉnh đường huyết).</p>
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-200">
              <AlertTriangle className="text-red-500" size={24} />
              <p className="text-lg font-bold text-red-600">Không có insulin = Nguy cơ tử vong.</p>
            </div>
          </div>
        </motion.div>

        {/* The Past */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-rose-50 to-red-50 border-rose-200 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-rose-200 opacity-50"
          >
            <PiggyBank size={140} />
          </motion.div>

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="font-bold text-2xl text-rose-900">Trước năm 1978</h3>
            <span className="px-3 py-1 bg-rose-200 text-rose-800 rounded-xl text-base font-bold shadow-sm">Quá khứ</span>
          </div>
          
          <div className="flex gap-4 items-center mb-6 relative z-10">
            <div className="flex items-center gap-4 p-4 bg-white/80 rounded-3xl shadow-sm border border-rose-100 flex-1">
              <div className="p-3 bg-rose-100 rounded-2xl shadow-inner">
                <PiggyBank className="text-rose-600" size={28} />
              </div>
              <p className="text-xl font-bold text-rose-900">Lấy từ tụy lợn và bò</p>
            </div>
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200" 
                alt="Pig pancreas source" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <ul className="space-y-4 text-lg text-rose-800/90 relative z-10 bg-white/60 p-6 rounded-3xl border border-rose-100 flex-1">
            <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-rose-400" /> 1 bệnh nhân cần 2-3 con lợn/năm</li>
            <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Rất đắt (100 USD/lọ năm 1970)</li>
            <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Không đủ cho tất cả bệnh nhân</li>
            <li className="flex items-center gap-3 text-red-600 font-bold bg-red-50 p-3 rounded-xl border border-red-100"><AlertTriangle size={20} /> 5-10% bệnh nhân bị dị ứng</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
