import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { agencyInfo } from "@/data/agency";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: `Our Projects | ${agencyInfo.name} - Web Design Portfolio`,
    description: `Explore ${agencyInfo.name}'s portfolio of web design and development projects. See how we've helped businesses in Ghana and beyond establish powerful online presences.`,
    keywords: [
        "portfolio",
        "projects",
        "web design",
        "web development",
        "Ghana",
        "case studies",
    ],
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen body-view relative">
          <header className="fixed top-2 z-50 w-full flex items-center justify-center pointer-events-auto">
                <Navigation />
            </header>

            <main className="container mx-auto px-4 py-32">
                <div className="text-center mb-12">
                    <h1 className="heading-lg">Our Projects</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Explore our portfolio of websites and digital solutions
                        we&apos;ve built for clients across Ghana and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="bg-black/20 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/10"
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                        >
                            <div className="relative h-56">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        fill
                                        alt={`${project.title} project by ${agencyInfo.name}`}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={project.featured}
                                        itemProp="image"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                    <span className="px-3 py-1 bg-purple-500/20 text-xs rounded-full text-white/90">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h2
                                    className="text-xl font-bold mb-2"
                                    itemProp="name"
                                >
                                    {project.title}
                                </h2>
                                <p
                                    className="text-white/60 mb-4"
                                    itemProp="description"
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/5 text-xs rounded text-white/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <span
                                        className="text-sm text-white/40"
                                        itemProp="datePublished"
                                    >
                                        {project.year}
                                    </span>

                                    <div className="flex space-x-3">
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-cyan-400 hover:text-cyan-300"
                                                itemProp="url"
                                            >
                                                Visit Site
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {project.results && (
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <p className="text-sm text-white/70">
                                            <span className="font-medium text-cyan-400">
                                                Results:
                                            </span>{" "}
                                            {project.results}
                                        </p>
                                    </div>
                                )}

                                <meta
                                    itemProp="creator"
                                    content={agencyInfo.name}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />

            {/* Structured Data for ProjectsPage */}
            <Script
                id="projects-collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        headline: `Projects Portfolio | ${agencyInfo.name}`,
                        description: `Explore ${agencyInfo.name}'s portfolio of web design and development projects from Ghana and beyond.`,
                        provider: {
                            "@type": "Organization",
                            name: agencyInfo.name,
                            url: agencyInfo.website,
                        },
                        mainEntity: {
                            "@type": "ItemList",
                            itemListElement: projects.map((project, index) => ({
                                "@type": "ListItem",
                                position: index + 1,
                                item: {
                                    "@type": "CreativeWork",
                                    name: project.title,
                                    description: project.description,
                                    url:
                                        project.liveUrl ||
                                        `${agencyInfo.website}/projects#${project.id}`,
                                    datePublished: project.year,
                                    creator: {
                                        "@type": "Organization",
                                        name: agencyInfo.name,
                                    },
                                    image: project.image
                                        ? `${agencyInfo.website}${project.image}`
                                        : `${agencyInfo.website}/clispy-solutions-logo.png`,
                                },
                            })),
                        },
                    }),
                }}
            />
        </div>
    );
}
