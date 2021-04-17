import React from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import '../ReviewInfo/ReviewInfo.css'
import aba from '../../../Image/profile1.jpg'
const Review = () => {
    const reviewData = [
        {
            id: 1,
            name: 'Michael Gare ',
            image: aba,
        },
        {
            id: 2,
            name: 'Michael Gare ',
            image: aba,


        },
        {
            id: 3,
            name: 'Michael Gare ',
            image: aba,
        }
    ]
    return (
        <div className='container review-container'>
            <div class="mb-5">
                <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
                    <h4 class="font-cond-l fg-accent lts-md mgb-10" >Not Yet Convinced?</h4>
                    <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" >Read Customer Reviews</h1>
                </div>
                {
                    reviewData.map(review => <ReviewInfo review={review}></ReviewInfo>)
                }
            </div>
        </div >
    );
};

export default Review;