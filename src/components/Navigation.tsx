"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Home,
    Users,
    User,
    Briefcase,
    Code,
    Sparkles,
    PhoneCall,
} from "lucide-react";
// import { agencyInfo } from "@/data/agency";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { href: "#home", label: "", icon: Home },
    { href: "#about", label: "About Us", icon: User },
    { href: "#packages", label: "Packages", icon: Sparkles },
    { href: "#projects", label: "Works", icon: Briefcase },
    { href: "#services", label: "Services", icon: Code },
    { href: "#testimonials", label: "Testimonials", icon: Users },
    { href: "#contact", label: "Contact", icon: PhoneCall },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Handle scroll events
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Track active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const targetId = href.substring(1);
        const element = document.getElementById(
            targetId === "home" ? "" : targetId
        );

        if (element || targetId === "home") {
            const targetPosition =
                targetId === "home" ? 0 : element!.offsetTop - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Mobile Logo */}
            <div className="absolute top-4 left-4 rounded-(--radius) neon-glass-card md:hidden border p-2 w-20 border-white/10 justify-self-start">
                <Link href="/">
                    <Image
                        src="/clispy-solutions-logo.png"
                        width={200}
                        height={200}
                        alt="Clispy Solutions"
                        className="w-full"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <motion.nav
                className="fixed top-4 transform z-50 hidden md:block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    className={`
            flex items-center space-x-1 px-6 py-3 rounded-(--radius)
            backdrop-blur-lg transition-all duration-300 neon-glass-card
            ${isScrolled ? "bg-black/80" : "bg-white/10"}
          `}
                    animate={{
                        scale: isScrolled ? 0.95 : 1,
                        y: isScrolled ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2 mr-6 pr-6 border-r border-white/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-24 h-8 flex items-center justify-center">
                            <Image
                                src="/clispy-solutions-logo-rev.png"
                                width={50}
                                height={50}
                                alt="Clispy Solutions"
                                className="w-full"
                            />
                        </div>
                    </motion.div>

                    {/* Navigation Items */}
                    {navItems.map((item) => {
                        const isActive =
                            activeSection === item.href.substring(1) ||
                            (activeSection === "" && item.href === "#home");
                        return (
                            <motion.button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`
                  relative flex items-center gap-2 px-2 lg:px-4 py-2 rounded-(--radius)
                  transition-all duration-300 group cursor-pointer
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: isActive ? 360 : 0,
                                        scale: isActive ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <item.icon className="w-4 h-4" />
                                </motion.div>
                                <span className="text-sm font-medium hidden lg:inline-block">
                                    {item.label}
                                </span>

                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-(--radius) border border-cyan-500/30"
                                        layoutId="activeTab"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.nav
                className="fixed top-4 right-4 z-50 md:hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
            w-14 h-14 rounded-full backdrop-blur-lg
            flex items-center justify-center transition-all duration-300
            neon-glass-card
            ${isScrolled || isOpen ? "bg-black/80" : "bg-white/10"}
          `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </motion.div>
                </motion.button>

                {/* Mobile Menu */}
                <motion.div
                    className="absolute top-16 right-0 w-64"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        scale: isOpen ? 1 : 0.8,
                        y: isOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <div className="bg-black/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden neon-glass-card">
                        {/* Mobile Navigation Items */}
                        <div className="p-2">
                            {navItems.map((item, index) => {
                                const isActive =
                                    activeSection === item.href.substring(1) ||
                                    (activeSection === "" &&
                                        item.href === "#home");
                                return (
                                    <motion.button
                                        key={item.href}
                                        onClick={() =>
                                            handleNavClick(item.href)
                                        }
                                        className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                      transition-all duration-300 group
                      ${
                          isActive
                              ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                              : "text-white/70 hover:text-white"
                      }
                    `}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{
                                            opacity: isOpen ? 1 : 0,
                                            x: isOpen ? 0 : 20,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: isActive ? 360 : 0,
                                                scale: isActive ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </motion.div>
                                        <span className="font-medium">
                                            {item.label}
                                        </span>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <motion.div
                                                className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Mobile CTA */}
                        <div className="p-4 border-t border-white/10">
                            <motion.button
                                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleNavClick("#contact");
                                }}
                            >
                                Start Your Project
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
