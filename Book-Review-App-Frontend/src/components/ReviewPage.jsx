import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "../elements/button"
import { Textarea } from "../elements/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "../elements/card"

const book = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A classic novel about racial injustice in the American South.",
};

const initialReviews = [
    { id: 1, user: "Alice", content: "A timeless classic that everyone should read.", rating: 5 },
    { id: 2, user: "Bob", content: "Powerful and moving story with unforgettable characters.", rating: 4 },
];

export default function ReviewPage() {
    const { id } = useParams();
    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState('');

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            const review = {
                id: reviews.length + 1,
                user: "Current User", // This would normally come from authentication
                content: newReview,
                rating: 5, // You might want to add a rating input
            };
            setReviews([...reviews, review]);
            setNewReview('');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">&larr; Back to Home</Link>
            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
            <p className="text-xl mb-2">{book.author}</p>
            <p className="mb-6">{book.description}</p>

            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {reviews.map((review) => (
                <Card key={review.id} className="mb-4">
                    <CardHeader>
                        <CardTitle>{review.user}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{review.content}</p>
                        <p className="text-sm text-gray-500 mt-2">Rating: {review.rating}/5</p>
                    </CardContent>
                </Card>
            ))}

            <h3 className="text-xl font-bold mt-8 mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmitReview}>
                <Textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review here..."
                    className="w-full mb-4"
                    rows={4}
                />
                <Button type="submit">Submit Review</Button>
            </form>
        </div>
    );
}

