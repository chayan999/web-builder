import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div class='container-fluid footer-bg'>
            <div class="card">
                <div class="heading text-center text-dark pb-2">
                    <div class="head1">Just Scratching the Surface</div>
                    <p class="bdr"></p>
                </div>
                <div class="card-body ">
                    <div class="row m-0 pt-5">
                        <div class="card col-12 col-md-3">
                            <div class="card-content"> <i class="fas fa-hand-holding-usd fa-3x"></i>
                                <div class="card-title footer-card-title"> RECHARGE REPEAT CUSTOMER </div>
                                <p><small>Save customers' cards for future phone orders</small></p>
                                <div class="learn-more">
                                    <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-3">
                            <div class="card-content"> <i class="far fa-handshake fa-3x"></i>
                                <div class="card-title footer-card-title"> ACCEPT ELECTRONIC CHECK </div>
                                <p><small>Save customers' cards for future phone orders</small></p>
                                <div class="learn-more">
                                    <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-3">
                            <div class="card-content"> <i class="fas fa-mobile-alt fa-3x"></i>
                                <div class="card-title footer-card-title"> STREAMLINE PHONE PAYMENTS </div>
                                <p><small>Save customers' cards for future phone orders</small></p>
                                <div class="learn-more">
                                    <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-3">
                            <div class="card-content"> <i class="fas fa-user-secret fa-3x"></i>
                                <div class="card-title footer-card-title"> STAY<br /> SECURE </div>
                                <p><small>Save customers' cards for future phone orders</small></p>
                                <div class="learn-more">
                                    <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-dark row m-0">
                    <p> <label> <i class="fas fa-phone fa-rotate-90 text-primary"></i> </label> 800-601-0230</p>
                    <div>
                        <p> <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right">
                            <FontAwesomeIcon className="icon ml-3" icon={faInstagram} />
                            <FontAwesomeIcon className="icon ml-3 active-icon" icon={faFacebookF} />
                            <FontAwesomeIcon className="icon ml-3" icon={faLinkedinIn} />
                            <FontAwesomeIcon className="icon ml-3" icon={faTwitter} />
                        </label> </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;