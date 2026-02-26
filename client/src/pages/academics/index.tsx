import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { BookOpen, Clock, Award, Layers, ArrowRight } from "lucide-react";

export default function Academics() {
  const categories = [
    {
      title: "Diploma Programs",
      desc: "Comprehensive 1-2 year programs designed to build strong foundations and practical expertise in major career fields.",
      icon: Layers,
      href: "/academics/diploma",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Short Courses",
      desc: "Intensive 4-8 week sprints focused on acquiring specific, highly-demanded skills rapidly.",
      icon: Clock,
      href: "/academics/short-courses",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Professional Certifications",
      desc: "Exam preparation and industry-recognized credentialing programs to validate your expertise.",
      icon: Award,
      href: "/academics/certifications",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Course Modules",
      desc: "Individual, highly-focused micro-learning modules. Build your own curriculum a-la-carte.",
      icon: BookOpen,
      href: "/academics/modules",
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* modern lecture hall university academic */}
      <PageHeader 
        title="Academics at Arena" 
        subtitle="Explore our intensive, practical pathways designed to accelerate your career without the fluff of traditional degrees."
        breadcrumb="Academics / Overview"
        imageUrl="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Approach</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Choose Your Pathway</h3>
          <p className="text-slate-600 text-lg">Whether you need a comprehensive overhaul of your skills via a Diploma, or a rapid upskill via a Short Course, we have a structured program for your professional goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center mb-8`}>
                  <cat.icon className={`w-8 h-8 ${cat.color}`} />
                </div>
                <h4 className="text-2xl font-bold text-primary font-serif mb-4 group-hover:text-accent transition-colors">{cat.title}</h4>
                <p className="text-slate-600 mb-8 flex-grow text-lg">{cat.desc}</p>
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors mt-auto">
                  Explore Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
