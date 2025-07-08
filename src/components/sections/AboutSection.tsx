"use client";

import * as motion from "motion/react-client";
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
                            {agencyInfo.founder.title}
                        </p>
                        <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                            {agencyInfo.founder.bio}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
