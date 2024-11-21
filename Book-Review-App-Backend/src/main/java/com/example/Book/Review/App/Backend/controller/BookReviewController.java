package com.example.Book.Review.App.Backend.controller;

import com.example.Book.Review.App.Backend.model.BookReview;
import com.example.Book.Review.App.Backend.service.BookReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class BookReviewController {
    private final BookReviewService bookReviewService;

    public BookReviewController(BookReviewService bookReviewService) {
        this.bookReviewService = bookReviewService;
    }

    @GetMapping
    public List<BookReview> getAllReviews() {
        return bookReviewService.getAllReviews();
    }

    @PostMapping
    public ResponseEntity<BookReview> addReview(@RequestBody BookReview review) {
        return ResponseEntity.ok(bookReviewService.addReview(review));
    }

    @GetMapping("/rating/{rating}")
    public List<BookReview> getReviewsByRating(@PathVariable int rating) {
        return bookReviewService.getReviewsByRating(rating);
    }
}
