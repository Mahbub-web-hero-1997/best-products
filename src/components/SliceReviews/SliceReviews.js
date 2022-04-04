import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useReview from '../../hook/useReview';
import SingleReviews from '../SingleReview/SingleReview';

const SliceReviews = () => {
    const [reviews, setReviews] = useReview()
    const newReviews = reviews.slice(0, 3)

    return (

        < div className='review_Container'>
            {
                newReviews.map(review => <div className='review'>
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
        </div >
    );
};

export default SliceReviews;