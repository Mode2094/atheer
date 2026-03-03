'use client';

import { motion } from 'framer-motion';

const orbBase = 'fixed -z-10 rounded-full blur-3xl pointer-events-none';

const sprayParticles = [
  { left: '8%', bottom: '10%', size: 4, delay: 0, duration: 5.8, drift: 26, color: 'rgba(254,240,138,0.82)' },
  { left: '12%', bottom: '11%', size: 5, delay: 0.6, duration: 6.2, drift: 34, color: 'rgba(167,243,208,0.78)' },
  { left: '15%', bottom: '10%', size: 3, delay: 1.1, duration: 5.5, drift: 18, color: 'rgba(254,202,202,0.82)' },
  { left: '19%', bottom: '11%', size: 4, delay: 1.6, duration: 6.6, drift: 28, color: 'rgba(191,219,254,0.78)' },
  { left: '82%', bottom: '12%', size: 4, delay: 0.3, duration: 5.9, drift: -22, color: 'rgba(254,240,138,0.82)' },
  { left: '86%', bottom: '10%', size: 5, delay: 0.9, duration: 6.4, drift: -32, color: 'rgba(191,219,254,0.78)' },
  { left: '90%', bottom: '11%', size: 3, delay: 1.4, duration: 5.4, drift: -17, color: 'rgba(167,243,208,0.8)' },
  { left: '93%', bottom: '10%', size: 4, delay: 2.1, duration: 6.8, drift: -27, color: 'rgba(254,202,202,0.8)' },
  { left: '28%', bottom: '14%', size: 3, delay: 0.4, duration: 7.2, drift: 16, color: 'rgba(254,240,138,0.8)' },
  { left: '34%', bottom: '13%', size: 2, delay: 1.2, duration: 6.9, drift: 12, color: 'rgba(191,219,254,0.75)' },
  { left: '66%', bottom: '13%', size: 3, delay: 0.7, duration: 7, drift: -14, color: 'rgba(167,243,208,0.78)' },
  { left: '72%', bottom: '14%', size: 2, delay: 1.8, duration: 6.7, drift: -12, color: 'rgba(254,202,202,0.75)' }
];

export default function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(22,163,74,0.12),transparent_38%),radial-gradient(circle_at_65%_62%,rgba(220,38,38,0.1),transparent_42%)]" />
      <div className="aurora-grid absolute inset-0 opacity-25" />

      {/* Brainwave lines */}
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
        animate={{ y: [0, -8, 0], x: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="brainWaveA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0" />
            <stop offset="24%" stopColor="#EAB308" stopOpacity="0.92" />
            <stop offset="48%" stopColor="#22C55E" stopOpacity="0.9" />
            <stop offset="74%" stopColor="#3B82F6" stopOpacity="0.92" />
            <stop offset="90%" stopColor="#EF4444" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="brainWaveB" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0" />
            <stop offset="28%" stopColor="#60A5FA" stopOpacity="0.88" />
            <stop offset="52%" stopColor="#4ADE80" stopOpacity="0.9" />
            <stop offset="77%" stopColor="#F87171" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </linearGradient>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M-60 540 C 80 500, 170 610, 320 550 C 470 485, 570 620, 730 545 C 900 468, 1020 608, 1180 538 C 1310 482, 1400 528, 1510 548"
          stroke="url(#brainWaveA)"
          strokeWidth="3.4"
          fill="none"
          filter="url(#waveGlow)"
          animate={{ pathLength: [0.22, 1, 0.22], opacity: [0.25, 0.95, 0.25] }}
          transition={{ duration: 9.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M-40 575 C 110 620, 220 470, 375 550 C 510 618, 645 470, 805 560 C 965 650, 1095 482, 1260 570 C 1360 620, 1450 600, 1520 578"
          stroke="url(#brainWaveB)"
          strokeWidth="2.7"
          fill="none"
          filter="url(#waveGlow)"
          animate={{ pathLength: [0.15, 1, 0.15], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        <motion.path
          d="M-80 500 C 60 450, 160 560, 300 510 C 470 448, 580 560, 730 498 C 900 430, 1010 560, 1180 492 C 1310 438, 1420 502, 1510 520"
          stroke="url(#brainWaveA)"
          strokeWidth="1.8"
          fill="none"
          filter="url(#waveGlow)"
          animate={{ pathLength: [0.12, 0.9, 0.12], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 10.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </motion.svg>

      {/* Perfume spray plumes */}
      <motion.div
        className="absolute bottom-[6%] left-[4%] h-[36vh] w-[35vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(250,204,21,0.38),rgba(22,163,74,0.16)_42%,transparent_78%)] blur-2xl"
        animate={{ scale: [0.96, 1.06, 0.96], opacity: [0.35, 0.58, 0.35] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[5%] right-[4%] h-[34vh] w-[34vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.34),rgba(220,38,38,0.16)_42%,transparent_78%)] blur-2xl"
        animate={{ scale: [0.98, 1.08, 0.98], opacity: [0.32, 0.56, 0.32] }}
        transition={{ duration: 9.1, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {sprayParticles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.bottom}-${index}`}
          className="absolute rounded-full mix-blend-screen"
          style={{
            left: particle.left,
            bottom: particle.bottom,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color
          }}
          animate={{
            y: [0, -130, -210],
            x: [0, particle.drift * 0.45, particle.drift],
            opacity: [0, 0.85, 0],
            scale: [0.55, 1.15, 0.8]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut'
          }}
        />
      ))}

      <motion.div
        className="absolute left-[-20%] top-[58%] h-[2px] w-[38%] bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent blur-[1px]"
        animate={{ x: ['0%', '190%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className={`${orbBase} left-[5%] top-[15%] h-44 w-44 bg-yellow-300/20`}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className={`${orbBase} right-[8%] top-[28%] h-52 w-52 bg-green-400/20`}
        animate={{ y: [0, 26, 0], x: [0, -18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className={`${orbBase} bottom-[8%] left-[35%] h-56 w-56 bg-red-400/15`}
        animate={{ y: [0, -20, 0], x: [0, -24, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className={`${orbBase} bottom-[20%] right-[32%] h-52 w-52 bg-blue-400/15`}
        animate={{ y: [0, -20, 0], x: [0, -24, 0] }}
        transition={{ duration: 12.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_52%,rgba(2,6,23,0.45)_100%)]" />
    </div>
  );
}
