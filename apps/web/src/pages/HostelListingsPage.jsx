import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Filter, Mountain } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function HostelListingsPage() {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHostels = async () => {
      setLoading(true);
      try {
        const records = await pb.collection('hostels').getList(1, 50, {
          sort: '-created',
          $autoCancel: false
        });
        setHostels(records.items);
      } catch (error) {
        console.error('Error fetching hostels:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHostels();
  }, []);

  const filteredHostels = hostels.filter(h => 
    h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    h.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Find Your Retreat</h1>
          <p className="text-muted-foreground">Explore our curated selection of mountain hostels</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search location or name..." 
              className="pl-9 text-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredHostels.length === 0 ? (
        <div className="text-center py-20">
          <Mountain className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-xl font-serif font-medium mb-2">No hostels found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredHostels.map((hostel) => (
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
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">Details</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}