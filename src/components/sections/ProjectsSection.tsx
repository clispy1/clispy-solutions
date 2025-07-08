"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const categories = ["all", "web", "ecommerce", "branding"];

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <section id="projects" className="py-20 px-4 bg-black/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto">
                        Showcasing successful digital solutions that drive real
                        business results
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                filter === category ? "default" : "outline"
                            }
                            onClick={() => setFilter(category)}
                            className={`capitalize ${
                                filter === category
                                    ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                                    : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                            }`}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            layout
                        >
                            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group py-0 gap-0 hover-glow neon-glass-card hover-scale ">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={
                                            project.image || "/placeholder.svg"
                                        }
                                        alt={project.title}
                                        width={500}
                                        height={400}
                                        className="w-full h-54 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex space-x-2">
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    className="bg-white/20 backdrop-blur-sm"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            )}
                                            {project.githubUrl && (
                                                <Button
                                                    size="sm"
                                                    className="bg-white/20 backdrop-blur-sm"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <Badge
                                            variant="secondary"
                                            className="bg-white/10 text-white/80 capitalize"
                                        >
                                            {project.category}
                                        </Badge>
                                        <span className="text-white/60 text-sm">
                                            {project.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies
                                            .slice(0, 3)
                                            .map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="border-white/20 text-white/60 text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.technologies.length > 3 && (
                                            <Badge
                                                variant="outline"
                                                className="border-white/20 text-white/60 text-xs"
                                            >
                                                +
                                                {project.technologies.length -
                                                    3}
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-white/60">
                                            <strong className="text-cyan-400">
                                                {project.results?.split(" ")[0]}
                                            </strong>{" "}
                                            {project.results
                                                ?.split(" ")
                                                .slice(1)
                                                .join(" ")}
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="text-cyan-400 hover:text-cyan-300"
                                            onClick={() =>
                                                setSelectedProject(
                                                    selectedProject ===
                                                        project.id
                                                        ? null
                                                        : project.id
                                                )
                                            }
                                        >
                                            <Link
                                                href="https://wa.me/233206601059"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex gap-1 p-1 rounded-sm justify-center items-center cursor-pointer hover:border hover:bg-white/10"
                                            >
                                                <Eye className="w-4 h-4 mr-1" />
                                                View
                                            </Link>
                                        </Button>
                                    </div>

                                    {selectedProject === project.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-4 pt-4 border-t border-white/10"
                                        >
                                            <p className="text-white/70 text-sm mb-3">
                                                {project.longDescription}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                    (tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="outline"
                                                            className="border-white/20 text-white/60 text-xs"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white/60">
                            No projects found for this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
