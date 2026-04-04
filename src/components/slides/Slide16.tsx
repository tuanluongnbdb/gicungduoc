import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Pill, Brain, Fingerprint, Hourglass } from 'lucide-react';

export function Slide16A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12 flex items-center gap-6"
      >
        <Rocket className="text-blue-500" size={48} />
        Tương lai - Những điều thú vị sắp tới (Phần 1)
      </motion.h2>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <FutureCard 
          icon={<Pill size={48} />}
          title="Sản xuất thuốc trong cơ thể"
          color="blue"
          delay={0.2}
          items={[
            "Uống vi khuẩn như uống thuốc",
            "Vi khuẩn đến đúng chỗ cần điều trị",
            "Tự sản xuất thuốc tại chỗ",
            "Thử nghiệm trên chuột đã thành công"
          ]}
          bgIcon={<Pill size={250} />}
        />
        <FutureCard 
          icon={<Brain size={48} />}
          title="Điều trị bệnh tâm thần"
          color="purple"
          delay={0.4}
          items={[
            "Vi khuẩn trong ruột ảnh hưởng đến não",
            "Thay đổi vi khuẩn có thể cải thiện tâm trạng",
            "Hơn 30 thử nghiệm lâm sàng đang tiến hành"
          ]}
          bgIcon={<Brain size={250} />}
        />
      </div>
    </div>
  );
}

export function Slide16B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12 flex items-center gap-6"
      >
        <Rocket className="text-blue-500" size={48} />
        Tương lai - Những điều thú vị sắp tới (Phần 2)
      </motion.h2>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <FutureCard 
          icon={<Fingerprint size={48} />}
          title="Y học vi sinh vật cá nhân hóa"
          color="emerald"
          delay={0.2}
          items={[
            "Mỗi người có hệ vi sinh vật riêng biệt",
            "Bác sĩ sẽ thiết kế phác đồ điều trị riêng",
            "Dựa trên cấu trúc vi sinh vật của từng người"
          ]}
          bgIcon={<Fingerprint size={250} />}
        />
        <FutureCard 
          icon={<Hourglass size={48} />}
          title="Kéo dài tuổi thọ"
          color="amber"
          delay={0.4}
          items={[
            "Một số vi sinh vật tạo chất chống lão hóa",
            "Giúp duy trì sự trẻ trung của tế bào",
            "Thử nghiệm trên chuột: Tăng tuổi thọ 20%"
          ]}
          bgIcon={<Hourglass size={250} />}
        />
      </div>
    </div>
  );
}

function FutureCard({ icon, title, items, color, delay, bgIcon }: any) {
  const colorStyles = {
    blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-600",
    purple: "from-purple-50 to-fuchsia-50 border-purple-200 text-purple-600",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-600",
    amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-600",
  }[color as string];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`glass-card p-12 bg-gradient-to-br ${colorStyles} flex flex-col relative overflow-hidden group shadow-2xl`}
    >
      {/* Decorative background icon */}
      <motion.div 
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -bottom-10 opacity-10 transform transition-transform duration-500"
      >
        {bgIcon}
      </motion.div>

      <div className="flex items-center gap-6 mb-10 relative z-10">
        <div className="p-6 rounded-3xl bg-white shadow-inner">
          {icon}
        </div>
        <h3 className="font-display text-4xl font-bold text-gray-800 leading-tight">{title}</h3>
      </div>
      
      <ul className="space-y-6 relative z-10 bg-white/60 p-8 rounded-3xl border border-white/50 flex-1">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-4">
            <div className={`w-3 h-3 rounded-full mt-2.5 shrink-0 bg-current`} />
            <span className="text-gray-700 font-medium text-2xl leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
