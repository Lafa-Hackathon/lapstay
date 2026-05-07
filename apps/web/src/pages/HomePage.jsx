import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Search, Star, Mountain } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

export default function HomePage() {
  const [featuredHostels, setFeaturedHostels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const records = await pb.collection('hostels').getList(1, 4, {
          sort: '-rating',
          $autoCancel: false
        });
        setFeaturedHostels(records.items);
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };
    fetchHostels();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/hostels');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1655818127479-8736cc5c5ca4" 
            alt="Himalayan Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Discover Mountain Serenity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Find your perfect Himalayan retreat. Unplug, unwind, and connect with nature.
          </p>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur shadow-xl border-0">
            <CardContent className="p-2 md:p-4">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Where to?" className="pl-10 bg-white text-foreground border-0 focus-visible:ring-1" />
                </div>
                <div className="flex-1 relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input type="date" className="pl-10 bg-white text-foreground border-0 focus-visible:ring-1" />
                </div>
                <div className="flex-1 relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input type="number" min="1" placeholder="Guests" className="pl-10 bg-white text-foreground border-0 focus-visible:ring-1" />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white">
                  <Search className="h-5 w-5 mr-2" /> Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Hostels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">Featured Retreats</h2>
              <p className="text-muted-foreground">Handpicked stays for your next adventure</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/hostels">View all</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHostels.map((hostel) => (
              <Link key={hostel.id} to={`/hostels/${hostel.id}`} className="group block">
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-card">
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    {hostel.images && hostel.images.length > 0 ? (
                      <img 
                        src={pb.files.getUrl(hostel, hostel.images[0])} 
                        alt={hostel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-secondary/10 text-secondary">
                        <Mountain className="h-12 w-12 opacity-50" />
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      {hostel.rating || 'New'}
                    </div>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-lg mb-1 group-hover:text-primary transition-colors">{hostel.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
                      <MapPin className="h-3 w-3" /> {hostel.location}
                    </p>
                    <div className="mt-auto pt-4 border-t flex justify-between items-center">
                      <span className="font-bold text-lg">${hostel.price_per_night}<span className="text-sm font-normal text-muted-foreground">/night</span></span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for the Mountains?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of travelers who have found their perfect Himalayan escape with Mangalmaya.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90" asChild>
            <Link to="/hostels">Explore All Hostels</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}