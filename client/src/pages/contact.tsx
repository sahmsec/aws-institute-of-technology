import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Frontend-only schema
const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function Contact() {
  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryForm) => {
    console.log("Form submitted:", data);

    // Simulate success
    alert("Inquiry submitted successfully!");
    form.reset();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-primary text-lg">Campus Address</h4>
                  <p className="text-slate-600">
                    House No: 1, Block: B<br />
                    Banasree, Main Road, Rampura<br />
                    Dhaka - 1219, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-primary text-lg">Contact Phone</h4>
                  <p className="text-slate-600">
                    +880 1310 333 444<br />
                    +880 1885 841 489
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-primary text-lg">Email</h4>
                  <p className="text-slate-600">
                    info@arenawebsecurity.net<br />
                    support@arenawebsecurity.net
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <div>
                  <h4 className="font-bold text-primary text-lg">Office Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                Send an Inquiry
              </h3>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input
                    {...form.register("name")}
                    className="w-full px-4 py-3 border rounded-xl"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    {...form.register("email")}
                    type="email"
                    className="w-full px-4 py-3 border rounded-xl"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    {...form.register("message")}
                    rows={5}
                    className="w-full px-4 py-3 border rounded-xl resize-none"
                    placeholder="I am interested in..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}