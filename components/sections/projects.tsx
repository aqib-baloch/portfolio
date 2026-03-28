"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Target, Layers, ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "psychiatr.ai",
      shortDescription: "Building the next generation of tech-powered solutions for mental well-being.",
      narrative: "I'm currently part of the core team developing this mission-critical platform. My focus is on creating a seamless therapeutic alliance through digital interventions, ensuring data privacy and HIPAA/GDPR compliance while maintaining a highly responsive user experience.",
      result: "Achieved a scalable architecture that bridges the global mental health treatment gap with high-performance real-time monitoring.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "TanStack Query", "Redux Toolkit"],
      type: "Full-Stack",
      status: "Active",
      link: "https://psychiatr.ai",
      github: null,
      featured: true,
    },
    {
      title: "AI-Driven Workflow Platform",
      organization: "Barie AI",
      shortDescription: "A high-scale environment supporting complex AI workflows and real-time data processing.",
      narrative: "I contributed to building the core features of this platform, focusing on the seamless integration of Vue.js frontends with FastAPI backends. The challenge was ensuring consistent data flow for AI agents, which I solved by implementing reusable UI components and scalable API services.",
      result: "Improved maintainability and UI performance through optimized component structures and efficient state management.",
      technologies: ["Vue.js", "Nuxt.js", "Pinia", "FastAPI", "Tailwind CSS"],
      type: "AI",
      status: "Live",
      link: "https://barie.ai/",
      github: null,
      featured: true,
    },
    {
      title: "Asaan Kisan",
      shortDescription: "The Farmer's Market Hub - Bridging the gap between farmers and urban consumers.",
      narrative: "As my final year project, I architected this end-to-end platform to eliminate middlemen in the agricultural supply chain. I focused on building a multi-role system that handles complex inventory and direct trade between rural farmers and urban buyers.",
      result: "Successfully demonstrated a direct-to-consumer model that improves market access and profitability for over 50+ local farmers during testing.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "MUI"],
      type: "Full-Stack",
      status: "Completed",
      link: null,
      github: "https://github.com/aqib-baloch",
    },
    {
      title: "Noor-e-Zahan",
      shortDescription: "A client-centric platform for discovering and scheduling grooming services.",
      narrative: "I focused on creating an accessible, mobile-first experience that simplified the booking process. By restructuring the frontend layout, I helped reduce user friction, making it easier for clients to explore services and book appointments on the go.",
      result: "Enhanced mobile responsiveness and user flow, directly improving client interaction metrics with a seamless vercel deployment.",
      technologies: ["React", "Tailwind CSS", "Mobile Optimization", "Framer Motion"],
      type: "Marketplace",
      status: "Completed",
      link: "https://noor-e-zahan-salon.vercel.app/",
      github: "https://github.com/aqib-baloch/Noor-e-Zahan",
    },
    {
      title: "Event Organizing Website",
      organization: "Amperor Tech",
      shortDescription: "A comprehensive event management platform for organizers and attendees.",
      narrative: "During my internship at Amperor Tech, I worked on the full-stack development of this event management system. I implemented automated test scripts for UI validation and booking functionality using Selenium and Postman, ensuring a bug-free experience for organizers.",
      result: "delivered a robust event creation and booking system with 100% automated test coverage for critical user paths.",
      technologies: ["React.js", "Nest.js", "PostgreSQL", "Selenium", "Postman"],
      type: "Full-Stack",
      status: "Completed",
      link: null,
      github: "https://github.com/aqib-baloch/Eventify",
    },
    {
      title: "Woodex Furniture Showcase",
      organization: "Questra Digital",
      shortDescription: "An elegant furniture showcase website with premium design.",
      narrative: "I developed this high-performance showcase for Questra Digital, focusing on cross-browser compatibility and rapid loading times. The goal was to translate premium furniture aesthetics into a fluid digital experience using modern CSS and performance optimization techniques.",
      result: "Optimized performance scores by 30% and achieved seamless cross-browser consistency for a luxury furniture brand.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Performance Testing"],
      type: "Marketplace",
      status: "Completed",
      link: null,
      github: "https://github.com/aqib-baloch",
    },
  ];

  const categories = ["All", "Full-Stack", "AI", "Marketplace"];

  const filteredProjects = projects.filter(p => 
    activeFilter === "All" || p.type === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Creative Portfolio
          </motion.h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
          
          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === cat 
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900" 
                  : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:text-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Section (Visible when 'All' or specific type matches) */}
        {activeFilter === "All" && (
          <div className="mb-16">
            <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Featured Works
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.filter(p => p.featured).map((project, index) => (
                <ProjectCard key={index} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div>
          {activeFilter === "All" && (
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-8">
              More Projects
            </h3>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.filter(p => activeFilter !== "All" || !p.featured).map((project, index) => (
                <motion.div 
                  key={project.title} 
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProjectCard project={project} isFeatured={false} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View More Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Button variant="outline" className="rounded-full px-8 py-6 border-slate-200 dark:border-slate-800 font-bold group" asChild>
            <Link href="https://github.com/aqib-baloch" target="_blank" rel="noopener noreferrer">
              EXPLORE MORE ON GITHUB <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isFeatured }: { project: any, isFeatured: boolean }) => (
  <Card className={`group flex flex-col h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900 ${isFeatured ? 'ring-1 ring-blue-500/10' : ''}`}>
    <CardHeader className={`relative pb-4 ${isFeatured ? 'p-8' : 'p-6'}`}>
      <div className="flex justify-between items-start mb-4">
        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1">
          {project.type}
        </Badge>
        <div className="flex items-center gap-2">
           <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' || project.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.status}</span>
        </div>
      </div>
      <CardTitle className={`${isFeatured ? 'text-3xl' : 'text-xl'} font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors`}>
        {project.title}
      </CardTitle>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
        {project.shortDescription}
      </p>
    </CardHeader>

    <CardContent className={`flex-1 space-y-6 ${isFeatured ? 'px-8' : 'px-6'}`}>
      <div className="space-y-2">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
          <Layers className="h-3 w-3" /> Narrative
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-4">
          {project.narrative}
        </p>
      </div>

      <div className={`p-4 rounded-xl border transition-colors ${isFeatured ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800'}`}>
        <h4 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-2">
          <Target className="h-3 w-3" /> Impact
        </h4>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
          {project.result}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map((tech: string, idx: number) => (
          <span key={idx} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded uppercase tracking-tighter">
            {tech}
          </span>
        ))}
      </div>
    </CardContent>

    <CardFooter className={`pt-6 pb-8 flex gap-4 ${isFeatured ? 'px-8' : 'px-6'}`}>
      {project.link && (
        <Button asChild size={isFeatured ? "lg" : "sm"} className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold tracking-tight">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {project.github && (
        <Button asChild variant="outline" size={isFeatured ? "lg" : "sm"} className="flex-1 border-slate-200 dark:border-slate-800 font-bold">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source
          </Link>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default Projects;
