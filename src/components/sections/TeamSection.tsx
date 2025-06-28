// "use client"

// import { motion } from "framer-motion"
// import { Linkedin, Twitter } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { team } from "@/data/team"

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// export default function TeamSection() {
//   return (
//     <section id="team" className="section-padding">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="heading-lg mb-6 gradient-text">Meet Our Team</h2>
//           <p className="text-responsive text-white/60 max-w-2xl mx-auto">
//             The creative minds and technical experts behind every successful project
//           </p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
//         >
//           {team.map((member, index) => (
//             <motion.div key={member.id} variants={fadeInUp}>
//               <Card className="neon-glass-card hover-scale hover-glow group h-full flex flex-col">
//                 <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden rounded-t-lg">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   <div className="absolute bottom-4 left-4">
//                     <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
//                       <span className="text-white font-bold text-lg">
//                         {member.name === "Jake Clispy"
//                           ? "JC"
//                           : member.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")
//                               .slice(0, 2)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <CardHeader className="flex-grow">
//                   <CardTitle className="text-white text-lg group-hover:text-cyan-400 transition-colors">
//                     {member.name}
//                   </CardTitle>
//                   <CardDescription className="text-cyan-400 font-medium text-sm">{member.role}</CardDescription>
//                   <CardDescription className="text-white/60 text-sm leading-relaxed">{member.bio}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="mt-auto">
//                   {/* Skills */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {member.skills.slice(0, 3).map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Social Links */}
//                   {(member.social.linkedin || member.social.twitter) && (
//                     <div className="flex space-x-3">
//                       {member.social.linkedin && (
//                         <a
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
//                         >
//                           <Linkedin className="w-4 h-4 text-white/60 hover:text-cyan-400" />
//                         </a>
//                       )}
//                       {member.social.twitter && (
//                         <a
//                           href={member.social.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
//                         >
//                           <Twitter className="w-4 h-4 text-white/60 hover:text-purple-400" />
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Team CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="neon-glass-card rounded-2xl p-8 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
//             <p className="text-white/70 mb-6">
//               We're always looking for talented individuals who share our passion for creating exceptional digital
//               experiences.
//             </p>
//             <motion.button
//               className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Open Positions
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import React from "react";

const TeamSection = () => {
    return <div>TeamSection</div>;
};

export default TeamSection;
