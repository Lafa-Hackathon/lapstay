import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-serif text-xl font-bold">Mangalmaya</span>
          </Link>
          <p className="text-sm text-secondary-foreground/80 max-w-xs">
            Discover your perfect Himalayan retreat. Experience mountain serenity with our curated selection of premium hostels.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><Link to="/hostels" className="hover:text-white transition-colors">Find a Hostel</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
            <li><span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span></li>
            <li><Link to="/admin" className="hover:text-white transition-colors">Admin Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kathmandu, Nepal</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +977 1 234 5678</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@mangalmaya.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Mangalmaya Hostels. All rights reserved.</p>
      </div>
    </footer>
  );
}