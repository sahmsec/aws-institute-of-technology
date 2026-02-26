import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const courses = [
  "Advanced Excel & Data Modeling",
  "Digital Marketing Mastery",
  "Agile Project Management Sprint",
  "Intro to Python for Data Analysis",
  "Business Communication & Negotiation",
  "Social Media Strategy",
  "Financial Literacy for Non-Finance Managers",
  "Cybersecurity Awareness",
  "Basic Web Development (HTML/CSS)",
  "Leadership in Times of Crisis"
];

export default function ShortCourses() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader 
        title="Short Courses" 
        subtitle="High-impact, 4-8 week sprints to rapidly acquire highly demanded skills for immediate application."
        breadcrumb="Academics / Short Courses"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Short Courses?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              In today's fast-paced economy, taking a year off to study isn't always feasible. Our short courses are designed for working professionals who need to plug specific skill gaps immediately. Delivered in evening or weekend formats.
            </p>
            <div className="flex flex-wrap gap-4">
               <span className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20">4-8 Weeks</span>
               <span className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20">Evening/Weekend Options</span>
               <span className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20">Certificate of Completion</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-4">Available Courses (Current Term)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{course}</h4>
                  <p className="text-sm text-slate-500 mb-4">Next cohort begins next month. Limited to 20 seats.</p>
                  <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
                    Request Syllabus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
