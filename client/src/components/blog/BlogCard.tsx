import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden border border-border hover:border-blue-500/30 transition duration-200">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" /> {formatDate(post.publishedDate)}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" /> {post.readTime} min read
          </span>
        </div>
        <h3 className="font-mono text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-primary text-sm font-medium hover:underline inline-flex items-center"
        >
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
