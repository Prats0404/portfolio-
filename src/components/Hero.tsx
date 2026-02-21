"use client"

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleGlobe(props: any) {
    const ref = useRef<any>(null);
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center items-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 3] }}>
                    <ParticleGlobe />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-neon-blue box-glow relative z-10 glass-panel flex items-center justify-center">
                        <img src="/profile.jpg" alt="Prathvi Suvarna" className="w-full h-full object-cover" />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-neon-purple/50 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-neon-blue/30 animate-[spin_15s_linear_infinite_reverse]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md mb-6">
                        <span className="text-neon-blue font-mono text-sm tracking-widest uppercase">System Online</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
                >
                    <span className="text-white">PRATHVI </span>
                    <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">
                        SUVARNA
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-2xl text-shadow"
                >
                    Full-Stack Innovator | AI & Web3
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-neon-blue text-black font-bold uppercase tracking-wider rounded-lg overflow-hidden box-glow hover:scale-105 transition-transform"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative">Initiate Sequence</span>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="group px-8 py-4 border border-neon-purple text-neon-purple font-bold uppercase tracking-wider rounded-lg hover:bg-neon-purple/10 transition-colors flex items-center justify-center gap-2 box-glow-purple"
                    >
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        Download Data
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neon-blue cursor-pointer animate-bounce"
            >
                <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
