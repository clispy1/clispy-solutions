"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { businesses } from "@/data/businesses"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BusinessesSection() {
  return (
    <section id="businesses" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4 sm:mb-6 gradient-text">Built by Jake Clispy</h2>
          <p className="text-responsive text-white/60 max-w-2xl mx-auto">
            Businesses I've founded and continue to grow
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch"
        >
          {businesses.map((business, index) => (
            <motion.div key={business.id} variants={fadeInUp}>
              <Card className="glass-card hover-scale hover-glow group overflow-hidden h-full flex flex-col">
                <div className={`h-24 sm:h-32 bg-gradient-to-br ${business.color}/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm text-white">
                      {business.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${business.color} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm sm:text-lg">{business.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-grow">
                  <CardTitle className="text-white text-xl sm:text-2xl group-hover:text-cyan-400 transition-colors">
                    {business.name}
                  </CardTitle>
                  <CardDescription className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-cyan-400 text-xs sm:text-sm font-mono truncate">{business.url}</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-white border border-white/20 rounded-full text-xs sm:text-sm"
                    >
                      Visit Site
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
