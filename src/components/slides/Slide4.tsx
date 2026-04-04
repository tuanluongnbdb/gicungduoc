import React from 'react';
import { motion } from 'motion/react';
import { Syringe, Activity, Users, HelpCircle, History, FlaskConical } from 'lucide-react';

export function Slide4A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-32 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 opacity-30 blur-2xl"
      />

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Coley thử nghiệm ý tưởng
      </motion.h2>

      <div className="flex flex-1 gap-6 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-3/5 glass-card p-6 flex flex-col shadow-2xl relative"
        >
          <div className="absolute -top-3 -left-3 bg-indigo-500 text-white p-2.5 rounded-xl shadow-lg -rotate-12">
            <FlaskConical size={20} />
          </div>
          <div className="mb-4">
            <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-full font-mono text-base font-bold shadow-inner">Năm 1893</span>
            <h3 className="font-display text-xl font-bold mt-3 text-gray-800">Bắt đầu điều trị</h3>
            <p className="text-base text-gray-500 mt-0.5">Dựa trên 47 ca tương tự trong y văn</p>
          </div>

          <div className="flex-1 flex flex-col gap-3 relative pl-2">
            <div className="absolute left-[23px] top-5 bottom-5 w-0.5 bg-indigo-100 rounded-full" />
            
            <ProcessStep icon={<Syringe size={18} />} text="Lấy vi khuẩn, làm chết chúng" delay={0.4} />
            <ProcessStep icon={<Activity size={18} />} text="Tiêm vào khối u của bệnh nhân" delay={0.6} />
            <ProcessStep icon={<Activity size={18} className="text-red-500" />} text="Bệnh nhân bị sốt cao" delay={0.8} />
            <ProcessStep icon={<Activity size={18} className="text-green-500" />} text="Khối u bắt đầu nhỏ lại" delay={1.0} isLast />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="w-2/5 flex justify-center items-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 h-40 bg-gradient-to-br from-indigo-100 to-white rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),10px_20px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border-4 border-white"
          >
            <Syringe size={64} className="text-indigo-400 drop-shadow-xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide4B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8"
      >
        Kết quả & Thách thức
      </motion.h2>

      <div className="flex flex-1 gap-8">
        {/* Left - Results */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6 text-green-700">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Users size={32} />
            </motion.div>
            <h3 className="font-display text-2xl font-bold">Kết quả (Trong 40 năm)</h3>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100">
              <p className="font-display text-4xl font-bold text-green-600 mb-1">&gt; 1,000</p>
              <p className="text-base font-medium text-gray-600">Bệnh nhân được điều trị</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100">
              <p className="font-display text-4xl font-bold text-emerald-600 mb-1">10-20%</p>
              <p className="text-base font-medium text-gray-600">Khỏi hoàn toàn</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100">
              <p className="font-display text-3xl font-bold text-teal-600 mb-1">20-30 năm</p>
              <p className="text-base font-medium text-gray-600">Thời gian sống thêm của một số ca</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - The Problem */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-gray-50 to-slate-100 border-gray-200 flex flex-col shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6 text-gray-700">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <HelpCircle size={32} />
            </motion.div>
            <h3 className="font-display text-2xl font-bold">Vấn đề</h3>
          </div>

          <ul className="space-y-4 mb-auto">
            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-start gap-3 text-gray-700 text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400 mt-2 shrink-0 shadow-sm" />
              <p>Đôi khi hiệu quả, đôi khi không</p>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-start gap-3 text-gray-700 text-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400 mt-2 shrink-0 shadow-sm" />
              <p>Không ai hiểu tại sao phương pháp này hoạt động</p>
            </motion.li>
          </ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="mt-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-2 text-slate-500 mb-3">
              <History size={20} />
              <span className="font-mono text-lg font-bold">1940s</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">Khi hóa trị và xạ trị ra đời, mọi người dần quên mất phương pháp của Coley.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ProcessStep({ icon, text, delay, isLast = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring" }}
      className="flex items-center gap-3 relative z-10"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
        {icon}
      </div>
      <div className="flex-1 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl text-base font-medium text-gray-800 shadow-sm border border-white">
        {text}
      </div>
    </motion.div>
  );
}
