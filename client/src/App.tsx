import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";

// Components
import { Layout } from "@/components/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Academics from "@/pages/academics/index";
import DiplomaPrograms from "@/pages/academics/diploma";
import ShortCourses from "@/pages/academics/short-courses";
import Certifications from "@/pages/academics/certifications";
import CourseModules from "@/pages/academics/modules";
import Resources from "@/pages/resources/index";
import Gallery from "@/pages/resources/gallery";
import Library from "@/pages/resources/library";
import BlogList from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import Admissions from "@/pages/admissions";
import Contact from "@/pages/contact";

function Router() {
  const [location] = useLocation();
  
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch location={location} key={location}>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
          
          {/* Academics */}
          <Route path="/academics" component={Academics}/>
          <Route path="/academics/diploma" component={DiplomaPrograms}/>
          <Route path="/academics/short-courses" component={ShortCourses}/>
          <Route path="/academics/certifications" component={Certifications}/>
          <Route path="/academics/modules" component={CourseModules}/>
          
          {/* Resources */}
          <Route path="/resources" component={Resources}/>
          <Route path="/resources/gallery" component={Gallery}/>
          <Route path="/resources/library" component={Library}/>
          
          {/* Blog */}
          <Route path="/blog" component={BlogList}/>
          <Route path="/blog/:id" component={BlogPost}/>
          
          {/* Info */}
          <Route path="/admissions" component={Admissions}/>
          <Route path="/contact" component={Contact}/>
          
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
