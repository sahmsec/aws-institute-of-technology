import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ShieldCheck, Calendar, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Certifications() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* professionals taking exam certification test */}
      <PageHeader 
        title="Professional Certifications" 
        subtitle="Prepare for globally recognized industry credentials with our specialized training tracks."
        breadcrumb="Academics / Certifications"
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-slate-600 text-lg">
            Arena Institute partners with major global credentialing bodies to provide rigorous preparatory training. When you pass, you don't just get an Arena certificate—you get an industry-standard credential respected worldwide.
          </p>
        </div>

        <div className="space-y-8">
          {/* Cert 1 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Project Management Professional (PMP)® Prep</h3>
              <p className="text-slate-600 mb-4 max-w-2xl">A rigorous 35-hour training course meeting the educational requirements to sit for the PMP exam. Covers predictive, agile, and hybrid approaches.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><Calendar className="w-4 h-4 mr-2" /> 5 Weeks</span>
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><FileText className="w-4 h-4 mr-2" /> Exam Simulator Included</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/admissions" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Enroll Now</Link>
            </div>
          </div>

          {/* Cert 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">AWS Certified Solutions Architect – Associate</h3>
              <p className="text-slate-600 mb-4 max-w-2xl">Master cloud architecture principles. This intensive boot camp prepares you to design distributed systems on the AWS platform.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><Calendar className="w-4 h-4 mr-2" /> 8 Weeks</span>
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><FileText className="w-4 h-4 mr-2" /> Lab Access Included</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/admissions" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Enroll Now</Link>
            </div>
          </div>

          {/* Cert 3 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">CompTIA Security+ Prep</h3>
              <p className="text-slate-600 mb-4 max-w-2xl">Establish core knowledge required of any cybersecurity role. Covers threats, attacks, vulnerabilities, architecture, and design.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><Calendar className="w-4 h-4 mr-2" /> 6 Weeks</span>
                <span className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md"><FileText className="w-4 h-4 mr-2" /> Practice Exams</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/admissions" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
