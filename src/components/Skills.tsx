import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, TestTube, Cloud, Smartphone, Settings } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";

const Skills = () => {
  const { data } = useProfile();

  const IconMap: Record<string, any> = {
    Languages: Code,
    Frameworks: Code,
    Databases: Database,
    Cloud: Cloud,
    DevOps: Settings,
    Tools: Wrench,
    Design: TestTube,
  };

  // Group skills by category
  const skillCategories = data?.skills ? 
    Object.entries(
      data.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
      }, {} as Record<string, string[]>)
    ).map(([category, skills]) => ({
      title: category,
      icon: category,
      skills
    })) : [
    {
      title: "Programming Languages",
      icon: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      title: "Frameworks",
      icon: "Frameworks", 
      skills: ["React", "Node.js", "Express", "Next.js"]
    },
    {
      title: "Databases",
      icon: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Tools",
      icon: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = IconMap[category.icon] || Code;
              return (
                <Card key={index} className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${(index % 3) + 1} transition-all duration-300 group`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="w-6 h-6" />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;