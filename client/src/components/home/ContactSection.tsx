import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Terminal from "./Terminal";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };
  
  const terminalCommands = [
    {
      command: "cat contact_info.txt",
      output: `
<div class="mb-4">
  <p class="text-primary mb-1">// Email</p>
  <p class="pl-4">john.doe@example.com</p>
</div>
<div class="mb-4">
  <p class="text-primary mb-1">// Location</p>
  <p class="pl-4">San Francisco, CA (Open to Remote)</p>
</div>
<div>
  <p class="text-primary mb-1">// Response Time</p>
  <p class="pl-4">Usually within 24-48 hours</p>
</div>
      `
    },
    {
      command: "./connect.sh",
      output: ""
    }
  ];
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Contact<span className="text-blue-500">_Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just connecting with fellow cybersecurity enthusiasts. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-muted rounded-lg border border-border p-6 md:p-8">
            <h3 className="font-mono text-xl font-semibold mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={6} 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  size="lg"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Terminal-like Info Box */}
            <Terminal title="contact.sh" commands={terminalCommands} />
            
            {/* Social Connect Box */}
            <div className="bg-muted rounded-lg border border-border p-6">
              <h3 className="font-mono text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="flex items-center p-3 bg-background rounded-lg hover:bg-background/80 transition duration-200">
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mr-3">
                    <Linkedin className="text-[#0A66C2]" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-background rounded-lg hover:bg-background/80 transition duration-200">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-3">
                    <Send className="text-[#25D366]" />
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-background rounded-lg hover:bg-background/80 transition duration-200">
                  <div className="w-10 h-10 rounded-full bg-[#333]/10 flex items-center justify-center mr-3">
                    <Github className="text-foreground" />
                  </div>
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-background rounded-lg hover:bg-background/80 transition duration-200">
                  <div className="w-10 h-10 rounded-full bg-[#EA4335]/10 flex items-center justify-center mr-3">
                    <Mail className="text-[#EA4335]" />
                  </div>
                  <span>Gmail</span>
                </a>
              </div>
            </div>
            
            {/* FAQ Box */}
            <div className="bg-muted rounded-lg border border-border p-6">
              <h3 className="font-mono text-xl font-semibold mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Are you available for remote work?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, I'm available for remote opportunities and collaborations worldwide.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Can you help with advanced security issues?</h4>
                  <p className="text-sm text-muted-foreground">
                    As a beginner, I focus on fundamental security practices. For advanced issues, I can collaborate with more experienced professionals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Do you offer mentorship or training?</h4>
                  <p className="text-sm text-muted-foreground">
                    I can provide basic security awareness training for non-technical teams, but I'm currently seeking mentorship myself as I grow in this field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
