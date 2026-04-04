import React from 'react';
import { motion } from 'motion/react';
import { BellRing, ShieldAlert, Swords, Target, Lightbulb, FlaskConical, Dna } from 'lucide-react';

export function Slide5A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 opacity-20 blur-3xl"
      />

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Cơ chế hoạt động
      </motion.h2>

      <div className="flex gap-6 flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/3 glass-card p-6 flex flex-col shadow-2xl relative"
        >
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <BellRing size={28} />
            </motion.div>
            <h3 className="font-display text-xl font-bold">Hồi chuông báo động</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
            Vi khuẩn (kể cả đã chết) hoạt động giống như một <span className="text-blue-600 font-bold">hồi chuông báo động</span>.
          </p>

          <div className="grid grid-cols-4 gap-3 flex-1">
            <StepCard step={1} icon={<ShieldAlert size={20} />} text="Vi khuẩn vào cơ thể" delay={0.4} />
            <StepCard step={2} icon={<BellRing size={20} />} text="Hệ miễn dịch báo động" delay={0.6} />
            <StepCard step={3} icon={<Swords size={20} />} text="Cơ thể gửi tế bào miễn dịch đến" delay={0.8} />
            <StepCard step={4} icon={<Target size={20} />} text="Tấn công vi khuẩn VÀ tế bào ung thư ở gần đó" delay={1.0} highlight />
          </div>
        </motion.div>

        {/* Analogy */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="w-1/3 glass-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 flex flex-col justify-center shadow-2xl"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-amber-100 text-amber-600 rounded-2xl w-fit mb-4 shadow-inner"
          >
            <Lightbulb size={28} />
          </motion.div>
          <h4 className="font-bold text-lg text-amber-900 mb-3">Ví dụ dễ hiểu</h4>
          <p className="text-base text-amber-800 leading-relaxed">
            Vi khuẩn đóng vai trò là <span className="font-bold text-lg text-amber-600">"mồi nhử"</span> để kéo hệ miễn dịch đến tận nơi và bắt chúng phải nhìn vào khối u mà bình thường chúng sẽ lờ đi.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide5B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Nghiên cứu hiện đại
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="glass-card p-6 flex flex-col gap-6 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -right-16 text-indigo-100 opacity-50"
          >
            <Dna size={160} />
          </motion.div>

          <div className="flex items-center gap-5 relative z-10">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 bg-white rounded-full shadow-xl text-indigo-500 shrink-0 border-4 border-indigo-100"
            >
              <FlaskConical size={40} />
            </motion.div>
            
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="px-2.5 py-0.5 bg-indigo-200 text-indigo-900 rounded-full font-mono text-base font-bold shadow-inner">Năm 2013</span>
                <h3 className="font-bold text-2xl text-gray-800">Phân tích lại</h3>
              </div>
              <p className="text-lg text-gray-600">Các nhà khoa học phân tích lại ca bệnh của Coley bằng phương pháp hiện đại.</p>
            </div>
          </div>

          <div className="flex gap-5 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex-1 bg-white/80 backdrop-blur-md p-5 rounded-xl border border-indigo-200 shadow-lg"
            >
              <p className="text-base font-medium text-indigo-900 leading-relaxed">Một số ca bệnh hiệu quả tương đương điều trị hiện đại</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="flex-1 bg-white/80 backdrop-blur-md p-5 rounded-xl border border-indigo-200 shadow-lg"
            >
              <p className="text-base font-medium text-indigo-900 leading-relaxed">Nhiều công ty đang phát triển lại phương pháp này</p>
            </motion.div>
          </div>
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
      className={`relative p-3 rounded-2xl flex flex-col items-center text-center ${highlight ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-white border border-gray-100 shadow-lg'}`}
    >
      <div className={`absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${highlight ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
        {step}
      </div>
      <div className={`mb-3 p-2.5 rounded-xl ${highlight ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
        {icon}
      </div>
      <p className={`text-sm font-medium leading-snug ${highlight ? 'text-white' : 'text-gray-700'}`}>{text}</p>
    </motion.div>
  );
}
