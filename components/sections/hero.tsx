"use client";

import { ArrowRight, Download, Github, Linkedin, Mail, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const keywords = [
    "Software Engineer",
    "Solution Architect",
    "Full-Stack System Design",
    "Scalable Architecture",
    "Strategic Problem Solver",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-10"
          >
            {/* Visual SEO Keywords / Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {keywords.map((word, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-none px-3 py-1 text-xs font-medium"
                >
                  {word}
                </Badge>
              ))}
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scalable, High-Impact Systems</span> & Strategic Solutions
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I’m Aqib Hussain, a Software Engineer dedicated to solving complex technical challenges with elegant, high-impact solutions. I architect robust systems and seamless experiences that transform ambitious ideas into strategic digital assets.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/20 group transform transition-transform hover:scale-105"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors transform hover:scale-105"
              >
                <Link
                  href="/Aqib%20Hussain%20CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download My Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Mail, href: "mailto:hafizaqibbaloch@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aqib-hussain-ahkb9991", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/aqib-baloch", label: "GitHub" }
              ].map((social, i) => (
                <Button key={i} variant="ghost" size="icon" asChild className="hover:text-blue-600 dark:hover:text-blue-400 transform transition-transform hover:scale-110">
                  <a href={social.href} aria-label={social.label} target={social.href.startsWith('http') ? "_blank" : undefined} rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-40 blur-2xl group-hover:opacity-75 transition-opacity duration-1000"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src="/images/profile.jpg"
                  alt="Aqib Hussain"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge/Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MousePointer2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Available for</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">New Opportunities</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
