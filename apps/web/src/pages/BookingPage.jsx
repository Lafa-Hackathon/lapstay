import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import apiServerClient from '@/lib/apiServerClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function BookingPage() {
  const { hostelId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: ''
  });

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        const record = await pb.collection('hostels').getOne(hostelId, { $autoCancel: false });
        setHostel(record);
      } catch (error) {
        toast.error('Failed to load hostel details');
        navigate('/hostels');
      } finally {
        setLoading(false);
      }
    };
    fetchHostel();
  }, [hostelId, navigate]);

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut || !hostel) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * hostel.price_per_night : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = calculateTotal();
    if (total <= 0) return toast.error('Invalid dates selected');

    setSubmitting(true);
    try {
      // 1. Create pending booking in PB
      const booking = await pb.collection('bookings').create({
        user_id: currentUser.id,
        hostel_id: hostel.id,
        room_id: 'placeholder_room_id', // Simplified for this demo
        check_in: new Date(formData.checkIn).toISOString(),
        check_out: new Date(formData.checkOut).toISOString(),
        guests: parseInt(formData.guests),
        total_price: total,
        status: 'pending'
      }, { $autoCancel: false });

      // 2. Call Stripe checkout endpoint
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          productName: `Booking at ${hostel.name}`,
          successUrl: `${window.location.origin}/bookings?success=true`,
          cancelUrl: `${window.location.origin}/booking/${hostelId}?canceled=true`
        })
      });

      if (!response.ok) throw new Error('Failed to initialize payment');
      
      const data = await response.json();
      
      // Update booking with session ID if needed, then redirect
      window.open(data.url, '_self'); // Use _self to redirect current tab
      
    } catch (error) {
      console.error(error);
      toast.error('Booking failed. Please try again.');
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-20 text-center">Loading...</div>;

  const total = calculateTotal();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-serif font-bold mb-8">Complete your booking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Guest Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Check-in Date</Label>
                    <Input 
                      type="date" 
                      required 
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.checkIn}
                      onChange={e => setFormData({...formData, checkIn: e.target.value})}
                      className="text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Check-out Date</Label>
                    <Input 
                      type="date" 
                      required 
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      value={formData.checkOut}
                      onChange={e => setFormData({...formData, checkOut: e.target.value})}
                      className="text-foreground"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Number of Guests</Label>
                  <Input 
                    type="number" 
                    min="1" 
                    required 
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                    className="text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="text-foreground"
                  />
                </div>

                <Button type="submit" className="w-full mt-6" size="lg" disabled={submitting || total <= 0}>
                  {submitting ? 'Processing...' : 'Proceed to Payment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="bg-muted/50 border-0">
            <CardHeader>
              <CardTitle className="text-lg">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold">{hostel.name}</h3>
                <p className="text-sm text-muted-foreground">{hostel.location}</p>
              </div>
              <div className="pt-4 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span>${hostel.price_per_night} x {total > 0 ? total / hostel.price_per_night : 0} nights</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}