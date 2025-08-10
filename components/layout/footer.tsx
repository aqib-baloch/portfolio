"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Aqib Hussain</h3>
            <p className="text-slate-300 mb-4">
              Software Engineer & QA Specialist passionate about creating innovative solutions and ensuring software
              quality.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <a href="mailto:hafizaqibbaloch@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <a href="https://www.linkedin.com/in/aqib-hussain-ahkb9991" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <a href="https://github.com/aqib-baloch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>Sargodha, Pakistan</p>
              <p>+92 337 0683966</p>
              <p>hafizaqibbaloch@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center gap-2">
             © {currentYear} Aqib Hussain, Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
