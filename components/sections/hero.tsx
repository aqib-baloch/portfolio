"use client";

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aqib Hussain
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-2">
                Software Engineer & QA Specialist
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Based in Sargodha, Pakistan
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Computer Science graduate with expertise in full-stack development
              and software quality assurance. Passionate about building scalable
              applications and ensuring exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link
                  href="/Aqib%20Hussain%20v7.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume PDF"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hafizaqibbaloch@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/aqib-hussain-ahkb9991"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/aqib-baloch"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Aqib Hussain"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
