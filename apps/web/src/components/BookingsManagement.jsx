
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Edit, Trash2, Plus } from 'lucide-react';

export default function BookingsManagement() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    user_id: '',
    room_id: '',
    hostel_id: '',
    check_in: '',
    check_out: '',
    guests: 1,
    total_price: 0,
    status: 'pending'
  });

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('bookings').getList(1, 100, { 
        $autoCancel: false, 
        sort: '-created',
        expand: 'user_id,hostel_id'
      });
      setBookings(records.items);
    } catch (error) {
      toast.error('Failed to fetch bookings');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleOpenDialog = (booking = null) => {
    if (booking) {
      setSelectedBooking(booking);
      setFormData({
        user_id: booking.user_id || '',
        room_id: booking.room_id || '',
        hostel_id: booking.hostel_id || '',
        check_in: booking.check_in ? booking.check_in.split(' ')[0] : '',
        check_out: booking.check_out ? booking.check_out.split(' ')[0] : '',
        guests: booking.guests || 1,
        total_price: booking.total_price || 0,
        status: booking.status || 'pending'
      });
    } else {
      setSelectedBooking(null);
      setFormData({
        user_id: '',
        room_id: '',
        hostel_id: '',
        check_in: '',
        check_out: '',
        guests: 1,
        total_price: 0,
        status: 'pending'
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedBooking(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        check_in: new Date(formData.check_in).toISOString(),
        check_out: new Date(formData.check_out).toISOString(),
        guests: parseInt(formData.guests, 10),
        total_price: parseFloat(formData.total_price)
      };

      if (selectedBooking) {
        await pb.collection('bookings').update(selectedBooking.id, payload, { $autoCancel: false });
        toast.success('Booking updated successfully');
      } else {
        await pb.collection('bookings').create(payload, { $autoCancel: false });
        toast.success('Booking created successfully');
      }
      
      handleCloseDialog();
      fetchBookings();
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedBooking) return;
    setSubmitting(true);
    try {
      await pb.collection('bookings').delete(selectedBooking.id, { $autoCancel: false });
      toast.success('Booking deleted successfully');
      setIsDeleteDialogOpen(false);
      fetchBookings();
    } catch (error) {
      toast.error('Failed to delete booking');
      console.error(error);
    } finally {
      setSubmitting(false);
      setSelectedBooking(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Bookings</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Create New Booking
        </Button>
      </div>

      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Hostel</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-[100px] ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No bookings found.
                </TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium text-xs">{booking.id}</TableCell>
                  <TableCell>{booking.expand?.user_id?.name || booking.user_id}</TableCell>
                  <TableCell>{booking.expand?.hostel_id?.name || booking.hostel_id}</TableCell>
                  <TableCell>
                    {new Date(booking.check_in).toLocaleDateString()} - {new Date(booking.check_out).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="capitalize">{booking.status}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" onClick={() => handleOpenDialog(booking)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => { setSelectedBooking(booking); setIsDeleteDialogOpen(true); }}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedBooking ? 'Edit Booking' : 'Create New Booking'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user_id">User ID *</Label>
                <Input id="user_id" name="user_id" value={formData.user_id} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hostel_id">Hostel ID *</Label>
                <Input id="hostel_id" name="hostel_id" value={formData.hostel_id} onChange={handleInputChange} required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="room_id">Room ID *</Label>
              <Input id="room_id" name="room_id" value={formData.room_id} onChange={handleInputChange} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="check_in">Check In *</Label>
                <Input id="check_in" name="check_in" type="date" value={formData.check_in} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="check_out">Check Out *</Label>
                <Input id="check_out" name="check_out" type="date" value={formData.check_out} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guests">Guests *</Label>
                <Input id="guests" name="guests" type="number" min="1" value={formData.guests} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total_price">Total Price ($) *</Label>
                <Input id="total_price" name="total_price" type="number" step="0.01" value={formData.total_price} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(val) => handleSelectChange('status', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={handleCloseDialog} disabled={submitting}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? 'Saving...' : 'Save Booking'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            Are you sure you want to delete this booking? This action cannot be undone.
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} disabled={submitting}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteConfirm} disabled={submitting}>
              {submitting ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
