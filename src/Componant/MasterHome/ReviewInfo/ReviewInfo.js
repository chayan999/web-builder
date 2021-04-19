import React from 'react';
//import './ReviewInfo.css'
const ReviewInfo = ({ review }) => {

    return (


        <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
                <img src={review.img} class="wpx-100 img-round mgb-20" alt="" />
                <p class="fs-110 font-cond-l">"{review.comment}"</p>
                <h5 class="font-cond mgb-5 fg-text-d fs-130">{review.name}</h5>
                <small class="font-cond case-u lts-sm fs-80 fg-text-l">{review.email}</small>
            </li>
        </ul>


    );
};

export default ReviewInfo;