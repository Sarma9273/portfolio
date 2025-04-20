import { 
  users, type User, type InsertUser, 
  type BlogPost, type InsertBlogPost, 
  type Project, type InsertProject,
  type ContactMessage, type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog post methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getFeaturedBlogPost(): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private projects: Map<number, Project>;
  private contactMessages: Map<number, ContactMessage>;
  private userCurrentId: number;
  private blogPostCurrentId: number;
  private projectCurrentId: number;
  private contactMessageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    this.contactMessages = new Map();
    this.userCurrentId = 1;
    this.blogPostCurrentId = 1;
    this.projectCurrentId = 1;
    this.contactMessageCurrentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Add sample blog posts
    const blogPosts: InsertBlogPost[] = [
      {
        title: "My Journey into Cybersecurity: First Steps and Lessons",
        slug: "my-journey-into-cybersecurity",
        excerpt: "Starting from zero in cybersecurity can be overwhelming. In this post, I share my initial experiences, learning resources, and how I'm building foundational knowledge as a complete beginner.",
        content: `
# My Journey into Cybersecurity

Starting from zero in cybersecurity can be overwhelming. In this post, I share my initial experiences, learning resources, and how I'm building foundational knowledge as a complete beginner.

## Why I Chose Cybersecurity

My fascination with cybersecurity began when I read about various data breaches in the news. The idea that vulnerabilities in systems could lead to massive data losses intrigued me, and I wanted to understand both how these breaches happen and how they can be prevented.

## First Steps

My journey began with basic courses on cybersecurity fundamentals. I started with:

1. Understanding networking basics
2. Learning Linux command line
3. Exploring basic security concepts

## Resources That Helped Me

These resources have been invaluable in my learning journey:

- TryHackMe's beginner paths
- CompTIA Security+ study materials
- YouTube channels like NetworkChuck and John Hammond
- Reddit communities like r/cybersecurity and r/netsec

## Challenges As A Beginner

The biggest challenges I've faced include:

- The vast amount of information can be overwhelming
- Understanding where to start
- Building practical skills alongside theoretical knowledge

## What's Next

I'm currently working toward:

- Completing my first CTF challenges
- Building a home lab for practice
- Working toward the Security+ certification

Stay tuned for more updates on my cybersecurity journey!
        `,
        publishedDate: new Date("2023-10-15"),
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        readTime: 8,
        category: "Learning Path",
        featured: true
      },
      {
        title: "Understanding Vulnerability Scanners: A Beginner's Guide",
        slug: "understanding-vulnerability-scanners",
        excerpt: "An exploration of basic vulnerability scanning tools, how they work, and why they're essential for security assessments.",
        content: "Content for Understanding Vulnerability Scanners article...",
        publishedDate: new Date("2023-10-02"),
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        readTime: 5,
        category: "Tools & Technology",
        featured: false
      },
      {
        title: "Setting Up My First Kali Linux Environment",
        slug: "setting-up-kali-linux",
        excerpt: "A step-by-step guide on how I installed and configured Kali Linux in a virtual machine for security testing.",
        content: "Content for Setting Up Kali Linux article...",
        publishedDate: new Date("2023-09-18"),
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        readTime: 7,
        category: "Tools & Technology",
        featured: false
      },
      {
        title: "Top 5 Learning Resources for Cybersecurity Beginners",
        slug: "top-learning-resources",
        excerpt: "My review of the most helpful websites, courses, and platforms that have helped me start learning cybersecurity.",
        content: "Content for Top 5 Learning Resources article...",
        publishedDate: new Date("2023-09-05"),
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        readTime: 6,
        category: "Learning Resources",
        featured: false
      }
    ];
    
    blogPosts.forEach(post => this.createBlogPost(post));
    
    // Add sample projects
    const projects: InsertProject[] = [
      {
        title: "Simple Network Scanner",
        slug: "network-scanner",
        description: "A Python tool that scans local networks to discover active hosts and open ports. Built to learn network basics and Python scripting.",
        imageUrl: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80",
        status: "In Progress",
        githubUrl: "https://github.com",
        demoUrl: "",
        skills: ["Python", "Networking", "Beginner"]
      },
      {
        title: "Password Strength Analyzer",
        slug: "password-analyzer",
        description: "A web application that assesses password strength based on multiple factors including length, complexity, and common patterns.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        status: "Completed",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com",
        skills: ["HTML/CSS", "JavaScript", "Security"]
      },
      {
        title: "Security Homelab Setup",
        slug: "security-homelab",
        description: "Documentation of my personal security lab environment built with VirtualBox, featuring various vulnerable machines for practice.",
        imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80",
        status: "Ongoing",
        githubUrl: "https://github.com",
        demoUrl: "",
        skills: ["VirtualBox", "Kali Linux", "Lab Setup"]
      }
    ];
    
    projects.forEach(project => this.createProject(project));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
    );
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async getFeaturedBlogPost(): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.featured === true
    );
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const post: BlogPost = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }
  
  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return Array.from(this.projects.values()).find(
      (project) => project.slug === slug
    );
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectCurrentId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
  
  // Contact methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
