import { Project } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden group">
      <div className="h-48 bg-background/50 relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-3 right-3 bg-background/80 text-xs text-primary py-1 px-2 rounded">
          {project.status}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-mono text-lg font-semibold mb-2 group-hover:text-primary transition duration-200">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, i) => (
            <span key={i} className="text-xs bg-background text-blue-500 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-1 border-t border-border">
          <Link href={`/projects/${project.slug}`} className="text-primary text-sm hover:underline">
            View Details
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-blue-500">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
