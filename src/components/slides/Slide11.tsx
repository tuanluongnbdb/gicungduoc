import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, TestTube, Pill, Leaf, Sparkles } from 'lucide-react';

export function Slide11A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Sparkles className="text-purple-500" size={32} />
        Một số ứng dụng khác
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <AppCard 
          icon={<Shield size={32} />}
          title="Vaccine"
          color="blue"
          delay={0.2}
          items={[
            "Vaccine viêm gan B làm từ nấm men",
            "Hơn 1 tỷ liều mỗi năm"
          ]}
          bgIcon={<Shield size={120} />}
        />
        <AppCard 
          icon={<TrendingUp size={32} />}
          title="Hormone tăng trưởng"
          color="purple"
          delay={0.4}
          items={[
            "Giúp trẻ em phát triển bình thường",
            "Sản xuất an toàn bằng vi khuẩn"
          ]}
          bgIcon={<TrendingUp size={120} />}
        />
        <AppCard 
          icon={<TestTube size={32} />}
          title="Test COVID-19"
          color="rose"
          delay={0.6}
          items={[
            "Enzyme từ vi khuẩn suối nước nóng",
            "Công cụ xét nghiệm thiết yếu"
          ]}
          bgIcon={<TestTube size={120} />}
        />
      </div>
    </div>
  );
}

export function Slide11B() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Sparkles className="text-purple-500" size={32} />
        Một số ứng dụng khác
      </motion.h2>

      <div className="flex justify-center gap-8 flex-1 items-center">
        <div className="w-1/3 h-full">
          <AppCard 
            icon={<Pill size={32} />}
            title="Vitamin"
            color="amber"
            delay={0.2}
            items={[
              "Vitamin B12, C, B2...",
              "Tổng hợp nhờ vi sinh vật"
            ]}
            bgIcon={<Pill size={140} />}
          />
        </div>
        <div className="w-1/3 h-full">
          <AppCard 
            icon={<Leaf size={32} />}
            title="Men vi sinh"
            color="emerald"
            delay={0.4}
            items={[
              "Lợi khuẩn trong sữa chua",
              "Giúp tiêu hóa & tăng miễn dịch"
            ]}
            bgIcon={<Leaf size={140} />}
          />
        </div>
      </div>
    </div>
  );
}

function AppCard({ icon, title, items, color, delay, bgIcon }: any) {
  const colorStyles = {
    blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-600 bg-blue-100",
    purple: "from-purple-50 to-fuchsia-50 border-purple-200 text-purple-600 bg-purple-100",
    rose: "from-rose-50 to-pink-50 border-rose-200 text-rose-600 bg-rose-100",
    amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-600 bg-amber-100",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-600 bg-emerald-100",
  }[color as string];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`glass-card p-6 bg-gradient-to-br ${colorStyles?.split(' ')[0]} ${colorStyles?.split(' ')[1]} ${colorStyles?.split(' ')[2]} flex flex-col h-full shadow-2xl relative overflow-hidden`}
    >
      <motion.div 
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-10 -right-10 ${colorStyles?.split(' ')[3]} opacity-20`}
      >
        {bgIcon}
      </motion.div>

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`p-3 rounded-2xl shadow-inner ${colorStyles?.split(' ')[4]} ${colorStyles?.split(' ')[3]}`}>
          {icon}
        </div>
        <h3 className="font-bold text-2xl text-gray-800">{title}</h3>
      </div>
      
      <ul className="space-y-4 flex-1 relative z-10 bg-white/60 p-6 rounded-[2rem] border border-white/50">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-lg">
            <div className={`w-3 h-3 rounded-full mt-2.5 shrink-0 ${colorStyles?.split(' ')[3].replace('text-', 'bg-')}`} />
            <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
