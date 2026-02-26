import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Lock } from "lucide-react";

export default function Library() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader 
        title="Digital Library Portal" 
        subtitle="Exclusive access to research materials, journals, and e-books."
        breadcrumb="Resources / Library"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Lock className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Student Login Required</h2>
        <p className="text-slate-600 text-lg mb-10">
          The digital library portal contains proprietary databases and requires an active student or faculty credential to access.
        </p>
        
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Student ID" 
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary shadow-sm"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary shadow-sm"
          />
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-md">
            Login to Portal
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          Experiencing issues? Contact <a href="#" className="text-accent hover:underline">IT Support</a>.
        </p>
      </div>
    </motion.div>
  );
}
