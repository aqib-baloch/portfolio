"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "psychiatrai",
      location: "Islamabad",
      period: "11/2024 - Present",
      type: "Full-time",
      isCurrent: true,
      description: [
        "As a Software Engineer, I am also responsible for SQA (Software Quality Assurance) tasks, ensuring both development and quality standards are met.",
        "Integrated FastAPI for seamless backend communication, enhancing RESTful API functionality.",
        "Optimized frontend performance using Next.js & TypeScript, focusing on scalable UI/UX development.",
        "Ensured effective API integration and backend connectivity.",
        "Conducted performance optimization in Next.js, improving overall application responsiveness.",
        "Designed and executed test cases for web applications, enhancing software reliability.",
        "Performed manual and automated testing, including API testing with Postman and UI testing using Selenium.",
        "Managed bug tracking and defect resolution to ensure quality assurance.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
        "FastAPI",
        "Selenium",
        "Postman",
        "JIRA",
        "Manual Testing",
        "API Testing",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Amperor Tech",
      location: "Lahore, Punjab",
      period: "08/2024 - 10/2024",
      type: "Internship",
      isCurrent: false,
      description: [
        "Engaged in API testing and documentation, enhancing RESTful API skills",
        "Participated in collaborative development, strengthening teamwork and problem-solving abilities",
        "Executed API testing using Postman and validated responses",
        "Collaborated with developers to identify and resolve defects",
      ],
      technologies: [
        "React.js",
        "Nest.js",
        "PostgreSQL",
        "Postman",
        "API Testing",
      ],
    },
  ];

  // Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My journey building scalable applications and ensuring quality
            through development and testing
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex gap-6 mb-10 last:mb-0"
            >
              {/* Timeline Dot - Fixed: removed conflicting 'flex' */}
              <div className="flex-shrink-0 w-16 h-16 relative items-center justify-center z-10 hidden md:flex">
                <div
                  className={`w-4 h-4 rounded-full border-4 ${
                    exp.isCurrent
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 border-white shadow-lg shadow-purple-500/30"
                      : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                  }`}
                />
                {exp.isCurrent && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse" />
                )}
              </div>

              {/* Card */}
              <Card
                className={`flex-1 group relative overflow-hidden border ${
                  exp.isCurrent
                    ? "border-blue-200 dark:border-blue-900/50 shadow-xl"
                    : "border-slate-200 dark:border-slate-700"
                } hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Gradient Top Border for Current Role */}
                {exp.isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}

                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {exp.title}
                        {exp.isCurrent && (
                          <Badge className="ml-2 text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none">
                            Current
                          </Badge>
                        )}
                      </CardTitle>

                      <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Building className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <Badge
                        variant={
                          exp.type === "Full-time" ? "default" : "secondary"
                        }
                        className={
                          exp.type === "Full-time"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : ""
                        }
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-slate-600 dark:text-slate-300 flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">
                          ›
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="outline"
                          className={`text-xs font-medium px-3 py-1 border ${
                            exp.isCurrent
                              ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                              : "border-slate-300 dark:border-slate-600"
                          } hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-200 cursor-default`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
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
