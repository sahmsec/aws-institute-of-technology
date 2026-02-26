import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPost() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Blog Hero */}
      <div className="bg-primary pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase rounded-full mb-6">
            Technology / Opinion
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            The Future of Tech Education: Why Hands-On Learning Wins
          </h1>
          <div className="flex justify-center space-x-6 text-sm font-medium text-slate-300">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Oct 12, 2023</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> Dr. R. Sterling</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
        </Link>

        {/* Feature Image */}
        <div className="w-full h-80 md:h-[400px] bg-slate-200 rounded-2xl overflow-hidden mb-12 shadow-lg">
           {/* code screen modern developer */}
           <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" alt="Coding" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-primary max-w-none">
          <p className="lead text-xl text-slate-600 mb-8">
            As the tech industry moves faster than traditional curriculum updates, intensive practical learning models are proving more effective at producing ready talent.
          </p>
          
          <p>
            For decades, the standard path into the technology sector was a four-year computer science degree. While this theoretical foundation remains valuable for academic research, the modern tech industry demands a different kind of agility.
          </p>

          <h2>The Speed of Obsolescence</h2>
          <p>
            Consider a typical four-year degree syllabus. By the time a student reaches their senior year, the frameworks and tools they learned as a freshman may already be superseded by new industry standards. We saw this with the rapid shift from jQuery to React, and we are seeing it again with the integration of AI tools into daily workflows.
          </p>

          <blockquote>
            "We don't need people who can write a compiler from scratch; we need people who can build a secure, scalable web app using modern cloud services by next Tuesday." — Anonymous CTO
          </blockquote>

          <h2>The Arena Approach</h2>
          <p>
            This is exactly why Arena Institute structures its IT diplomas over 18 months rather than 48. By stripping out unrelated electives and focusing entirely on current industry stack requirements, we immerse students in practical lab work from day one.
          </p>
          
          <ul>
            <li><strong>Project-Based:</strong> Evaluation is based on functioning code and secure deployments, not written exams.</li>
            <li><strong>Current Stacks:</strong> We update our curriculum every 6 months in consultation with our corporate partners.</li>
            <li><strong>Soft Skills Integration:</strong> Tech is a team sport. Agile methodologies are baked into the coursework.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            The future belongs to those who can learn rapidly, apply practically, and adapt constantly. Shorter, intensive, highly practical education models aren't just an alternative—they are rapidly becoming the preferred standard.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <h4 className="font-bold text-primary mb-4">Share this article</h4>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors">Twitter</button>
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors">LinkedIn</button>
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors">Email</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
