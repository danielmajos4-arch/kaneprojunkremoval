import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist. But we're here to help with your junk removal needs!
          </p>

          <div className="space-y-3">
            <Link href="/" className="block w-full text-center bg-vibrant-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              <i className="fas fa-home mr-2"></i>
              Go Home
            </Link>
            
            <a 
              href="tel:+13189141201" 
              className="block w-full text-center bg-deep-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              Call (318) 914-1201
            </a>

            <Link href="/about" className="block w-full text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </Link>
          </div>

          <p className="mt-4 text-xs text-center text-gray-500">
            Kane Pro Junk Removal - Serving Monroe & Northeast Louisiana
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
