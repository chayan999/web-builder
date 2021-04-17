import React from 'react';
//import './ReviewInfo.css'
const ReviewInfo = ({ review }) => {
    return (


        <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
                <img src={review.image} class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
                <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
            </li>
        </ul>


    );
};

export default ReviewInfo;