import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Search } from "lucide-react";

export default function CourseModules() {
  const allModules = [
    { code: "BUS101", name: "Intro to Microeconomics", credits: 3 },
    { code: "BUS204", name: "Corporate Accounting Basics", credits: 4 },
    { code: "MKT301", name: "Consumer Behavior Analysis", credits: 3 },
    { code: "IT105", name: "Hardware Fundamentals", credits: 3 },
    { code: "IT220", name: "Linux System Administration", credits: 4 },
    { code: "HSC101", name: "Anatomy & Physiology Intro", credits: 4 },
    { code: "CUL201", name: "Sauce & Stock Making", credits: 2 },
    { code: "DES150", name: "Typography Principles", credits: 3 },
    { code: "HRM200", name: "Conflict Resolution in Workplace", credits: 3 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader 
        title="Course Modules (A-La-Carte)" 
        subtitle="Register for individual modules to supplement your existing knowledge without committing to a full program."
        breadcrumb="Academics / Modules"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10 flex items-center">
          <Search className="w-6 h-6 text-slate-400 mr-4" />
          <input 
            type="text" 
            placeholder="Search modules by name or code... (Static demo)" 
            className="w-full text-lg outline-none placeholder:text-slate-400 text-primary font-medium"
            disabled
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-bold text-primary uppercase text-xs tracking-wider">Module Code</th>
                <th className="py-4 px-6 font-bold text-primary uppercase text-xs tracking-wider">Module Name</th>
                <th className="py-4 px-6 font-bold text-primary uppercase text-xs tracking-wider">Credits</th>
                <th className="py-4 px-6 font-bold text-primary uppercase text-xs tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {allModules.map((mod, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-500">{mod.code}</td>
                  <td className="py-4 px-6 font-bold text-primary">{mod.name}</td>
                  <td className="py-4 px-6 text-slate-600">{mod.credits}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-sm font-bold text-accent hover:text-primary transition-colors">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
