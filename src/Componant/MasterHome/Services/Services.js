import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import reactjs from '../../../Image/reactjs.jpg';
import php from '../../../Image/php.jpg';
import python from '../../../Image/pyton.jpg';
import ruby from '../../../Image/ruby.jpg';
const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Build your site with React JS ',
            image: reactjs,
            price: 200,
        },
        {
            id: 2,
            title: 'Build your site with PHP LARAVEL ',
            image: php,
            price: 100,
        },
        {
            id: 3,
            title: 'Build your site with PYTHON ',
            image: python,
            price: 300,
        },
        {
            id: 4,
            title: 'Build your site with RUBY ',
            image: ruby,
            price: 300,
        },
    ]
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
                                >

                                </ServiceInfo>)
                            }
                        </div>
                    </div>

                </div >
            </div >
        </div >
    );
};

export default Services;