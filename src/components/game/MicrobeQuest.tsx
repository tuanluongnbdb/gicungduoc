import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Howl } from 'howler';
import { Trophy, Heart, Play, RefreshCcw, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';

// Questions from the user
const QUESTIONS = [
  {
    id: 1,
    question: "Vi sinh vật là gì?",
    options: [
      "Những sinh vật khổng lồ",
      "Những sinh vật quá nhỏ để nhìn bằng mắt thường",
      "Chỉ là vi khuẩn",
      "Chỉ là virus"
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Có bao nhiêu vi sinh vật trong cơ thể người?",
    options: [
      "Khoảng 1 triệu",
      "Khoảng 1 tỷ",
      "Khoảng 38 nghìn tỷ",
      "Không có vi sinh vật nào"
    ],
    correct: 2
  },
  {
    id: 3,
    question: "Bác sĩ William Coley phát hiện ra điều gì năm 1891?",
    options: [
      "Vi khuẩn có thể giúp chống ung thư",
      "Nấm mốc tạo ra penicillin",
      "Vi khuẩn gây bệnh đái tháo đường",
      "Virus gây bệnh COVID-19"
    ],
    correct: 0
  },
  {
    id: 4,
    question: "Fleming phát hiện penicillin như thế nào?",
    options: [
      "Nghiên cứu có kế hoạch nhiều năm",
      "Đọc trong sách",
      "Tình cờ thấy nấm mốc giết vi khuẩn trong đĩa nuôi cấy",
      "Học sinh của ông phát hiện"
    ],
    correct: 2
  },
  {
    id: 5,
    question: "Trước khi có công nghệ sinh học, Insulin được lấy từ đâu?",
    options: [
      "Từ cây cỏ",
      "Từ tụy của lợn và bò",
      "Từ nước biển",
      "Từ không khí"
    ],
    correct: 1
  }
];

// Sound URLs
const SOUNDS = {
  bgm: 'https://assets.mixkit.co/music/preview/mixkit-game-level-music-689.mp3',
  correct: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chime-2064.mp3',
  wrong: 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3',
  collect: 'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-2331.mp3',
  pop: 'https://assets.mixkit.co/sfx/preview/mixkit-bubble-pop-up-alert-notification-2364.mp3'
};

const START_POS = { x: 640, y: 600 };

// 5 boxes distributed across the top
const BOXES = QUESTIONS.map((_, i) => ({
  id: i,
  x: 160 + i * 240, // 160, 400, 640, 880, 1120
  y: 150
}));

export default function MicrobeQuest() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'quiz' | 'won' | 'lost'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [playerPos, setPlayerPos] = useState(START_POS);
  const [answered, setAnswered] = useState<{ id: number, correct: boolean }[]>([]);
  const [isHappy, setIsHappy] = useState(true);
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong', x: number, y: number } | null>(null);
  const [answerResult, setAnswerResult] = useState<'correct' | 'wrong' | null>(null);
  
  const audioRef = useRef<{ [key: string]: Howl }>({});
  const gameLoopRef = useRef<number>();
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const velocityRef = useRef({ x: 0, y: 0 });

  // Initialize sounds
  useEffect(() => {
    audioRef.current = {
      bgm: new Howl({ src: [SOUNDS.bgm], loop: true, volume: 0.15 }),
      correct: new Howl({ src: [SOUNDS.correct], volume: 0.4 }),
      wrong: new Howl({ src: [SOUNDS.wrong], volume: 0.4 }),
      collect: new Howl({ src: [SOUNDS.collect], volume: 0.3 }),
      pop: new Howl({ src: [SOUNDS.pop], volume: 0.5 })
    };

    return () => {
      Object.values(audioRef.current).forEach((s: any) => s.unload());
    };
  }, []);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setCurrentQuestionIndex(0);
    setPlayerPos(START_POS);
    setAnswered([]);
    setIsHappy(true);
    velocityRef.current = { x: 0, y: 0 };
    
    audioRef.current.bgm.play();
    audioRef.current.pop.play();
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    keysRef.current[e.code] = true;
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    keysRef.current[e.code] = false;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Game Loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
      return;
    }

    const update = () => {
      setPlayerPos(prev => {
        let { x: vx, y: vy } = velocityRef.current;
        const accel = 1.2;
        const friction = 0.88; // Slippery/fluid feel

        let isMoving = false;
        if (keysRef.current['ArrowRight'] || keysRef.current['KeyD']) { vx += accel; isMoving = true; }
        if (keysRef.current['ArrowLeft'] || keysRef.current['KeyA']) { vx -= accel; isMoving = true; }
        if (keysRef.current['ArrowUp'] || keysRef.current['KeyW']) { vy -= accel; isMoving = true; }
        if (keysRef.current['ArrowDown'] || keysRef.current['KeyS']) { vy += accel; isMoving = true; }
        
        vx *= friction;
        vy *= friction;
        velocityRef.current = { x: vx, y: vy };

        // Organic wobble (swimming effect)
        const time = Date.now() / 150;
        const wobbleX = isMoving ? Math.sin(time) * 2.5 : Math.sin(time * 0.5) * 0.5;
        const wobbleY = isMoving ? Math.cos(time * 1.1) * 2.5 : Math.cos(time * 0.6) * 0.5;

        let newX = prev.x + vx + wobbleX;
        let newY = prev.y + vy + wobbleY;

        // Boundaries (1280x720 container, player is ~80x80)
        newX = Math.max(40, Math.min(newX, 1240));
        newY = Math.max(40, Math.min(newY, 680));

        // Collision with question boxes
        const hitBox = BOXES.find(b => 
          !answered.some(a => a.id === b.id) && 
          Math.abs(newX - b.x) < 60 && 
          Math.abs(newY - b.y) < 60
        );

        if (hitBox) {
          audioRef.current.collect.play();
          setCurrentQuestionIndex(hitBox.id);
          setGameState('quiz');
          // Reset keys so player doesn't keep moving after quiz
          keysRef.current = {};
          velocityRef.current = { x: 0, y: 0 };
          return { x: newX, y: newY };
        }

        return { x: newX, y: newY };
      });

      gameLoopRef.current = requestAnimationFrame(update);
    };

    gameLoopRef.current = requestAnimationFrame(update);
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState, answered]);

  const handleAnswer = (index: number) => {
    const isCorrect = index === QUESTIONS[currentQuestionIndex].correct;
    
    if (isCorrect) {
      audioRef.current.correct.play();
      setScore(prev => prev + 100);
      setIsHappy(true);
      setFlash('correct');
      setFeedback({ type: 'correct', x: START_POS.x, y: START_POS.y - 50 });
      setAnswerResult('correct');
    } else {
      audioRef.current.wrong.play();
      setIsHappy(false);
      setLives(prev => prev - 1);
      setFlash('wrong');
      setFeedback({ type: 'wrong', x: START_POS.x, y: START_POS.y - 50 });
      setAnswerResult('wrong');
    }

    // Clear flash and feedback after a delay
    setTimeout(() => {
      setFlash(null);
      setAnswerResult(null);
    }, 1500);
    setTimeout(() => setFeedback(null), 1500);

    // Mark as answered regardless of correct/wrong to progress the game
    const newAnswered = [...answered, { id: currentQuestionIndex, correct: isCorrect }];
    setAnswered(newAnswered);
    
    // Reset player position to start
    setPlayerPos(START_POS);
    velocityRef.current = { x: 0, y: 0 };

    // Check game over conditions
    if (!isCorrect && lives <= 1) {
      setGameState('lost');
      audioRef.current.bgm.stop();
    } else if (newAnswered.length === QUESTIONS.length) {
      setGameState('won');
      audioRef.current.bgm.stop();
    } else {
      setGameState('playing');
    }
  };

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden font-sans select-none text-slate-100">
      
      {/* Static Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800 via-slate-900 to-slate-900" />
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')] bg-repeat" />

      {/* Flash Overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 z-50 pointer-events-none ${flash === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}
          />
        )}
      </AnimatePresence>

      {/* Big Answer Feedback Animation */}
      <AnimatePresence>
        {answerResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1.5, rotate: 0 }}
            exit={{ opacity: 0, scale: 2, rotate: 10 }}
            className="absolute z-[100] pointer-events-none flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className={`text-7xl font-black italic tracking-tighter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                answerResult === 'correct' ? 'text-green-400' : 'text-red-500'
              }`}
            >
              {answerResult === 'correct' ? 'CHÍNH XÁC!' : 'SAI RỒI!'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-40">
        <div className="flex gap-4">
          <div className="bg-slate-800 px-5 py-2.5 rounded-xl border-2 border-slate-700 text-blue-400 flex items-center gap-2 shadow-lg">
            <Trophy size={20} className="text-yellow-500" />
            <span className="text-xl font-bold">{score}</span>
          </div>
          <div className="bg-slate-800 px-5 py-2.5 rounded-xl border-2 border-slate-700 text-pink-500 flex items-center gap-2 shadow-lg">
            <Heart size={20} fill="currentColor" className={lives < 2 ? "animate-pulse" : ""} />
            <span className="text-xl font-bold">{lives}</span>
          </div>
        </div>
        <div className="bg-slate-800 px-6 py-2 rounded-full text-blue-300 text-sm font-bold tracking-wide border-2 border-slate-700 shadow-lg">
          VI KHUẨN PHIÊU LƯU KÝ
        </div>
      </div>

      {/* Game World */}
      <div className="relative w-[1280px] h-[720px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              className="text-center z-30 bg-slate-800 p-12 rounded-3xl border-4 border-blue-500 shadow-2xl max-w-2xl"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-blue-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center relative">
                <div className="flex gap-3 mb-2">
                  <div className="w-3 h-4 bg-slate-900 rounded-full" />
                  <div className="w-3 h-4 bg-slate-900 rounded-full" />
                </div>
                <div className="absolute bottom-6 w-4 h-2 border-b-4 border-slate-900 rounded-full" />
              </div>

              <h1 className="text-5xl font-extrabold text-white mb-4">
                Vi Khuẩn<br/>Phiêu Lưu Ký
              </h1>
              <p className="text-blue-300 mb-10 text-lg font-medium">Di chuyển vào các ô câu hỏi phía trên để trả lời nhé!</p>
              
              <button 
                onClick={startGame}
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-2xl font-bold shadow-lg shadow-blue-900 transition-all flex items-center gap-3 mx-auto hover:scale-105 active:scale-95"
              >
                <Play fill="currentColor" size={24} /> Bắt đầu chơi
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <div key="playing" className="absolute inset-0">
              
              {/* Question Boxes */}
              {BOXES.map((box, i) => {
                const answerInfo = answered.find(a => a.id === box.id);
                const isAnswered = !!answerInfo;
                const isCorrect = answerInfo?.correct;

                return (
                  <div
                    key={box.id}
                    className={`absolute w-28 h-28 -ml-14 -mt-14 rounded-2xl border-4 flex flex-col items-center justify-center transition-all duration-300 ${
                      isAnswered 
                        ? 'bg-slate-800 border-slate-600 opacity-50' 
                        : 'bg-blue-900 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    }`}
                    style={{ left: box.x, top: box.y }}
                  >
                    {isAnswered ? (
                      isCorrect ? (
                        <CheckCircle2 size={40} className="text-green-500 mb-1" />
                      ) : (
                        <XCircle size={40} className="text-red-500 mb-1" />
                      )
                    ) : (
                      <span className="text-blue-300 text-3xl font-black mb-1">?</span>
                    )}
                    <span className="text-sm font-bold text-slate-300">Câu {i + 1}</span>
                  </div>
                );
              })}

              {/* Start Zone Indicator */}
              <div 
                className="absolute w-32 h-32 -ml-16 -mt-16 border-4 border-dashed border-slate-600 rounded-full flex items-center justify-center opacity-50"
                style={{ left: START_POS.x, top: START_POS.y }}
              >
                <span className="text-slate-500 font-bold text-sm absolute -bottom-6 w-max">Điểm xuất phát</span>
              </div>

              {/* Player Character */}
              <motion.div 
                className="absolute top-0 left-0 w-20 h-20 -ml-10 -mt-10 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center justify-center z-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
                animate={{ 
                  x: playerPos.x, 
                  y: playerPos.y,
                  rotate: flash === 'wrong' ? [0, -10, 10, -10, 10, 0] : 0,
                  scale: flash === 'correct' ? [1, 1.2, 1] : 1
                }}
                transition={{
                  rotate: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
              >
                {/* Face */}
                <div className="flex flex-col items-center mt-2">
                  <div className="flex gap-3 mb-1">
                    <div className="w-2.5 h-3.5 bg-slate-900 rounded-full relative">
                      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full" />
                    </div>
                    <div className="w-2.5 h-3.5 bg-slate-900 rounded-full relative">
                      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>
                  {isHappy ? (
                    <div className="w-3 h-1.5 border-b-2 border-slate-900 rounded-full" />
                  ) : (
                    <div className="w-3 h-1.5 border-t-2 border-slate-900 rounded-full mt-1" />
                  )}
                </div>
              </motion.div>
              {/* Feedback Text */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: feedback.y, x: feedback.x - 50 }}
                    animate={{ opacity: 1, y: feedback.y - 100 }}
                    exit={{ opacity: 0 }}
                    className={`absolute z-30 font-black text-3xl pointer-events-none ${feedback.type === 'correct' ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {feedback.type === 'correct' ? '+100' : '-1 ❤️'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {gameState === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="z-40 bg-slate-800 p-10 rounded-3xl border-4 border-blue-500 shadow-2xl max-w-3xl w-full mx-4"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="bg-blue-900 text-blue-300 px-4 py-1.5 rounded-full font-bold text-sm border border-blue-700">
                  Câu hỏi {currentQuestionIndex + 1} / 5
                </div>
              </div>
              
              <h2 className="text-2xl text-white font-bold mb-8 leading-relaxed">
                {QUESTIONS[currentQuestionIndex].question}
              </h2>
              
              <div className="grid gap-4">
                {QUESTIONS[currentQuestionIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left p-5 bg-slate-700 hover:bg-blue-600 text-slate-200 hover:text-white transition-all border-2 border-slate-600 hover:border-blue-400 rounded-xl flex items-center gap-4 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center font-bold text-slate-400 group-hover:border-blue-300 group-hover:text-blue-100 group-hover:bg-blue-700 transition-colors shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-lg font-semibold">{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {gameState === 'won' && (
            <motion.div 
              key="won"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center z-30 bg-slate-800 p-12 rounded-3xl border-4 border-yellow-500 shadow-2xl max-w-2xl"
            >
              <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
                <Trophy size={60} className="text-white" />
              </div>
              
              <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
                Tuyệt Vời!
              </h1>
              <p className="text-slate-300 text-xl mb-8 font-medium">Vi Khuẩn đã hoàn thành xuất sắc nhiệm vụ!</p>
              
              <div className="bg-slate-900 rounded-2xl p-6 mb-10 inline-block border border-slate-700">
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Tổng điểm</div>
                <div className="text-5xl text-blue-400 font-black">{score}</div>
              </div>
              
              <button 
                onClick={startGame}
                className="bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all flex items-center gap-3 mx-auto hover:scale-105 active:scale-95"
              >
                <RefreshCcw size={24} /> Chơi lại nào
              </button>
            </motion.div>
          )}

          {gameState === 'lost' && (
            <motion.div 
              key="lost"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center z-30 bg-slate-800 p-12 rounded-3xl border-4 border-red-500 shadow-2xl max-w-2xl"
            >
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                <Heart size={60} className="text-white" fill="currentColor" />
              </div>
              
              <h1 className="text-5xl font-extrabold text-red-500 mb-4">
                Ôi không!
              </h1>
              <p className="text-slate-300 text-xl mb-10 font-medium">Vi Khuẩn đã hết máu mất rồi. Thử lại nhé!</p>
              
              <button 
                onClick={startGame}
                className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all flex items-center gap-3 mx-auto hover:scale-105 active:scale-95"
              >
                <RefreshCcw size={24} /> Thử lại ngay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls Hint */}
      {gameState === 'playing' && (
        <div className="absolute bottom-8 left-8 flex gap-8 z-40 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-700 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300"><ArrowUp size={20} /></div>
              <div className="flex gap-1">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300"><ArrowLeft size={20} /></div>
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300"><ArrowDown size={20} /></div>
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300"><ArrowRight size={20} /></div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-600 mx-2" />
            <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Di chuyển<br/>Vi Khuẩn</span>
          </div>
        </div>
      )}
    </div>
  );
}
