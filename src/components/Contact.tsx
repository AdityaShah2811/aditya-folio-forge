import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactCards = [
    { icon: Mail, title: "Email", value: "justaditya1@gmail.com" },
    { icon: Phone, title: "Phone", value: "+91 83699 82811" },
    { icon: MapPin, title: "Location", value: "Mumbai, Maharashtra, India" }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always interested in discussing new opportunities and innovative projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <Card key={index} className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300 group`}>
                <div className="p-3 bg-primary/10 rounded-lg text-primary mx-auto w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.value}</p>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 animate-on-scroll stagger-3">
            <Button variant="hero" size="lg" className="pulse-on-hover">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button variant="elegant" size="lg" className="hover-lift">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="elegant" size="lg" className="hover-lift">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;