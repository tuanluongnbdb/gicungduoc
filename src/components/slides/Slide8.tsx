import React from 'react';
import { motion } from 'motion/react';
import { Skull, AlertTriangle, Pill, TrendingUp, XCircle, Biohazard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Hiện nay', value: 0.7, label: '700K' },
  { name: 'Năm 2050', value: 10, label: '10 Triệu' },
];

export function Slide8A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <AlertTriangle className="text-red-500" size={32} />
        Vấn đề lớn: Kháng kháng sinh
      </motion.h2>

      <div className="flex gap-6 flex-1">
        {/* The Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 glass-card p-6 border-l-8 border-l-red-500 bg-gradient-to-br from-red-50 to-rose-50 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 text-red-500"
          >
            <Biohazard size={120} />
          </motion.div>

          <h3 className="font-bold text-xl text-red-800 mb-4 flex items-center gap-2.5 relative z-10">
            <Skull size={24} />
            Câu chuyện đáng sợ (2016)
          </h3>
          <div className="space-y-3 text-red-900 font-medium text-lg relative z-10">
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>• Bà cụ 70 tuổi ở Mỹ bị nhiễm vi khuẩn.</motion.p>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>• Bác sĩ thử <span className="font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-lg shadow-sm">26 loại kháng sinh</span> khác nhau.</motion.p>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>• Không loại nào có tác dụng. Bà cụ qua đời.</motion.p>
          </div>
        </motion.div>

        {/* Causes */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 glass-card p-6 bg-white shadow-2xl flex flex-col"
        >
          <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center gap-2.5">
            <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Pill size={28} className="text-orange-500 drop-shadow-md" />
            </motion.div>
            Tại sao xảy ra?
          </h3>
          <p className="text-lg text-gray-600 italic mb-4 p-3 bg-orange-50 rounded-xl border border-orange-100">"Vi khuẩn đang học cách chống lại kháng sinh."</p>
          <ul className="space-y-3 flex-1">
            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-2.5 text-lg text-gray-700">
              <XCircle size={20} className="text-orange-500 shrink-0" />
              <span>Dùng kháng sinh quá nhiều</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex items-center gap-2.5 text-lg text-gray-700">
              <XCircle size={20} className="text-orange-500 shrink-0" />
              <span>Không uống đủ ngày đủ liều</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-2.5 text-lg text-gray-700">
              <XCircle size={20} className="text-orange-500 shrink-0" />
              <span>Dùng kháng sinh cho động vật nuôi quá nhiều</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide8B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <AlertTriangle className="text-red-500" size={32} />
        Dự đoán tương lai
      </motion.h2>

      <div className="flex flex-col flex-1 justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="glass-card p-6 bg-gradient-to-br from-gray-900 to-slate-800 text-white flex flex-col shadow-2xl h-[450px]"
        >
          <div className="mb-4 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-1">Dự đoán số người tử vong</h3>
            <p className="text-lg text-gray-400">Mỗi năm do vi khuẩn kháng thuốc</p>
          </div>

          <div className="flex-1 w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#f8fafc', fontSize: 12, fontWeight: 500 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 flex justify-between items-end px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-center">
              <p className="text-3xl font-display font-bold text-blue-400 drop-shadow-lg">700,000</p>
              <p className="text-base text-gray-400 mt-0.5">Hiện nay</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-center">
              <p className="text-4xl font-display font-bold text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">10 Triệu</p>
              <p className="text-base text-gray-400 mt-0.5">Năm 2050</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="mt-6 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-center"
          >
            <p className="text-red-200 text-lg font-medium flex items-center justify-center gap-2.5">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}><TrendingUp size={20} /></motion.div>
              Dự đoán sẽ nhiều hơn cả tử vong do ung thư!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
