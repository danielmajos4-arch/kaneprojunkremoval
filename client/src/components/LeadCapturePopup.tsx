import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const leadCaptureSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.enum(["junk-removal", "hauling", "demolition", "cleanout", "not-sure"], {
    required_error: "Please select a service"
  }),
  message: z.string().optional()
});

type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

interface LeadCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCapturePopup({ isOpen, onClose }: LeadCapturePopupProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  });

  // Form submission
  const submitMutation = useMutation({
    mutationFn: async (data: LeadCaptureFormData) => {
      const response = await fetch("https://formspree.io/f/xpwllvvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Lead Capture - Kane Pro Junk Removal",
          _source: "Lead Capture Popup"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thanks for your interest!",
        description: "We'll call you back within 2 hours with your free quote.",
        duration: 5000
      });
      form.reset();
      onClose();
    },
    onError: () => {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or call us directly at (318) 914-1201",
        variant: "destructive",
        duration: 5000
      });
    }
  });

  const onSubmit = (data: LeadCaptureFormData) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            data-testid="lead-capture-popup"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-deep-green to-vibrant-orange p-6 rounded-t-xl text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close popup"
                data-testid="close-popup"
              >
                ×
              </button>
              
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">
                  🚛 Get Your FREE Quote!
                </h2>
                <p className="text-white/90 text-sm">
                  Save time & money - We'll call you back in 2 hours
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  {...form.register("name")}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  {...form.register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent transition-colors"
                  placeholder="(318) 555-0123"
                  data-testid="input-phone"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  {...form.register("email")}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed *
                </label>
                <select
                  {...form.register("service")}
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent transition-colors"
                  data-testid="select-service"
                >
                  <option value="">Select a service...</option>
                  <option value="junk-removal">Junk Removal</option>
                  <option value="hauling">Hauling & Moving</option>
                  <option value="demolition">Demolition</option>
                  <option value="cleanout">Property Cleanout</option>
                  <option value="not-sure">Not Sure / Multiple</option>
                </select>
                {form.formState.errors.service && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.service.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description (Optional)
                </label>
                <textarea
                  {...form.register("message")}
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  data-testid="textarea-message"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitMutation.isPending}
                className="w-full bg-gradient-to-r from-vibrant-orange to-deep-green text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity mobile-cta-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-submit-lead"
              >
                {isSubmitting || submitMutation.isPending ? (
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Submitting...
                  </div>
                ) : (
                  <>
                    📞 Get My FREE Quote Now
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                💯 No obligation • 🕐 2-hour response • ⭐ 5-star rated
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}