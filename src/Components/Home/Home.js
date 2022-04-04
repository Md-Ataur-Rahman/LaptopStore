import React from 'react';
import useReviews from '../hooks/useReviews';
import './Home.css';
import '../../style.css';
import Review from '../Review/Review';
import heroImage from './laptop.png';


const Home = () => {
    const [reviews] = useReviews();
    const limitedReviews =reviews.slice(0, 3);
    console.log(reviews);

  return (
    <>
        <div className='hero-section'>
            <div className="inner-hero-section">
                    <div className="container divider">
                        <div className="hero-text-section">
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt totam beatae. Tenetur.</h1>
                            <p style={{paddingTop: "1rem", paddingBottom: ".75rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi omnis impedit reiciendis. Alias dolor enim voluptas veritatis totam, molestias atque excepturi. Placeat autem veritatis error, qui eveniet corrupti. Veniam, sint?</p>
                            <button className='hero-btn'>Live Demo</button>
                        </div>
                        <div className="hero-img-section">
                            <img src={heroImage} alt="" />
                        </div>
                    </div>
            </div>
        </div>

        <div className="customer-reviews-section">
            <div className="container">
                <h1 className='customer_heading'>Customer Reviews <span>({limitedReviews.length})</span></h1>
                <div className="inner-customer-reviews-section">
                    {
                        limitedReviews.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
                <div className="btn-div">
                    <button className='reviews-btn'>See All Reviews</button>                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Home