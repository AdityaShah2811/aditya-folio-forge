import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "UtopiaTech Pvt Ltd",
      role: "Software Tester",
      period: "May 2023 - Aug 2024",
      location: "Mumbai, India",
      achievements: [
        "Established comprehensive testing protocols for an IoT platform serving 10,000+ users using Selenium and JMeter",
        "Created automated test suites that reduced testing time by 40% and achieved a 95% bug detection rate",
        "Resulted in 60% fewer critical post-release issues",
        "Managed Git workflows and resolved 50+ critical backend bugs impacting user experience",
        "Implemented branching strategies to improve deployment efficiency by 30%",
        "Developed testing documentation that reduced deployment rollbacks by 25%"
      ],
      technologies: ["Selenium", "JMeter", "Git", "Testing Automation", "IoT"]
    },
    {
      company: "UtopiaTech Pvt Ltd",
      role: "Software Developer Intern",
      period: "Dec 2019 - May 2020",
      location: "Mumbai, India",
      achievements: [
        "Developed a Python-based software simulator to automate device response testing for a Smart City project",
        "Reduced manual testing time by 70%",
        "Installed and calibrated 50+ IoT devices",
        "Established standard testing protocols while collaborating with cross-functional teams",
        "Leveraged MongoDB via Robo3t and built Android applications using React Native",
        "Created database optimization strategies that improved query performance by 35%",
        "Integrated mobile interfaces with backend systems for enhanced real-time monitoring"
      ],
      technologies: ["Python", "MongoDB", "React Native", "IoT", "Android Development"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-on-scroll">{" "}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`p-8 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300`}>{" "}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;