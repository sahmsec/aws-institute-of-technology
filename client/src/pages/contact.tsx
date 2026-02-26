import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";

export default function Contact() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* university entrance gates campus */}
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to answer your questions about programs, admissions, or campus life."
        breadcrumb="Information / Contact"
        imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h3>
              <p className="text-slate-600 mb-8">Prefer to talk? Reach out directly via phone or visit our admissions office during working hours.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Campus Address</h4>
                  <p className="text-slate-600">House No: 1, Block: B<br/>Banasree, Main Road, Rampura<br/>Dhaka - 1219, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Contact Phone</h4>
                  <p className="text-slate-600">+880 1310 333 444<br/>+880 1885 841 489</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Email Directory</h4>
                  <p className="text-slate-600">info@arenawebsecurity.net<br/>support@arenawebsecurity.net</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Office Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send an Inquiry</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    {...form.register("name")}
                    type="text" 
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${form.formState.errors.name ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    {...form.register("email")}
                    type="email" 
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${form.formState.errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help you?</label>
                  <textarea 
                    {...form.register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${form.formState.errors.message ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="I am interested in the Diploma in IT program..."
                  ></textarea>
                  {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 w-full h-96 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300">
           {/* map aerial view city */}
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary/20"></div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center">
                <MapPin className="w-8 h-8 text-accent mb-2" />
                <p className="font-bold text-primary text-center">Arena Web Security<br/>Institute of Technology</p>
             </div>
           </div>
        </div>

      </div>
    </motion.div>
  );
}
