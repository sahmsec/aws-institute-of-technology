import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Briefcase, Monitor, HeartPulse, ChefHat, Palette, Globe } from "lucide-react";
import { Link } from "wouter";

const programs = [
  {
    title: "Diploma in Business Administration",
    duration: "12 Months",
    intake: "Sep / Jan / May",
    icon: Briefcase,
    desc: "A comprehensive deep-dive into modern business practices, covering accounting, HR, marketing strategy, and organizational leadership.",
    modules: ["Financial Management", "Corporate Strategy", "Business Law", "Organizational Behavior"]
  },
  {
    title: "Diploma in Information Technology",
    duration: "18 Months",
    intake: "Sep / Jan",
    icon: Monitor,
    desc: "Hands-on training in network administration, software development fundamentals, database management, and essential cybersecurity principles.",
    modules: ["Network Architecture", "Programming Fundamentals", "Database Systems", "Cybersecurity Basics"]
  },
  {
    title: "Diploma in Health & Social Care",
    duration: "12 Months",
    intake: "Sep / March",
    icon: HeartPulse,
    desc: "Prepares students for administrative and frontline roles in healthcare environments, focusing on patient care, facility management, and ethics.",
    modules: ["Healthcare Administration", "Public Health Policy", "Medical Ethics", "Care Facility Management"]
  },
  {
    title: "Diploma in Culinary Arts",
    duration: "12 Months",
    intake: "Jan / July",
    icon: ChefHat,
    desc: "An intensive practical program taught in commercial kitchens. Covers everything from fundamental techniques to kitchen management.",
    modules: ["Classical Techniques", "Baking & Pastry", "Kitchen Management", "Food Safety & Sanitation"]
  },
  {
    title: "Diploma in Digital Design",
    duration: "12 Months",
    intake: "Sep / Feb",
    icon: Palette,
    desc: "Master industry-standard tools (Adobe CC, Figma) while learning UX/UI principles, graphic design theory, and web design basics.",
    modules: ["UX/UI Design", "Brand Identity", "Motion Graphics", "Web Design Fundamentals"]
  },
  {
    title: "Diploma in Hospitality & Tourism",
    duration: "12 Months",
    intake: "Continuous",
    icon: Globe,
    desc: "Equips students with the management skills needed for hotels, resorts, and event planning, with heavy emphasis on customer experience.",
    modules: ["Hotel Operations", "Event Management", "Tourism Economics", "Customer Relations"]
  }
];

export default function DiplomaPrograms() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* students studying serious university setting */}
      <PageHeader 
        title="Diploma Programs" 
        subtitle="12 to 18-month intensive foundations designed to launch your career in high-demand industries."
        breadcrumb="Academics / Diplomas"
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 border-b border-slate-100 flex-grow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mr-4">
                    <prog.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary leading-tight">{prog.title}</h3>
                    <div className="flex space-x-3 text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wide">
                      <span className="bg-slate-100 px-2 py-1 rounded">{prog.duration}</span>
                      <span className="bg-slate-100 px-2 py-1 rounded">Intake: {prog.intake}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{prog.desc}</p>
                
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Core Modules</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {prog.modules.map((mod, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span> {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-4 flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">Requirements apply</span>
                <Link href="/admissions" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Apply Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
