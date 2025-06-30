"use client";

import { motion } from "motion/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Check,
    ArrowRight,
    Zap,
    Palette,
    ShoppingCart,
    MessageCircleMore,
} from "lucide-react";
import Link from "next/link";

const pricingPlans = [
    {
        icon: Zap,
        title: "Ready-To-Launch Website",
        subtitle:
            "For service businesses, professionals, and startups who need a clean, trust-building website — fast.",
        price: "₵3,500",
        delivery: "14–21 days",
        payment: "70% upfront",
        color: "from-blue-500 to-cyan-500",
        features: [
            "Custom 4–5 page website (Business, Booking, or Portfolio)",
            "Mobile Responsive + Fast Loading",
            "Domain, Hosting, Theme Setup",
            "Professional Email Setup",
            "Contact or Booking Form",
            "30 Days Post-Launch Support",
        ],
        bonus: "Launch Checklist",
        popular: true,
        badgeTitle: "Business",
    },
    {
        icon: Palette,
        title: "Brand Me Properly",
        subtitle:
            "For serious entrepreneurs who want to look like a real business, not just a WhatsApp flyer.",
        price: "₵2,000",
        delivery: "7–10 days",
        payment: "50% upfront",
        color: "from-purple-500 to-pink-500",
        features: [
            "Custom Logo Design (Simple & Genius)",
            "Brand Color Palette + Font Pairings",
            "Social Media Profile Kit (DP + Banners)",
            "Full Branding File Pack (PNG, SVG, PDF)",
            "Style Guide for Brand Consistency",
        ],
        bonus: "Flyer Templates",
        popular: true,
        badgeTitle: "Branding",
    },
    {
        icon: ShoppingCart,
        title: "Start Selling Online",
        subtitle:
            "For product sellers ready to stop chasing DMs and start making sales with a real online store.",
        price: "₵4,000",
        delivery: "14–21 days",
        payment: "70% upfront or hybrid (ask for details)",
        color: "from-green-500 to-emerald-500",
        features: [
            "Full Online Store (Product Listings, Categories, Cart)",
            "Mobile Money, Card, and Bank Payment Setup",
            "Admin dashboard for managing orders",
            "Domain, Hosting, and Theme Setup",
            "Professional Email Setup",
            "Products Upload",
            "30 Days Support After Launch",
        ],
        bonus: "Soft Marketing & Promotion",
        popular: true,
        badgeTitle: "Ecommerce",
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function PricingSection() {
    return (
        <section id="pricing" className="section-padding bg-slate-900/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-6 text-white">
                        Pick What You Actually Need. We&apos;ll Build It.
                    </h2>
                    <p className="text-responsive text-white/70 max-w-3xl mx-auto">
                        You&apos;re not here for theory — you&apos;re here to
                        look legit, get booked, or start selling...
                        <br /> No confusing packages. No hidden fees. Just
                        honest pricing for real results.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card
                                className={`neon-glass-card hover-scale hover-glow group h-full relative ${
                                    plan.popular
                                        ? "ring-1 ring-purple-500/50"
                                        : ""
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                                            {plan.badgeTitle.toUpperCase()}
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="text-center pb-4">
                                    <motion.div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <plan.icon className="w-full h-full text-white" />
                                    </motion.div>

                                    <CardTitle className="text-white text-2xl group-hover:text-cyan-400 transition-colors mb-2">
                                        {plan.title}
                                    </CardTitle>

                                    <CardDescription className="text-white/70 text-sm leading-relaxed">
                                        {plan.subtitle}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {/* Price */}
                                    <div className="text-center">
                                        <div className="text-sm text-white/60">
                                            Starts at
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">
                                            {plan.price}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                                            Includes:
                                        </h4>
                                        <ul className="space-y-2">
                                            {plan.features.map(
                                                (feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-start gap-3 text-sm text-white/80"
                                                    >
                                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {/* Bonus */}
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-yellow-400">
                                                🎁
                                            </span>
                                            <span className="text-white/90 font-medium">
                                                Bonus:
                                            </span>
                                            <span className="text-white/70">
                                                {plan.bonus}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-2 pt-4 border-t border-white/10">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/60">
                                                Delivery:
                                            </span>
                                            <span className="text-white">
                                                {plan.delivery}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/60">
                                                Payment:
                                            </span>
                                            <span className="text-white">
                                                {plan.payment}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        className={`w-full btn-primary group-hover:scale-105 transition-transform duration-300 ${
                                            plan.popular
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                                : ""
                                        }`}
                                        size="lg"
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="p-8 max-w-2xl mx-auto neon-glass-card">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Not sure which package fits?
                        </h3>
                        <p className="text-white/70 mb-6">
                            Let&apos;s chat about your specific needs.
                            We&apos;ll recommend the best solution for your
                            business.
                        </p>
                        <Button
                            className=" bg-green-500 text-white hover-scale cursor-pointer"
                            size="lg"
                        >
                            {/* WhatsApp Link */}
                            <Link
                                href="https://wa.me/233206601059"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 justify-center items-center cursor-pointer"
                            >
                                <MessageCircleMore /> WhatsApp Us
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
