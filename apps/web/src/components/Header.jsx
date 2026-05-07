import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Mountain, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
      <Link to="/hostels" className="text-sm font-medium hover:text-primary transition-colors">Hostels</Link>
      {isAuthenticated && (
        <Link to="/bookings" className="text-sm font-medium hover:text-primary transition-colors">My Bookings</Link>
      )}
      {isAdmin && (
        <Link to="/admin" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">Admin</Link>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold tracking-tight text-primary">Mangalmaya</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button variant="ghost" asChild><Link to="/login">Log in</Link></Button>
              <Button asChild><Link to="/signup">Sign up</Link></Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-4 pt-10">
            <NavLinks />
            <div className="flex flex-col gap-2 mt-4">
              {isAuthenticated ? (
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
              ) : (
                <>
                  <Button variant="outline" asChild><Link to="/login">Log in</Link></Button>
                  <Button asChild><Link to="/signup">Sign up</Link></Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}