"use client";

import * as motion from "motion/react-client";
import { ArrowRight, Users, Award, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agencyInfo } from "@/data/agency";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
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
                        whileInView={"visible"}
                        className="text-center lg:text-left space-content"
                    >
                        {/* Badge */}
                        <motion.div className="inline-flex -mb-2">
                            <div className="inline-flex items-center px-4 py-2 rounded-lg neon-glass-card relative overflow-visible">
                                <Sparkles className="w-4 h-4 text-primary mr-2" />
                                <span className="text-white/80 text-sm font-medium">
                                    {agencyInfo.name} • Est.{" "}
                                    {agencyInfo.founded} • Welcomes You
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="heading-xl">
                                <span className="block">
                                    {agencyInfo.marketingLines.hero.headline}
                                </span>
                            </h1>
                            <div className="space-y-2">
                                <p className="text-responsive text-white/90 font-light">
                                    {agencyInfo.marketingLines.hero.subheadline}
                                </p>
                                <p className="text-lg text-primary font-medium">
                                    Founded & Led by {agencyInfo.founder.name}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-4 gap-4 py-6 max-w-lg mx-auto lg:mx-0">
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
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center neon-glass-card rounded-xl p-3 hover-lift relative overflow-visible"
                                    whileHover="hovered"
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
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex-responsive justify-center lg:justify-start space-x-4">
                            <Button
                                size="lg"
                                className="group btn-primary px-8 py-4 text-base font-semibold focus-visible"
                                asChild
                            >
                                <Link
                                    href="#projects"
                                    className="flex items-center"
                                >
                                    View Recent Projects
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group btn-secondary px-8 py-4 text-base font-medium focus-visible"
                                asChild
                            >
                                <Link
                                    href="#contact"
                                    className="flex items-center"
                                >
                                    <PhoneCall className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform hover-glow" />
                                    Let&apos;s Build Something Real
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        whileInView="visible"
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative h-80 sm:h-96 lg:h-[550px] flex items-center justify-center order-first lg:order-last"
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

                            {/* Decorative Animations */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl"
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                aria-hidden="true"
                            />

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
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
                className="absolute hidden lg:flex bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center justify-center"
                whileInView="visible"
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border border-white/20 rounded-full flex justify-center cursor-pointer"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    role="button"
                    aria-label="Scroll to services section"
                    tabIndex={0}
                >
                    <Link href="#services">
                        <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
                    </Link>
                </motion.div>
                <p className="text-subtle text-xs mt-2 text-center">
                    Explore Our Services
                </p>
            </motion.div>
        </section>
    );
};

export default HeroSection;
