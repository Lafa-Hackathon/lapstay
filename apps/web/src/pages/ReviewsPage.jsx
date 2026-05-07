import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

export default function ReviewsPage() {
  const { hostelId } = useParams();
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [hostel, setHostel] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const h = await pb.collection('hostels').getOne(hostelId, { $autoCancel: false });
        setHostel(h);
        
        const r = await pb.collection('reviews').getList(1, 50, {
          filter: `hostel_id = "${hostelId}"`,
          sort: '-created',
          expand: 'user_id',
          $autoCancel: false
        });
        setReviews(r.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [hostelId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return toast.error('Please log in to review');
    
    setSubmitting(true);
    try {
      const newReview = await pb.collection('reviews').create({
        user_id: currentUser.id,
        hostel_id: hostelId,
        rating,
        comment
      }, { $autoCancel: false });
      
      setReviews([newReview, ...reviews]);
      setComment('');
      toast.success('Review submitted!');
    } catch (error) {
      toast.error('Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-serif font-bold mb-2">Reviews for {hostel?.name}</h1>
      <p className="text-muted-foreground mb-8">Read what others have to say or share your own experience.</p>

      {currentUser && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star className={`h-6 w-6 ${star <= rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Comment</label>
                <Textarea 
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Share your experience..."
                  required
                  className="text-foreground"
                />
              </div>
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Review'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet. Be the first!</p>
        ) : (
          reviews.map(review => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-medium">{review.expand?.user_id?.name || 'Anonymous User'}</p>
                    <p className="text-xs text-muted-foreground">{new Date(review.created).toLocaleDateString()}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/90">{review.comment}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}