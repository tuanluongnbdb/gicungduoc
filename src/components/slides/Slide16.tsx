import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Pill, Brain, Fingerprint, Hourglass } from 'lucide-react';

export function Slide16A() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Rocket className="text-blue-500" size={28} />
        Tương lai - Những điều thú vị sắp tới
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 flex-1">
        <FutureCard 
          icon={<Pill size={28} />}
          title="Sản xuất thuốc trong cơ thể"
          color="blue"
          delay={0.2}
          items={[
            "Uống vi khuẩn như uống thuốc",
            "Vi khuẩn đến đúng chỗ cần điều trị",
            "Tự sản xuất thuốc tại chỗ",
            "Sử dụng Thực khuẩn thể để vận chuyển gen"
          ]}
          bgIcon={<Pill size={140} />}
        />
        <FutureCard 
          icon={<Brain size={28} />}
          title="Điều trị bệnh tâm thần"
          color="purple"
          delay={0.4}
          items={[
            "Vi khuẩn trong ruột ảnh hưởng đến não",
            "Thay đổi vi khuẩn có thể cải thiện tâm trạng",
            "Hơn 30 thử nghiệm lâm sàng đang tiến hành"
          ]}
          bgIcon={<Brain size={140} />}
        />
      </div>
    </div>
  );
}

export function Slide16B() {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
      >
        <Rocket className="text-blue-500" size={28} />
        Tương lai - Những điều thú vị sắp tới
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 flex-1">
        <FutureCard 
          icon={<Fingerprint size={28} />}
          title="Y học vi sinh vật cá nhân hóa"
          color="emerald"
          delay={0.2}
          items={[
            "Mỗi người có hệ vi sinh vật riêng biệt",
            "Bác sĩ sẽ thiết kế phác đồ điều trị riêng",
            "Dựa trên cấu trúc vi sinh vật của từng người"
          ]}
          bgIcon={<Fingerprint size={140} />}
        />
        <FutureCard 
          icon={<Hourglass size={28} />}
          title="Kéo dài tuổi thọ"
          color="amber"
          delay={0.4}
          items={[
            "Một số vi sinh vật tạo chất chống lão hóa",
            "Giúp duy trì sự trẻ trung của tế bào",
            "Thử nghiệm trên chuột: Tăng tuổi thọ 20%"
          ]}
          bgIcon={<Hourglass size={140} />}
        />
      </div>
    </div>
  );
}

function FutureCard({ icon, title, items, color, delay, bgIcon, image }: any) {
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
      className={`glass-card p-5 bg-gradient-to-br ${colorStyles} flex flex-col relative overflow-hidden group shadow-2xl`}
    >
      {/* Decorative background icon */}
      <motion.div 
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -bottom-10 opacity-10 transform transition-transform duration-500"
      >
        {bgIcon}
      </motion.div>

      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="p-2 rounded-xl bg-white shadow-inner shrink-0">
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold text-gray-800 leading-tight">{title}</h3>
      </div>
      
      <div className="flex flex-col flex-1 gap-3 relative z-10">
        <ul className="space-y-2 bg-white/60 p-3 rounded-2xl border border-white/50 flex-1">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-base leading-tight">
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 bg-current`} />
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
