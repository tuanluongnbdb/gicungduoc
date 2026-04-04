import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, TestTube, Pill, Leaf, Sparkles } from 'lucide-react';

export function Slide15A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Sparkles className="text-purple-500" size={28} />
        Một vài ứng dụng khác (Phần 1)
      </motion.h2>

      <div className="grid grid-cols-3 gap-4 flex-1">
        <AppCard 
          icon={<Shield size={28} />}
          title="Vaccine"
          color="blue"
          delay={0.2}
          items={[
            "Vaccine viêm gan B làm từ nấm men",
            "Hơn 1 tỷ liều mỗi năm"
          ]}
          bgIcon={<Shield size={100} />}
        />
        <AppCard 
          icon={<TrendingUp size={28} />}
          title="Hormone tăng trưởng"
          color="purple"
          delay={0.4}
          items={[
            "Giúp trẻ em thiếu hormone phát triển",
            "Trước: Lấy từ người chết (nguy hiểm)",
            "Nay: Vi khuẩn sản xuất an toàn",
            "> 500,000 trẻ em được điều trị"
          ]}
          bgIcon={<TrendingUp size={100} />}
        />
        <AppCard 
          icon={<TestTube size={28} />}
          title="Test COVID-19"
          color="rose"
          delay={0.6}
          items={[
            "Dùng enzyme từ vi khuẩn suối nước nóng",
            "Hơn 4 tỷ test đã được thực hiện"
          ]}
          bgIcon={<TestTube size={100} />}
        />
      </div>
    </div>
  );
}

export function Slide15B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Sparkles className="text-purple-500" size={28} />
        Một vài ứng dụng khác (Phần 2)
      </motion.h2>

      <div className="flex justify-center gap-6 flex-1 items-center">
        <div className="w-1/3 h-full">
          <AppCard 
            icon={<Pill size={28} />}
            title="Vitamin"
            color="amber"
            delay={0.2}
            items={[
              "Vitamin B12, C, B2 từ vi khuẩn và nấm",
              "Giá thành giảm 90%"
            ]}
            bgIcon={<Pill size={120} />}
          />
        </div>
        <div className="w-1/3 h-full">
          <AppCard 
            icon={<Leaf size={28} />}
            title="Men vi sinh"
            color="emerald"
            delay={0.4}
            items={[
              "Vi khuẩn tốt giúp tiêu hóa (sữa chua)",
              "Giúp cơ thể khỏe mạnh hơn"
            ]}
            bgIcon={<Leaf size={120} />}
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
      className={`glass-card p-5 bg-gradient-to-br ${colorStyles?.split(' ')[0]} ${colorStyles?.split(' ')[1]} ${colorStyles?.split(' ')[2]} flex flex-col h-full shadow-2xl relative overflow-hidden`}
    >
      <motion.div 
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-10 -right-10 ${colorStyles?.split(' ')[3]} opacity-20`}
      >
        {bgIcon}
      </motion.div>

      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className={`p-2 rounded-xl shadow-inner ${colorStyles?.split(' ')[4]} ${colorStyles?.split(' ')[3]}`}>
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
      </div>
      
      <ul className="space-y-3 flex-1 relative z-10 bg-white/60 p-3 rounded-2xl border border-white/50">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-base">
            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${colorStyles?.split(' ')[3].replace('text-', 'bg-')}`} />
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
