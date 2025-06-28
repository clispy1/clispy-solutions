"use client";

import { MessageCircleMore } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const CTA = () => {
    return (
        <section className="section-padding px-5 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <div className="neon-glass-card rounded-2xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        You&apos;ve waited long enough to look serious.
                    </h3>
                    <p className="text-white/70 mb-6">
                        Let&apos;s build your brand right — and make your
                        business impossible to ignore.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <motion.button
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer hover-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                        </motion.button>
                        <motion.button
                            className=" neon-glass-card border text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-4 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircleMore />
                            Contact Clispy
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
