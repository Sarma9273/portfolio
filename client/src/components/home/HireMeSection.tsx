import { Server, Code, UserCog, Check, Book, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireMeSection = () => {
  const services = [
    {
      icon: <Server className="text-primary text-2xl" />,
      iconBg: "bg-primary/10",
      title: "Basic Security Assessment",
      description: "I can help identify basic security vulnerabilities in your website or application, with a focus on common issues from the OWASP Top 10.",
      features: [
        "Simple vulnerability scanning",
        "Basic security configuration review",
        "Web application security assessment"
      ],
      color: "text-primary"
    },
    {
      icon: <Code className="text-blue-500 text-2xl" />,
      iconBg: "bg-blue-500/10",
      title: "Security-Focused Development",
      description: "I can assist with implementing security best practices in your web applications and development projects.",
      features: [
        "Secure coding practices",
        "Input validation implementation",
        "Security-focused code review"
      ],
      color: "text-blue-500"
    },
    {
      icon: <UserCog className="text-purple-500 text-2xl" />,
      iconBg: "bg-purple-500/10",
      title: "Security Awareness Training",
      description: "I can help educate your team on basic cybersecurity awareness and best practices to improve your security posture.",
      features: [
        "Password security workshops",
        "Phishing awareness training",
        "Basic security best practices"
      ],
      color: "text-purple-500"
    }
  ];
  
  const qualities = [
    {
      icon: <Book className="text-primary" />,
      iconBg: "bg-primary/10",
      title: "Continuous Learner",
      description: "I'm constantly expanding my knowledge and skills through courses, labs, and self-study."
    },
    {
      icon: <Code className="text-blue-500" />,
      iconBg: "bg-blue-500/10",
      title: "Technical Background",
      description: "My foundation in programming and IT provides a solid technical understanding to build upon."
    },
    {
      icon: <Users className="text-purple-500" />,
      iconBg: "bg-purple-500/10",
      title: "Collaborative Approach",
      description: "I'm honest about my skill level and eager to work with others to deliver value while growing."
    },
    {
      icon: <Eye className="text-primary" />,
      iconBg: "bg-primary/10",
      title: "Fresh Perspective",
      description: "My beginner mindset allows me to see problems from different angles and ask valuable questions."
    }
  ];
  
  const opportunities = [
    {
      title: "Entry-Level Positions",
      color: "text-primary",
      description: "Junior security analyst, SOC trainee, or similar entry-level roles where I can contribute while learning."
    },
    {
      title: "Internships",
      color: "text-blue-500",
      description: "Security-focused internships that provide hands-on experience and professional mentorship."
    },
    {
      title: "Freelance Projects",
      color: "text-purple-500",
      description: "Small security assessment or improvement projects where I can apply and expand my knowledge."
    },
    {
      title: "Collaborative Learning",
      color: "text-primary",
      description: "Open to joining CTF teams, study groups, or collaborative security projects with fellow learners."
    }
  ];
  
  return (
    <section id="hire" className="py-16 md:py-24 px-4 bg-muted relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-muted"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwRjE3MkEiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIxIiBmaWxsPSIjMTBCOTgxIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMTBCOTgxIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMSIgZmlsbD0iIzEwQjk4MSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Hire<span className="text-primary">_Me</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            While I'm early in my cybersecurity journey, I'm eager to contribute, learn, and grow. Here are ways we can work together:
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition duration-200">
              <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`${service.color} h-4 w-4 mt-0.5 mr-2`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="link" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`p-0 ${service.color} hover:underline`}
              >
                Inquire Now →
              </Button>
            </div>
          ))}
        </div>
        
        {/* Why Hire Me */}
        <div className="bg-background rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="font-mono text-2xl font-bold mb-4">Why Work With Me?</h3>
              <p className="text-muted-foreground mb-6">
                While I'm a beginner in the cybersecurity field, I bring valuable qualities to any collaboration:
              </p>
              <ul className="space-y-4">
                {qualities.map((quality, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-8 h-8 ${quality.iconBg} rounded-full flex items-center justify-center mr-3 mt-0.5`}>
                      {quality.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{quality.title}</h4>
                      <p className="text-sm text-muted-foreground">{quality.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted p-6 md:p-8 lg:border-l border-border">
              <h3 className="font-mono text-2xl font-bold mb-4">Looking For</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently seeking opportunities that will help me grow in the cybersecurity field:
              </p>
              <div className="space-y-4">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="bg-background/50 rounded-lg p-4 hover:bg-background/70 transition duration-200">
                    <h4 className={`font-semibold ${opportunity.color} mb-2`}>{opportunity.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {opportunity.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-2"
                  size="lg"
                >
                  Let's Discuss Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
