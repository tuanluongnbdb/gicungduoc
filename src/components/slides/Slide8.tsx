import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, ShieldCheck, AlertCircle, Calendar } from 'lucide-react';

export function Slide8A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <TrendingUp className="text-blue-500" size={32} />
        Penicillin — Từ phòng thí nghiệm đến thế giới
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* The Problem */}
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
            <AlertCircle size={140} />
          </motion.div>

          <div className="flex items-center gap-4 mb-6 text-red-800 relative z-10">
            <div className="p-3 bg-red-100 rounded-2xl shadow-inner">
              <AlertCircle size={32} />
            </div>
            <h3 className="font-bold text-2xl">Vấn đề lớn (1928–1941)</h3>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed relative z-10">
            Suốt 13 năm, <span className="text-red-600 font-bold">không ai biết cách sản xuất đủ</span> penicillin để làm thuốc.
          </p>
        </motion.div>

        {/* The Breakthrough */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-blue-200 opacity-50"
          >
            <Calendar size={140} />
          </motion.div>

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="font-bold text-2xl text-blue-900">Năm 1941</h3>
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-xl text-lg font-bold shadow-sm">Bước ngoặt</span>
          </div>
          
          <p className="text-xl text-gray-700 relative z-10 leading-relaxed bg-white/60 p-6 rounded-3xl border border-blue-100">
            Hai nhà khoa học giải quyết được bài toán <span className="text-blue-600 font-bold">sản xuất hàng loạt</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide8B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <ShieldCheck className="text-emerald-500" size={32} />
        Kết quả vĩ đại
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <ResultCard 
          icon={<TrendingUp size={32} />}
          title="Sản lượng"
          color="blue"
          delay={0.2}
          value="Hàng triệu liều"
          desc="Tăng vọt từ năm 1945"
        />
        <ResultCard 
          icon={<DollarSign size={32} />}
          title="Giá thành"
          color="amber"
          delay={0.4}
          value="< 0,1 USD"
          desc="Giảm hơn 200 lần"
        />
        <ResultCard 
          icon={<Users size={32} />}
          title="Cứu sống"
          color="emerald"
          delay={0.6}
          value="200 Triệu người"
          desc="Ước tính từ năm 1942"
        />
      </div>
    </div>
  );
}

function ResultCard({ icon, title, value, desc, color, delay }: any) {
  const colorStyles = {
    blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-600 bg-blue-100",
    amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-600 bg-amber-100",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-600 bg-emerald-100",
  }[color as string];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`glass-card p-8 bg-gradient-to-br ${colorStyles?.split(' ')[0]} ${colorStyles?.split(' ')[1]} ${colorStyles?.split(' ')[2]} flex flex-col items-center text-center h-full shadow-2xl relative overflow-hidden`}
    >
      <div className={`p-4 rounded-2xl shadow-inner mb-6 ${colorStyles?.split(' ')[4]} ${colorStyles?.split(' ')[3]}`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl text-gray-500 mb-4 uppercase tracking-widest">{title}</h3>
      <p className={`text-4xl font-black mb-2 ${colorStyles?.split(' ')[3]}`}>{value}</p>
      <p className="text-lg text-gray-600 font-medium">{desc}</p>
    </motion.div>
  );
}
