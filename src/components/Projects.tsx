import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Users, Target } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";


const Projects = () => {
  const { data } = useProfile();
  const IconMap = { Award, Users, Target } as const;

  const fallback = [
    {
      title: "MySpeech – Web Conferencing System",
      subtitle: "Final Year Project",
      description: "Developed an accessible web conferencing platform to address communication barriers for speech and hearing-impaired users.",
      achievements: [
        "Implemented real-time speech-to-text conversion using machine learning algorithms",
        "Integrated sign language recognition features",
        "Built responsive web interface supporting 50+ concurrent users",
        "Achieved 90% accuracy in speech recognition",
        "Received recognition as the best final year project in Electronics Engineering department"
      ],
      technologies: ["Machine Learning", "Web Development", "Speech Recognition", "Accessibility"],
      icon: "Award",
      metrics: {
        accuracy: "90%",
        users: "50+",
        recognition: "Best Project"
      }
    },
    {
      title: "IoT-Based Smart Door Security System",
      subtitle: "Security & IoT Project",
      description: "Designed and implemented a smart door unlocking system using solenoid locks and IoT sensors to enhance building security.",
      achievements: [
        "Built Python-based control system with MongoDB for user authentication",
        "Integrated mobile app controls for remote access",
        "Implemented security logging features",
        "Reduced unauthorized access attempts by 80%",
        "Deployed in 3 residential buildings as pilot project"
      ],
      technologies: ["Python", "MongoDB", "IoT", "Mobile Development", "Security"],
      icon: "Users",
      metrics: {
        reduction: "80%",
        deployments: "3 Buildings",
        devices: "50+ IoT"
      }
    },
    {
      title: "Sentiment Analysis with Machine Learning",
      subtitle: "Data Science & ML Project",
      description: "Built a sentiment analysis tool to process and analyze customer feedback data for business insights.",
      achievements: [
        "Implemented machine learning algorithms achieving 85% accuracy in sentiment classification",
        "Processed datasets containing 10,000+ customer reviews",
        "Created visualization dashboards for stakeholders",
        "Helped identify key customer pain points",
        "Contributed to 15% improvement in customer satisfaction scores"
      ],
      technologies: ["Machine Learning", "Data Science", "Python", "Data Visualization"],
      icon: "Target",
      metrics: {
        accuracy: "85%",
        reviews: "10,000+",
        improvement: "15%"
      }
    }
  ];

  const projects = (data?.projects ?? fallback) as any[];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-on-scroll">{" "}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300 group`}>{" "}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {(() => { const IconComp = IconMap[(project.icon as string) as keyof typeof IconMap] ?? Award; return <IconComp className="w-6 h-6" />; })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="p-2 bg-muted/50 rounded">
                        <div className="font-bold text-primary text-sm">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;