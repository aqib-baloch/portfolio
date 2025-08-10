import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Asaan Kisan (The Farmer's Market Hub)",
      organization: "Comsats University Islamabad",
      period: "05/2023 - 02/2025",
      description:
        "A comprehensive platform bridging the gap between farmers and urban consumers, enabling direct trade and eliminating middlemen.",
      features: [
        "Multi-role access system for buyers and sellers",
        "Product listing and management for farmers",
        "Browse, purchase, and connect functionality for customers",
        "Tested platform usability and performance optimization",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Testing"],
      type: "University Project",
      status: "Completed",
    },
    {
      title: "Event Organizing Website",
      organization: "Amperor Tech",
      period: "08/2024 - 10/2024",
      description:
        "A comprehensive event management platform allowing organizers to create and manage events while users can easily browse and book tickets.",
      features: [
        "Event creation, update, and management system",
        "User-friendly event browsing and booking interface",
        "Admin oversight and user management",
        "Automated test scripts for UI validation and booking functionality",
      ],
      technologies: [
        "React.js",
        "Nest.js",
        "PostgreSQL",
        "Selenium",
        "Postman",
      ],
      type: "Internship Project",
      status: "Completed",
    },
    {
      title: "Woodex Furniture Showcase",
      organization: "Questra Digital",
      period: "11/2023 - 12/2023",
      description:
        "An elegant furniture showcase website displaying premium furniture collections with focus on style, functionality, and durability.",
      features: [
        "Premium furniture showcase with elegant design",
        "Curated collection display system",
        "Cross-browser compatibility testing",
        "Performance optimization for faster loading times",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Performance Testing"],
      type: "Client Project",
      status: "Completed",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my development and testing projects across different
            domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <Badge
                    className={
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.organization}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Link
                      href="https://github.com/aqib-baloch"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Code on GitHub"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
