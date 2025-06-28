"use client";

import { motion } from "motion/react";
import { ArrowRight, Users, Award, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agencyInfo } from "@/data/agency";
import Image from "next/image";

export default function HeroSection() {
    // const containerVariants = {
    //     hidden: {},
    //     visible: {
    //         transition: {
    //             staggerChildren: 0.15,
    //             delayChildren: 0.2,
    //         },
    //     },
    // };

    // const itemVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.6,
    //             ease: [0.25, 0.46, 0.45, 0.94],
    //         },
    //     },
    // };

    // const imageVariants = {
    //     hidden: { opacity: 0, scale: 0.95 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         transition: {
    //             duration: 0.8,
    //             ease: [0.25, 0.46, 0.45, 0.94],
    //         },
    //     },
    // };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToWork = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 section-padding">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 container-custom w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <motion.div
                        // variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left space-content"
                    >
                        {/* Badge */}
                        <motion.div
                            // variants={itemVariants}
                            className="inline-flex"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full neon-glass-card">
                                <Sparkles className="w-4 h-4 text-primary mr-2" />
                                <span className="text-white/80 text-sm font-medium">
                                    {agencyInfo.name} • Est.{" "}
                                    {agencyInfo.founded} • Welcomes You
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            // variants={itemVariants}
                            className="space-y-4"
                        >
                            <h1 className="heading-xl">
                                <span className="block ">
                                    Your Business Deserves More Than Just a Logo
                                    and an Instagram Page.
                                </span>
                            </h1>
                            <div className="space-y-2">
                                {/* Description */}
                                <p className="text-responsive text-white/90 font-light">
                                    We build custom websites and brand
                                    identities that help you look legit, sell
                                    smarter, and scale faster — without wasting
                                    months or money.
                                </p>
                                <p className="text-lg text-primary font-medium">
                                    Founded & Led by {agencyInfo.founder.name}
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            // variants={itemVariants}
                            className="grid grid-cols-4 gap-4 py-6 max-w-lg mx-auto lg:mx-0"
                        >
                            {[
                                {
                                    number: agencyInfo.stats.projects,
                                    label: "Projects",
                                    icon: Award,
                                },
                                {
                                    number: agencyInfo.stats.clients,
                                    label: "Clients",
                                    icon: Users,
                                },
                                {
                                    number: agencyInfo.stats.experience,
                                    label: "Years",
                                    icon: Sparkles,
                                },
                                {
                                    number: agencyInfo.stats.teamSize,
                                    label: "Team",
                                    icon: Users,
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center neon-glass-card rounded-xl p-3 hover-lift"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                                    <div className="text-xl font-bold neon-text">
                                        {stat.number}
                                    </div>
                                    <div className="text-subtle text-xs">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            // variants={itemVariants}
                            className="flex-responsive justify-center lg:justify-start"
                        >
                            <Button
                                onClick={scrollToWork}
                                size="lg"
                                className="group btn-primary px-8 py-4 text-base font-semibold focus-visible"
                            >
                                <span>View Recent Projects</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                onClick={scrollToContact}
                                variant="outline"
                                size="lg"
                                className="group btn-secondary px-8 py-4 text-base font-medium focus-visible"
                            >
                                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform hover-glow" />
                                <span>Let&apos;s Build Something Real</span>
                            </Button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            // variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 justify-center lg:justify-start"
                        >
                            <div
                                className="flex -space-x-2"
                                role="group"
                                aria-label="Client avatars"
                            >
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-white text-sm font-bold"
                                        aria-label={`Client ${i}`}
                                    >
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-sm font-medium text-white">
                                    Trusted by 15+ businesses worldwide
                                </div>
                                <div className="flex items-center justify-center sm:justify-start space-x-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-3 h-3 bg-yellow-400 rounded-full"
                                            aria-hidden="true"
                                        />
                                    ))}
                                    <span className="text-xs ml-2 text-muted">
                                        5.0 agency rating
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        // variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative h-80 sm:h-96 lg:h-[500px] flex items-center justify-center order-first lg:order-last"
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl blur-2xl scale-110" />

                            <div className="relative w-full h-full neon-glass-card rounded-3xl overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/jake-clispy-hero.png"
                                    width={600}
                                    height={700}
                                    alt="Hero Image"
                                    className="w-full lg:w-auto h-full object-cover"
                                />
                                {/* <motion.div
                                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl border border-red"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    role="img"
                                    aria-label="Clispy Solutions logo"
                                >
                                  
                                </motion.div> */}

                                <motion.div
                                    className="absolute top-4 sm:top-8 right-4 sm:right-8 px-3 py-2 neon-glass-card rounded-full"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    <span className="text-white text-sm font-medium">
                                        Creative Agency
                                    </span>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 px-4 py-2 neon-glass-card rounded-full"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                >
                                    <span className="text-white text-sm font-medium">
                                        Est. {agencyInfo.founded}
                                    </span>
                                </motion.div>
                            </div>

                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl"
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 20,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                                aria-hidden="true"
                            />

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                aria-hidden="true"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    className="w-6 h-10 border border-white/20 rounded-full flex justify-center cursor-pointer"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    onClick={() => {
                        const servicesSection =
                            document.getElementById("services");
                        if (servicesSection) {
                            servicesSection.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}
                    role="button"
                    aria-label="Scroll to services section"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            const servicesSection =
                                document.getElementById("services");
                            if (servicesSection) {
                                servicesSection.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }
                    }}
                >
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
                </motion.div>
                <p className="text-subtle text-xs mt-2 text-center">
                    Explore Our Services
                </p>
            </motion.div>
        </section>
    );
}
