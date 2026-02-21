"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal, Github } from 'lucide-react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${isScrolled ? 'glass-panel box-glow' : 'bg-transparent'}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Terminal className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
                        <span className="font-bold text-xl tracking-wider text-glow group-hover:text-glow-purple transition-all">
                            <span className="text-neon-purple">P</span>RATHVI
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm uppercase tracking-widest hover:text-neon-blue transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full box-glow"></span>
                            </Link>
                        ))}

                        <a
                            href="https://github.com/Prats0404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                        </a>
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-neon-blue" />
                            ) : (
                                <Moon className="w-5 h-5 text-neon-purple" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <a
                            href="https://github.com/Prats0404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Github className="w-5 h-5 text-slate-300" />
                        </a>
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5 text-neon-blue" /> : <Moon className="w-5 h-5 text-neon-purple" />}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground hover:text-neon-blue transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-6 right-6 mt-2 p-4 glass-panel rounded-2xl md:hidden flex flex-col gap-4"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-center py-3 uppercase tracking-wider hover:text-neon-blue hover:bg-white/5 rounded-lg transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
