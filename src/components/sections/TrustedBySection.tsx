"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const companies = [
    {
        name: "Denayo Properties",
        logo: "/logos/denayo.png",
    },
    {
        name: "Zeni Skincare",
        logo: "/logos/zenibeautylounge.png",
    },
    {
        name: "Prime JB Movers",
        logo: "/logos/primejbmovers.png",
    },
    {
        name: "COCAHM",
        logo: "/logos/cocahm.png",
    },
    {
        name: "Amonu Chocolate",
        logo: "/logos/amonuchocolate.png",
    },
    {
        name: "Primis Sports",
        logo: "/logos/primissports.png",
    },
    {
        name: "ADF Haljouda",
        logo: "/logos/afdhaljouda.png",
    },
    {
        name: "NAD Security",
        logo: "/logos/nadsecurity.png",
    },
    {
        name: "Pros Technologies",
        logo: "/logos/prostechnologies.png",
    },
    {
        name: "Clispy Store",
        logo: "/logos/clispystore.png",
    },
    {
        name: "Mama Jane Int School",
        logo: "/logos/mamajaneint.png",
    },
    {
        name: "Ubex Security",
        logo: "/logos/ubexsecurity.png",
    },
];

export default function TrustedBySection() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Trusted by Amazing Companies
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Proud to have worked with these incredible brands across
                        various industries
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group"
                        >
                            <motion.div
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover-glow neon-glass-card hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                            >
                                <div className="relative h-16 w-full flex items-center justify-center p-1">
                                    <Image
                                        src={company.logo || "/placeholder.svg"}
                                        alt={`${company.name} logo`}
                                        width={150}
                                        height={60}
                                        className="object-contain grayscale opacity-60 h-full group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                emoji: "🇬🇭 ",
                                title: "Local Reach",
                                desc: "Supporting local and international businesses",
                            },
                            {
                                emoji: "🌍",
                                title: "Global Reach",
                                desc: "Serving clients across Africa, UAE, and beyond",
                            },
                            {
                                emoji: "⚡",
                                title: "Fast Delivery",
                                desc: "Quick turnaround without compromising quality",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-glow neon-glass-card"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-3xl mb-2">
                                    {item.emoji}
                                </div>
                                <h4 className="text-white font-semibold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-white/60 text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
