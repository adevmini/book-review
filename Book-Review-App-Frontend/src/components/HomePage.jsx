import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { Button } from "../elements/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../elements/select"

const initialBooks = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A classic novel about racial injustice in the American South.", averageRating: 4.5 },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society.", averageRating: 4.3 },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", description: "A romantic novel of manners set in Georgian England.", averageRating: 4.7 },
];

export default function HomePage() {
    const [books, setBooks] = useState(initialBooks);
    const [sortOrder, setSortOrder] = useState('desc');
    useEffect(() => {
        async () => {
            try {
                const res = axios.get("http://localhost:8080/bookapp/reviews")
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    const sortBooks = (order) => {
        const sortedBooks = [...books].sort((a, b) => {
            if (order === 'asc') {
                return a.averageRating - b.averageRating;
            } else {
                return b.averageRating - a.averageRating;
            }
        });
        setBooks(sortedBooks);
        setSortOrder(order);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Book Review App</h1>
                <Link to="/profile">
                    <Button variant="outline">Profile</Button>
                </Link>
            </header>
            <div className="mb-6">
                <Select onValueChange={(value) => sortBooks(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="desc">Highest Rated First</SelectItem>
                        <SelectItem value="asc">Lowest Rated First</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
}

