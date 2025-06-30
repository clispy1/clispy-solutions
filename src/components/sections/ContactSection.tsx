"use client";

import type React from "react";

import { motion } from "motion/react";
import {
    ArrowRight,
    Mail,
    MapPin,
    Github,
    Linkedin,
    Instagram,
    Send,
    Clock,
    Globe,
    MessageCircleMore,
    Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { agencyInfo } from "@/data/agency";
import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission - replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
                budget: "",
                timeline: "",
            });
        } catch (error) {
            console.log(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-black/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-6 gradient-text">
                        Let&apos;s Build Something Real For You
                    </h2>
                    <p className="text-responsive text-muted max-w-3xl mx-auto">
                        Have a project? A vision? Or just tired of running your
                        business through DMs? Let’s talk.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Card className="neon-glass-card p-6 sm:p-8">
                            <div className="mb-8">
                                <h3 className="heading-md text-white mb-2">
                                    Start Your Project
                                </h3>
                                <p className="text-muted">
                                    Fill out the form below and we&apos;ll get
                                    back to you within 24 hours to discuss your
                                    project in detail.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Company/Organization
                                        </label>
                                        <Input
                                            id="company"
                                            name="company"
                                            type="text"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="budget"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Project Budget
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:ring-cyan-400"
                                        >
                                            <option
                                                value=""
                                                className="bg-slate-800"
                                            >
                                                Select budget range
                                            </option>
                                            <option
                                                value="under-4k"
                                                className="bg-slate-800"
                                            >
                                                Under ¢4,000
                                            </option>
                                            <option
                                                value="5k-10k"
                                                className="bg-slate-800"
                                            >
                                                ¢4,000 - ¢8,000
                                            </option>
                                            <option
                                                value="25k-plus"
                                                className="bg-slate-800"
                                            >
                                                ¢8,000+
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Project Type *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:ring-cyan-400"
                                        >
                                            <option
                                                value=""
                                                className="bg-slate-800"
                                            >
                                                Select project type
                                            </option>
                                            <option
                                                value="web-design"
                                                className="bg-slate-800"
                                            >
                                                Web Design & Development
                                            </option>
                                            <option
                                                value="ecommerce"
                                                className="bg-slate-800"
                                            >
                                                E-commerce Development
                                            </option>
                                            <option
                                                value="brand-design"
                                                className="bg-slate-800"
                                            >
                                                Brand Design & Identity
                                            </option>
                                            <option
                                                value="ui-ux"
                                                className="bg-slate-800"
                                            >
                                                UI/UX Design
                                            </option>
                                            <option
                                                value="it-services"
                                                className="bg-slate-800"
                                            >
                                                I.T Services
                                            </option>
                                            <option
                                                value="other"
                                                className="bg-slate-800"
                                            >
                                                Other
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="timeline"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:ring-cyan-400"
                                        >
                                            <option
                                                value=""
                                                className="bg-slate-800"
                                            >
                                                Select timeline
                                            </option>
                                            <option
                                                value="asap"
                                                className="bg-slate-800"
                                            >
                                                ASAP
                                            </option>
                                            <option
                                                value="2-weeks"
                                                className="bg-slate-800"
                                            >
                                                Within 2 weeks
                                            </option>
                                            <option
                                                value="2-3-weeks"
                                                className="bg-slate-800"
                                            >
                                                2-3 weeks
                                            </option>
                                            <option
                                                value="1-plus-months"
                                                className="bg-slate-800"
                                            >
                                                1+ months
                                            </option>
                                            <option
                                                value="flexible"
                                                className="bg-slate-800"
                                            >
                                                Flexible
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-white text-sm font-medium mb-2"
                                    >
                                        Project Details *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                                        placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                                    >
                                        <p className="text-green-300 text-sm">
                                            ✅ Thank you! Your message has been
                                            sent successfully. We&apos;ll get
                                            back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                                    >
                                        <p className="text-red-300 text-sm">
                                            ❌ Sorry, there was an error sending
                                            your message. Please try again or
                                            contact us directly.
                                        </p>
                                    </motion.div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Project Inquiry
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-white/40 text-xs text-center">
                                    By submitting this form, you agree to our
                                    privacy policy and terms of service.
                                </p>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Contact Details */}
                        <Card className="neon-glass-card p-6">
                            <h3 className="heading-sm text-white mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-medium">
                                            Email Us
                                        </p>
                                        <a
                                            href={`mailto:${agencyInfo.email}`}
                                            className="text-primary hover:text-cyan-300 transition-colors text-sm break-all"
                                        >
                                            {agencyInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-medium">
                                            Location
                                        </p>
                                        <p className="text-muted text-sm">
                                            {agencyInfo.location}
                                        </p>
                                        <p className="text-subtle text-xs">
                                            Serving clients globally
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-medium">
                                            Response Time
                                        </p>
                                        <p className="text-muted text-sm">
                                            Within 12 hours
                                        </p>
                                        <p className="text-subtle text-xs">
                                            Monday - Saturdays, 9AM - 9PM GMT
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Social Media */}
                        <Card className="neon-glass-card p-6">
                            <h4 className="heading-sm text-white mb-4">
                                Follow Our Journey
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href={agencyInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-colors group"
                                >
                                    <Linkedin className="h-5 w-5 text-white/60 group-hover:text-blue-400" />
                                    <span className="text-white/80 text-sm">
                                        LinkedIn
                                    </span>
                                </a>
                                <a
                                    href={agencyInfo.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-sky-500/20 transition-colors group"
                                >
                                    <Facebook className="h-5 w-5 text-white/60 group-hover:text-sky-400" />
                                    <span className="text-white/80 text-sm">
                                        Facebook
                                    </span>
                                </a>
                                <a
                                    href={agencyInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-gray-500/20 transition-colors group"
                                >
                                    <Github className="h-5 w-5 text-white/60 group-hover:text-gray-300" />
                                    <span className="text-white/80 text-sm">
                                        GitHub
                                    </span>
                                </a>
                                <a
                                    href={agencyInfo.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-pink-500/20 transition-colors group"
                                >
                                    <Instagram className="h-5 w-5 text-white/60 group-hover:text-pink-400" />
                                    <span className="text-white/80 text-sm">
                                        Instagram
                                    </span>
                                </a>
                            </div>
                        </Card>

                        {/* Quick Contact CTA */}
                        <Card className="neon-glass-card p-6 text-center">
                            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                            <h4 className="heading-sm text-white mb-2">
                                Need Immediate Help?
                            </h4>
                            <p className="text-muted text-sm mb-3">
                                Have an urgent project or question? Reach out to
                                us on WhatsApp anytime. Here for you.
                            </p>
                            <Button className="w-full btn-primary py-3" asChild>
                       <Link
                                href="https://wa.me/233206601059"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 justify-center items-center cursor-pointer"
                            >
                                <MessageCircleMore /> WhatsApp Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            </Button>
                        </Card>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="heading-md text-white mb-4">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-muted">
                            Quick answers to common questions about working with
                            our agency
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                question:
                                    "What&apos;s your typical project timeline?",
                                answer: "Most web projects take 4-8 weeks depending on complexity. We&apos;ll provide a detailed timeline during our initial consultation based on your specific requirements.",
                            },
                            {
                                question:
                                    "Do you work with international clients?",
                                answer: "While we&apos;re based in Ghana, we serve clients globally. We&apos;re experienced in working across different time zones and communication preferences.",
                            },
                            {
                                question:
                                    "What&apos;s included in your web design service?",
                                answer: "Our web design service includes strategy, UI/UX design, development, content integration, SEO optimization, testing, and post-launch support.",
                            },
                            {
                                question: "Do you provide ongoing maintenance?",
                                answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="neon-glass-card p-6 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="text-white font-semibold mb-3">
                                    {faq.question}
                                </h4>
                                <p className="text-muted text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
