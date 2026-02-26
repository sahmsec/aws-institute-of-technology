import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  imageUrl?: string;
}

export function PageHeader({ title, subtitle, breadcrumb, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0">
        {imageUrl ? (
          <>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 via-primary to-primary"></div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase rounded-full mb-6">
            {breadcrumb}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
