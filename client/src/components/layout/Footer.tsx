import { Link } from "wouter";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center group mb-4">
              <span className="font-mono text-primary font-bold text-xl">&lt;/&gt;</span>
              <span className="ml-2 font-mono font-semibold text-lg">John<span className="text-blue-500">_Doe</span></span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              A cybersecurity enthusiast documenting my journey from beginner to professional. Join me as I learn, grow, and explore the cybersecurity landscape.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition duration-200" aria-label="LinkedIn">
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
          
          <div>
            <h3 className="font-mono font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">Projects</button></li>
              <li><button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">Blog</button></li>
              <li><button onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">Resume</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition duration-200">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono font-semibold text-lg mb-4">Learning Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition duration-200">TryHackMe</a></li>
              <li><a href="https://hackthebox.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition duration-200">HackTheBox</a></li>
              <li><a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition duration-200">PortSwigger Academy</a></li>
              <li><a href="https://pentesterlab.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition duration-200">PentesterLab</a></li>
              <li><a href="https://owasp.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition duration-200">OWASP</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <div className="text-muted-foreground text-sm">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Learning & Growing in Cybersecurity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
