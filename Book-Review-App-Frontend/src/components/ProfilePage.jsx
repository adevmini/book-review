import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../elements/button"
import { Input } from "../elements/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../elements/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../elements/select"

const initialReviews = [
    { id: 1, bookTitle: "To Kill a Mockingbird", content: "A must-read classic!", rating: 5, date: new Date('2023-05-15') },
    { id: 2, bookTitle: "1984", content: "Chilling and thought-provoking.", rating: 4, date: new Date('2023-06-20') },
    { id: 3, bookTitle: "Pride and Prejudice", content: "Beautifully written romance.", rating: 5, date: new Date('2023-04-10') },
];

export default function ProfilePage() {
    const [reviews, setReviews] = useState(initialReviews);
    const [editingId, setEditingId] = useState(null);
    const [editContent, setEditContent] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    const handleEdit = (id, content) => {
        setEditingId(id);
        setEditContent(content);
    };

    const handleSave = (id) => {
        setReviews(reviews.map(review =>
            review.id === id ? { ...review, content: editContent } : review
        ));
        setEditingId(null);
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    const sortReviews = (order) => {
        const sortedReviews = [...reviews].sort((a, b) => {
            if (order === 'asc') {
                return a.date.getTime() - b.date.getTime();
            } else {
                return b.date.getTime() - a.date.getTime();
            }
        });
        setReviews(sortedReviews);
        setSortOrder(order);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">&larr; Back to Home</Link>
            <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Reviews</h2>
                <Select onValueChange={(value) => sortReviews(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="desc">Newest First</SelectItem>
                        <SelectItem value="asc">Oldest First</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {reviews.map((review) => (
                <Card key={review.id} className="mb-4">
                    <CardHeader>
                        <CardTitle>{review.bookTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {editingId === review.id ? (
                            <Input
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="w-full mb-2"
                            />
                        ) : (
                            <p>{review.content}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-2">Rating: {review.rating}/5</p>
                        <p className="text-sm text-gray-500">Date: {review.date.toLocaleDateString()}</p>
                    </CardContent>
                    <CardFooter>
                        {editingId === review.id ? (
                            <Button onClick={() => handleSave(review.id)} className="mr-2">Save</Button>
                        ) : (
                            <Button onClick={() => handleEdit(review.id, review.content)} className="mr-2">Edit</Button>
                        )}
                        <Button onClick={() => handleDelete(review.id)} variant="destructive">Delete</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

