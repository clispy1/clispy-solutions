import { Metadata } from "next";
import { agencyInfo } from "@/data/agency";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Privacy Policy | ${agencyInfo.name}`,
  description: `Read ${agencyInfo.name}'s privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.`,
  alternates: {
    canonical: '/privacy',
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen body-view relative">
      <header className="fixed top-2 z-50 w-full h-[100%] flex items-center justify-center">
        <Navigation />
      </header>

      <main className="container mx-auto px-4 py-32">
        <article className="prose prose-invert mx-auto">
          <h1 className="heading-lg text-center mb-8">Privacy Policy</h1>
          
          <div className="bg-black/20 p-8 rounded-lg">
            <section>
              <h2>Introduction</h2>
              <p>
                At {agencyInfo.name}, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy will inform you about how we look after your personal data when you visit 
                our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mt-8">
              <h2>Information We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li>Identity Data: includes name, username or similar identifier</li>
                <li>Contact Data: includes email address and telephone numbers</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                <li>Usage Data: includes information about how you use our website and services</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To provide you with the services you have requested</li>
                <li>To respond to your inquiries and contact requests</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (only with your consent)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
                employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section className="mt-8">
              <h2>Your Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>Email: {agencyInfo.email}</li>
                <li>Phone: {agencyInfo.phone}</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm text-white/40 mt-4">Last Updated: October 2024</p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 