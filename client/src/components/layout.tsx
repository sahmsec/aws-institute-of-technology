import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Academics", 
    href: "/academics",
    subLinks: [
      { name: "Overview", href: "/academics" },
      { name: "Diploma Programs", href: "/academics/diploma" },
      { name: "Short Courses", href: "/academics/short-courses" },
      { name: "Professional Certifications", href: "/academics/certifications" },
      { name: "Course Modules", href: "/academics/modules" },
    ]
  },
  { 
    name: "Resources", 
    href: "/resources",
    subLinks: [
      { name: "Overview", href: "/resources" },
      { name: "Gallery", href: "/resources/gallery" },
      { name: "Library", href: "/resources/library" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2 text-accent" /> +880 1310 333 444</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-accent" /> info@arenawebsecurity.net</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/admissions" className="hover:text-accent transition-colors">Apply Now</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Campus Tour</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl leading-none text-primary m-0">Arena Web Security</h1>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-semibold">Institute of Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <div className={`px-4 py-2 rounded-md font-medium text-sm flex items-center cursor-pointer transition-colors ${activeDropdown === link.name ? 'text-primary bg-slate-50' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}>
                    {link.name}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className={`px-4 py-2 rounded-md font-medium text-sm block transition-colors ${location === link.href ? 'text-primary bg-slate-50' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 overflow-hidden"
                      >
                        {link.subLinks.map((subLink) => (
                          <Link 
                            key={subLink.name} 
                            href={subLink.href}
                            className="block px-5 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link 
              href="/admissions" 
              className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link 
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-50"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-6 border-l-2 border-slate-100 ml-4 mt-1 space-y-1">
                        {link.subLinks.map((subLink) => (
                           <Link 
                           key={subLink.name} 
                           href={subLink.href}
                           className="block px-4 py-2 text-sm text-slate-600 hover:text-primary rounded-md"
                         >
                           {subLink.name}
                         </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-300 pt-20 pb-10 border-t-[8px] border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-2xl text-white m-0 leading-none">Arena Web Security</h2>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans font-semibold">Institute of Technology</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering the next generation of cybersecurity leaders through practical, industry-aligned education and rigorous professional training programs.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-start"><MapPin className="w-4 h-4 mr-3 text-accent mt-1 flex-shrink-0" /> House No: 1, Block: B, Banasree, Main Road, Rampura, Dhaka - 1219</p>
                <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-accent" /> +880 1310 333 444, +880 1885 841 489</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-3 text-accent" /> info@arenawebsecurity.net</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Academics</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/academics/diploma" className="hover:text-accent transition-colors">Diploma Programs</Link></li>
                <li><Link href="/academics/short-courses" className="hover:text-accent transition-colors">Short Courses</Link></li>
                <li><Link href="/academics/certifications" className="hover:text-accent transition-colors">Professional Certifications</Link></li>
                <li><Link href="/academics/modules" className="hover:text-accent transition-colors">Course Modules</Link></li>
                <li><Link href="/resources/library" className="hover:text-accent transition-colors">E-Library</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Information</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-accent transition-colors">About the Institute</Link></li>
                <li><Link href="/admissions" className="hover:text-accent transition-colors">Admissions Process</Link></li>
                <li><Link href="/admissions" className="hover:text-accent transition-colors">Tuition & Financial Aid</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors">Campus News</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to receive updates on new programs and campus events.</p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder:text-slate-400 text-sm transition-colors"
                />
                <button className="w-full px-4 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Arena Web Security Institute of Technology. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
