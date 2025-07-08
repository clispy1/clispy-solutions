"use client";

import * as motion from "motion/react-client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { personalInfo } from "@/data/personal";

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

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="section-padding bg-black/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="heading-lg mb-4 sm:mb-6 gradient-text">
                        What Clients Say
                    </h2>
                    <p className="text-responsive text-white/60 max-w-2xl mx-auto">
                        Real feedback from businesses and customers who&apos;ve
                        worked with me
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={testimonial.id} variants={fadeInUp}>
                            <Card className="glass-card hover-scale hover-glow neon-glass-card group h-full flex flex-col">
                                <CardHeader className="pb-4 flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(testimonial.rating)].map(
                                                (_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{
                                                            delay:
                                                                index * 0.1 +
                                                                i * 0.1,
                                                        }}
                                                        className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                                                    />
                                                )
                                            )}
                                        </div>
                                        <span
                                            className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                                                testimonial.service ===
                                                "Clispy Solutions"
                                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                    : "bg-green-500/20 text-green-300 border border-green-500/30"
                                            }`}
                                        >
                                            {testimonial.service}
                                        </span>
                                    </div>
                                    <CardDescription className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                                        &quot;{testimonial.content}&quot;
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0 mt-auto">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-sm sm:text-lg">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-white font-semibold text-sm sm:text-base truncate">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-white/60 text-xs sm:text-sm truncate">
                                                {testimonial.role}
                                            </p>
                                            <p className="text-cyan-400 text-xs sm:text-sm font-medium truncate">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                >
                    {[
                        {
                            number: personalInfo.stats.clients,
                            label: "Happy Clients",
                            color: "from-cyan-400 to-purple-400",
                        },
                        {
                            number: personalInfo.stats.projects,
                            label: "Projects Delivered",
                            color: "from-green-400 to-emerald-400",
                        },
                        {
                            number: personalInfo.stats.experience,
                            label: "Years Experience",
                            color: "from-orange-400 to-red-400",
                        },
                        {
                            number: personalInfo.stats.businesses,
                            label: "Businesses Built",
                            color: "from-purple-400 to-pink-400",
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center glass-card rounded-2xl p-4 sm:p-6"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200,
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div
                                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                            >
                                {stat.number}
                            </div>
                            <p className="text-white/60 text-xs sm:text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
