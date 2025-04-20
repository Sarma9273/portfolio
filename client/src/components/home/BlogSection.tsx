import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BlogPost } from "@/lib/types";
import { Button } from "@/components/ui/button";
import FeaturedBlogPost from "../blog/FeaturedBlogPost";
import BlogCard from "../blog/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSection = () => {
  const { data: featuredPost, isLoading: isFeaturedLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog/featured"],
  });
  
  const { data: posts, isLoading: isPostsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });
  
  // Filter out the featured post and take the first 3 posts
  const recentPosts = posts?.filter(post => !post.featured).slice(0, 3);
  
  const categories = ["Learning Resources", "Tools & Technology", "Security Concepts", "Hands-On Labs", "CTF Experiences"];
  
  return (
    <section id="blog" className="py-16 md:py-24 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">Blog<span className="text-primary">_Posts</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I document my learning journey and share insights about cybersecurity topics. These posts reflect my growth and understanding as I explore this field.
          </p>
        </div>
        
        {/* Featured Blog Post */}
        {isFeaturedLoading ? (
          <div className="bg-background rounded-lg overflow-hidden border border-border mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Skeleton className="h-64 md:h-96 w-full" />
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-24 w-full" />
                <div className="flex flex-wrap gap-2 mb-5">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-8 w-40" />
              </div>
            </div>
          </div>
        ) : featuredPost ? (
          <FeaturedBlogPost post={featuredPost} />
        ) : null}
        
        {/* Recent Blog Posts Grid */}
        <h3 className="font-mono text-xl font-semibold mb-6">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isPostsLoading ? (
            // Loading skeletons
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-background rounded-lg overflow-hidden border border-border">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))
          ) : (
            recentPosts?.map((post) => <BlogCard key={post.id} post={post} />)
          )}
        </div>
        
        {/* Blog Categories */}
        <div className="mt-16">
          <h3 className="font-mono text-xl font-semibold mb-6">Browse by Category</h3>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Link 
                key={category} 
                href={`/blog?category=${category}`}
                className="px-4 py-2 bg-background border border-border rounded-md hover:border-primary hover:text-primary transition duration-200"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Subscribe to Blog */}
        <div className="mt-16 bg-background rounded-lg border border-border p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-mono text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to receive notifications about new blog posts and updates on my cybersecurity journey.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-muted border border-border rounded-md px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="p-3 bg-muted rounded-full">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ArrowRight className="text-primary h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
