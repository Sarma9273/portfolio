import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  iconBgClass: string;
  skills: {
    name: string;
    level: number;
  }[];
  skillColor: string;
  tools: string[];
  toolBgClass: string;
  toolTextClass: string;
}

export const SkillCard = ({
  title,
  icon,
  iconBgClass,
  skills,
  skillColor,
  tools,
  toolBgClass,
  toolTextClass,
}: SkillCardProps) => {
  return (
    <div className="bg-background rounded-lg border border-border overflow-hidden transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 ${iconBgClass} rounded-md flex items-center justify-center mr-3`}>
            {icon}
          </div>
          <h3 className="font-mono text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <div className={`w-2 h-2 ${skillColor} rounded-full mr-2`}></div>
              <span className="text-muted-foreground">{skill.name}</span>
              <div className="ml-auto">
                <div className="w-24 h-1.5 bg-muted rounded-full">
                  <div 
                    className={`h-full ${skillColor} rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-5 border-t border-border pt-4">
          <h4 className="font-mono text-sm font-semibold mb-3">Tools Exploring:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className={`inline-block px-2 py-1 text-xs ${toolBgClass} ${toolTextClass} rounded`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
