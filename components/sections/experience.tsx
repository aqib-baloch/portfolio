import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "psychiatrai",
      location: "Islamabad",
      period: "11/2024 - Present",
      type: "Full-time",
      description: [
        "Integrated FastAPI for seamless backend communication, enhancing RESTful API functionality",
        "Optimized frontend performance using Next.js & TypeScript, focusing on scalable UI/UX development",
        "Ensured effective API integration and backend connectivity",
        "Conducted performance optimization in Next.js, improving overall application responsiveness",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "FastAPI"],
    },
    {
      title: "Jr. SQA Engineer",
      company: "psychiatrai",
      location: "Remote",
      period: "11/2024 - Present",
      type: "Full-time",
      description: [
        "Designed and executed test cases for web applications, enhancing software reliability",
        "Performed manual and automated testing, including API testing with Postman and UI testing using Selenium",
        "Managed bug tracking and defect resolution to ensure quality assurance",
      ],
      technologies: ["Selenium", "Postman", "JIRA", "Manual Testing", "API Testing"],
    },
    {
      title: "Software Developer Intern",
      company: "Amperor Tech",
      location: "Lahore, Punjab",
      period: "08/2024 - 10/2024",
      type: "Internship",
      description: [
        "Engaged in API testing and documentation, enhancing RESTful API skills",
        "Participated in collaborative development, strengthening teamwork and problem-solving abilities",
        "Executed API testing using Postman and validated responses",
        "Collaborated with developers to identify and resolve defects",
      ],
      technologies: ["React.js", "Nest.js", "PostgreSQL", "Postman", "API Testing"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey in software development and quality assurance
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
