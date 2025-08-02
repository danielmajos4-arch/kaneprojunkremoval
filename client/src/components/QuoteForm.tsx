import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  city: z.string().min(1, "Please select a city"),
  service: z.string().min(1, "Please select a service type"),
  details: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function QuoteForm() {
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      service: "",
      details: "",
    },
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email || '');
      formData.append('city', data.city);
      formData.append('service', data.service);
      formData.append('details', data.details || '');
      formData.append('_subject', 'New Quote Request - Kane Pro Junk Removal');
      formData.append('_source', 'Kane Pro Junk Removal website - Quote Form');

      const response = await fetch('https://formspree.io/f/xpwllvvz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to send quote request');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you soon with your free estimate. Thank you for choosing Kane Pro!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your quote request. Please try calling us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    submitQuoteMutation.mutate(data);
  };

  return (
    <section id="quote-form" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-navy text-white p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-military mb-2 bg-[#265a26]">
              Get Your Free Louisiana Estimate
            </h2>
            <p className="bg-[#00000000] text-[#152959]">Your trusted Kane pro against junk problems - Christian values, Louisiana heart</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-navy">Phone Number *</FormLabel>
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
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-navy">Email Address</FormLabel>
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
                
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-navy">Service City *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="btn-touch focus:ring-louisiana-gold focus:border-louisiana-gold">
                            <SelectValue placeholder="Select Your City" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="calhoun">Calhoun, LA</SelectItem>
                          <SelectItem value="farmerville">Farmerville, LA</SelectItem>
                          <SelectItem value="ruston">Ruston, LA</SelectItem>
                          <SelectItem value="west-monroe">West Monroe, LA</SelectItem>
                          <SelectItem value="monroe">Monroe, LA</SelectItem>
                          <SelectItem value="other">Other Louisiana City</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-navy">Service Needed *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="btn-touch focus:ring-louisiana-gold focus:border-louisiana-gold">
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="residential">Residential Cleanout</SelectItem>
                        <SelectItem value="commercial">Commercial Cleanout</SelectItem>
                        <SelectItem value="construction">Construction Debris</SelectItem>
                        <SelectItem value="demolition">Demolition</SelectItem>
                        <SelectItem value="dumpster-rentals">Dumpster Rentals</SelectItem>
                        <SelectItem value="furniture">Furniture Removal</SelectItem>
                        <SelectItem value="appliances">Appliance Removal</SelectItem>
                        <SelectItem value="emergency">Emergency/Storm Cleanup</SelectItem>
                        <SelectItem value="other">Other Service</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-navy">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your junk removal needs..."
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
                  disabled={submitQuoteMutation.isPending}
                  className="flex-1 btn-cta text-lg"
                >
                  {submitQuoteMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-shield-alt mr-2"></i>
                      GET FREE ESTIMATE
                    </>
                  )}
                </Button>
                <a 
                  href="tel:+13189141201" 
                  className="flex-1 btn-secondary text-lg flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  CALL (318) 914-1201
                </a>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>* Required fields. We respect your privacy and will never share your information.</p>
                <p className="mt-2">
                  <i className="fas fa-clock text-louisiana-gold mr-1"></i>
                  Same day service available across Louisiana
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
