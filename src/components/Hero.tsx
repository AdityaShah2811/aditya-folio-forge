import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Github, Linkedin, ChevronDown, Terminal, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useProfile } from "@/context/ProfileContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const codeText = "const developer = new SoftwareEngineer('Aditya Shah');";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let i = 0;
    const typing = setInterval(() => {
      if (i < codeText.length) {
        setTypedText(codeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    // Cursor blinking
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════╗
    ║  🚀 Welcome to Aditya's Portfolio!   ║
    ║  Type 'help()' for hidden commands   ║
    ╚══════════════════════════════════════╝
    `);
    
    // Add global functions for easter eggs
    (window as any).help = () => {
      console.log(`
      Available commands:
      - konami() - Enter the Konami code
      - skills() - List technical skills
      - experience() - Show work experience
      - contact() - Get contact information
      - matrix() - Enable matrix mode
      `);
    };
    
    (window as any).skills = () => {
      console.log("Skills: Python, JavaScript, Java, Node.js, AWS, Docker, MongoDB, Git");
    };
    
    (window as any).contact = () => {
      console.log("📧 shah.aditya@northeastern.edu | 📱 +1(857) 234-7211 | 📍 Boston, MA");
    };

    return () => {
      clearInterval(typing);
      clearInterval(cursorBlink);
    };
  }, []);

  const { data } = useProfile();

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    if (!data) return;
    
    const resumeText = `
${data.personalInfo.fullName}
${data.personalInfo.professionalTitle}
${data.personalInfo.email} | ${data.personalInfo.phone}
${data.personalInfo.location.city}, ${data.personalInfo.location.state}

SUMMARY
${data.personalInfo.bio.short}

EXPERIENCE
${data.experience.map(exp => `
${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate || 'Present'})
${exp.location}
${exp.achievements.map(a => a.text).join('\n')}`).join('\n\n')}

EDUCATION
${data.education.map(edu => `
${edu.degree} in ${edu.fieldOfStudy}
${edu.institution} (${edu.startDate} - ${edu.endDate || 'Present'})`).join('\n\n')}

SKILLS
${data.skills.map(skill => skill.name).join(', ')}
    `;
    
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aditya_Shah_Resume.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden pt-20">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-foreground rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary-foreground rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Code snippets floating */}
        <div className="absolute top-32 right-32 text-primary-foreground/20 text-sm font-mono animate-float" style={{animationDelay: '0.5s'}}>
          {"{ developer: 'passionate' }"}
        </div>
        <div className="absolute bottom-32 left-32 text-primary-foreground/20 text-sm font-mono animate-float" style={{animationDelay: '1.5s'}}>
          {"console.log('Hello World!');"}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">{data.personalInfo.fullName}</span>
          </h1>
          
          <div className="mb-8">
            <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white">
              <Code2 className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium">{data.personalInfo.professionalTitle}</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            {data.personalInfo.headline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span>{data.personalInfo.location.city}, {data.personalInfo.location.state}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Phone className="w-4 h-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover-lift pulse-on-hover"
              onClick={handleResumeDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white hover-lift"
              onClick={() => window.open(data.socialLinks.find(s => s.platform === 'GitHub')?.url || '#', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white hover-lift"
              onClick={() => window.open(data.socialLinks.find(s => s.platform === 'LinkedIn')?.url || '#', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <button 
            onClick={scrollToNext}
            className="hover:scale-110 transition-transform p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm group"
          >
            <ChevronDown className="w-4 h-4 text-primary-foreground group-hover:text-primary transition-colors animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;