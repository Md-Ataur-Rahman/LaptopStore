import React from 'react';
import useReviews from '../hooks/useReviews';
import './Home.css';
import '../../style.css';
import Review from '../Review/Review';
import heroImage from './laptop.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [reviews] = useReviews();
    const limitedReviews =reviews.slice(0, 3);
    console.log(reviews);
    const navigate = useNavigate();

    const handlerToReviews = () => {
        navigate('/reviews')
    }

  return (
    <>
        <div className='hero-section'>
            <div className="inner-hero-section">
                    <div className="container divider">
                        <div className="hero-text-section">
                            <h1 className='hero_title'>Our Best Laptop In <br /> The <span className='hero_title_span'>World</span></h1>
                            <p className='hero_text'>Our Laptop is Number One Best Laptop In The World.It Is So Popular And These Things Go At A Very Low Price. That's Why Our Laptop Is Best.</p>
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
                <button onClick={handlerToReviews} className='reviews-btn'>See All Reviews</button>                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Home