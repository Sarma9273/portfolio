import { 
  Sword, 
  Shield, 
  CodeSquare 
} from "lucide-react";
import { SkillCard } from "@/components/ui/skill-card";

const SkillsSection = () => {
  const offensiveSkills = [
    { name: "Penetration Testing Basics", level: 33 },
    { name: "Vulnerability Scanning", level: 50 },
    { name: "Web App Security", level: 25 },
    { name: "OWASP Top 10", level: 40 }
  ];
  
  const defensiveSkills = [
    { name: "Security Monitoring", level: 40 },
    { name: "Incident Response", level: 25 },
    { name: "Firewall Management", level: 33 },
    { name: "Log Analysis", level: 40 }
  ];
  
  const coreSkills = [
    { name: "Linux Fundamentals", level: 60 },
    { name: "Networking Basics", level: 50 },
    { name: "Python Scripting", level: 40 },
    { name: "Cryptography", level: 33 }
  ];
  
  const offensiveTools = ["Metasploit", "Burp Suite", "Nmap", "OWASP ZAP"];
  const defensiveTools = ["Splunk", "Snort", "Wireshark", "pfSense"];
  const coreTools = ["Bash", "Python", "TCP/IP", "VM/VirtualBox"];
  
  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Skills<span className="text-primary">_&_Tools</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            As a beginner, I'm actively developing these skills and gaining familiarity with essential cybersecurity tools. This represents both my current knowledge and learning interests.
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offensive Security */}
          <SkillCard 
            title="Offensive Security"
            icon={<Sword className="text-red-500 text-xl" />}
            iconBgClass="bg-red-500/10"
            skills={offensiveSkills}
            skillColor="bg-red-500"
            tools={offensiveTools}
            toolBgClass="bg-muted"
            toolTextClass="text-red-400"
          />
          
          {/* Defensive Security */}
          <SkillCard 
            title="Defensive Security"
            icon={<Shield className="text-blue-500 text-xl" />}
            iconBgClass="bg-blue-500/10"
            skills={defensiveSkills}
            skillColor="bg-blue-500"
            tools={defensiveTools}
            toolBgClass="bg-muted"
            toolTextClass="text-blue-400"
          />
          
          {/* Core Skills */}
          <SkillCard 
            title="Core Skills"
            icon={<CodeSquare className="text-green-500 text-xl" />}
            iconBgClass="bg-green-500/10"
            skills={coreSkills}
            skillColor="bg-green-500"
            tools={coreTools}
            toolBgClass="bg-muted"
            toolTextClass="text-green-400"
          />
        </div>
        
        {/* Learning Progress */}
        <div className="mt-14 bg-background rounded-lg border border-border p-6">
          <h3 className="font-mono text-xl font-semibold mb-5">Learning Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CompTIA Security+</span>
                <span className="text-primary">30%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="w-[30%] h-full bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Web Application Security</span>
                <span className="text-blue-500">25%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Network Defense</span>
                <span className="text-purple-500">20%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="w-1/5 h-full bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
