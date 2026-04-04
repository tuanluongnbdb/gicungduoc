import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Bug, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

export function Slide7A() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Vi sinh vật điều trị ung thư - Ngày nay (Phần 1)
      </motion.h2>

      <div className="flex gap-12 flex-1">
        <MethodCard 
          icon={<ShieldCheck size={64} />}
          title="BCG (Ung thư bàng quang)"
          color="blue"
          delay={0.2}
          items={[
            "Vi khuẩn lao bò (đã làm yếu)",
            "Bơm trực tiếp vào bàng quang",
            "Hơn 1 triệu người đã điều trị",
            "Tỷ lệ thành công: 60-70%"
          ]}
          animationType="pulse"
        />
        <MethodCard 
          icon={<Activity size={64} />}
          title="T-VEC (Virus diệt ung thư)"
          color="purple"
          delay={0.4}
          items={[
            "Virus herpes đã được sửa đổi",
            "Chỉ tấn công tế bào ung thư",
            "Được Mỹ chấp thuận từ 2015",
            "Hơn 5,000 bệnh nhân đã sử dụng"
          ]}
          animationType="spin"
        />
      </div>
    </div>
  );
}

export function Slide7B() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white/40 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-5xl font-bold text-gray-900 mb-12"
      >
        Vi sinh vật điều trị ung thư - Ngày nay (Phần 2)
      </motion.h2>

      <div className="flex flex-col gap-12 flex-1">
        <div className="flex justify-center h-1/2">
          <div className="w-2/3">
            <MethodCard 
              icon={<Bug size={64} />}
              title="Vi khuẩn Clostridium"
              color="emerald"
              delay={0.2}
              items={[
                "Sống được trong khối u (thiếu oxy)",
                "Đang trong giai đoạn thử nghiệm",
                "24 bệnh nhân đã thử nghiệm",
                "1 ca khối u biến mất hoàn toàn"
              ]}
              animationType="bounce"
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="h-1/2 glass-card p-12 bg-gradient-to-r from-gray-900 to-slate-800 text-white flex items-center justify-between shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} 
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-20 -right-20 text-blue-500"
          >
            <TrendingUp size={200} />
          </motion.div>

          <div className="flex items-center gap-8 relative z-10">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20"
            >
              <TrendingUp size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            </motion.div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-4">Con số ấn tượng</h3>
              <p className="text-2xl text-gray-300">Sự phát triển mạnh mẽ của liệu pháp vi sinh</p>
            </div>
          </div>
          <div className="text-right relative z-10">
            <motion.p 
              initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.0, type: "spring" }}
              className="font-display text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4 drop-shadow-lg"
            >
              Hàng chục nghìn
            </motion.p>
            <p className="text-2xl text-gray-400 font-medium">bệnh nhân được điều trị mỗi năm</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MethodCard({ icon, title, items, color, delay, animationType }: any) {
  const colorStyles = {
    blue: "from-blue-50 to-indigo-50 border-blue-200 text-blue-700",
    purple: "from-purple-50 to-fuchsia-50 border-purple-200 text-purple-700",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700",
  }[color as string];

  const iconAnimation = {
    pulse: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
    spin: { rotate: 360, transition: { duration: 10, repeat: Infinity, ease: "linear" } },
    bounce: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
  }[animationType as string];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring" }}
      className={`flex-1 glass-card p-12 bg-gradient-to-br ${colorStyles} flex flex-col shadow-2xl relative overflow-hidden`}
    >
      <div className="mb-10 flex items-center gap-6 relative z-10">
        <motion.div 
          animate={iconAnimation}
          className={`p-6 rounded-3xl bg-white shadow-xl border border-white/50 ${colorStyles.split(' ')[3]}`}
        >
          {icon}
        </motion.div>
        <h3 className="font-display text-4xl font-bold text-gray-800 leading-tight">{title}</h3>
      </div>
      
      <ul className="space-y-6 flex-1 relative z-10">
        {items.map((item: string, idx: number) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: delay + 0.2 + (idx * 0.1) }}
            className="flex items-start gap-4 text-2xl"
          >
            <div className={`w-3 h-3 rounded-full mt-3 shrink-0 shadow-sm ${colorStyles.split(' ')[3].replace('text-', 'bg-')}`} />
            <span className="text-gray-700 font-medium">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
