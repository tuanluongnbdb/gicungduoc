import React from 'react';
import { motion } from 'motion/react';
import { Users, Weight, Scaling } from 'lucide-react';

export function Slide2A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 relative z-10"
      >
        <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
          Vi sinh vật là gì?
        </h2>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl"
        >
          Đơn giản thôi — đó là những sinh vật <span className="text-blue-600 font-bold">quá nhỏ để nhìn bằng mắt thường</span>, cần đến kính hiển vi mới thấy được. Chúng bao gồm vi khuẩn, virus, nấm và nhiều loại khác.
        </motion.p>

        <div className="grid grid-cols-2 gap-8">
          <StatCard 
            icon={<Users className="text-blue-500" size={32} />}
            value="38 Nghìn Tỷ"
            label="Vi sinh vật trong cơ thể"
            subLabel="Nhiều hơn cả số tế bào cơ thể"
            delay={0.3}
          />
          <StatCard 
            icon={<Weight className="text-indigo-500" size={32} />}
            value="~2 kg"
            label="Tổng khối lượng"
            subLabel="Chúng ta đang mang theo mà không hề hay biết!"
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, subLabel, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-4xl font-black text-slate-900 mb-2 tabular-nums">{value}</h4>
      <p className="text-slate-800 font-bold text-xl mb-2">{label}</p>
      <p className="text-slate-500 text-base font-medium">{subLabel}</p>
    </motion.div>
  );
}
