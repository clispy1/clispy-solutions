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
    Send,
} from "lucide-react";
import { agencyInfo } from "@/data/agency";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
// Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

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
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    const { scrollY } = useScroll();

    // Handle scroll events
    useMotionValueEvent(scrollY, "change", (latest: number) => {
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

    const handleQuoteClick = () => {
        setShowQuoteModal(true);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitQuote = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                "service_wzyg8ig", // Replace with your EmailJS service ID
                "template_akc2t9y", // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone || "Not provided",
                    message: formData.message,
                    to_email: agencyInfo.email,
                    subject: `New Quote Request from ${formData.name}`,
                }
            );

            if (result.status !== 200) {
                throw new Error("Failed to send message");
            }

            // Show success message
            setFormSuccess(true);

            // Reset after showing success message
            setTimeout(() => {
                setShowQuoteModal(false);
                setFormSuccess(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }, 3000);
        } catch (error) {
            console.error("Error sending form:", error);
            alert(
                "Sorry, there was a problem sending your message. Please try again or contact us directly at " +
                    agencyInfo.email
            );
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Mobile Logo */}
            <div className="absolute top-4 left-4 rounded-lg neon-glass-card md:hidden border p-2 w-20 border-white/10 justify-self-start">
                <Link href="/">
                    <Image
                        src="/clispy-solutions-logo-rev.png"
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
            flex items-center space-x-1 px-6 py-3 rounded-lg
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
                  relative flex items-center gap-2 px-2 lg:px-4 py-2 rounded-lg
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
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30"
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

                    {/* CTA Button - Desktop */}
                    <motion.button
                        onClick={handleQuoteClick}
                        className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a Free Quote
                    </motion.button>
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
                                    handleQuoteClick();
                                }}
                            >
                                Get a Free Quote
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

            {/* Quote Modal */}
            {showQuoteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowQuoteModal(false)}
                    />

                    <motion.div
                        className="relative bg-black/80 border border-white/10 rounded-xl p-6 max-w-md w-full mx-4 neon-glass-card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white"
                            onClick={() => setShowQuoteModal(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white">
                                Get Your Free Quote
                            </h3>
                            <p className="text-white/70 text-sm mt-2">
                                Fill out this form and we&apos;ll get back to
                                you within 24 hours with a custom quote.
                            </p>
                        </div>

                        {formSuccess ? (
                            <motion.div
                                className="text-center py-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Quote Request Sent!
                                </h4>
                                <p className="text-white/70">
                                    Thank you for your interest. We&apos;ll
                                    contact you shortly with your custom quote.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmitQuote}
                                className="space-y-4"
                            >
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Tell us about your project"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[100px]"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 rounded-lg flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <>
                                            Send Quote Request{" "}
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </>
    );
}
