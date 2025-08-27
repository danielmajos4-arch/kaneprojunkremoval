import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "", 
      email: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('message', data.message);
      formData.append('_source', 'Kane Pro Junk Removal website');

      const response = await fetch('https://formspree.io/f/xpwllvvz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Kane Pro. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Message Failed",
        description: error.message || "There was an error sending your message. Please try calling us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-navy text-white p-6 text-center">
        <h3 className="text-xl md:text-2xl font-military mb-4 text-[#265a26]">
          Contact Kane Pro Today
        </h3>
        
        {/* Prominent Phone CTA */}
        <div className="mb-4">
          <a 
            href="tel:+13189141201" 
            className="inline-flex items-center justify-center px-8 py-4 bg-vibrant-orange text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105 border-2 border-white"
          >
            <i className="fas fa-phone mr-3 text-xl animate-pulse"></i>
            CALL (318) 914-1201
          </a>
        </div>
        
        <p className="bg-[#265a26] text-[#e6eaf0] text-[16px] pt-[-1px] pb-[-1px]">Get in touch with Louisiana's trusted Christian junk removal experts</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-navy">Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      className="btn-touch focus:ring-louisiana-gold focus:border-louisiana-gold" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-navy">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      className="btn-touch focus:ring-louisiana-gold focus:border-louisiana-gold" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-navy">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    type="tel"
                    placeholder="(318) 555-0123" 
                    className="btn-touch focus:ring-louisiana-gold focus:border-louisiana-gold" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-navy">Message *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can Kane Pro help you today?"
                    className="focus:ring-louisiana-gold focus:border-louisiana-gold"
                    rows={4}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="submit" 
              disabled={submitContactMutation.isPending}
              className="flex-1 btn-cta"
            >
              {submitContactMutation.isPending ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-envelope mr-2"></i>
                  SEND MESSAGE
                </>
              )}
            </Button>
            <a 
              href="tel:+13189141201" 
              className="flex-1 btn-outline flex items-center justify-center bg-vibrant-orange text-white hover:bg-orange-600 transition-all duration-300 pt-[12px] pb-[12px] font-bold text-lg shadow-lg transform hover:scale-105 border-2 border-vibrant-orange hover:border-orange-600"
            >
              <i className="fas fa-phone mr-3 text-lg animate-pulse"></i>
              CALL (318) 914-1201
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
