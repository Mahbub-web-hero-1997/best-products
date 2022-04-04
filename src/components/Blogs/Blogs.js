import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs_Container'>
            <div className='blog'>
                <h2>Semantic Element কি?</h2>
                <p>একটি Web-page এর বিভিন্ন অংশকে Define করার জন্য এইচটিএমএল-5 এ  Semantic এলিমেন্টকে ব্যবহার করা হয়। Semantic Element এর নাম দেখেই Element এর Content সম্পর্কে ধারনা পাওয়া যায়। Semantic Element গুলো হলো ঃ header,footer,section,article, aside ইত্যাদি। </p>
            </div>
            <div className='blog'></div>
        </div>
    );
};

export default Blogs;