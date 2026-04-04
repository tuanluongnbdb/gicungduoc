import React from 'react';
import { motion } from 'motion/react';
import { Users, Weight, Scaling, ArrowRight } from 'lucide-react';

export function Slide2A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 relative z-10"
      >
        <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-1 block">Định nghĩa cơ bản</span>
        <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
          Vi sinh vật là gì?
        </h2>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl"
        >
          Là những sinh vật có kích thước <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-8">siêu nhỏ</span>, 
          mắt thường không thể nhìn thấy, chỉ có thể quan sát dưới kính hiển vi.
        </motion.p>

        <div className="grid grid-cols-3 gap-6">
          <StatCard 
            icon={<Users className="text-blue-500" size={24} />}
            value="38 Nghìn Tỷ"
            label="Tế bào vi sinh vật"
            subLabel="Trong cơ thể người"
            delay={0.3}
          />
          <StatCard 
            icon={<Weight className="text-indigo-500" size={24} />}
            value="~2 kg"
            label="Tổng khối lượng"
            subLabel="Tương đương bộ não"
            delay={0.4}
          />
          <StatCard 
            icon={<Scaling className="text-purple-500" size={24} />}
            value="1.3 : 1"
            label="Tỉ lệ số lượng"
            subLabel="Nhiều hơn tế bào người"
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
}

export function Slide2B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 relative z-10"
      >
        <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-1 block">Kích thước siêu vi</span>
        <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
          Tương quan tỉ lệ
        </h2>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-3 gap-8">
          {/* Hair */}
          <SizeItem 
            label="Sợi tóc người"
            size="0.007 cm"
            color="slate"
            delay={0.2}
            multiplier="35x"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-1.5 h-32 bg-slate-300 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
              </div>
            </div>
          </SizeItem>

          {/* Bacteria */}
          <SizeItem 
            label="Vi khuẩn"
            size="0.0002 cm"
            color="blue"
            delay={0.4}
            multiplier="20x"
          >
            <div className="w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-10 h-20 bg-blue-500 rounded-full shadow-lg border-4 border-blue-400/30 relative"
              >
                <div className="absolute top-3 left-1.5 w-1.5 h-6 bg-white/20 rounded-full blur-[1px]" />
              </motion.div>
            </div>
          </SizeItem>

          {/* Virus */}
          <SizeItem 
            label="Virus"
            size="0.00001 cm"
            color="indigo"
            delay={0.6}
          >
            <div className="w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 bg-indigo-600 rounded-lg shadow-lg border-2 border-indigo-400/30 relative flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              </motion.div>
            </div>
          </SizeItem>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", damping: 20 }}
          className="mt-8 p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 flex items-center justify-between max-w-4xl mx-auto w-full"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <Scaling className="text-white" size={32} />
            </div>
            <div>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">Phân tích so sánh</p>
              <p className="text-xl text-slate-800 font-medium leading-tight">
                Sợi tóc có kích thước lớn hơn Virus <br />
                gấp <span className="text-blue-600 font-black text-4xl tabular-nums tracking-tighter">700</span> lần
              </p>
            </div>
          </div>
          <div className="hidden lg:block h-12 w-px bg-slate-100 mx-6" />
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-slate-400 text-[10px] font-medium mb-1">Độ phân giải</span>
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[10px] font-bold">10^-5 cm</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, subLabel, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-3xl font-black text-slate-900 mb-1 tabular-nums">{value}</h4>
      <p className="text-slate-800 font-bold text-sm mb-1">{label}</p>
      <p className="text-slate-400 text-xs font-medium">{subLabel}</p>
    </motion.div>
  );
}

function SizeItem({ label, size, color, delay, children, multiplier }: any) {
  const colors: any = {
    slate: "text-slate-600 bg-slate-50 border-slate-200",
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-200"
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.8 }}
        className="mb-6 h-48 flex items-center justify-center w-full bg-white rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        {children}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3 }}
        className="text-center relative w-full"
      >
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">{label}</h3>
        <div className={`inline-block px-5 py-1.5 rounded-xl border ${colors[color]} font-sans font-black text-lg tabular-nums shadow-sm`}>
          {size}
        </div>

        {multiplier && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.6 }}
            className="absolute top-1/2 -right-2 translate-x-full -translate-y-1/2 hidden xl:flex items-center gap-3"
          >
            <div className="h-px w-6 bg-slate-200" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">
              {multiplier}
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
