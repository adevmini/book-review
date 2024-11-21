import { Link } from 'react-router-dom';
import { Button } from "../elements/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../elements/card"
import { Star } from 'lucide-react'
import axios from 'axios'
import { useEffect } from 'react';

export default function BookCard({ id, title, author, description, averageRating }) {



    return (

        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{author}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{averageRating.toFixed(1)}</span>
                </div>
            </CardContent>
            <CardFooter>
                <Link to={`/review/${id}`}>
                    <Button>Review</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

