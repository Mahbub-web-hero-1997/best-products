import React from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='reviews-section'>
            <h1>What Our Customer Say</h1>
            <Review></Review>
        </div>
    );
};

export default Reviews;