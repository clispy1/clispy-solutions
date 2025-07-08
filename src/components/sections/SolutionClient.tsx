"use client";

import * as motion from "motion/react-client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { solutions } from "@/data/solutions";

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

export default function SolutionClient() {
    return (
        <section className="section-padding neon-bg-pattern">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-6">
                        Here&apos;s the Harsh Truth...
                    </h2>
                    <p className="text-responsive text-white/60 max-w-2xl mx-auto">
                        If your business only lives in your DMs, <br />
                        – you&apos;re losing clients. <br />– you&apos;re not
                        taken seriously. <br /> – and scaling? Impossible.{" "}
                        <br />
                        You&apos;re not just missing out on money.
                        <br /> <strong>
                            You&apos;re missing out on trust
                        </strong>{" "}
                        — the one thing customers need to click "Buy."
                    </p>
                </motion.div>
                <h2 className="heading-lg mb-6 text-center">
                    What You Actually Get:
                </h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
                >
                    {solutions.map((service, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="neon-glass-card hover-scale hover-glow group h-full neon-particles">
                                <CardHeader className="text-center">
                                    <motion.div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300 neon-glow`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <service.icon className="w-full h-full text-white" />
                                    </motion.div>
                                    <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-white/60 text-center">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
