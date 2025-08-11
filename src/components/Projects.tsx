import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder, Star } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";

const Projects = () => {
  const { data } = useProfile();

  const projects = data.projects || [];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`p-8 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300 group bg-card/50 backdrop-blur-sm`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Folder className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                        <p className="text-lg text-primary font-medium">{project.subtitle}</p>
                      </div>
                      {project.isFeatured && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="text-sm font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="p-2 bg-muted/50 rounded">
                        <div className="font-bold text-primary text-sm">{value as string}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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

export default Projects;