import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    return (
        <div className='Container'>
            <div className='home_Container'>
                <div className="title_section">
                    <h1>CANON EOS 5D MARK-II</h1>
                    <p>The Canon 5D Mark II is the world's best DSLR for nature and landscape shooting because its technical performance is as good or better than competitive cameras that cost up to three times as much, and because it weighs so much less than other full-frame DSLRs.</p>
                </div>
                <div className="banner_section">
                    <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
            <h1 className='review_Title'>Reviews</h1>
            <Review></Review>
            <Link to='/reviews'>
                <button className="cta">
                    <span>See all reviews</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </Link>
        </div >
    );
};

export default Home;