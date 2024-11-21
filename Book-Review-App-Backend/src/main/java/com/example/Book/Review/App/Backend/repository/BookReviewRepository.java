package com.example.Book.Review.App.Backend.repository;

import com.example.Book.Review.App.Backend.model.BookReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookReviewRepository extends JpaRepository<BookReview, Long> {
    List<BookReview> findByRating(int rating); // To filter reviews by rating.
}
