import React from 'react'
import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import "../css/ratingcard.css";

export default function Ratingcard() {
    return (
        <div>
            <Card href="#" className="card">
    <div>
        {/* User Profile Photo */}
        <img src="/images/userdefault.jpg" alt="User Profile" />

          {/* User Review Comment */}
          <p className="review-comment">
            "Great experience with this product! Highly recommended."
        </p>

        {/* Rating */}
        <Rating className="rating">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </Rating>

    </div>
</Card>

        </div>
    )
}

