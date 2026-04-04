import React from 'react';
import { motion } from 'motion/react';
import { Search, AlertCircle, ArrowRight, Lightbulb, Activity, FileText } from 'lucide-react';

export function Slide3A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 opacity-30 blur-2xl"
      />

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Câu chuyện của Bác sĩ Coley
      </motion.h2>

      <div className="flex flex-1 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-1/2 glass-card p-10 border-l-8 border-l-blue-500 shadow-2xl relative"
        >
          <div className="absolute -top-6 -right-6 bg-blue-500 text-white p-4 rounded-2xl shadow-lg rotate-12">
            <FileText size={32} />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-mono text-xl font-bold shadow-inner">Năm 1891</span>
            <h3 className="font-display text-3xl font-bold text-gray-800">Bệnh nhân Fred (17 tuổi)</h3>
          </div>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Bị ung thư xương ác tính. Bác sĩ William Coley không biết làm thế nào để cứu chữa.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
          className="w-1/2 glass-card p-12 flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Search size={80} className="text-blue-400 mb-8 drop-shadow-lg" />
          </motion.div>
          <p className="text-2xl text-gray-700 font-medium leading-relaxed">
            Ông quyết định tìm kiếm manh mối trong các hồ sơ bệnh án cũ...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide3B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Phát hiện kỳ lạ
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-12 text-amber-600">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <AlertCircle size={40} />
            </motion.div>
            <h3 className="font-display text-3xl font-bold">Hồ sơ bệnh án đặc biệt</h3>
          </div>

          <div className="flex items-center justify-between gap-6 mb-12 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="flex-1 glass p-8 rounded-2xl text-center shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-400" />
              <p className="font-bold text-xl text-gray-800 mb-2">Khối u ác tính ở cổ</p>
              <p className="text-gray-500">(Bệnh viện trả về)</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <ArrowRight className="text-amber-500 w-12 h-12" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
              className="flex-1 glass p-8 rounded-2xl text-center bg-red-50/80 border-red-200 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
              <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-red-200 opacity-50" />
              </motion.div>
              <p className="font-bold text-xl text-red-800 mb-2">Nhiễm trùng da nặng</p>
              <p className="text-red-600 font-medium">(Sốt cao nhiều ngày)</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
              <ArrowRight className="text-amber-500 w-12 h-12" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
              className="flex-1 glass p-8 rounded-2xl text-center bg-green-50/80 border-green-200 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
              <p className="font-bold text-xl text-green-800 mb-2">Khỏi nhiễm trùng</p>
              <p className="text-xl font-black text-green-600 uppercase tracking-wider">Khối u biến mất!</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, type: "spring" }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200 flex gap-6 items-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-4 bg-amber-100 text-amber-600 rounded-full shrink-0 shadow-inner"
            >
              <Lightbulb size={32} />
            </motion.div>
            <div>
              <p className="text-amber-600 uppercase tracking-widest font-bold mb-2 text-sm">Giả thuyết của Coley</p>
              <p className="text-3xl font-display font-medium text-gray-800 italic leading-snug">
                "Có phải vi khuẩn gây nhiễm trùng đã giết chết tế bào ung thư?"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
