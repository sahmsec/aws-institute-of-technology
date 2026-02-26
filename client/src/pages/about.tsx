import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Target, Shield, Zap, Map } from "lucide-react";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* university grand library classic architecture */}
      <PageHeader 
        title="About Arena Institute" 
        subtitle="A legacy of practical excellence. Discover our history, mission, and the leadership driving our innovative educational model."
        breadcrumb="Information / About Us"
        imageUrl="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Redefining Education for the Modern Workforce</h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>Founded in 2005, Arena Institute of Excellence emerged from a simple realization: traditional four-year undergraduate degrees were often out of sync with the rapid pace of industry evolution.</p>
              <p>We established Arena to bridge this gap. By focusing exclusively on targeted diplomas, short courses, and professional certifications, we built an institution dedicated to agility, practical skill acquisition, and immediate employability.</p>
              <p>Today, our campus serves thousands of ambitious individuals seeking to pivot careers, upskill rapidly, or gain foundational expertise without the bloated timelines of conventional universities.</p>
            </div>
          </div>
          <div className="relative">
            {/* university modern glass building campus */}
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" alt="Campus Building" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
              <p className="font-serif font-bold text-2xl text-primary mb-2">15+ Years</p>
              <p className="text-slate-500 font-medium">Of pioneering practical, industry-first education paradigms.</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-slate-50 rounded-3xl p-10 md:p-16 mb-32 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h4>
              <p className="text-slate-600 leading-relaxed">To provide accessible, high-intensity, and hyper-relevant education that empowers individuals to achieve their professional goals and supplies industries with highly competent, ready-to-work talent.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed">To be the globally recognized benchmark for accelerated professional education, continuously adapting our curriculum to the frontier of technological and business advancements.</p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Guided by Industry Veterans</h3>
            <p className="text-slate-600 text-lg">Our leadership team consists of professionals who have spent decades in the corporate sector before bringing their expertise to education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Robert Sterling", role: "Institute Director", bg: "bg-slate-200" },
              { name: "Eleanor Vance, MBA", role: "Head of Academic Affairs", bg: "bg-slate-300" },
              { name: "Marcus Chen, Ph.D.", role: "Director of Industry Relations", bg: "bg-slate-200" }
            ].map((leader, idx) => (
              <div key={idx} className="text-center group">
                <div className={`w-48 h-48 mx-auto rounded-full ${leader.bg} mb-6 overflow-hidden shadow-lg border-4 border-white group-hover:border-accent transition-colors duration-300 relative`}>
                  {/* Generic placeholder silhoutte */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Shield className="w-16 h-16 opacity-20" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary font-serif">{leader.name}</h4>
                <p className="text-accent font-medium mt-1">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
