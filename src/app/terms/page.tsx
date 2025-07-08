import { Metadata } from "next";
import { agencyInfo } from "@/data/agency";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: `Terms of Service | ${agencyInfo.name}`,
    description: `Read ${agencyInfo.name}'s terms of service to understand the conditions and rules that govern the use of our website and services.`,
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen body-view relative">
            <header className="fixed top-2 z-50 w-full h-[100%] flex items-center justify-center">
                <Navigation />
            </header>

            <main className="container mx-auto px-4 py-32">
                <article className="prose prose-invert mx-auto">
                    <h1 className="heading-lg text-center mb-8">
                        Terms of Service
                    </h1>

                    <div className="bg-black/20 p-8 rounded-lg">
                        <section>
                            <h2>Introduction</h2>
                            <p>
                                Welcome to {agencyInfo.name}. By accessing our
                                website at {agencyInfo.website}, you are
                                agreeing to be bound by these terms of service,
                                all applicable laws and regulations, and agree
                                that you are responsible for compliance with any
                                applicable local laws.
                            </p>
                            <p>
                                If you do not agree with any of these terms, you
                                are prohibited from using or accessing this
                                site.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Use License</h2>
                            <p>
                                Permission is granted to temporarily download
                                one copy of the materials on {agencyInfo.name}
                                &apos;s website for personal, non-commercial
                                transitory viewing only. This is the grant of a
                                license, not a transfer of title, and under this
                                license you may not:
                            </p>
                            <ul>
                                <li>Modify or copy the materials</li>
                                <li>
                                    Use the materials for any commercial
                                    purpose, or for any public display
                                </li>
                                <li>
                                    Attempt to decompile or reverse engineer any
                                    software contained on {agencyInfo.name}
                                    &apos;s website
                                </li>
                                <li>
                                    Remove any copyright or other proprietary
                                    notations from the materials
                                </li>
                                <li>
                                    Transfer the materials to another person or
                                    &ldquo;mirror&rdquo; the materials on any
                                    other server
                                </li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2>Disclaimer</h2>
                            <p>
                                The materials on {agencyInfo.name}&apos;s
                                website are provided on an &lsquo;as is&rsquo;
                                basis.
                                {agencyInfo.name} makes no warranties, expressed
                                or implied, and hereby disclaims and negates all
                                other warranties including, without limitation,
                                implied warranties or conditions of
                                merchantability, fitness for a particular
                                purpose, or non-infringement of intellectual
                                property or other violation of rights.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Limitations</h2>
                            <p>
                                In no event shall {agencyInfo.name} or its
                                suppliers be liable for any damages (including,
                                without limitation, damages for loss of data or
                                profit, or due to business interruption) arising
                                out of the use or inability to use the materials
                                on {agencyInfo.name}&apos;s website, even if{" "}
                                {agencyInfo.name} or an authorized
                                representative has been notified orally or in
                                writing of the possibility of such damage.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Accuracy of Materials</h2>
                            <p>
                                The materials appearing on {agencyInfo.name}
                                &apos;s website could include technical,
                                typographical, or photographic errors.{" "}
                                {agencyInfo.name} does not warrant that any of
                                the materials on its website are accurate,
                                complete or current. {agencyInfo.name} may make
                                changes to the materials contained on its
                                website at any time without notice.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Links</h2>
                            <p>
                                {agencyInfo.name} has not reviewed all of the
                                sites linked to its website and is not
                                responsible for the contents of any such linked
                                site. The inclusion of any link does not imply
                                endorsement by {agencyInfo.name} of the site.
                                Use of any such linked website is at the
                                user&apos;s own risk.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Modifications</h2>
                            <p>
                                {agencyInfo.name} may revise these terms of
                                service for its website at any time without
                                notice. By using this website you are agreeing
                                to be bound by the then current version of these
                                terms of service.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2>Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and
                                construed in accordance with the laws of Ghana
                                and you irrevocably submit to the exclusive
                                jurisdiction of the courts in that location.
                            </p>
                            <p className="text-sm text-white/40 mt-4">
                                Last Updated: June 2025
                            </p>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
