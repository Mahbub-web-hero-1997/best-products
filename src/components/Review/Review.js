import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review_Container'>
            {
                reviews.map(review => <div className='review'>
                    <img src={review.img} alt="" />
                    <h2>{review.name}</h2>
                    <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                    <h4>{review.comment}</h4>
                </div>)
            }
        </div>
    );
};

export default Review;