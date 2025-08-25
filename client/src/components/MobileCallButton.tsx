import { motion } from "framer-motion";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";

export default function MobileCallButton() {
  const { isMobile } = useMobileOptimization();

  if (!isMobile) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a
        href="tel:+13189141201"
        className="flex items-center justify-center w-14 h-14 bg-vibrant-orange text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        animate={{
          boxShadow: [
            "0 4px 8px rgba(255, 165, 0, 0.3)",
            "0 8px 16px rgba(255, 165, 0, 0.4)",
            "0 4px 8px rgba(255, 165, 0, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        aria-label="Call Kane Pro Junk Removal now"
      >
        <motion.i 
          className="fas fa-phone text-lg"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </motion.a>
    </motion.div>
  );
}