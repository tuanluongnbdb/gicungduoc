import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Shield, Zap, Info, Bug } from 'lucide-react';

export function Slide9A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6"
      >
        Thực khuẩn thể - "Sát thủ" của vi khuẩn
      </motion.h2>

      <div className="flex gap-6 flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-blue-500 shadow-2xl relative overflow-hidden"
        >
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Info size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 relative z-10">Bạn có biết?</h3>
          <p className="text-gray-600 text-lg mb-4 relative z-10">
            Thực khuẩn thể (Bacteriophage) là thực thể sinh học phổ biến nhất trên Trái Đất.
          </p>
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="text-lg font-bold text-blue-700 bg-blue-50 p-3 rounded-xl border border-blue-100 relative z-10"
          >
            Có khoảng 10^31 thực khuẩn thể trên hành tinh - nhiều hơn tất cả các sinh vật khác cộng lại!
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-indigo-500 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-2xl relative overflow-hidden"
        >
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Shield size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-indigo-900 relative z-10">Vai trò tự nhiên</h3>
          <ul className="text-lg text-indigo-800 space-y-3 relative z-10">
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>• Kiểm soát số lượng vi khuẩn trong tự nhiên.</motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>• Giữ cho hệ sinh thái cân bằng.</motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>• Là "kháng sinh tự nhiên" cực kỳ hiệu quả.</motion.li>
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
        Tại sao chúng ta cần Thực khuẩn thể?
      </motion.h2>

      <div className="flex gap-6 flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-2xl relative overflow-hidden"
        >
          <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl w-fit mb-4 shadow-inner relative z-10">
            <Zap size={28} />
          </div>
          <h3 className="font-bold text-xl mb-3 text-amber-900 relative z-10">Vũ khí chống siêu vi khuẩn</h3>
          <p className="text-lg text-amber-800 mb-3 relative z-10">
            Khi kháng sinh thất bại, thực khuẩn thể là hy vọng cuối cùng.
          </p>
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl text-base border border-amber-200 shadow-md relative z-10">
            Chúng có thể tiến hóa cùng vi khuẩn, khiến vi khuẩn khó lòng chạy thoát.
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 flex flex-col border-t-8 border-t-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-2xl relative overflow-hidden justify-center items-center text-center"
        >
          <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full mb-4 shadow-inner relative z-10">
            <Microscope size={48} />
          </div>
          <h3 className="font-bold text-2xl mb-4 text-emerald-900 relative z-10">Kỷ nguyên mới của Y học</h3>
          <p className="text-xl text-emerald-800 relative z-10 leading-relaxed">
            Liệu pháp Phage đang được nghiên cứu để thay thế hoặc hỗ trợ kháng sinh truyền thống.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
            className="mt-6 p-4 bg-emerald-500 text-white rounded-2xl font-bold text-xl shadow-xl relative z-10"
          >
            An toàn - Chính xác - Hiệu quả
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
