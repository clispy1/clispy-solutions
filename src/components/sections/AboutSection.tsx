"use client";

import { motion } from "motion/react";
// import { Users, Zap, Lock, Wrench } from "lucide-react";
import { agencyInfo } from "@/data/agency";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding bg-black/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-6 gradient-text">
                        Who&apos;s Behind Clispy Solutions?
                    </h2>
                    <p className="text-responsive text-white/60 max-w-3xl mx-auto">
                        Hey, I&apos;m Jake Clispy — a Ghanaian web designer,
                        developer, and brand builder with 3+ years helping
                        startups, side hustlers, and businesses launch strong
                        online. I run Clispy Solutions with my small team, and
                        we&apos;re obsessed with building things that look good,
                        work fast, and get real results. If you&apos;re ready to
                        stop looking like a side hustle and start building
                        something serious — we&apos;re your people.
                    </p>
                </motion.div>

                {/* Left Content */}
                {/*   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                  <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                            We Build for Hustlers. Not Corporates with 10-Page
                            Briefs.
                        </h3>
                        <div className="space-y-4 text-white/70 leading-relaxed">
                            <p>
                                {agencyInfo.name} was made for startups, side
                                hustlers, and lean teams who need results — not
                                red tape. We skip the agency fluff and get
                                straight to what matters: clean, custom websites
                                that actually make money.
                            </p>

                            <p>
                                No bloated budgets. No 3-month waits. Just fast,
                                smart, digital execution.
                            </p>
                        </div>
                    </motion.div> */}

                {/* Right Content - Values */}
                {/* <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            {
                                icon: Zap,
                                title: "2-Week Delivery",
                                description:
                                    "We don’t waste time. Most sites go live in 14 days or less.",
                                color: "from-purple-400 to-pink-400",
                            },
                            {
                                icon: Lock,
                                title: "70% Upfront",
                                description:
                                    "No surprise fees. You pay, we build. Simple and clean.",
                                color: "from-cyan-400 to-blue-400",
                            },
                            {
                                icon: Users,
                                title: "Built for Hustlers",
                                description:
                                    "We think like startups — fast, lean, and focused on results.",
                                color: "from-green-400 to-emerald-400",
                            },
                            {
                                icon: Wrench,
                                title: "Fully Managed Support",
                                description:
                                    "We host, update, and handle the tech so you don’t have to.",
                                color: "from-orange-400 to-red-400",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="neon-glass-card rounded-2xl p-6 text-center hover-scale"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div
                                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} p-3`}
                                >
                                    <value.icon className="w-full h-full text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-white/60 text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div> */}

                {/* Founder Spotlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="neon-glass-card hover-glow rounded-2xl p-8 text-center"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 border overflow-hidden">
                            <Image
                                src="/jake-clispy-avatar.png"
                                width={100}
                                height={100}
                                alt="JC"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {agencyInfo.founder.name}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-4">
                            Web Developer & Brand Designer –
                            &quot;Freelancer&quot;
                        </p>
                        <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                            I began my journey as an Electrical Engineer, right
                            from college. After a while, I got curious about the
                            digital world and started learning about it. I
                            started as a graphic designer, and later switched
                            into web development and design. 2 years later, I
                            founded Clispy Solutions to provide my design and
                            development services. And as a side hustle, I
                            founded and run a preorder dropshipping online store
                            — &quot;CLISPY.STORE&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
