import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { CheckCircle, FileText, CalendarCheck, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Admissions() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* university admission students talking */}
      <PageHeader 
        title="Admissions" 
        subtitle="A streamlined, straightforward application process designed to get you started quickly."
        breadcrumb="Information / Admissions"
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Step by step */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">How to Apply</h2>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">4 Steps to Enrollment</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "1. Online Application", desc: "Submit basic personal details and select your desired program." },
              { icon: CheckCircle, title: "2. Document Submission", desc: "Upload transcripts, resume, and ID. No generic essays required." },
              { icon: HelpCircle, title: "3. Brief Interview", desc: "A 15-minute phone chat to ensure the program aligns with your goals." },
              { icon: CalendarCheck, title: "4. Enrollment & Fees", desc: "Receive your offer, pay the deposit, and secure your seat." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary font-serif mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
                {/* Connector line for desktop */}
                {idx < 3 && <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">General Requirements</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /> High school diploma or equivalent (for Diploma programs).</li>
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /> Basic English proficiency (IELTS 5.5 or equivalent for international students).</li>
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" /> No prior experience required for foundational programs; specific prerequisites apply for advanced certifications.</li>
            </ul>
          </div>

          <div className="bg-primary text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Important Dates (Fall 2024 Intake)</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="font-medium">Applications Open</span>
                <span className="text-accent font-bold">Currently Open</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="font-medium">Early Bird Deadline</span>
                <span className="text-white font-bold">July 15, 2024</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="font-medium">Final Application Deadline</span>
                <span className="text-white font-bold">August 20, 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Classes Commence</span>
                <span className="text-accent font-bold">September 5, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="text-center bg-white p-12 border border-slate-200 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready to elevate your career?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">The application takes less than 10 minutes to complete. Our admissions team will guide you through the rest.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg transition-all text-lg" onClick={() => alert('Static demo: Redirect to secure application portal')}>
              Start Application
            </button>
            <Link href="/contact" className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all text-lg">
              Contact Admissions Team
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
