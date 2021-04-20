import React, { useState } from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

//const axios = require('axios').default;

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageUrl] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            img: imageURL,
            email: data.email,
            comment: data.comment,

        };
        console.log(eventData)
        const url = `https://intense-shore-26527.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site responsd', res))
    };
    const hendelImageUplode = event => {
        // console.log(event.target.files)

        const imageData = new FormData();
        imageData.set('key', '98013b1c222fff498e57c225e04b3b5b');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className=' contact-body' >
            <div class="container contact">
                <div class="row">
                    <div class="col-md-3 contact-md-3">
                        <div class="contact-info">

                            <h2>Review Us</h2>
                            <h4>We would love to hear from you !</h4>
                        </div>
                    </div>
                    <div class="col-md-9 contact-md-9">
                        <div class="contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="fname"> Name:</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" name='name' {...register("name")} />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" {...register("email")} id="email" placeholder="Enter email" name="email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="comment">Comment:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" {...register("comment")} id="comment" name='comment'></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2">UPlode your Image</label>
                                    <div class="col-sm-10">
                                        <input type="file" class="form-control"
                                            onChange={hendelImageUplode} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-default">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default Contact;