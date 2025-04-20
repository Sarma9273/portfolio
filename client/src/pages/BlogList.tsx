import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";

const BlogList = () => {
  const [, setLocation] = useLocation();
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });
  
  // Get unique categories
  const categories = posts 
    ? ["All", ...new Set(posts.map(post => post.category))]
    : ["All"];
  
  // Filter posts by category
  const filteredPosts = posts 
    ? currentCategory === "All" 
      ? posts 
      : posts.filter(post => post.category === currentCategory)
    : [];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button 
                variant="ghost" 
                onClick={() => setLocation("/")} 
                className="-ml-2 hover:bg-transparent hover:text-primary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Button>
              <h1 className="text-3xl font-bold mt-4">Blog Posts</h1>
              <p className="text-muted-foreground mt-2">
                Insights and learnings from my cybersecurity journey
              </p>
            </div>
            
            {/* Category filter */}
            <div className="w-[180px]">
              <Select 
                value={currentCategory} 
                onValueChange={setCurrentCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Blog posts grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg overflow-hidden border border-border">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5 space-y-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-6">
                There are no posts available in this category yet.
              </p>
              {currentCategory !== "All" && (
                <Button onClick={() => setCurrentCategory("All")}>
                  View all posts
                </Button>
              )}
            </div>
          )}
          
          {/* Pagination (for future) */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <Button variant="outline" disabled className="mr-2">
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" disabled className="ml-2">
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogList;
