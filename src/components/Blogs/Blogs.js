import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs_Container'>
            <div className='blog'>
                <h2>Semantic Element কি?</h2>
                <p>একটি Web-page এর বিভিন্ন অংশকে Define করার জন্য এইচটিএমএল-5 এ  Semantic এলিমেন্টকে ব্যবহার করা হয়। Semantic Element এর নাম দেখেই Element এর Content সম্পর্কে ধারনা পাওয়া যায় যেটি Non-semantic element এর ক্ষেত্রে বুঝা সম্ভব হয় না। যেমান ঃ div,span এই দুই element এর মধ্যে কি ধরনের content থাকতে পারে তা সধারণভাবে বুঝা সম্ভব হয় না। Semantic Element গুলো হলো ঃ header,footer,section,article, aside ইত্যাদি। </p>
            </div>
            <div className='blog'>
                <h2>Context API কি?</h2>
                <p>Context API React এর 16.3 সংস্করণের একটি বৈশিষ্ঠ্য। Context API React app এর মধ্যে একটি Global variable তৈরী করার একটি কার্যকরী উপায়। যার মধ্যমে props drilling ব্যতীত Parent Component থেকে Child অথবা  Child of Child component এর মধ্যে Data পাঠানো যায়। এটি consumer এবং provider return করে। </p>

            </div>
        </div>
    );
};

export default Blogs;