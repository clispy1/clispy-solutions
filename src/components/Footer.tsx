"use client";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { agencyInfo } from "@/data/agency";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative bg-black/40 border-t border-white/10"
            role="contentinfo"
            aria-label="Site Footer"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div
                        className="lg:col-span-2 space-y-4"
                        itemScope
                        itemType="https://schema.org/Organization"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-24 h-8 flex items-center justify-center">
                                <Image
                                    src="/clispy-solutions-logo-rev.png"
                                    width={50}
                                    height={50}
                                    alt={`${agencyInfo.name} logo`}
                                    className="w-full"
                                    itemProp="logo"
                                />
                            </div>

                            <div>
                                <h3
                                    className="text-white font-bold text-lg"
                                    itemProp="name"
                                >
                                    {agencyInfo.name}
                                </h3>
                                <p
                                    className="text-white/60 text-sm"
                                    itemProp="slogan"
                                >
                                    {agencyInfo.tagline}
                                </p>
                            </div>
                        </div>
                        <p
                            className="text-white/60 leading-relaxed max-w-md"
                            itemProp="description"
                        >
                            {agencyInfo.marketingLines.footer}
                        </p>
                        <div
                            className="flex space-x-4"
                            aria-label="Social Media Links"
                        >
                            {Object.entries(agencyInfo.social).map(
                                ([platform, url]) => (
                                    <Link
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                                        aria-label={`Follow us on ${platform}`}
                                        itemProp="sameAs"
                                    >
                                        <span className="text-white/60 hover:text-cyan-400 text-sm font-medium">
                                            {platform.charAt(0).toUpperCase()}
                                        </span>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4
                            className="text-white font-semibold mb-4"
                            id="footer-services"
                        >
                            Our Services
                        </h4>
                        <nav aria-labelledby="footer-services">
                            <ul className="space-y-2">
                                {agencyInfo.services
                                    .slice(0, 6)
                                    .map((service) => (
                                        <li key={service}>
                                            <Link
                                                href="#services"
                                                className="text-white/60 hover:text-white transition-colors text-sm"
                                            >
                                                {service}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content={agencyInfo.name} />
                        <h4
                            className="text-white font-semibold mb-4"
                            id="footer-contact"
                        >
                            Get in Touch
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                <a
                                    href={`mailto:${agencyInfo.email}`}
                                    className="text-white/60 hover:text-white transition-colors text-sm break-all"
                                    itemProp="email"
                                >
                                    {agencyInfo.email}
                                </a>
                            </div>
                            <div
                                className="flex items-center space-x-3"
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                            >
                                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                <span
                                    className="text-white/60 text-sm"
                                    itemProp="addressCountry"
                                >
                                    {agencyInfo.location} 🇬🇭
                                </span>
                            </div>
                            {agencyInfo.phone && (
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <a
                                        href={`tel:${agencyInfo.phone}`}
                                        className="text-white/60 hover:text-white transition-colors text-sm"
                                        itemProp="telephone"
                                    >
                                        {agencyInfo.phone}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm text-center sm:text-left">
                        © {currentYear} {agencyInfo.name}. All rights reserved.
                        Crafting digital excellence from {agencyInfo.location}{" "}
                        🇬🇭
                    </p>
                    <nav
                        className="flex items-center space-x-6 mt-4 sm:mt-0"
                        aria-label="Footer Links"
                    >
                        <Link
                            href="/privacy"
                            className="text-white/40 hover:text-white transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-white/40 hover:text-white transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4 text-white/60 hover:text-cyan-400" />
                        </button>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
