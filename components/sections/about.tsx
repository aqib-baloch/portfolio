"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Code,
  Zap,
  Target,
  Award,
  Sparkles,
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

  const yearsExp = useCounter(1.5);
  const projectsDone = useCounter(10);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const highlights = [
    { text: "1.5+ Years of Industry Experience", icon: Award, color: "text-amber-500" },
    { text: "Expertise in Modern Frontend (React, Vue, Next.js)", icon: Code, color: "text-blue-500" },
    { text: "Scalable Backend Architecture (Node.js, NestJS, Python)", icon: Zap, color: "text-purple-500" },
    { text: "Cloud-Ready Development (AWS, SST, Vercel)", icon: Target, color: "text-emerald-500" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
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
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4 tracking-tight">
            Engineering Strategic Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed italic font-light">
            "I don’t just write code; I architect solutions that solve real-world problems and drive tangible business value."
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Narrative Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                As a results-oriented <strong>Software Engineer</strong> with over <strong>1.5 years of industry experience</strong>, I specialize in bridging the gap between complex problems and scalable, high-performance solutions. My approach is rooted in systematic research and clean architecture, allowing me to build systems that are as robust as they are intuitive.
              </p>
              <p>
                Whether I am architecting high-concurrency <strong>FastAPI</strong> backends or orchestrating fluid user experiences with <strong>Next.js</strong>, my focus remains constant: **solving technical puzzles that empower users**. I thrive in environments where technology is a tool to overcome strategic challenges and deliver measurable impact.
              </p>
            </div>

            {/* Key Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group transition-all"
                >
                  <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-900 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Core Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Years Exp", value: yearsExp, suffix: "+" },
                { label: "Projects Done", value: projectsDone, suffix: "" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-900/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Education & Experience Details */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pl-8 border-l border-slate-100 dark:border-slate-800">
            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: MapPin, label: "Lahore, Pakistan", color: "text-blue-600" },
                { icon: Phone, label: "+92 337 0683966", href: "tel:+923370683966", color: "text-green-600" },
                { icon: Mail, label: "hafizaqibbaloch@gmail.com", href: "mailto:hafizaqibbaloch@gmail.com", color: "text-purple-600" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-600 dark:text-slate-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Education Summary */}
            <Card className="border-0 shadow-lg bg-slate-50/50 dark:bg-slate-800/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-md">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">BS Computer Science</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">COMSATS University Islamabad</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">Class of 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Philosophy Block */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white shadow-xl">
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Technical Puzzle-Solver
              </h4>
              <p className="text-sm text-blue-50 leading-relaxed">
                I thrive in collaborative, agile environments, delivering production-ready solutions with a strong emphasis on software quality, performance optimization, and clean architecture.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
