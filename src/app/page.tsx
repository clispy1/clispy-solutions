// "use client";
import { Suspense } from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import SolutionSection from "@/components/sections/SolutionSection";
import AboutSection from "@/components/sections/AboutSection";
import PricingSection from "@/components/sections/PricingSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { agencyInfo } from "@/data/agency";

import Loading from "./loading";

// import TeamSection from "@/components/sections/TeamSection";
// import TimelineSection from "@/components/sections/TimelineSection";
// import BusinessesSection from "@/components/sections/BusinessesSection";
// import BlogSection from "@/components/sections/BlogSection";

// Page-specific metadata
export const metadata: Metadata = {
    title: `${agencyInfo.name} - Creative Web Design & Development Agency in Ghana`,
    description: agencyInfo.description,
    alternates: {
        canonical: "/",
    },
};

export default function Portfolio() {
    return (
        <div className="min-h-screen body-view relative">
            <header className="fixed top-2 z-50 w-full flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <Navigation />
                </div>
            </header>

            <Suspense fallback={<Loading />}>
                <main>
                    <section id="home" aria-label="Hero Section">
                        <HeroSection />
                    </section>
                    <section id="about" aria-label="About Our Solutions">
                        <SolutionSection />
                    </section>
                    <section id="about-2" aria-label="About Our Company">
                        <AboutSection />
                    </section>

                    <section id="trusted" aria-label="Trusted By Our Clients">
                        <TrustedBySection />
                    </section>

                    <section id="packages" aria-label="Our Pricing Packages">
                        <PricingSection />
                    </section>

                    <section id="projects" aria-label="Our Projects">
                        <ProjectsSection />
                    </section>

                    <section id="services" aria-label="Our Services">
                        <ServicesSection />
                    </section>

                    <section id="testimonials" aria-label="Client Testimonials">
                        <TestimonialsSection />
                    </section>

                    <section id="cta" aria-label="Call To Action">
                        <CTA />
                    </section>

                    <section id="contact" aria-label="Contact Us">
                        <ContactSection />
                    </section>
                </main>
                <Footer />

                {/*    <div id="team">
                    <TeamSection />
                </div>
               
                <div id="timeline">
                    <TimelineSection />
                </div>

                <div id="businesses">
                    <BusinessesSection />
                </div>

                <div id="blog">
                    <BlogSection />
                </div>
               */}
            </Suspense>
        </div>
    );
}
