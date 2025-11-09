"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "text-blue-600",
      bgGradient: "from-blue-500 to-cyan-500",
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "DaisyUI",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "text-emerald-600",
      bgGradient: "from-emerald-500 to-teal-500",
      skills: [
        "Node.js",
        "Nest.js",
        "FastAPI",
        "Express.js",
        "Python",
        "RESTful APIs",
        "PostgreSQL",
        "MongoDB",
        "SQL",
      ],
    },
    {
      title: "Testing & QA",
      icon: <TestTube className="h-6 w-6" />,
      color: "text-purple-600",
      bgGradient: "from-purple-500 to-pink-500",
      skills: [
        "Manual Testing",
        "Automation Testing",
        "Selenium",
        "Postman",
        "API Testing",
        "Performance Testing",
        "Regression Testing",
        "Bug Tracking",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      color: "text-orange-600",
      bgGradient: "from-orange-500 to-amber-500",
      skills: [
        "Git/GitHub",
        "JIRA",
        "Swagger",
        "TanStack Query",
        "Redux",
        "Zod",
        "Asana",
        "Trello",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of tools, frameworks, and methodologies I use
            to build robust and scalable applications.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="group relative overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.bgGradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`font-medium text-sm px-3 py-1.5 border ${category.color.replace(
                            "text-",
                            "border-"
                          )}-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-gradient-to-r hover:from-white hover:to-slate-100 dark:hover:from-slate-800 dark:hover:to-slate-700/50 transition-all duration-200 cursor-default`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            Core Competencies
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
            Soft and technical strengths that drive my work
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Agile Development",
              "Code Review",
              "Performance Optimization",
              "Cross-browser Testing",
              "Responsive Design",
              "API Integration",
            ].map((competency, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-slate-800 font-medium px-4 py-2 text-sm shadow-md hover:shadow-lg hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300">
                  {competency}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
