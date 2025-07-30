import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  city: z.string().min(1, "Please select a city"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "", 
      email: "",
      city: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Kane Pro. We'll get back to you soon!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
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
        <h3 className="text-xl md:text-2xl font-military mb-2">
          Contact Kane Pro Today
        </h3>
        <p className="text-gray-300">Get in touch with Louisiana's trusted Christian junk removal experts</p>
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
          
          <div className="grid md:grid-cols-2 gap-4">
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
                  <FormLabel className="text-sm font-semibold text-navy">Your City *</FormLabel>
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
              className="flex-1 btn-outline flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              CALL (318) 914-1201
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
