package com.example.Book.Review.App.Backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "book_reviews")
public class BookReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private int rating; // Between 1 and 5 stars.

    @Column(nullable = false, length = 2000)
    private String reviewText;

    @Column(nullable = false)
    private LocalDate dateAdded = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Links each review to a user.
}
