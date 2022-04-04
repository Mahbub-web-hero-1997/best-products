import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css'
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review_Container'>
            {
                reviews.map(review => <SingleReview
                    key={review.id}
                    review={review}
                ></SingleReview>)
            }
        </div>
    );
};

export default Review;