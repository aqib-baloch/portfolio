"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Code,
  Zap,
  Target,
  Award,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCounter = (end: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, isInView]);
    return count;
  };

  const yearsExp = useCounter(1);
  const projectsDone = useCounter(5);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting innovative solutions and delivering
            high-quality software with precision and care.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              <p>
                Computer Science graduate with <strong>1 year</strong> of
                full-stack development experience. I specialize in building
                scalable RESTful APIs using{" "}
                <strong>FastAPI, Nest.js, Express, and Node.js</strong>, and
                integrating them seamlessly with modern frontends like{" "}
                <strong>Next.js, React.js, and Vue.js</strong>.
              </p>
              <p>
                Proficient in state management with{" "}
                <strong>Redux, TanStack Query, and React Hooks</strong>, and
                passionate about type safety using <strong>TypeScript</strong>{" "}
                and schema validation with <strong>Zod</strong>.
              </p>
              <p>
                I thrive in collaborative, agile environments, delivering
                production-ready solutions with a strong emphasis on software
                quality, performance optimization, and clean architecture.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ),
                  label: "Sargodha, Pakistan",
                },
                {
                  icon: (
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ),
                  label: "+92 337 0683966",
                  href: "tel:+923370683966",
                },
                {
                  icon: (
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  ),
                  label: "hafizaqibbaloch@gmail.com",
                  href: "mailto:hafizaqibbaloch@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                      {item.label}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack",
                  "TypeScript",
                  "REST APIs",
                  "Next.js",
                  "SQA",
                  "Performance",
                  "Clean Code",
                  "Agile",
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all font-medium"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education Card */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>COMSATS University Islamabad, Wah Cantt</strong>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Graduated 2024
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md" />
                  <div className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                    Full-time • 4 Years
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="h-8 w-8" />,
                  value: yearsExp,
                  label: "Years Experience",
                  gradient: "from-amber-500 to-orange-500",
                  delay: 0.3,
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  value: projectsDone,
                  label: "Projects Completed",
                  gradient: "from-emerald-500 to-teal-500",
                  delay: 0.5,
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <CardContent className="p-6 text-center">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${stat.gradient} text-white mx-auto w-fit mb-3 shadow-lg`}
                      >
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                        <span className="text-2xl text-slate-600 dark:text-slate-400">
                          {stat.value === 1 ? "+" : "+"}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Extra Achievement */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl"
            >
              <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Final Year Project
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Asaan Kisan - An e-commerce platform connecting farmers with
                  buyers, enhancing market access and profitability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
