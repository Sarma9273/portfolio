import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { BlogPost as BlogPostType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: [`/api/blog/${slug}`],
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <div className="flex items-center mb-6">
              <Skeleton className="h-4 w-40 mr-4" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-96 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-11/12" />
              <Skeleton className="h-6 w-4/5" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-2 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
          
          {/* Blog header */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8">
            <span className="flex items-center mr-4">
              <Calendar className="mr-1 h-4 w-4" /> {formatDate(post.publishedDate)}
            </span>
            <span className="flex items-center mr-4">
              <Clock className="mr-1 h-4 w-4" /> {post.readTime} min read
            </span>
            <span className="flex items-center">
              <Tag className="mr-1 h-4 w-4" /> {post.category}
            </span>
          </div>
          
          {/* Featured image */}
          {post.imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden border border-border">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
          )}
          
          {/* Content */}
          <div 
            className="prose prose-invert prose-cyan max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-border">
            <div className="flex items-center">
              <span className="mr-3">Tags:</span>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted text-primary px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs bg-muted text-primary px-2 py-1 rounded">
                  Cybersecurity
                </span>
                <span className="text-xs bg-muted text-primary px-2 py-1 rounded">
                  Learning
                </span>
              </div>
            </div>
          </div>
          
          {/* Share */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">Share this post:</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
