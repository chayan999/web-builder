import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceInfo.css'
const ServiceInfo = ({ service }) => {
    console.log(service)
    return (


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <Link to='/shipment'>
                <div className="card-flyer">
                    <div className="text-box">
                        <div className="image-box">
                            {
                                service.image ? <img src={`data:image/jpeg;base64,${service?.image.img}`} alt="" />
                                    :
                                    <img src={`http://localhost:5000/${service.image}`} alt="" />
                            }

                        </div>
                        <div className="text-container">
                            <h6>{service.name}</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <h6 className='p-2'>Price ${service.price}</h6>
                            <Link to='/shipment' className='btn btn-success'>Buy NOW</Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div >


    );
};

export default ServiceInfo;