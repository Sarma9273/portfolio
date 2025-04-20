import { ResumeData } from "./types";

export function getResumeData(): ResumeData {
  return {
    name: "John Doe",
    title: "Cybersecurity Enthusiast | Beginner Security Analyst",
    education: [
      {
        degree: "BSc in Computer Science",
        institution: "University of Technology",
        period: "2018 - 2022",
        description: "Core focus on programming fundamentals, networking, databases, and basic security principles."
      },
      {
        degree: "Introduction to Cybersecurity",
        institution: "Coursera",
        period: "2023",
        description: "Online certification covering cybersecurity fundamentals, threats, and basic defense strategies."
      }
    ],
    skills: [
      {
        category: "Languages & Technologies",
        items: [
          "Python, Bash Scripting (Basic)",
          "HTML, CSS, JavaScript",
          "SQL Fundamentals",
          "Linux Command Line"
        ]
      },
      {
        category: "Security Tools & Concepts",
        items: [
          "Network Scanning (Nmap)",
          "Vulnerability Assessment (Basic)",
          "Kali Linux (Beginner Level)",
          "Wireshark (Traffic Analysis)"
        ]
      },
      {
        category: "General IT Skills",
        items: [
          "Networking Fundamentals",
          "Operating Systems (Windows, Linux)",
          "Virtual Machines",
          "Version Control (Git)"
        ]
      },
      {
        category: "Learning In Progress",
        items: [
          "Penetration Testing Methodologies",
          "Security Operations Center (SOC) Concepts",
          "OWASP Top 10 Vulnerabilities",
          "Incident Response"
        ]
      }
    ],
    projects: [
      {
        title: "Simple Network Scanner Tool",
        description: "A Python-based tool for discovering active hosts and open ports on a local network. Built to understand networking concepts and Python scripting for security purposes."
      },
      {
        title: "Password Strength Analyzer",
        description: "Web application that evaluates password strength using multiple criteria including length, complexity, and common patterns to help users create more secure passwords."
      },
      {
        title: "Security Homelab Setup",
        description: "Personal project documenting the creation of a virtual security lab environment with VirtualBox, including Kali Linux and vulnerable machines for practice."
      }
    ],
    certifications: [
      {
        name: "Introduction to Cybersecurity",
        issuer: "Coursera",
        date: "2023"
      },
      {
        name: "CompTIA Security+ (In Progress)",
        issuer: "CompTIA",
        date: "Expected Completion: 2024"
      },
      {
        name: "Practical Ethical Hacking Course",
        issuer: "Udemy",
        date: "2023"
      }
    ]
  };
}
