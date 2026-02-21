"use client"

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Database, Code, Cpu } from 'lucide-react';

const timelineData = [
    {
        year: '2023',
        title: 'Full-Stack Awakening',
        description: 'Mastered React ecosystem and Node.js. Built scalable web architectures.',
        icon: Code,
        colorClass: 'text-neon-blue',
        borderClass: 'border-neon-blue/30'
    },
    {
        year: '2024',
        title: 'AI Integration Protocols',
        description: 'Integrated LLMs and Computer Vision into production applications.',
        icon: Cpu,
        colorClass: 'text-neon-purple',
        borderClass: 'border-neon-purple/30'
    },
    {
        year: '2025',
        title: 'Web3 & Decentralized Systems',
        description: 'Developed smart contracts and dApps on Ethereum and Solana.',
        icon: Database,
        colorClass: 'text-neon-pink',
        borderClass: 'border-neon-pink/30'
    }
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" ref={containerRef} className="w-full min-h-screen py-24 flex items-center justify-center relative">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent top-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink text-glow-purple">
                            01.
                        </span>{' '}
                        Neural Pathways (About)
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent -translate-x-1/2" />

                        {timelineData.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`relative flex items-center mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-12 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-neon-purple flex items-center justify-center -translate-x-1/2 box-glow-purple z-10">
                                        <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                        <div className="glass-panel p-6 rounded-2xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden border border-white/5 hover:border-neon-purple/50">
                                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className={`inline-flex p-3 rounded-lg bg-black/50 mb-4 border ${item.borderClass} ${item.colorClass}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className={`text-2xl font-bold mb-2 flex items-center gap-4 text-white ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                                {isEven && <span>{item.title}</span>}
                                                <span className={`${item.colorClass} font-mono text-lg`}>{item.year}</span>
                                                {!isEven && <span>{item.title}</span>}
                                            </h3>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Floating abstract elements */}
            <motion.div style={{ y }} className="absolute right-[10%] top-[20%] opacity-[0.03] hidden md:block pointer-events-none">
                <Terminal className="w-64 h-64 text-neon-blue" />
            </motion.div>
        </section>
    );
}
