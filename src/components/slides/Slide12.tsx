import React from 'react';
import { motion } from 'motion/react';
import { User, HeartPulse, Syringe, AlertTriangle, Lightbulb, Activity, Droplets } from 'lucide-react';

export function Slide12A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Bệnh nhân đầu tiên dùng Penicillin (Phần 1)
      </motion.h2>

      <div className="flex gap-12 flex-1">
        {/* The Patient */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-10 flex flex-col border-t-8 border-t-slate-500 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-slate-200"
          >
            <User size={150} />
          </motion.div>

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-mono text-xl font-bold shadow-sm">1941</span>
            <p className="text-xl text-slate-500">Florey & Chain tìm cách sản xuất</p>
          </div>

          <div className="flex items-center gap-4 mb-6 text-slate-800 relative z-10">
            <div className="p-4 bg-slate-100 rounded-2xl shadow-inner">
              <User size={32} />
            </div>
            <h3 className="font-bold text-3xl">Albert Alexander</h3>
          </div>
          <p className="text-slate-600 text-2xl mb-6 relative z-10">Cảnh sát 43 tuổi.</p>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="p-6 bg-red-50 rounded-2xl border border-red-100 mb-8 shadow-md relative z-10"
          >
            <p className="text-red-800 font-bold text-xl mb-2">Nguyên nhân:</p>
            <p className="text-red-600 text-xl">Bị trầy xước vì cành hoa hồng. Vết trầy nhiễm trùng nặng, lan khắp cơ thể.</p>
          </motion.div>

          <div className="mt-auto relative z-10 bg-white/60 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-2xl text-slate-700 mb-4 flex items-center gap-3">
              <HeartPulse size={24} className="text-red-500 animate-pulse" /> Tình trạng
            </h4>
            <ul className="text-xl text-slate-600 space-y-2">
              <li>• Sốt cao</li>
              <li>• Mù một mắt</li>
              <li>• Đang hấp hối</li>
            </ul>
          </div>
        </motion.div>

        {/* The Treatment */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 flex flex-col shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-blue-200 opacity-50"
          >
            <Syringe size={150} />
          </motion.div>

          <div className="flex items-center gap-4 mb-10 text-blue-800 relative z-10">
            <div className="p-4 bg-blue-100 rounded-2xl shadow-inner">
              <Syringe size={32} />
            </div>
            <h3 className="font-bold text-3xl">Quá trình điều trị</h3>
          </div>

          <div className="flex-1 flex flex-col gap-8 relative z-10 justify-center pl-4">
            <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-blue-200 rounded-full" />
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex gap-6 relative z-10 items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 text-xl font-bold shadow-lg ring-4 ring-blue-100">1</div>
              <div className="bg-white/80 p-4 rounded-xl shadow-sm flex-1 border border-blue-100">
                <p className="font-bold text-blue-900 text-xl">12/2/1941</p>
                <p className="text-xl text-blue-800/80">Tiêm penicillin</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex gap-6 relative z-10 items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-400 text-white flex items-center justify-center shrink-0 text-xl font-bold shadow-lg ring-4 ring-indigo-100">2</div>
              <div className="bg-white/80 p-4 rounded-xl shadow-sm flex-1 border border-indigo-100">
                <p className="font-bold text-indigo-900 text-xl">Sau 24 giờ</p>
                <p className="text-xl text-indigo-800/80">Tỉnh lại, bớt sốt</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex gap-6 relative z-10 items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-xl font-bold shadow-lg ring-4 ring-emerald-100">3</div>
              <div className="bg-white/80 p-4 rounded-xl shadow-sm flex-1 border border-emerald-100">
                <p className="font-bold text-emerald-900 text-xl">Sau 5 ngày</p>
                <p className="text-xl text-emerald-800/80 font-bold">Gần như khỏi bệnh!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide12B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Bệnh nhân đầu tiên dùng Penicillin (Phần 2)
      </motion.h2>

      <div className="flex gap-12 flex-1">
        {/* The Tragedy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-12 bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -right-10 text-red-200"
          >
            <AlertTriangle size={180} />
          </motion.div>

          <div className="flex items-center gap-6 mb-8 text-red-600 relative z-10">
            <div className="p-4 bg-red-100 rounded-2xl shadow-inner">
              <AlertTriangle size={48} />
            </div>
            <h3 className="font-bold text-4xl">Nhưng...</h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="text-red-800 font-bold text-5xl mb-6 relative z-10 drop-shadow-sm"
          >
            Hết penicillin!
          </motion.p>
          <p className="text-2xl text-red-700 mb-10 relative z-10">Chỉ đủ điều trị trong 5 ngày.</p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl text-2xl text-red-900 font-bold border border-red-200 shadow-lg relative z-10 text-center"
          >
            Bệnh của Alexander tái phát và ông qua đời.
          </motion.div>
        </motion.div>

        {/* The Lesson */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-12 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <motion.div 
            animate={{ rotate: [0, 15, -15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 text-amber-200 opacity-50"
          >
            <Lightbulb size={180} />
          </motion.div>

          <div className="flex items-center gap-6 mb-8 text-amber-600 relative z-10">
            <div className="p-4 bg-amber-100 rounded-2xl shadow-inner">
              <Lightbulb size={48} />
            </div>
            <h3 className="font-bold text-4xl">Bài học lịch sử</h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-4xl text-amber-900 font-bold leading-relaxed relative z-10 bg-white/60 p-8 rounded-3xl border border-amber-100 shadow-sm"
          >
            Cần tìm cách sản xuất penicillin với <span className="text-amber-600 bg-amber-100 px-2 py-1 rounded-lg">số lượng lớn hơn!</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
