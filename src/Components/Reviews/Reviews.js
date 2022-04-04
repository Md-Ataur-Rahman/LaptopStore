import React from 'react';
import './Reviews.css';
import '../../style.css';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
  return (
      
    <div className='reviews-section'>
        <div className="container">
            <div className="inner-reviews-section">
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Reviews