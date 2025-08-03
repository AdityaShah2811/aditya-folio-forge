import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Coffee, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactCards = [
    { 
      icon: Mail, 
      title: "Email", 
      value: "shah.aditya@northeastern.edu",
      action: () => window.open("mailto:shah.aditya@northeastern.edu", "_self")
    },
    { 
      icon: Phone, 
      title: "Phone", 
      value: "+1(857) 234-7211",
      action: () => window.open("tel:+18572347211", "_self")
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: "Boston, MA",
      action: () => window.open("https://maps.google.com/?q=Boston,MA", "_blank")
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/adityashah",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/justaditya1",
      color: "hover:text-blue-600"
    }
  ];

  const sendEmail = () => {
    const subject = "Let's Connect!";
    const body = "Hi Aditya,\n\nI came across your portfolio and would love to connect.\n\nBest regards,";
    window.open(`mailto:shah.aditya@northeastern.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations.
            Currently seeking entry-level DevOps/Cloud Engineering roles.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <Card 
                key={index} 
                className={`p-6 shadow-card border-border/50 hover-lift animate-on-scroll stagger-${index + 1} transition-all duration-300 group cursor-pointer bg-card/50 backdrop-blur-sm`}
                onClick={card.action}
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary mx-auto w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">{card.value}</p>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-on-scroll stagger-4">
            <Button 
              variant="default" 
              size="lg" 
              className="pulse-on-hover hover-lift"
              onClick={sendEmail}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift"
              onClick={() => window.open("https://calendly.com/adityashah", "_blank")}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Schedule a Chat
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-on-scroll stagger-5">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, "_blank")}
                className={`p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color} group`}
                title={`Visit my ${social.name}`}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            ))}
          </div>

          {/* Easter egg */}
          <div className="mt-8 text-xs text-muted-foreground/50 animate-on-scroll stagger-6">
            <p>💡 Tip: Check the browser console for hidden commands!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;