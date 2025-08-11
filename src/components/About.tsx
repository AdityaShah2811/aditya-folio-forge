import { Card } from "@/components/ui/card";
import { Code2, Database, TestTube, Cloud } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";

const About = () => {
  const { data } = useProfile();

  const IconMap = { Code2, Database, TestTube, Cloud } as const;

  const fallbackHighlights = [
    { icon: "Code2", text: "2+ years in test automation", color: "text-blue-400" },
    { icon: "TestTube", text: "40% testing time reduction", color: "text-green-400" },
    { icon: "Database", text: "10,000+ users platform experience", color: "text-purple-400" },
    { icon: "Cloud", text: "Pursuing AWS certification", color: "text-orange-400" }
  ];

  const highlights = fallbackHighlights;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <Card className="p-8 shadow-card border-border/50 hover-lift animate-on-scroll stagger-1 bg-card/50 backdrop-blur-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {data.personalInfo.bio.long}
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {highlights.map((item: any, index: number) => {
                  const IconComp = IconMap[item.icon as keyof typeof IconMap] ?? Code2;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group">
                      <IconComp className={`w-8 h-8 mx-auto mb-2 ${item.color ?? ''} group-hover:scale-110 transition-transform`} />
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;