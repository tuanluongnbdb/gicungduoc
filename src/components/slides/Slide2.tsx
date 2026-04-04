import React from 'react';
import { motion } from 'motion/react';
import { Users, Weight, EyeOff, Scaling } from 'lucide-react';

export function Slide2A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-20 blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-20 blur-xl"
      />

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-3"
      >
        Vi sinh vật là gì?
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 mb-6 flex items-center gap-3"
      >
        <EyeOff className="text-blue-500 w-5 h-5" />
        Những sinh vật rất nhỏ, không thể nhìn thấy bằng mắt thường.
      </motion.p>

      <div className="grid grid-cols-3 gap-4 mt-auto mb-auto">
        <StatCard 
          icon={<Users size={28} />}
          value="38 Nghìn Tỷ"
          label="Vi sinh vật trong cơ thể"
          delay={0.3}
          color="blue"
        />
        <StatCard 
          icon={<Weight size={28} />}
          value="2 kg"
          label="Tổng khối lượng"
          delay={0.4}
          color="indigo"
        />
        <StatCard 
          icon={<Scaling size={28} />}
          value="> Tế bào"
          label="Nhiều hơn tế bào người"
          delay={0.5}
          color="purple"
        />
      </div>
    </div>
  );
}

export function Slide2B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        So sánh kích thước
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card flex-1 p-6 flex flex-col justify-center relative overflow-hidden shadow-2xl"
      >
        <div className="flex items-end justify-center gap-12 h-40 relative z-10">
          <div className="flex flex-col items-center gap-3">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 140 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="w-12 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t-xl relative shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)]"
            >
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium text-gray-600 text-base"
              >
                Cây dừa
              </motion.span>
            </motion.div>
            <span className="font-bold text-lg text-gray-800">Sợi tóc người</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <motion.div 
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
              className="w-6 h-12 bg-gradient-to-t from-blue-400 to-blue-500 rounded-full relative shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.3),5px_10px_15px_rgba(0,0,0,0.2)]"
            >
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium text-blue-600 text-base"
              >
                Hạt gạo
              </motion.span>
            </motion.div>
            <span className="font-bold text-lg text-blue-800">Vi khuẩn</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <motion.div 
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 1.1, type: "spring", bounce: 0.6 }}
              className="w-2.5 h-2.5 bg-gradient-to-t from-purple-400 to-purple-500 rounded-full relative shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.3),2px_5px_5px_rgba(0,0,0,0.2)]"
            >
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium text-purple-600 text-base"
              >
                Hạt cát
              </motion.span>
            </motion.div>
            <span className="font-bold text-lg text-purple-800">Virus</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon, value, label, delay, color }: any) {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50/80 border-blue-100 shadow-blue-500/20",
    indigo: "text-indigo-600 bg-indigo-50/80 border-indigo-100 shadow-indigo-500/20",
    purple: "text-purple-600 bg-purple-50/80 border-purple-100 shadow-purple-500/20",
  }[color as string];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`glass-card p-4 flex flex-col items-center text-center border shadow-xl ${colorClasses}`}
    >
      <div className="mb-3 p-2 bg-white/90 rounded-xl shadow-sm backdrop-blur-sm">
        {icon}
      </div>
      <h4 className="font-display text-2xl font-bold mb-1.5">{value}</h4>
      <p className="text-gray-700 font-medium text-sm">{label}</p>
    </motion.div>
  );
}
