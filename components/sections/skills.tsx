import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, TestTube, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "DaisyUI", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Nest.js", "FastAPI", "Express.js", "Python", "RESTful APIs", "PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "Testing & QA",
      icon: <TestTube className="h-6 w-6" />,
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
      skills: ["Git/GitHub", "JIRA", "Swagger", "TanStack Query", "Redux", "Zod", "Asana", "Trello"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
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
              <Badge
                key={idx}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
