"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Neon Nexus',
        description: 'Decentralized exchange interface with real-time order books and holographic charts.',
        tech: ['React', 'Web3.js', 'Solidity', 'Tailwind'],
        github: '#',
        demo: '#',
        colorClass: 'text-neon-blue',
        borderClass: 'border-neon-blue/50 border-neon-blue',
        glowClass: 'box-glow'
    },
    {
        id: 2,
        title: 'Cybermind AI',
        description: 'Autonomous AI agent dashboard for monitoring parallel task execution networks.',
        tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
        github: '#',
        demo: '#',
        colorClass: 'text-neon-purple',
        borderClass: 'border-neon-purple/50 border-neon-purple',
        glowClass: 'box-glow-purple'
    },
    {
        id: 3,
        title: 'Quantum Ledger',
        description: 'High-frequency trading visualization tool with sub-millisecond data updates.',
        tech: ['TypeScript', 'WebGL', 'Rust', 'Redis'],
        github: '#',
        demo: '#',
        colorClass: 'text-neon-pink',
        borderClass: 'border-neon-pink/50 border-neon-pink',
        glowClass: '' // Pink defaults to white glow mostly, or we can add a pink box glow if desired. For now, empty glow defaults to regular glass-panel
    },
    {
        id: 4,
        title: 'SynthWave Studio',
        description: 'Browser-based generative music synthesizer with collaborative sessions.',
        tech: ['React', 'WebAudio API', 'Socket.io', 'Node.js'],
        github: '#',
        demo: '#',
        colorClass: 'text-neon-blue',
        borderClass: 'border-neon-blue/50 border-neon-blue',
        glowClass: 'box-glow'
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section id="projects" className="w-full py-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-black/40">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent top-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">
                        <span className="text-neon-blue text-glow">
                            02.
                        </span>{' '}
                        Executed Protocols (Projects)
                    </h2>
                </motion.div>

                {/* 3D Carousel Container */}
                <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            // Calculate relative position (-1, 0, 1) assuming wrap-around
                            const diff = (index - currentIndex + projects.length) % projects.length;
                            const isCenter = diff === 0;
                            const isRight = diff === 1 || (currentIndex === projects.length - 1 && index === 0);
                            const isLeft = diff === projects.length - 1 || (currentIndex === 0 && index === projects.length - 1);

                            if (!isCenter && !isRight && !isLeft) return null;

                            let x = 0;
                            let z = 0;
                            let rotateY = 0;
                            let opacity = 1;

                            if (isLeft) {
                                x = -250;
                                z = -150;
                                rotateY = 30;
                                opacity = 0.5;
                            } else if (isRight) {
                                x = 250;
                                z = -150;
                                rotateY = -30;
                                opacity = 0.5;
                            }

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: isRight ? 400 : -400, z: -200, rotateY: isRight ? -45 : 45 }}
                                    animate={{ opacity, x, z, rotateY }}
                                    exit={{ opacity: 0, x: isLeft ? -400 : 400, z: -200, rotateY: isLeft ? 45 : -45 }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                                    className={`absolute w-[350px] md:w-[450px] rounded-2xl glass-panel p-8 border ${isCenter ? `${project.borderClass} ${project.glowClass}` : 'border-white/10'} transform-style-3d`}
                                    style={{ zIndex: isCenter ? 20 : 10 }}
                                >
                                    <div className={`${project.colorClass} font-mono text-sm mb-4 tracking-widest uppercase`}>
                                        File_{project.id}.sys
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-slate-300 font-light mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.github} className={`p-2 rounded-full border border-white/20 hover:border-white transition-colors`}>
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.demo} className={`p-2 rounded-full border border-white/20 hover:border-white transition-colors flex items-center gap-2`}>
                                            <ExternalLink className="w-5 h-5" />
                                            <span className="text-sm font-mono uppercase tracking-wider pr-2">Initialize</span>
                                        </a>
                                    </div>

                                    {/* Anti-interaction overlay for background cards */}
                                    {!isCenter && <div className="absolute inset-0 z-50 cursor-pointer" onClick={() => isLeft ? prev() : next()} />}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-6 mt-12 z-20">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-colors pointer-events-auto"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-neon-blue box-glow' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="p-3 rounded-full border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-colors pointer-events-auto"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
