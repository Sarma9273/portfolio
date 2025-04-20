import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Cybersecurity Enthusiast", "SOC Beginner", "VAPT Learner", "Security Analyst"];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting && charIndex === 0 ? 300 : // Pause before next phrase
                          !isDeleting && charIndex === phrases[phraseIndex].length ? 1000 : // Pause at end of phrase
                          typingSpeed;
                          
    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setTypedText(phrases[phraseIndex].substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        // If delete is complete, move to next phrase
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } 
      // If typing
      else {
        setTypedText(phrases[phraseIndex].substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        // If phrase is complete, start deleting after pause
        if (charIndex === phrases[phraseIndex].length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, pauseDuration);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);
  
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 md:pt-36 px-4 flex items-center bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted border border-primary/20 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-muted-foreground">Learning Cybersecurity</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight">
              Hi, I'm <span className="text-primary">John Doe</span>
              <div className="mt-3 text-foreground h-9 flex items-center">
                {typedText}
                <span className="ml-1 w-2 h-5 bg-primary animate-blink inline-block"></span>
              </div>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              A passionate beginner exploring the world of cybersecurity. Focused on learning both offensive and defensive security techniques, VAPT, and SOC operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-muted hover:border-primary/80"
              >
                View My Work
              </Button>
            </div>
            <div className="flex items-center space-x-4 mt-6 pt-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-blue-500 transition duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition duration-200" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[#25D366] transition duration-200" aria-label="WhatsApp">
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[#EA4335] transition duration-200" aria-label="Gmail">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-muted py-2 px-4 rounded-lg border border-muted">
                <code className="font-mono text-primary text-sm">
                  {"while(true) { learn(); }"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
