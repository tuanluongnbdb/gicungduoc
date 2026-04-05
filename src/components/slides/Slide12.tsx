import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, BookOpen, BarChart3, Star, Target, Lightbulb } from 'lucide-react';

export function Slide12A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Star className="text-yellow-500" size={32} />
        Tổng kết
      </motion.h2>

      <div className="flex gap-6 flex-1 mt-4">
        {/* Summary of Knowledge & Applications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/3 glass-card p-8 flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-200 opacity-50"
          >
            <BookOpen size={140} />
          </motion.div>

          <div className="flex items-center gap-4 mb-8 text-blue-800 relative z-10">
            <div className="p-3 bg-blue-100 rounded-2xl shadow-inner">
              <BookOpen size={32} />
            </div>
            <h3 className="font-bold text-3xl">Thông điệp cốt lõi</h3>
          </div>
          
          <p className="text-2xl text-gray-700 leading-relaxed relative z-10 mb-8 font-medium">
            Vi sinh vật không chỉ gây bệnh — chúng còn là những <span className="text-blue-600 font-bold">"nhà máy" cứu sống con người</span>.
          </p>

          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="space-y-4 bg-white/60 p-6 rounded-[2rem] border border-blue-100">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span><span className="font-bold">Penicillin:</span> Cứu 200 triệu người</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span><span className="font-bold">Insulin:</span> Giúp 70 triệu người</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 bg-white/60 p-6 rounded-[2rem] border border-blue-100">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span><span className="font-bold">Vaccine:</span> Bảo vệ hàng trăm triệu người</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span><span className="font-bold">Tương lai:</span> Hy vọng từ Thực khuẩn thể</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Future */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/3 glass-card p-8 bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-2xl shadow-blue-500/40 relative overflow-hidden flex flex-col justify-center items-center text-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 text-indigo-400 opacity-30"
          >
            <Lightbulb size={140} />
          </motion.div>

          <Target size={64} className="text-yellow-300 mb-6 animate-pulse relative z-10" />
          <h3 className="font-bold text-2xl mb-4 relative z-10 text-blue-100">Tương lai y học</h3>
          <p className="text-xl font-display font-medium relative z-10 leading-relaxed">
            Sản xuất thuốc trong cơ thể, y học cá nhân hóa, kéo dài tuổi thọ — đều có bóng dáng của vi sinh vật.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
