import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { Calendar, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Future of Tech Education: Why Hands-On Learning Wins",
    excerpt: "As the tech industry moves faster than traditional curriculum updates, intensive practical learning models are proving more effective at producing ready talent.",
    date: "Oct 12, 2023",
    author: "Dr. R. Sterling",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" // code screen
  },
  {
    id: 2,
    title: "5 Skills Every Modern Manager Needs",
    excerpt: "Leadership has evolved. Discover the core soft and hard skills our Business Administration faculty recommend focusing on this year.",
    date: "Sep 28, 2023",
    author: "Eleanor Vance",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" // meeting
  },
  {
    id: 3,
    title: "Campus Update: New Cyber Security Lab Unveiled",
    excerpt: "Arena Institute expands its IT facilities with a state-of-the-art closed network lab for ethical hacking simulations.",
    date: "Sep 15, 2023",
    author: "Arena News",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" // server room
  },
  {
    id: 4,
    title: "Alumni Spotlight: From Short Course to Tech Lead",
    excerpt: "How James took our 8-week Python Sprint and leveraged it to pivot from retail management into a data engineering role.",
    date: "Aug 30, 2023",
    author: "Student Success Team",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" // professional portrait
  }
];

export default function BlogList() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader 
        title="Campus News & Insights" 
        subtitle="Articles, updates, and thought leadership from the Arena Institute faculty and staff."
        breadcrumb="Blog / All Posts"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group">
              <div className="h-64 bg-slate-200 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex space-x-4 text-sm font-medium text-slate-500 mb-4">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-primary font-bold hover:text-accent transition-colors mt-auto inline-flex items-center">
                  Read Full Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
