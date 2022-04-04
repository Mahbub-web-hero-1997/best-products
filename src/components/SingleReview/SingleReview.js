import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleReview.css'

const SingleReview = ({ review }) => {
    const { name, comment, img } = review;
    return (
        <div>
            <div className='review'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <h4>{comment}</h4>
            </div>)
        </div>
    );
};

export default SingleReview;