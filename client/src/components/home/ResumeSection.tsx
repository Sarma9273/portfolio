import { Download, BookOpen, Bolt, Folder, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getResumeData } from "@/lib/resume";

const ResumeSection = () => {
  const resumeData = getResumeData();
  
  return (
    <section id="resume" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Resume<span className="text-blue-500">_&_CV</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg overflow-hidden border border-border">
            {/* Resume Header */}
            <div className="p-6 md:p-8 border-b border-border">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <h3 className="font-mono text-2xl font-bold text-primary">{resumeData.name}</h3>
                  <p className="text-muted-foreground mt-1">{resumeData.title}</p>
                </div>
                <Button className="inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
            
            {/* Resume Preview */}
            <div className="p-6 md:p-8">
              {/* Education Section */}
              <div className="mb-8">
                <h4 className="font-mono text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="mr-2 text-blue-500 h-5 w-5" /> Education
                </h4>
                <div className="border-l-2 border-border pl-5 space-y-5">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-1">
                        <h5 className="font-semibold">{edu.degree}</h5>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{edu.institution}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-8">
                <h4 className="font-mono text-xl font-semibold mb-4 flex items-center">
                  <Bolt className="mr-2 text-blue-500 h-5 w-5" /> Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index}>
                      <h5 className="font-semibold mb-2">{skill.category}</h5>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {skill.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Projects Section */}
              <div className="mb-8">
                <h4 className="font-mono text-xl font-semibold mb-4 flex items-center">
                  <Folder className="mr-2 text-blue-500 h-5 w-5" /> Projects
                </h4>
                <div className="border-l-2 border-border pl-5 space-y-5">
                  {resumeData.projects.map((project, index) => (
                    <div key={index}>
                      <h5 className="font-semibold mb-1">{project.title}</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications & Training */}
              <div>
                <h4 className="font-mono text-xl font-semibold mb-4 flex items-center">
                  <Award className="mr-2 text-blue-500 h-5 w-5" /> Certifications & Training
                </h4>
                <div className="border-l-2 border-border pl-5 space-y-5">
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index}>
                      <h5 className="font-semibold mb-1">{cert.name}</h5>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer} | {cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Resume Download Options */}
          <div className="mt-8 p-6 bg-muted rounded-lg border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-mono text-lg font-semibold mb-1">Download My Resume</h4>
              <p className="text-sm text-muted-foreground">Available in multiple formats for your convenience</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" /> PDF
              </Button>
              <Button variant="outline" className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" /> DOCX
              </Button>
              <Button className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" /> All Formats
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
