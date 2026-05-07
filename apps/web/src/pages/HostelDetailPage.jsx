import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Star, Wifi, Coffee, Car, Wind, Flame, Droplets, Dumbbell, Mountain } from 'lucide-react';

const amenityIcons = {
  'WiFi': Wifi,
  'Kitchen': Coffee,
  'Parking': Car,
  'AC': Wind,
  'Heating': Flame,
  'Hot Water': Droplets,
  'Gym': Dumbbell
};

export default function HostelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        const record = await pb.collection('hostels').getOne(id, { $autoCancel: false });
        setHostel(record);
      } catch (error) {
        console.error('Error fetching hostel:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHostel();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-[50vh] w-full rounded-2xl mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-32 w-full mt-8" />
          </div>
          <div>
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!hostel) {
    return <div className="container mx-auto px-4 py-20 text-center">Hostel not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Hero Image */}
      <div className="h-[40vh] md:h-[60vh] w-full rounded-2xl overflow-hidden mb-8 bg-muted relative">
        {hostel.images && hostel.images.length > 0 ? (
          <img 
            src={pb.files.getUrl(hostel, hostel.images[0])} 
            alt={hostel.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/10 text-secondary">
            <Mountain className="h-24 w-24 opacity-50" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-serif font-bold">{hostel.name}</h1>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {hostel.location}</span>
              <span className="flex items-center gap-1 text-foreground font-medium">
                <Star className="h-4 w-4 fill-accent text-accent" /> {hostel.rating || 'New'}
              </span>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">About this place</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {hostel.description || 'A beautiful mountain retreat waiting for you to explore.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {hostel.amenities?.map((amenity) => {
                const Icon = amenityIcons[amenity] || Star;
                return (
                  <Badge key={amenity} variant="secondary" className="px-4 py-2 text-sm font-normal flex items-center gap-2 bg-muted">
                    <Icon className="h-4 w-4" /> {amenity}
                  </Badge>
                );
              })}
            </div>
          </section>
          
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-serif font-semibold">Reviews</h2>
              <Button variant="outline" asChild>
                <Link to={`/reviews/${hostel.id}`}>View all / Write a review</Link>
              </Button>
            </div>
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Click above to see what others are saying or share your own experience.</p>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-xl border-0">
            <CardContent className="p-6">
              <div className="mb-6">
                <span className="text-3xl font-bold">${hostel.price_per_night}</span>
                <span className="text-muted-foreground"> / night</span>
              </div>
              
              <Button size="lg" className="w-full text-lg" onClick={() => navigate(`/booking/${hostel.id}`)}>
                Book Now
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                You won't be charged yet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}