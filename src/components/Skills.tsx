"use client"

import { motion } from 'framer-motion';

const skills = [
    { name: 'React/Next.js', level: 90, color: '#0ea5e9' },
    { name: 'Node.js/Python', level: 85, color: '#8b5cf6' },
    { name: 'Three.js/GSAP', level: 75, color: '#ec4899' },
    { name: 'Web3/Solidity', level: 70, color: '#00f3ff' },
];

function RadialProgress({ percentage, color, label }: { percentage: number, color: string, label: string }) {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth="12"
                        fill="transparent"
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke={color}
                        strokeWidth="12"
                        fill="transparent"
                        strokeLinecap="round"
                        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeDasharray={circumference}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold font-mono" style={{ color }}>
                        {percentage}%
                    </span>
                </div>
            </div>
            <span className="text-lg font-medium text-slate-300 tracking-wide text-center">{label}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="w-full py-24 flex items-center justify-center relative bg-black/40">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent top-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
                        <span className="text-neon-pink font-mono" style={{ textShadow: "0 0 10px #ff007f" }}>
                            03.
                        </span>{' '}
                        Combat Stats (Skills)
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <RadialProgress percentage={skill.level} color={skill.color} label={skill.name} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Prisma', 'Figma'].map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="glass-panel border border-white/5 p-4 rounded-xl text-center hover:border-neon-pink/50 hover:text-neon-pink transition-colors cursor-default"
                            >
                                <span className="font-mono text-sm tracking-wider">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
