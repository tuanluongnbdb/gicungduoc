import React from 'react';
import { motion } from 'motion/react';
import { BellRing, ShieldAlert, Swords, Target, Lightbulb, FlaskConical, Dna } from 'lucide-react';

export function Slide5A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <FlaskConical className="text-blue-500" size={32} />
        Coley thử nghiệm và kết quả
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* Method */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-8 border-l-8 border-l-blue-500 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-100 opacity-50"
          >
            <FlaskConical size={140} />
          </motion.div>

          <div className="flex items-center gap-4 mb-6 text-blue-800 relative z-10">
            <div className="p-3 bg-blue-100 rounded-2xl shadow-inner">
              <FlaskConical size={32} />
            </div>
            <h3 className="font-bold text-2xl">Phương pháp (1893)</h3>
          </div>
          <div className="flex flex-col gap-4 relative z-10">
            <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
              <p className="text-lg font-medium">Lấy vi khuẩn</p>
            </div>
            <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <p className="text-lg font-medium">Đun chết (an toàn hơn)</p>
            </div>
            <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <p className="text-lg font-medium">Tiêm vào khối u</p>
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-amber-200 opacity-50"
          >
            <Lightbulb size={140} />
          </motion.div>

          <div className="p-4 bg-amber-100 text-amber-600 rounded-full mb-6 shadow-inner relative z-10">
            <Lightbulb size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold text-amber-900 mb-8 relative z-10">Kết quả (40 năm)</h3>
          
          <div className="space-y-6 relative z-10 w-full">
            <div className="bg-white/80 p-6 rounded-3xl shadow-md border border-amber-100 transform hover:scale-105 transition-transform">
              <p className="font-bold text-amber-900 text-3xl mb-1">1.000+</p>
              <p className="text-lg text-amber-700 font-medium">bệnh nhân được điều trị</p>
            </div>
            <div className="bg-white/80 p-6 rounded-3xl shadow-md border border-amber-100 transform hover:scale-105 transition-transform">
              <p className="font-bold text-amber-900 text-3xl mb-1">10–20%</p>
              <p className="text-lg text-amber-700 font-medium">khỏi hoàn toàn</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide5B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Dna className="text-blue-500" size={32} />
        Cơ chế hoạt động & Xác nhận hiện đại
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* Mechanism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/3 glass-card p-8 flex flex-col shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-6 text-blue-600">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <BellRing size={32} />
            </motion.div>
            <h3 className="font-display text-2xl font-bold">Vi khuẩn đóng vai "mồi nhử"</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4 flex-1">
            <StepCard step={1} icon={<ShieldAlert size={24} />} text="Vi khuẩn vào cơ thể" delay={0.4} />
            <StepCard step={2} icon={<BellRing size={24} />} text="Hệ miễn dịch báo động" delay={0.6} />
            <StepCard step={3} icon={<Swords size={24} />} text="Gửi tế bào miễn dịch đến" delay={0.8} />
            <StepCard step={4} icon={<Target size={24} />} text="Tiêu diệt luôn tế bào ung thư" delay={1.0} highlight />
          </div>
        </motion.div>

        {/* Modern Analysis */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="w-1/3 glass-card p-8 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 flex flex-col justify-center shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl font-mono text-lg font-bold shadow-inner">2013</span>
            <h4 className="font-bold text-xl text-indigo-900">Đại học Yale</h4>
          </div>
          <p className="text-xl text-indigo-800 leading-relaxed font-medium">
            Phân tích lại 896 ca bệnh: Xác nhận tỷ lệ khỏi <span className="text-indigo-600 font-bold">tương đương điều trị hiện đại</span> với một số loại ung thư.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({ step, icon, text, delay, highlight = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", bounce: 0.5 }}
      className={`relative p-4 rounded-3xl flex flex-col items-center text-center ${highlight ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-white border border-gray-100 shadow-lg'}`}
    >
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${highlight ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
        {step}
      </div>
      <div className={`mb-4 p-3 rounded-2xl ${highlight ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
        {icon}
      </div>
      <p className={`text-sm font-bold leading-snug ${highlight ? 'text-white' : 'text-gray-700'}`}>{text}</p>
    </motion.div>
  );
}
