"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Psychiatrai",
      location: "Islamabad, Pakistan",
      period: "Nov 2024 – Present",
      type: "Full-time",
      isCurrent: true,
      roles: [
        { title: "Software Engineer", duration: "March 2025 – Present" },
        { title: "Associate Software Engineer", duration: "Nov 2024 – March 2025" }
      ],
      description: [
        "Spearheading end-to-end feature delivery, translating complex requirements into high-impact systems through strategic research and implementation planning.",
        "Architecting high-concurrency backend services with FastAPI, delivering robust RESTful APIs that serve as the foundation for platform reliability.",
        "Championing full-stack innovation by engineering unified, seamless user experiences across Next.js and React Native platforms.",
        "Advancing system performance through TypeScript-driven Next.js optimizations, resulting in superior responsiveness and scalability.",
        "Orchestrating secure and efficient data flows by leading the integration of critical frontend and backend service layers.",
        "Streamlining the software delivery lifecycle by designing sophisticated CI/CD pipelines via GitHub Actions, ensuring flawless automated deployments.",
        "Directing mission-critical release cycles for web and backend environments to ensure high-availability and operational stability.",
        "Fostering technical excellence by conducting deep-dive code reviews and enforcing clean architecture best practices.",
        "Managed original transition from Associate to Software Engineer, contributing to the growth of a digital wellbeing ecosystem."
      ],
      technologies: ["FastAPI", "Next.js", "React Native", "TypeScript", "GitHub Actions", "Full-Stack Dev", "System Design"],
    },
    {
      title: "Software Engineer Intern",
      company: "Amperor Tech",
      location: "Lahore, Pakistan",
      period: "Aug 2024 – Oct 2024",
      type: "Internship",
      isCurrent: false,
      description: [
        "Assisted in development of full-stack web applications in a product and service-based environment.",
        "Worked with React.js, NestJS, and PostgreSQL to support feature development and backend integration.",
        "Collaborated with cross-functional teams to identify and resolve defects, ensuring robust software delivery."
      ],
      technologies: ["React.js", "NestJS", "PostgreSQL", "API Testing", "Full-Stack"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3 w-3" /> Career Path
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Professional Journey
          </motion.h2>
          <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`relative overflow-hidden border-0 shadow-xl ${exp.isCurrent ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/20'}`}>
                {/* Visual Accent for Current Role */}
                {exp.isCurrent && (
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600" />
                )}
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-bold dark:text-white">
                          {exp.title}
                        </CardTitle>
                        {exp.isCurrent && (
                          <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-none font-bold text-[10px] uppercase">
                            Current Role
                          </Badge>
                        )}
                      </div>
                      
                      {/* Secondary Roles Indicator for Consolidated Psychiatrai Entry */}
                      {exp.roles && (
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                          {exp.roles.map((role, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                               <ChevronRight className="h-3 w-3 text-blue-500" />
                               <span className="font-semibold">{role.title}</span> • <span>{role.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-500" />
                          <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-purple-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-3">
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-bold text-xs">
                        <Calendar className="h-3 w-3" /> {exp.period}
                      </div>
                      <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-widest font-bold">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Responsibilities Column */}
                    <div className="lg:col-span-8">
                       <ul className="space-y-4">
                        {exp.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-blue-500/50 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta/Tech Column */}
                    <div className="lg:col-span-4 space-y-6">
                      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Core Tech Focus</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary" 
                              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold px-3 py-1 group-hover:border-blue-500 transition-all"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {exp.isCurrent && (
                        <div className="px-6 py-4 bg-blue-600 dark:bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                          <p className="text-[10px] uppercase font-black tracking-widest mb-1 opacity-70">Focus Areas</p>
                          <p className="font-bold text-sm leading-tight italic">Leading end-to-end full-stack feature delivery through modern tech stacks.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
