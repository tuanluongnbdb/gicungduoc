import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Activity, Search, AlertCircle, Calendar, User } from 'lucide-react';

export function Slide4A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Microscope className="text-blue-500" size={32} />
        Câu chuyện bác sĩ William Coley
      </motion.h2>

      <div className="flex gap-8 flex-1">
        {/* The Case */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 flex flex-col gap-6"
        >
          <div className="glass-card p-8 border-l-8 border-l-blue-500 shadow-2xl relative overflow-hidden">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 text-blue-100 opacity-50"
            >
              <Calendar size={100} />
            </motion.div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-xl font-mono text-lg font-bold shadow-sm">1891</span>
              <h3 className="font-bold text-2xl">Bối cảnh</h3>
            </div>
            <p className="text-xl text-gray-700 relative z-10 leading-relaxed">
              Tiếp nhận cậu bé 17 tuổi bị <span className="text-red-600 font-bold">ung thư xương ác tính</span>.
            </p>
          </div>

          <div className="glass-card p-8 flex-1 bg-gradient-to-br from-gray-50 to-slate-50 flex flex-col justify-center shadow-2xl relative overflow-hidden">
            <motion.div 
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 text-slate-200 opacity-50"
            >
              <Search size={100} />
            </motion.div>
            <div className="flex items-center gap-4 mb-6 text-slate-600 relative z-10">
              <Search size={32} />
              <h3 className="font-bold text-2xl">Phát hiện kỳ lạ</h3>
            </div>
            <div className="flex gap-4 items-center relative z-10">
              <p className="text-xl text-gray-700 leading-relaxed flex-1">
                Lật lại hồ sơ cũ: Một bệnh nhân bị khối u ác tính ở cổ, sau đó bị <span className="text-red-600 font-bold">nhiễm trùng da nặng, sốt cao</span>.
              </p>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=200" 
                  alt="Old medical records" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Result */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-emerald-200 opacity-50"
          >
            <Activity size={140} />
          </motion.div>

          <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-inner relative z-10">
            <Activity size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold text-emerald-900 mb-8 relative z-10">Kết quả bất ngờ</h3>
          
          <div className="w-48 h-48 rounded-full border-8 border-emerald-200 bg-emerald-50/50 relative flex items-center justify-center mb-8 shadow-[inset_0_0_30px_rgba(16,185,129,0.2)] z-10">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 bg-emerald-600/80 rounded-full blur-md absolute" 
            />
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-emerald-400/50 absolute animate-[spin_20s_linear_infinite]" />
            <p className="text-white font-black text-2xl drop-shadow-lg z-20">KHỎI BỆNH</p>
          </div>

          <p className="text-2xl text-emerald-800 font-bold mb-4 relative z-10">Khối u biến mất hoàn toàn!</p>
          <p className="text-lg text-emerald-700 font-medium relative z-10">Coley tìm thêm được 47 ca tương tự.</p>
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
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <AlertCircle className="text-blue-500" size={32} />
        Câu hỏi lớn của Coley
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-12 max-w-3xl bg-white shadow-2xl border-2 border-blue-100 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-5 bg-blue-50 text-blue-600 rounded-full mb-8 shadow-inner"
          >
            <User size={48} />
          </motion.div>

          <h3 className="text-4xl font-display font-bold text-gray-900 mb-8 leading-tight italic">
            "Có phải vi khuẩn đã tiêu diệt tế bào ung thư?"
          </h3>

          <div className="w-24 h-1 bg-blue-500 rounded-full mb-8" />

          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            William Coley không bỏ qua điều này. Ông bắt đầu hành trình tìm kiếm câu trả lời cho một trong những bí ẩn lớn nhất của y học thời bấy giờ.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
