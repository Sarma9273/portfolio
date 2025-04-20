import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSection = () => {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });
  
  const ctfChallenges = [
    {
      name: "PicoCTF",
      category: "Web Exploitation",
      skills: "SQL Injection, XSS",
      status: "Completed",
      statusClass: "bg-primary/20 text-primary"
    },
    {
      name: "TryHackMe",
      category: "Beginner Path",
      skills: "Reconnaissance, Basic Exploitation",
      status: "In Progress",
      statusClass: "bg-blue-500/20 text-blue-500"
    },
    {
      name: "HackTheBox",
      category: "Starting Point",
      skills: "Network Scanning, Vulnerability Analysis",
      status: "Planned",
      statusClass: "bg-muted-foreground/20 text-muted-foreground"
    }
  ];
  
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Projects<span className="text-blue-500">_&_Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            As I'm starting my cybersecurity journey, I'm building projects to develop practical skills and demonstrate my learning. This is where I'll showcase my growing portfolio.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-muted rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Project cards
            projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
        
        {/* CTF Challenges Section */}
        <div className="mt-16 p-6 bg-muted rounded-lg border border-border">
          <h3 className="font-mono text-xl font-bold mb-5">CTF Challenge Participation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left">Challenge</th>
                  <th className="pb-3 text-left">Category</th>
                  <th className="pb-3 text-left">Skills Practiced</th>
                  <th className="pb-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {ctfChallenges.map((challenge, index) => (
                  <tr key={index} className={index < ctfChallenges.length - 1 ? "border-b border-border/50" : ""}>
                    <td className="py-3 text-primary">{challenge.name}</td>
                    <td>{challenge.category}</td>
                    <td>{challenge.skills}</td>
                    <td>
                      <span className={`text-xs ${challenge.statusClass} px-2 py-1 rounded`}>
                        {challenge.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Coming Soon Projects */}
        <div className="mt-12 text-center">
          <h3 className="font-mono text-xl font-semibold mb-4">Coming Soon</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm currently working on several new projects that will be added here as they develop. Stay tuned for more!
          </p>
          <Button
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center"
          >
            Have a project idea? <span className="text-primary ml-1">Let's discuss</span> <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
