import React from 'react';
import { motion } from 'motion/react';
import { Plane, AlertOctagon, Heart, Sparkles, ArrowRight, Globe, Activity } from 'lucide-react';

export function Slide9A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Câu chuyện Giáo sư Tom Patterson (Phần 1)
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* Step 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-blue-500 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 text-blue-100 opacity-50"
          >
            <Globe size={100} />
          </motion.div>

          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Plane size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 relative z-10">Khởi đầu (2016)</h3>
          <p className="text-gray-600 text-lg mb-2 relative z-10">Giáo sư Tom Patterson (69 tuổi) đi du lịch Ai Cập.</p>
          <motion.p 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="text-lg font-bold text-red-500 bg-red-50 p-2.5 rounded-xl border border-red-100 inline-block w-fit relative z-10"
          >
            Bị nhiễm vi khuẩn từ nước.
          </motion.p>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-red-500 bg-gradient-to-br from-red-50 to-rose-50 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 text-red-200"
          >
            <AlertOctagon size={100} />
          </motion.div>

          <div className="p-3 bg-red-100 text-red-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <AlertOctagon size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-red-900 relative z-10">Nguy kịch</h3>
          <ul className="text-lg text-red-800 space-y-2 relative z-10">
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>• Vi khuẩn kháng TẤT CẢ kháng sinh</motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>• Đã hôn mê 3 tháng</motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>• Giảm từ 80kg xuống 55kg</motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide9B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Câu chuyện Giáo sư Tom Patterson (Phần 2)
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* Step 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-10 -right-10 text-amber-200 opacity-50"
          >
            <Heart size={100} />
          </motion.div>

          <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Heart size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-amber-900 relative z-10">Không bỏ cuộc</h3>
          <p className="text-lg text-amber-800 mb-3 relative z-10">Người vợ tìm hiểu và phát hiện ra <strong className="text-amber-900">"Liệu pháp Thực khuẩn thể"</strong>.</p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-xl text-base border border-amber-200 shadow-md relative z-10 mb-3"
          >
            Thực khuẩn thể là virus chỉ ăn vi khuẩn, không làm hại tế bào người.
          </motion.div>
          <p className="text-base text-amber-800 relative z-10">Liên lạc với các nhà khoa học khắp thế giới (Mỹ, Thụy Sĩ, Georgia).</p>
        </motion.div>

        {/* Step 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-emerald-200 opacity-50"
          >
            <Sparkles size={100} />
          </motion.div>

          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Sparkles size={28} />
          </div>
          <h3 className="font-bold text-xl mb-4 text-emerald-900 relative z-10">Điều kỳ diệu</h3>
          <div className="space-y-3 text-lg text-emerald-800 relative z-10 flex-1">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-2.5">
              <span className="font-bold bg-emerald-100 px-2 py-0.5 rounded-lg">15/3/2016:</span> Tiêm thực khuẩn thể
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-center gap-2.5">
              <ArrowRight size={18} className="text-emerald-500" />
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-lg">Sau 48 giờ:</span> Tỉnh lại!
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-2.5">
              <ArrowRight size={18} className="text-emerald-500" />
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-lg">Sau 3 tháng:</span> Xuất viện
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="mt-4 p-3 bg-emerald-500 text-white rounded-xl font-bold text-lg text-center shadow-xl relative z-10"
          >
            Ngày nay: Khỏe mạnh, đi làm bình thường
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
