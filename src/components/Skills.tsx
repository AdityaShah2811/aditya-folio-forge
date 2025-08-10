import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, TestTube, Cloud, Smartphone } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";


const Skills = () => {
  const { data } = useProfile();
  const IconMap = { Code, Database, Wrench, TestTube, Cloud, Smartphone } as const;

  const fallback = [
    { title: "Programming Languages", icon: "Code", skills: ["Python", "JavaScript", "Java", "C++", "HTML/CSS"] },
    { title: "Frameworks & Libraries", icon: "Smartphone", skills: ["Node.js", "Express.js", "Angular", "React Native"] },
    { title: "Databases", icon: "Database", skills: ["MongoDB", "MySQL"] },
    { title: "Tools & Technologies", icon: "Wrench", skills: ["Git", "Jira", "Postman", "Selenium", "JMeter", "Android Studio"] },
    { title: "Testing", icon: "TestTube", skills: ["Unit Testing", "Integration Testing", "User Experience Testing", "Automated Testing"] },
    { title: "Cloud & DevOps", icon: "Cloud", skills: ["CI/CD Pipelines", "Continuous Integration", "Version Control (Git)"] }
  ];

  const skillCategories = (data?.skills ?? fallback) as any[];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-on-scroll">{" "}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${(index % 3) + 1} transition-all duration-300 group`}>{" "}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {(() => { const IconComp = IconMap[(category as any).icon as keyof typeof IconMap] ?? Code; return <IconComp className="w-6 h-6" />; })()}
                  </div>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
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

export default Skills;