package com.example.Book.Review.App.Backend.service;

import com.example.Book.Review.App.Backend.model.BookReview;
import com.example.Book.Review.App.Backend.repository.BookReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookReviewService {
    private final BookReviewRepository bookReviewRepository;

    public BookReviewService(BookReviewRepository bookReviewRepository) {
        this.bookReviewRepository = bookReviewRepository;
    }

    public List<BookReview> getAllReviews() {
        return bookReviewRepository.findAll();
    }

    public BookReview addReview(BookReview review) {
        return bookReviewRepository.save(review);
    }

    public List<BookReview> getReviewsByRating(int rating) {
        return bookReviewRepository.findByRating(rating);
    }
}
