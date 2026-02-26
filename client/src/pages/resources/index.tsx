import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { Image, Library as LibraryIcon, ArrowRight } from "lucide-react";

export default function Resources() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader 
        title="Student Resources" 
        subtitle="Everything you need to support your academic journey at Arena Institute."
        breadcrumb="Resources / Overview"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden group flex flex-col">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
              {/* university library books study */}
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Library" />
              <div className="absolute inset-0 bg-primary/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <LibraryIcon className="w-20 h-20 text-white/50" />
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col items-center text-center">
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">Digital Library</h3>
              <p className="text-slate-600 mb-8">Access thousands of academic journals, industry reports, and e-books through our comprehensive online portal.</p>
              <Link href="/resources/library" className="mt-auto px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 flex items-center">
                Access Library <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden group flex flex-col">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
               {/* students campus laughing happy */}
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-accent/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image className="w-20 h-20 text-white/50" />
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col items-center text-center">
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">Campus Gallery</h3>
              <p className="text-slate-600 mb-8">Take a visual tour of our modern facilities, state-of-the-art labs, and vibrant student life events.</p>
              <Link href="/resources/gallery" className="mt-auto px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 flex items-center">
                View Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
