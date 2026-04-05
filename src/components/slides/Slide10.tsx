import React from 'react';
import { motion } from 'motion/react';
import { Bug, ShieldCheck, Search, ArrowDownToLine, Zap, Copy, Bomb, Repeat, ThumbsUp, Microscope } from 'lucide-react';

export function Slide10A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Thực khuẩn thể là gì?
      </motion.h2>

      <div className="flex gap-6 flex-1 items-stretch">
        {/* Definition & Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4 text-indigo-700 relative z-10">
            <Bug size={28} />
            <h3 className="font-bold text-xl">Giải thích đơn giản</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-4 relative z-10">
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Thực khuẩn thể là virus nhỏ. Chúng <span className="text-indigo-600 font-bold text-xl bg-indigo-100 px-2 py-0.5 rounded-lg">chỉ ăn vi khuẩn</span>.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-indigo-200 text-base text-gray-600 italic shadow-lg relative z-10 mt-4"
          >
            "Giống như kiến chỉ ăn đường, không ăn thịt. Thực khuẩn thể chỉ tấn công vi khuẩn, không tấn công tế bào người."
          </motion.div>
        </motion.div>

        {/* Stats & 3D Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 flex flex-col shadow-2xl relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950 text-white"
        >
          <h3 className="font-bold text-xl mb-6 relative z-10 text-blue-300">Lịch sử & Hiệu quả</h3>
          
          <div className="space-y-3 relative z-10 mb-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-base text-blue-100/80">Sử dụng từ năm</span>
              <span className="font-display font-bold text-2xl text-blue-400">1923</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-base text-blue-100/80">Bệnh nhân điều trị</span>
              <span className="font-display font-bold text-2xl text-blue-400">&gt; 100,000</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex justify-between items-center bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/30">
              <span className="text-base text-emerald-100 font-bold">Tỷ lệ thành công</span>
              <span className="font-display font-bold text-3xl text-emerald-400 drop-shadow-md">80-95%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide10B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <div className="scale-[0.7] origin-top w-[142.8%] h-[142.8%] -ml-[21.4%] mt-[8%]">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-4xl font-bold text-gray-900 mb-6"
        >
          Cách Thực khuẩn thể hoạt động & Ưu điểm
        </motion.h2>

        <div className="flex gap-6 flex-1 items-stretch h-[calc(100%-80px)]">
          {/* The Cycle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-3/5 glass-card p-5 bg-slate-900 text-white relative overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="font-display text-2xl font-bold text-center mb-4 text-blue-300 relative z-10">Chu trình tiêu diệt vi khuẩn</h3>
            
            <div className="grid grid-cols-2 gap-3 relative z-10 flex-1 content-center">
              <CycleStep num={1} icon={<Search size={18} />} text="Tìm thấy vi khuẩn" delay={0.4} />
              <CycleStep num={2} icon={<ArrowDownToLine size={18} />} text="Bám vào vi khuẩn" delay={0.5} />
              <CycleStep num={3} icon={<Zap size={18} />} text="Tiêm 'thông tin'" delay={0.6} />
              <CycleStep num={4} icon={<Copy size={18} />} text="Tạo thực thể mới" delay={0.7} />
              <CycleStep num={5} icon={<Bomb size={18} />} text="Vi khuẩn chết" delay={0.8} highlight />
              <CycleStep num={6} icon={<Repeat size={18} />} text="Tìm mục tiêu mới" delay={0.9} />
            </div>
          </motion.div>

          {/* Advantages & Visual */}
          <div className="w-2/5 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col shadow-2xl flex-1"
            >
              <div className="flex items-center gap-3 mb-4 text-emerald-700">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  <ThumbsUp size={28} />
                </motion.div>
                <h3 className="font-display text-xl font-bold">Tại sao tốt?</h3>
              </div>

              <div className="space-y-4">
                <AdvantageItem icon={<ShieldCheck size={20} />} title="Khó kháng thuốc" text="Vi khuẩn khó kháng hơn kháng sinh." delay={0.6} />
                <AdvantageItem icon={<ShieldCheck size={20} />} title="Rất an toàn" text="Không hại tế bào người." delay={0.7} />
                <AdvantageItem icon={<ShieldCheck size={20} />} title="Chi phí thấp" text="Rẻ hơn thuốc mới." delay={0.8} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="h-[120px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group bg-emerald-900/60 flex flex-col items-center justify-center p-4 text-center"
            >
              <Microscope size={32} className="text-emerald-300 mb-1" />
              <p className="text-white font-bold text-xl drop-shadow-lg">Liệu pháp Phage</p>
              <p className="text-emerald-100 text-sm">Vũ khí chống siêu vi khuẩn.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvantageItem({ icon, title, text, delay }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }} className="flex items-start gap-3">
      <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg shrink-0 shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-emerald-900">{title}</h4>
        <p className="text-base text-emerald-800/70 leading-tight">{text}</p>
      </div>
    </motion.div>
  );
}

function CycleStep({ num, icon, text, delay, highlight = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring" }}
      className={`flex items-center gap-5 p-5 rounded-3xl ${highlight ? 'bg-red-600 border-2 border-red-300 shadow-[0_0_30px_rgba(239,68,68,0.6)]' : 'bg-slate-800 border-2 border-blue-500/50 shadow-xl'}`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-2xl shrink-0 shadow-lg ${highlight ? 'bg-white text-red-600' : 'bg-blue-500 text-white'}`}>
        {num}
      </div>
      <div className={highlight ? 'text-white' : 'text-blue-300'}>
        {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 2.5 })}
      </div>
      <span className={`text-xl font-bold tracking-tight text-white drop-shadow-sm`}>{text}</span>
    </motion.div>
  );
}
