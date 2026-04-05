import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, Target, Sparkles, Microscope } from 'lucide-react';

export function Slide6A() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
      >
        <Target className="text-blue-500" size={32} />
        Ứng dụng điều trị ung thư hiện nay
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <ModernAppCard 
          icon={<Shield size={32} />}
          title="BCG"
          color="blue"
          delay={0.2}
          items={[
            "Vi khuẩn lao đã làm yếu",
            "Điều trị ung thư bàng quang",
            "Liệu pháp tiêu chuẩn toàn cầu"
          ]}
          bgIcon={<Shield size={120} />}
        />
        <ModernAppCard 
          icon={<Activity size={32} />}
          title="T-VEC"
          color="purple"
          delay={0.4}
          items={[
            "Virus được chỉnh sửa gene",
            "Tiêm thẳng vào khối u",
            "Tiêu diệt ung thư da"
          ]}
          bgIcon={<Activity size={120} />}
        />
        <ModernAppCard 
          icon={<Microscope size={32} />}
          title="Clostridium"
          color="rose"
          delay={0.6}
          items={[
            "Sống trong môi trường thiếu oxy",
            "Chỉ tấn công bên trong khối u",
            "Thử nghiệm: Khối u biến mất hoàn toàn"
          ]}
          bgIcon={<Microscope size={120} />}
        />
      </div>
    </div>
  );
}

function ModernAppCard({ icon, title, items, color, delay, bgIcon }: any) {
  const colorStyles = {
    blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-600 bg-blue-100",
    purple: "from-purple-50 to-fuchsia-50 border-purple-200 text-purple-600 bg-purple-100",
    rose: "from-rose-50 to-pink-50 border-rose-200 text-rose-600 bg-rose-100",
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
      
      <ul className="space-y-4 flex-1 relative z-10 bg-white/60 p-6 rounded-3xl border border-white/50">
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
