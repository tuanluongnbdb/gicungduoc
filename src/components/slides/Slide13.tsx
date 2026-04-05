import React from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingDown, Factory, DollarSign, Heart, ArrowRight, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const productionData = [
  { year: '1942', amount: 100 },
  { year: '1943', amount: 50000 },
  { year: '1945', amount: 2000000 },
];

export function Slide13A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Globe className="text-blue-500" size={28} />
        Penicillin cứu thế giới
      </motion.h2>

      <div className="flex flex-col gap-4 flex-1">
        {/* Production */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5 flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 flex flex-col shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-blue-200 opacity-50"
          >
            <Factory size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 text-blue-800 relative z-10">
            <div className="p-2 bg-blue-100 rounded-xl shadow-inner">
              <Factory size={20} />
            </div>
            <h3 className="font-bold text-xl">Sản xuất hàng loạt (Thế chiến 2)</h3>
          </div>
          
          <div className="flex-1 w-full min-h-[160px] mb-4 relative z-10 bg-white/60 p-3 rounded-2xl border border-blue-100 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={productionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('en').format(value as number)}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-3 gap-3 text-center text-base relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/80 p-2 rounded-xl shadow-md border border-blue-100">
              <p className="font-bold text-blue-900 text-lg mb-0.5">1942</p>
              <p className="text-blue-700 font-medium">100 người</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/80 p-2 rounded-xl shadow-md border-2 border-blue-300 transform scale-105">
              <p className="font-bold text-blue-900 text-lg mb-0.5">1943</p>
              <p className="text-blue-700 font-medium">50,000 người</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white/80 p-2 rounded-xl shadow-md border border-blue-100">
              <p className="font-bold text-blue-900 text-lg mb-0.5">1945</p>
              <p className="text-blue-700 font-bold text-lg">Hàng triệu</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Cost */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-5 bg-emerald-50 border-emerald-200 flex justify-between items-center shadow-xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-10 -bottom-10 text-emerald-200 opacity-50"
          >
            <DollarSign size={100} />
          </motion.div>

          <div className="flex items-center gap-3 text-emerald-800 relative z-10">
            <div className="p-2 bg-emerald-100 rounded-xl shadow-inner">
              <DollarSign size={20} />
            </div>
            <h3 className="font-bold text-xl">Giá thành 1 liều</h3>
          </div>
          <div className="flex items-center gap-4 relative z-10 bg-white/80 p-3 rounded-2xl shadow-sm border border-emerald-100">
            <div className="text-right">
              <p className="text-base text-emerald-600 mb-0.5">1945</p>
              <p className="font-bold text-xl text-emerald-900">20 USD</p>
            </div>
            <div className="flex flex-col items-center">
              <ArrowRight size={20} className="text-emerald-400 mb-0.5" />
              <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">Giảm mạnh</span>
            </div>
            <div className="text-left">
              <p className="text-base text-emerald-600 mb-0.5">Hiện nay</p>
              <p className="font-bold text-2xl text-emerald-600">&lt; 0.1 USD</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide13B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Globe className="text-blue-500" size={28} />
        Penicillin cứu thế giới
      </motion.h2>

      <div className="flex flex-col gap-4 flex-1">
        {/* Impact */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 flex-1 bg-gradient-to-br from-rose-50 to-orange-50 border-rose-200 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-rose-200 opacity-50"
          >
            <Activity size={120} />
          </motion.div>

          <div className="flex items-center gap-3 mb-6 text-rose-800 relative z-10">
            <div className="p-2 bg-rose-100 rounded-xl shadow-inner">
              <TrendingDown size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold">Tác động giảm tử vong</h3>
          </div>

          <div className="space-y-4 relative z-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white/60 p-4 rounded-2xl border border-rose-100 shadow-sm">
              <h4 className="font-bold text-xl text-slate-700 mb-3">Viêm phổi</h4>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-red-100 p-3 rounded-xl text-center shadow-inner border border-red-200">
                  <p className="text-[10px] text-red-600 uppercase font-bold mb-0.5 tracking-wider">Trước</p>
                  <p className="text-3xl font-bold text-red-800">30-40%</p>
                </div>
                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight size={28} className="text-slate-400" />
                </motion.div>
                <div className="flex-1 bg-green-100 p-3 rounded-xl text-center shadow-md border border-green-200 transform scale-105">
                  <p className="text-[10px] text-green-600 uppercase font-bold mb-0.5 tracking-wider">Sau</p>
                  <p className="text-3xl font-bold text-green-800">1-5%</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white/60 p-4 rounded-2xl border border-rose-100 shadow-sm">
              <h4 className="font-bold text-xl text-slate-700 mb-3">Nhiễm trùng sau sinh</h4>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-red-100 p-3 rounded-xl text-center shadow-inner border border-red-200">
                  <p className="text-[10px] text-red-600 uppercase font-bold mb-0.5 tracking-wider">Trước</p>
                  <p className="text-3xl font-bold text-red-800">20-30%</p>
                </div>
                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight size={28} className="text-slate-400" />
                </motion.div>
                <div className="flex-1 bg-green-100 p-3 rounded-xl text-center shadow-md border border-green-200 transform scale-105">
                  <p className="text-[10px] text-green-600 uppercase font-bold mb-0.5 tracking-wider">Sau</p>
                  <p className="text-3xl font-bold text-green-800">0.5-1%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-2xl shadow-blue-500/40 relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-10 -left-10 text-blue-400 opacity-30"
          >
            <Heart size={100} />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -right-10 text-indigo-400 opacity-30"
          >
            <Heart size={100} />
          </motion.div>

          <Heart size={28} className="mx-auto mb-1 text-blue-200 animate-pulse" />
          <p className="text-lg text-blue-100 font-medium mb-0.5 relative z-10">Ước tính từ 1942 đến nay</p>
          <p className="font-display text-3xl font-bold relative z-10 drop-shadow-lg">Cứu sống &gt; 200 triệu người</p>
        </motion.div>
      </div>
    </div>
  );
}
