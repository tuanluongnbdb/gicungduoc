import React from 'react';
import { motion } from 'motion/react';
import { Bug, ShieldCheck, Search, ArrowDownToLine, Zap, Copy, Bomb, Repeat, ThumbsUp, Microscope } from 'lucide-react';

export function Slide10A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Phage là gì?
      </motion.h2>

      <div className="flex gap-12 flex-1">
        {/* Definition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-2xl relative overflow-hidden flex flex-col"
        >
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 text-indigo-200 opacity-50"
          >
            <Bug size={150} />
          </motion.div>

          <div className="flex items-center gap-4 mb-8 text-indigo-700 relative z-10">
            <Bug size={40} />
            <h3 className="font-bold text-3xl">Giải thích đơn giản</h3>
          </div>
          <p className="text-2xl text-gray-700 font-medium mb-8 relative z-10 leading-relaxed">
            Phage là virus nhỏ. Chúng <span className="text-indigo-600 font-bold text-3xl bg-indigo-100 px-2 py-1 rounded-lg">chỉ ăn vi khuẩn</span>.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-200 text-xl text-gray-600 italic shadow-lg relative z-10 mt-auto"
          >
            "Giống như kiến chỉ ăn đường, không ăn thịt. Phage chỉ tấn công vi khuẩn, không tấn công tế bào người."
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-10 flex flex-col justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-blue-100 opacity-50"
          >
            <Microscope size={150} />
          </motion.div>

          <h3 className="font-bold text-3xl text-gray-800 mb-10 relative z-10">Lịch sử & Hiệu quả (tại Georgia)</h3>
          <div className="space-y-8 relative z-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex justify-between items-center border-b-2 border-gray-100 pb-4">
              <span className="text-2xl text-gray-600">Sử dụng từ năm</span>
              <span className="font-mono font-bold text-3xl text-blue-600">1923</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex justify-between items-center border-b-2 border-gray-100 pb-4">
              <span className="text-2xl text-gray-600">Bệnh nhân điều trị</span>
              <span className="font-mono font-bold text-3xl text-blue-600">&gt; 100,000</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex justify-between items-center bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <span className="text-2xl text-emerald-800 font-bold">Tỷ lệ thành công</span>
              <span className="font-mono font-bold text-5xl text-emerald-600 drop-shadow-md">80-95%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide10B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Cách Phage hoạt động & Ưu điểm
      </motion.h2>

      <div className="flex gap-12 flex-1">
        {/* The Cycle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-10 bg-slate-800 text-white relative overflow-hidden shadow-2xl flex flex-col"
        >
          <h3 className="font-display text-3xl font-bold text-center mb-10 text-blue-300">Chu trình tiêu diệt vi khuẩn</h3>
          
          <div className="flex flex-col gap-6 relative z-10 flex-1 justify-center">
            <CycleStep num={1} icon={<Search size={24} />} text="Phage tìm thấy vi khuẩn" delay={0.4} />
            <CycleStep num={2} icon={<ArrowDownToLine size={24} />} text="Bám vào vi khuẩn" delay={0.5} />
            <CycleStep num={3} icon={<Zap size={24} />} text="Tiêm 'thông tin' vào trong" delay={0.6} />
            <CycleStep num={4} icon={<Copy size={24} />} text="Vi khuẩn tạo ra phage mới" delay={0.7} />
            <CycleStep num={5} icon={<Bomb size={24} />} text="Vi khuẩn nổ tung, chết" delay={0.8} highlight />
            <CycleStep num={6} icon={<Repeat size={24} />} text="Phage mới đi tìm vi khuẩn khác" delay={0.9} />
          </div>
        </motion.div>

        {/* Advantages */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col justify-center shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-12 text-emerald-700">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ThumbsUp size={48} />
            </motion.div>
            <h3 className="font-display text-3xl font-bold">Tại sao phương pháp này tốt?</h3>
          </div>

          <div className="space-y-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-start gap-6">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0 shadow-inner">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-emerald-900 mb-2">Khó kháng thuốc</h4>
                <p className="text-xl text-emerald-800/80">Vi khuẩn khó kháng phage hơn kháng sinh thông thường.</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-start gap-6">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0 shadow-inner">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-emerald-900 mb-2">Rất an toàn</h4>
                <p className="text-xl text-emerald-800/80">Chỉ nhắm mục tiêu vi khuẩn, không ảnh hưởng tế bào người.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-start gap-6">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0 shadow-inner">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-emerald-900 mb-2">Chi phí thấp</h4>
                <p className="text-xl text-emerald-800/80">Rẻ hơn rất nhiều so với việc phát triển một loại kháng sinh mới.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CycleStep({ num, icon, text, delay, highlight = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring" }}
      className={`flex items-center gap-6 p-4 rounded-2xl ${highlight ? 'bg-red-500/20 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'bg-white/5 border border-white/10'}`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${highlight ? 'bg-red-500 text-white' : 'bg-blue-500/20 text-blue-300'}`}>
        {num}
      </div>
      <div className={highlight ? 'text-red-400' : 'text-blue-300'}>
        {icon}
      </div>
      <span className={`text-xl font-medium ${highlight ? 'text-red-100' : 'text-gray-300'}`}>{text}</span>
    </motion.div>
  );
}
