import { BookOpen, Target, Lightbulb, ArrowRight } from "lucide-react";
import Terminal from "./Terminal";

const AboutSection = () => {
  const terminalCommands = [
    {
      command: "whoami",
      output: "I'm a cybersecurity enthusiast at the beginning of my journey. My background in IT sparked my interest in security, and I'm deeply fascinated by how systems can be both protected and compromised."
    },
    {
      command: "cat interests.txt",
      output: `
<ul class="list-disc list-inside space-y-1">
  <li>Network Security & Penetration Testing</li>
  <li>Security Operations Center (SOC) Monitoring</li>
  <li>Vulnerability Assessment</li>
  <li>Digital Forensics</li>
  <li>Ethical Hacking</li>
</ul>
      `
    },
    {
      command: "cat journey.txt",
      output: "Currently building foundational knowledge through online courses, capture-the-flag challenges, and hands-on lab environments. I'm eager to connect with mentors and fellow learners in the cybersecurity community."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">About<span className="text-blue-500">_Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Terminal title="about.sh" commands={terminalCommands} />
          </div>
          
          <div className="space-y-6">
            <h3 className="font-mono text-2xl font-bold text-blue-500">My Journey</h3>
            <p className="text-muted-foreground">
              I'm currently focused on building a strong foundation in cybersecurity fundamentals through structured learning and practical experiences. Though I'm early in my journey, I'm committed to continuous improvement and growth in this field.
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="bg-primary p-2 rounded mr-4">
                    <BookOpen className="text-background text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Learning Path</h4>
                    <p className="text-muted-foreground text-sm">CompTIA Security+, Web Application Security, Network Defense</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-2 rounded mr-4">
                    <Target className="text-background text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Short-term Goals</h4>
                    <p className="text-muted-foreground text-sm">Complete CTF challenges, build a home lab, gain certifications</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="flex items-center">
                  <div className="bg-purple-500 p-2 rounded mr-4">
                    <Lightbulb className="text-background text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Philosophy</h4>
                    <p className="text-muted-foreground text-sm">Security is a mindset, not just a skill set. Ethical principles guide my approach.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary hover:underline mt-4"
            >
              Let's connect and learn together <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
