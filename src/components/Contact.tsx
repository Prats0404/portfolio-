"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Terminal as TerminalIcon } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
            alert("Transmission successful. I will decode your message shortly.");
        }, 1500);
    };

    return (
        <section id="contact" className="w-full py-24 min-h-screen flex items-center justify-center relative bg-black/40">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent top-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue text-glow">
                            04.
                        </span>{' '}
                        Open Comm Channel
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Animated Map / Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl border border-neon-purple/30 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-50" />

                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <TerminalIcon className="w-6 h-6 text-neon-purple" />
                            Terminal Access
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-black/50 border border-neon-blue/30 text-neon-blue">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400 font-mono mb-1 uppercase tracking-wider">Location Status</h4>
                                    <p className="text-lg font-medium">Hubballi, Karnataka</p>
                                    <p className="text-sm text-neon-blue mt-1 font-mono">Lat: 15.3647° N, Long: 75.1240° E</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-black/50 border border-neon-pink/30 text-neon-pink">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400 font-mono mb-1 uppercase tracking-wider">Direct Protocol</h4>
                                    <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-neon-pink transition-colors">
                                        hello@prathvi.dev
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Animated Radar/Map */}
                        <div className="mt-12 h-48 w-full rounded-xl border border-white/10 relative overflow-hidden bg-[#030014]">
                            {/* Radar Grid */}
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Radar Sweep */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-[200%] h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent origin-left"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Ping */}
                            <motion.div
                                className="absolute w-3 h-3 bg-neon-pink rounded-full top-[40%] left-[60%] box-glow"
                                animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(3,0,20,1)] pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-neon-blue/30 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-mono tracking-wider text-slate-400">Identity (Name)</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-white transition-all placeholder:text-slate-600"
                                    placeholder="Enter designator..."
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-mono tracking-wider text-slate-400">Return Address (Email)</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple text-white transition-all placeholder:text-slate-600"
                                    placeholder="Enter comm address..."
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-mono tracking-wider text-slate-400">Payload (Message)</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white transition-all resize-none placeholder:text-slate-600"
                                    placeholder="Encrypting payload..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full py-4 bg-transparent border border-neon-blue text-neon-blue font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:box-glow disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                            >
                                <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                <span className="relative flex items-center justify-center gap-2">
                                    {isSubmitting ? 'Transmitting...' : 'Transmit Signal'}
                                    <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
