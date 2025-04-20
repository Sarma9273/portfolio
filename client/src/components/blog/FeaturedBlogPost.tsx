import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface FeaturedBlogPostProps {
  post: BlogPost;
}

const FeaturedBlogPost = ({ post }: FeaturedBlogPostProps) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden border border-border mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto bg-muted">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r md:from-transparent md:to-background/90 from-background/50 to-background/50"></div>
          <div className="absolute top-4 left-4 bg-primary text-background text-xs font-medium px-2 py-1 rounded">
            Featured
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" /> {formatDate(post.publishedDate)}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" /> {post.readTime} min read
            </span>
          </div>
          <h3 className="font-mono text-2xl font-bold mb-3">{post.title}</h3>
          <p className="text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs bg-muted text-blue-500 px-2 py-1 rounded">{post.category}</span>
            <span className="text-xs bg-muted text-blue-500 px-2 py-1 rounded">Beginners</span>
            <span className="text-xs bg-muted text-blue-500 px-2 py-1 rounded">Resources</span>
          </div>
          <Link 
            href={`/blog/${post.slug}`} 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;
