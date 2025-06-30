// "use client";
import { Suspense } from "react";
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

import Loading from "./loading";

// import TeamSection from "@/components/sections/TeamSection";
// import TimelineSection from "@/components/sections/TimelineSection";
// import BusinessesSection from "@/components/sections/BusinessesSection";
// import BlogSection from "@/components/sections/BlogSection";

export default function Portfolio() {
    return (
        <div className="min-h-screen body-view relative">
            <div className="fixed top-2 z-50 w-full height-[100%] flex items-center justify-center">
                <Navigation />
            </div>

            <Suspense fallback={<Loading />}>
                <div id="home">
                    <HeroSection />
                </div>
                <div id="about">
                    <SolutionSection />
                </div>
                <div id="about-2">
                    <AboutSection />
                </div>

                <div id="trusted">
                    <TrustedBySection />
                </div>

                <div id="packages">
                    <PricingSection />
                </div>

                <div id="projects">
                    <ProjectsSection />
                </div>

                <div id="services">
                    <ServicesSection />
                </div>

                <div id="testimonials">
                    <TestimonialsSection />
                </div>

                <div id="cta">
                    <CTA />
                </div>

                <div id="contact">
                    <ContactSection />
                </div>
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
