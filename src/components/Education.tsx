import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "Bachelor of Technology",
      field: "Electronics Engineering",
      period: "2020 - 2023",
      type: "Undergraduate"
    },
    {
      institution: "Shri Bhagubhai Mafatlal Polytechnic",
      degree: "Diploma",
      field: "Digital Electronics",
      period: "2017 - 2020",
      type: "Diploma"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-on-scroll">{" "}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300 group`}>{" "}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 mt-2 md:mt-0">
                        <Badge variant="secondary">{edu.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;