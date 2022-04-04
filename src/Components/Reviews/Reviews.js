import React from 'react';
import './Reviews.css';
import '../../style.css';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Reviews = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
  return (
      
    <div className='reviews-section'>
        <div className="container">
            <h1 className='customers_heading'>Customers Review</h1>
            <div className="inner-reviews-section">
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </div>
            <div className='take_back_btn_div'>
                <button className='take_back_btn' onClick={() => navigate(-1)}><FaArrowLeft />Take Back</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews