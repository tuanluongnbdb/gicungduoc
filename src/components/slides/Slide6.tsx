import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Syringe, GraduationCap, ArrowRight, Activity, ShieldAlert, Sparkles } from 'lucide-react';

export function Slide6A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Câu chuyện Emily - Bé gái 6 tuổi
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* The Crisis */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/3 glass-card p-6 bg-gradient-to-br from-rose-50 to-red-50 border-rose-200 flex flex-col shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 text-rose-200"
          >
            <ShieldAlert size={100} />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 relative z-10">
            <span className="px-2.5 py-0.5 bg-rose-200 text-rose-900 rounded-full font-mono text-base font-bold shadow-inner">Năm 2012</span>
            <h3 className="font-bold text-xl text-rose-900">Tình trạng nguy kịch</h3>
          </div>
          <ul className="space-y-3 text-rose-800 font-medium flex-1 text-base relative z-10">
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Emily Whitehead (6 tuổi) bị ung thư máu.</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Đã thử 2 đợt hóa trị liệu. Không hiệu quả.</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-xl mt-3 italic border border-rose-200 shadow-lg text-rose-900"
            >
              Bác sĩ nói: "Không còn cách nào khác."
            </motion.li>
          </ul>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-4 p-3 bg-rose-500 text-white rounded-xl text-base font-bold shadow-xl relative z-10"
          >
            Cha mẹ Emily không bỏ cuộc, tìm đến một thử nghiệm mới.
          </motion.div>
        </motion.div>

        {/* The Method */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-2/3 glass-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-2xl flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6 text-blue-800">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Activity size={28} />
            </motion.div>
            <h3 className="font-bold text-xl">Phương pháp điều trị (CAR-T)</h3>
          </div>
          
          <div className="flex items-center justify-between gap-2.5 flex-1">
            <MethodStep icon={<Syringe size={20} />} text="Lấy máu ra" delay={0.6} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}><ArrowRight size={20} className="text-blue-300 shrink-0" /></motion.div>
            <MethodStep icon={<HeartPulse size={20} />} text="Dùng virus 'dạy' tế bào miễn dịch" delay={0.8} highlight />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}><ArrowRight size={20} className="text-blue-300 shrink-0" /></motion.div>
            <MethodStep icon={<Activity size={20} />} text="Tế bào học cách diệt ung thư" delay={1.0} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}><ArrowRight size={20} className="text-blue-300 shrink-0" /></motion.div>
            <MethodStep icon={<Syringe size={20} className="rotate-180" />} text="Đưa lại vào cơ thể" delay={1.2} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide6B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Kết quả kỳ diệu
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="glass-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-2xl flex flex-col justify-center relative overflow-hidden"
        >
          {/* 3D Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-emerald-200 opacity-50"
          >
            <Sparkles size={64} />
          </motion.div>

          <div className="flex gap-6 items-center justify-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex-1 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-emerald-100 text-center transform transition-transform hover:scale-105"
            >
              <p className="text-emerald-600 font-bold mb-2 uppercase tracking-widest text-sm">Sau 23 ngày</p>
              <p className="text-2xl font-display font-bold text-gray-800 leading-tight">Không còn tế bào ung thư nào!</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex-1 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-emerald-100 text-center relative overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 text-emerald-500">
                <GraduationCap size={64} />
              </div>
              <p className="text-emerald-600 font-bold mb-2 uppercase tracking-widest text-sm relative z-10">Năm 2024 (Sau 12 năm)</p>
              <p className="text-2xl font-display font-bold text-gray-800 leading-tight relative z-10">Emily 18 tuổi, khỏe mạnh, đang học đại học</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-xl text-emerald-800 font-medium leading-relaxed">
              Emily là <span className="font-bold bg-emerald-200 px-2.5 py-1 rounded-xl shadow-sm inline-block mx-2">người đầu tiên trên thế giới</span> được chữa khỏi bằng phương pháp này.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function MethodStep({ icon, text, delay, highlight = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", bounce: 0.5 }}
      className={`flex-1 flex flex-col items-center text-center p-3 rounded-2xl h-full justify-center ${highlight ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-white text-blue-900 border border-blue-100 shadow-lg'}`}
    >
      <div className={`mb-2 p-2.5 rounded-full ${highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-500'}`}>
        {icon}
      </div>
      <p className="text-sm font-bold leading-snug">{text}</p>
    </motion.div>
  );
}
