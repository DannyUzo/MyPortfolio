"use client"

import { motion } from "framer-motion"
import {
  Box,
  Code2,
  Cpu,
  Dribbble,
  ExternalLink,
  Github,
  Gitlab,
  Instagram,
  Layers,
  Linkedin,
  Monitor,
  Terminal,
  Youtube,
} from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/DannyUzo", icon: Github },
  // { label: "X", href: "#", icon: ExternalLink },
  { label: "Linkedin", href: "https://linkedin.com/in/daniel-uzodinma-6ba3b7293", icon: Linkedin },
  // { label: "Codepen", href: "#", icon: Code2 },
  // { label: "Dribbble", href: "#", icon: Dribbble },
  // { label: "Instagram", href: "#", icon: Instagram },
  { label: "Robotics", href: "/work#hardware", icon: Cpu },
  { label: "Frontend", href: "/work#software", icon: Monitor },
  // { label: "Youtube", href: "#", icon: Youtube },
  // { label: "Daily.dev", href: "#", icon: ExternalLink },
  { label: "Logbook", href: "/journal", icon: Terminal },
  { label: "Systems", href: "/work", icon: Layers },
  // { label: "Stackoverflow", href: "#", icon: Box },
  // { label: "Codewars", href: "#", icon: Code2 },
  // { label: "Gitlab", href: "#", icon: Gitlab },
]

const graphCells = Array.from({ length: 84 }, (_, index) => {
  const intensity = [0, 1, 2, 3, 1, 0, 2][index % 7]
  return intensity
})

export function HeroUnified() {
  return (
    <section className="grain-surface min-h-screen overflow-hidden border-b border-zinc-200 pt-24 text-zinc-950 dark:border-white/10 dark:text-white">
      <div className="lg:mx-40 flex w-full max-w-[1020px] items-start px-6 pb-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex-1"
        >
          <h1 className="text-4xl font-black leading-[1.35] tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-[3.35rem]">
            Frontend engineer, hardware prototyper & robotics researcher
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m Daniel Uzodinma, a frontend engineer documenting the intersection of interface systems, embedded hardware, mechatronics, and practical automation.
          </p>

          <div className="mt-10 flex w-full flex-wrap gap-x-7 gap-y-5">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="soft-blue-hover inline-flex items-center gap-2 whitespace-nowrap text-base font-semibold text-zinc-900 dark:text-white"
              >
                <item.icon className="h-5 w-5 text-zinc-500" />
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function PickPlaceRobot() {
  const stroke = "var(--robot-stroke)"
  const faint = "var(--robot-faint)"
  const glow = "var(--robot-glow)"

  const Dial = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} />
      <circle cx={cx} cy={cy} r={r * 0.55} stroke={faint} />
      <circle cx={cx} cy={cy} r="2" fill={glow} stroke="none" />
      <path
        stroke={faint}
        d={`M${cx} ${cy - r} v${r * 0.3} M${cx} ${cy + r * 0.7} v${r * 0.3} M${cx - r} ${cy} h${r * 0.3} M${cx + r * 0.7} ${cy} h${r * 0.3}`}
      />
    </g>
  )

  return (
    <svg viewBox="0 0 640 480" className="hero-robot h-[480px] w-[640px] max-w-full opacity-90">
      <defs>
        <filter id="robotGlow2">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          .pp-arc { stroke-dasharray: 6 8; animation: pp-dash 3s linear infinite; }
          .pp-base { animation: pp-base 8s ease-in-out infinite; transform-origin: 250px 410px; }
          .pp-shoulder { animation: pp-shoulder 8s ease-in-out infinite; transform-origin: 250px 350px; }
          .pp-elbow { animation: pp-elbow 8s ease-in-out infinite; transform-origin: 320px 170px; }
          .pp-wrist { animation: pp-wrist 8s ease-in-out infinite; transform-origin: 460px 230px; }
          .pp-fingerL { animation: pp-fingerL 8s ease-in-out infinite; transform-origin: 506px 247px; }
          .pp-fingerR { animation: pp-fingerR 8s ease-in-out infinite; transform-origin: 506px 247px; }
          .pp-pulse { animation: pp-pulse 1.8s ease-in-out infinite; }
          .pp-pulse2 { animation: pp-pulse 1.8s ease-in-out infinite; animation-delay: .6s; }
          .pp-pulse3 { animation: pp-pulse 1.8s ease-in-out infinite; animation-delay: 1.2s; }

          @keyframes pp-dash { to { stroke-dashoffset: -28; } }
          @keyframes pp-pulse { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }

          @keyframes pp-base {
            0%, 32% { transform: skewX(0deg); }
            48%, 76% { transform: skewX(-6deg); }
            100% { transform: skewX(0deg); }
          }
          /* Shoulder: reach down to pick, rise, swing to place, lower again */
          @keyframes pp-shoulder {
            0% { transform: rotate(0deg); }
            18% { transform: rotate(28deg); }
            30% { transform: rotate(28deg); }
            46% { transform: rotate(-18deg); }
            64% { transform: rotate(-18deg); }
            80% { transform: rotate(24deg); }
            92% { transform: rotate(24deg); }
            100% { transform: rotate(0deg); }
          }
          /* Elbow: extends/folds in counterpoint to the shoulder */
          @keyframes pp-elbow {
            0% { transform: rotate(0deg); }
            18% { transform: rotate(-42deg); }
            30% { transform: rotate(-42deg); }
            46% { transform: rotate(14deg); }
            64% { transform: rotate(14deg); }
            80% { transform: rotate(-38deg); }
            92% { transform: rotate(-38deg); }
            100% { transform: rotate(0deg); }
          }
          /* Wrist: small corrective rotation to keep gripper roughly level */
          @keyframes pp-wrist {
            0% { transform: rotate(0deg); }
            18% { transform: rotate(18deg); }
            30% { transform: rotate(18deg); }
            46% { transform: rotate(8deg); }
            64% { transform: rotate(8deg); }
            80% { transform: rotate(16deg); }
            92% { transform: rotate(16deg); }
            100% { transform: rotate(0deg); }
          }
          /* Gripper: open -> close on pickup -> stay shut in transit -> open on release */
          @keyframes pp-fingerL {
            0%, 14% { transform: rotate(10deg); }
            22%, 70% { transform: rotate(-4deg); }
            78%, 100% { transform: rotate(10deg); }
          }
          @keyframes pp-fingerR {
            0%, 14% { transform: rotate(-10deg); }
            22%, 70% { transform: rotate(4deg); }
            78%, 100% { transform: rotate(-10deg); }
          }
        `}</style>
      </defs>

      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        filter="url(#robotGlow2)"
      >
        {/* motion guide arcs */}
        <path className="pp-arc" stroke={faint} d="M70 420 C140 250 260 130 380 110" />
        <path className="pp-arc" stroke={faint} d="M380 110 C480 130 540 250 560 400" />
        <path className="pp-arc" stroke={faint} d="M160 440 C260 360 380 280 470 200" />

        {/* pick / place target zones */}
        <circle cx="130" cy="450" r="14" stroke={faint} />
        <circle className="pp-pulse" cx="130" cy="450" r="3" fill={glow} stroke="none" />
        <circle cx="470" cy="455" r="14" stroke={faint} />
        <circle className="pp-pulse3" cx="470" cy="455" r="3" fill={glow} stroke="none" />

        {/* base */}
        <g className="pp-base">
          <path stroke={stroke} d="M120 430 L260 470 L420 440 L280 400 Z" />
          <path stroke={faint} d="M120 430 L120 450 L260 490 L420 460 L420 440" />
          <path stroke={stroke} d="M120 450 L260 490 L420 460" />

          <ellipse cx="250" cy="395" rx="70" ry="20" stroke={stroke} />
          <path stroke={stroke} d="M180 395 V410" />
          <path stroke={stroke} d="M320 395 V410" />
          <ellipse cx="250" cy="410" rx="70" ry="20" stroke={stroke} />
        </g>

        {/* shoulder + everything above it */}
        <g className="pp-shoulder">
          <Dial cx={250} cy={350} r={38} />
          <circle className="pp-pulse" cx="250" cy="350" r="3" fill={glow} stroke="none" />

          {/* upper arm prism */}
          <path stroke={stroke} d="M232 332 L304 152 L344 166 L272 346 Z" />
          <path stroke={faint} d="M252 316 L324 136 L364 150 L292 330 Z" />
          <path stroke={stroke} d="M232 332L252 316M304 152L324 136M344 166L364 150M272 346L292 330" />

          {/* elbow + forearm + wrist + tool */}
          <g className="pp-elbow">
            <Dial cx={320} cy={170} r={28} />
            <circle className="pp-pulse2" cx="320" cy="170" r="3" fill={glow} stroke="none" />

            {/* forearm prism */}
            <path stroke={stroke} d="M338 150 L478 210 L468 246 L328 186 Z" />
            <path stroke={faint} d="M358 134 L498 194 L488 230 L348 170 Z" />
            <path stroke={stroke} d="M338 150L358 134M478 210L498 194M468 246L488 230M328 186L348 170" />

            <g className="pp-wrist">
              <Dial cx={460} cy={230} r={20} />
              <circle className="pp-pulse3" cx="460" cy="230" r="3" fill={glow} stroke="none" />

              {/* tool shaft */}
              <path stroke={stroke} d="M478 218 L510 240 L502 254 L470 232 Z" />
              <path stroke={faint} d="M492 206 L524 228 L516 242 L484 220 Z" />
              <path stroke={stroke} d="M478 218L492 206M510 240L524 228M502 254L516 242M470 232L484 220" />

              {/* gripper fingers */}
              <path className="pp-fingerL" stroke={stroke} d="M506 247 L548 226" />
              <path className="pp-fingerL" stroke={faint} d="M520 235 L562 214" />
              <path className="pp-fingerR" stroke={stroke} d="M506 247 L548 274" />
              <path className="pp-fingerR" stroke={faint} d="M520 259 L562 286" />
              <path className="pp-fingerL" stroke={stroke} d="M548 226L562 214" />
              <path className="pp-fingerR" stroke={stroke} d="M548 274L562 286" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}