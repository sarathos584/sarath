import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Zap } from 'lucide-react'

const Skills = ({ isVisible }: any) => {

  const skills = [
    { name: "JavaScript/TypeScript", level: 92, icon: <Code className="h-5 w-5" /> },
    { name: "React/Next.js", level: 88, icon: <Code className="h-5 w-5" /> },
    { name: "Node.js/Express", level: 85, icon: <Zap className="h-5 w-5" /> },
    { name: "Database Design", level: 80, icon: <Users className="h-5 w-5" /> },
  ]

  return (
     <section className="max-w-4xl mx-auto px-6 mb-32" id="skills" data-animate>
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-3">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Skills
