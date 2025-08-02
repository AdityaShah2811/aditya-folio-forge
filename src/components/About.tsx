import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">{" "}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-on-scroll">{" "}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <Card className="p-8 shadow-card border-border/50 hover-lift animate-on-scroll stagger-1">{" "}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Backend Software Engineer Intern with hands-on experience in data-driven product 
                development and solid proficiency in JavaScript, ES5/6, and CSS. I have demonstrated 
                the ability to enhance product quality and performance through automated testing and 
                debugging, achieving a <span className="font-semibold text-primary">95% bug detection rate</span> in previous roles.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Experienced in collaborating with cross-functional teams to build robust, scalable 
                solutions that improve deployment efficiency and system stability. My passion lies 
                in creating innovative IoT solutions and building systems that make a real impact 
                on users' lives.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;