import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Award, Users, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          {/* university campus students walking bright day */}
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="Campus life" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-white tracking-wide uppercase">Admissions Open for Fall 2024</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-8"
            >
              Master Your Craft.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                Shape The Future.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              Arena Web Security Institute of Technology provides intensive, practical education through specialized diploma programs and professional certifications designed to launch careers rapidly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                href="/academics" 
                className="px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center group"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center"
              >
                Discover Arena Web Security
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats overlap */}
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-3 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <p className="text-4xl font-serif font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Employment Rate</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-serif font-bold text-primary mb-2">40+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Industry Partners</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-serif font-bold text-primary mb-2">12:1</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Student-to-Faculty Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* spacer for overlapping stats */}
      <div className="h-24 md:h-32 bg-background"></div>

      {/* WHY CHOOSE ARENA */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">The Arena Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Education Built for the Real World</h3>
            <p className="text-slate-600 text-lg">We bypass the traditional theoretical undergraduate model in favor of intensive, highly practical diplomas and certifications that prepare you for immediate industry impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Practical Curriculum",
                desc: "Our courses are designed alongside industry leaders, ensuring you learn exactly what employers demand today, not yesterday."
              },
              {
                icon: Users,
                title: "Expert Practitioners",
                desc: "Learn not from career academics, but from seasoned professionals who bring real-world case studies directly into the classroom."
              },
              {
                icon: Award,
                title: "Accelerated Timelines",
                desc: "Get certified and career-ready in months, not years. Our intensive schedules respect your time and maximize your investment."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 font-serif">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PATHWAYS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Academic Pathways</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">Discover Your Program</h3>
            </div>
            <Link href="/academics" className="mt-6 md:mt-0 flex items-center text-primary font-bold hover:text-accent transition-colors">
              View all programs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pathway 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                {/* modern classroom students studying */}
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" alt="Diplomas" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h4 className="absolute bottom-4 left-6 text-white font-serif font-bold text-2xl">Diploma Programs</h4>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow">Comprehensive 12 to 18-month programs providing deep foundational knowledge and practical skills in specialized fields.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Business Administration</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Information Technology</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Hospitality Management</li>
                </ul>
                <Link href="/academics/diploma" className="w-full py-3 text-center border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                  Explore Diplomas
                </Link>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                {/* professional workshop corporate training */}
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Short Courses" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h4 className="absolute bottom-4 left-6 text-white font-serif font-bold text-2xl">Short Courses</h4>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow">Focused 4 to 8-week intensive courses designed to rapidly upskill professionals in targeted disciplines.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Digital Marketing Strategy</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Data Analysis Basics</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Leadership Essentials</li>
                </ul>
                <Link href="/academics/short-courses" className="w-full py-3 text-center border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                  Explore Short Courses
                </Link>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                {/* certificate achievement graduation */}
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop" alt="Certifications" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h4 className="absolute bottom-4 left-6 text-white font-serif font-bold text-2xl">Certifications</h4>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow">Industry-recognized professional certifications to validate your expertise and advance your career trajectory.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Project Management Prof.</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> Certified Cloud Architect</li>
                  <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-accent mr-2" /> HR Management Cert</li>
                </ul>
                <Link href="/academics/certifications" className="w-full py-3 text-center border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                  Explore Certifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/5 to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Award className="w-16 h-16 text-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            "Arena didn't just give me a certificate; they gave me a career. The hands-on curriculum was exactly what employers were looking for."
          </h2>
          <p className="text-xl text-slate-300 mb-12">— Sarah Jenkins, Diploma in IT Management (Alumni 2023)</p>
          <Link href="/admissions" className="inline-block px-10 py-5 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-white hover:text-primary shadow-[0_0_40px_rgba(217,119,6,0.3)] transition-all duration-300">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
