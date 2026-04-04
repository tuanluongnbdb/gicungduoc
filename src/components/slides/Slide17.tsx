import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, Lightbulb, BookOpen, BarChart3, Star, Target } from 'lucide-react';

export function Slide17A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Star className="text-yellow-500" size={28} />
        Tổng kết (Phần 1)
      </motion.h2>

      <div className="flex gap-4 flex-1">
        {/* Stories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/3 glass-card p-5 flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-200 opacity-50"
          >
            <BookOpen size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 text-blue-800 relative z-10">
            <div className="p-2 bg-blue-100 rounded-xl shadow-inner">
              <BookOpen size={28} />
            </div>
            <h3 className="font-bold text-2xl">Những câu chuyện truyền cảm hứng</h3>
          </div>
          <ul className="space-y-3 text-base text-gray-700 relative z-10 bg-white/60 p-4 rounded-2xl border border-blue-100">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
              <span><span className="font-bold text-blue-900">Bác sĩ Coley:</span> Phát hiện vi khuẩn chống ung thư (1891)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
              <span><span className="font-bold text-blue-900">Fleming:</span> Tình cờ phát hiện penicillin từ nấm mốc (1928)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
              <span><span className="font-bold text-blue-900">Emily (6 tuổi):</span> Được cứu sống bằng virus biến đổi (2012)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
              <span><span className="font-bold text-blue-900">Giáo sư Tom:</span> Thoát chết nhờ liệu pháp thực khuẩn thể (2016)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
              <span><span className="font-bold text-blue-900 text-base">Insulin:</span> Từ vi khuẩn cứu 70 triệu người</span>
            </li>
          </ul>
        </motion.div>

        {/* Lesson */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/3 glass-card p-5 bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-2xl shadow-blue-500/40 relative overflow-hidden flex flex-col justify-center items-center text-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 text-indigo-400 opacity-30"
          >
            <Lightbulb size={120} />
          </motion.div>

          <Lightbulb size={48} className="text-yellow-300 mb-4 animate-pulse relative z-10" />
          <h3 className="font-bold text-xl mb-3 relative z-10 text-blue-100">Bài học cốt lõi</h3>
          <p className="text-2xl font-display font-medium relative z-10 leading-tight">Vi sinh vật rất nhỏ, nhưng <span className="text-yellow-300 font-bold drop-shadow-lg block mt-2 text-3xl">sức mạnh rất lớn</span>.</p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide17B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Star className="text-yellow-500" size={28} />
        Tổng kết (Phần 2)
      </motion.h2>

      <div className="flex gap-4 flex-1">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-emerald-200 opacity-50"
          >
            <BarChart3 size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 text-emerald-800 relative z-10">
            <div className="p-2 bg-emerald-100 rounded-xl shadow-inner">
              <BarChart3 size={28} />
            </div>
            <h3 className="font-bold text-2xl">Những con số biết nói</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="bg-white/80 p-3 rounded-2xl border border-emerald-100 shadow-md">
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-0.5">Penicillin</p>
              <p className="font-bold text-gray-800 text-lg">Cứu 200 triệu người</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-white/80 p-3 rounded-2xl border border-emerald-100 shadow-md">
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-0.5">Insulin</p>
              <p className="font-bold text-gray-800 text-lg">Giúp 70 triệu người</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="bg-white/80 p-3 rounded-2xl border border-emerald-100 shadow-md">
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-0.5">Vaccine</p>
              <p className="font-bold text-gray-800 text-lg">Cứu hàng trăm triệu</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="bg-white/80 p-3 rounded-2xl border border-emerald-100 shadow-md">
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-0.5">Thực khuẩn thể</p>
              <p className="font-bold text-gray-800 text-lg">Hy vọng chống kháng thuốc</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-1/2 flex flex-col gap-4">
          {/* Challenges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 glass-card p-5 bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-xl relative overflow-hidden flex flex-col"
          >
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 text-red-200 opacity-50"
            >
              <AlertTriangle size={100} />
            </motion.div>

            <div className="flex items-center gap-3 mb-3 text-red-700 relative z-10">
              <div className="p-2 bg-red-100 rounded-xl shadow-inner">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-bold text-xl">Thách thức</h3>
            </div>
            <ul className="text-base text-red-900/90 space-y-2 relative z-10 bg-white/60 p-3 rounded-2xl border border-red-100 flex-1">
              <li className="flex items-center gap-2.5"><div className="w-2 h-2 rounded-full bg-red-500" /> Kháng kháng sinh gia tăng</li>
              <li className="flex items-center gap-2.5"><div className="w-2 h-2 rounded-full bg-red-500" /> Cần nghiên cứu thêm</li>
              <li className="flex items-center gap-2.5"><div className="w-2 h-2 rounded-full bg-red-500" /> Sử dụng có trách nhiệm</li>
            </ul>
          </motion.div>

          {/* Future */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex-1 glass-card p-5 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-xl relative overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 text-amber-200 opacity-50"
            >
              <Target size={100} />
            </motion.div>

            <h3 className="font-bold text-xl text-amber-800 mb-2 relative z-10">Tương lai</h3>
            <p className="text-lg text-amber-900 font-medium relative z-10 bg-white/60 p-3 rounded-2xl border border-amber-100">Vi sinh vật sẽ giúp chúng ta nhiều hơn nữa.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
