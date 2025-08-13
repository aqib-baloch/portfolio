import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and ensuring software
            quality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <p className="text-slate-600 text-justify dark:text-slate-300 mb-6 leading-relaxed">
              Computer Science graduate with 1 year of full-stack experience.
              Skilled in building RESTful APIs (FastAPI, Express, Node.js,
              Nest.js) and integrating them with modern frontends (Next.js,
              React.js, Vue.js). Proficient with TanStack Query, React Hooks,
              Redux, and Zod.
            </p>
            <p className="text-slate-600 text-justify dark:text-slate-300 mb-6 leading-relaxed">
              Collaborative and adaptable, with experience delivering real-world
              solutions in agile and supportive team environments. Strong focus
              on software quality assurance, testing methodologies, and
              performance optimization.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Sargodha, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+92 337 0683966</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>hafizaqibbaloch@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Education
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <p>
                    <strong>University:</strong> Comsats University Islamabad,
                    Wah Cantt
                  </p>
                  <p>
                    <strong>Graduation:</strong> 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Years Experience
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
