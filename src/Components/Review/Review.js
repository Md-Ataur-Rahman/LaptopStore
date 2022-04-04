import React from 'react';
import './Review.css';

const Review = (props) => {
  const { name, rating, reviewsData, user_pic } = props.review;
  console.log(name)
  return (
    <div className='review-body'>
      <div className="review-header">
        <img src={user_pic} alt="" className='user_image'/>
        <h4 className='user_name'>{name}</h4>
      </div>
      <p className='user_text'>{reviewsData}</p>
      <p className='user_rating'>User Rating: {rating}</p>
    </div>
  )
}

export default Review