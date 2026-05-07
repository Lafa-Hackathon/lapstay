
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Edit, Trash2, Plus } from 'lucide-react';

const AMENITIES_LIST = ['WiFi', 'Kitchen', 'Parking', 'Laundry', 'Gym', 'AC', 'Heating', 'Hot Water'];

export default function HostelsManagement() {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    price_per_night: '',
    rating: '',
    amenities: [],
    images: null
  });

  const fetchHostels = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('hostels').getList(1, 100, { $autoCancel: false, sort: '-created' });
      setHostels(records.items);
    } catch (error) {
      toast.error('Failed to fetch hostels');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  const handleOpenDialog = (hostel = null) => {
    if (hostel) {
      setSelectedHostel(hostel);
      setFormData({
        name: hostel.name || '',
        location: hostel.location || '',
        description: hostel.description || '',
        price_per_night: hostel.price_per_night || '',
        rating: hostel.rating || '',
        amenities: hostel.amenities || [],
        images: null
      });
    } else {
      setSelectedHostel(null);
      setFormData({
        name: '',
        location: '',
        description: '',
        price_per_night: '',
        rating: '',
        amenities: [],
        images: null
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedHostel(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
  };

  const handleAmenityChange = (amenity, checked) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      } else {
        return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('location', formData.location);
      data.append('description', formData.description);
      if (formData.price_per_night) data.append('price_per_night', formData.price_per_night);
      if (formData.rating) data.append('rating', formData.rating);
      
      formData.amenities.forEach(amenity => {
        data.append('amenities', amenity);
      });

      if (formData.images) {
        for (let i = 0; i < formData.images.length; i++) {
          data.append('images', formData.images[i]);
        }
      }

      if (selectedHostel) {
        await pb.collection('hostels').update(selectedHostel.id, data, { $autoCancel: false });
        toast.success('Hostel updated successfully');
      } else {
        await pb.collection('hostels').create(data, { $autoCancel: false });
        toast.success('Hostel created successfully');
      }
      
      handleCloseDialog();
      fetchHostels();
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedHostel) return;
    setSubmitting(true);
    try {
      await pb.collection('hostels').delete(selectedHostel.id, { $autoCancel: false });
      toast.success('Hostel deleted successfully');
      setIsDeleteDialogOpen(false);
      fetchHostels();
    } catch (error) {
      toast.error('Failed to delete hostel');
      console.error(error);
    } finally {
      setSubmitting(false);
      setSelectedHostel(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Hostels</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Create New Hostel
        </Button>
      </div>

      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price/Night</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[50px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-[100px] ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : hostels.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No hostels found. Create one to get started.
                </TableCell>
              </TableRow>
            ) : (
              hostels.map((hostel) => (
                <TableRow key={hostel.id}>
                  <TableCell className="font-medium">{hostel.name}</TableCell>
                  <TableCell>{hostel.location}</TableCell>
                  <TableCell>${hostel.price_per_night}</TableCell>
                  <TableCell>{hostel.rating}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" onClick={() => handleOpenDialog(hostel)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => { setSelectedHostel(hostel); setIsDeleteDialogOpen(true); }}>
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
            <DialogTitle>{selectedHostel ? 'Edit Hostel' : 'Create New Hostel'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={3} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price_per_night">Price per Night ($)</Label>
                <Input id="price_per_night" name="price_per_night" type="number" step="0.01" value={formData.price_per_night} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating">Rating (0-5)</Label>
                <Input id="rating" name="rating" type="number" min="0" max="5" step="0.1" value={formData.rating} onChange={handleInputChange} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Amenities</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {AMENITIES_LIST.map(amenity => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`amenity-${amenity}`} 
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, checked)}
                    />
                    <Label htmlFor={`amenity-${amenity}`} className="text-sm font-normal cursor-pointer">{amenity}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="images">Images (Max 10)</Label>
              <Input id="images" name="images" type="file" multiple accept="image/*" onChange={handleFileChange} />
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={handleCloseDialog} disabled={submitting}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? 'Saving...' : 'Save Hostel'}</Button>
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
            Are you sure you want to delete <strong>{selectedHostel?.name}</strong>? This action cannot be undone.
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
