import React, { useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import { useEffect } from 'react';
const Services = () => {
    const [serviceData, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="py-5">

                <div id="cards_landscape_wrap-2">
                    <h3 className='text-center pt-5'>Our Services</h3>
                    <div class="container ">
                        <div class="row">
                            {
                                serviceData.map(service => <ServiceInfo
                                    key={service.key}
                                    service={service}
                                ></ServiceInfo>)
                            }
                        </div>
                    </div>

                </div >
            </div >
        </div >
    );
};

export default Services;