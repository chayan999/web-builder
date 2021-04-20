import React from 'react';
import homeimage from '../../../Image/homeimage.jpg';
import './MaineHeader.css'
const MineHeader = () => {
    return (
        <main className="row d-flex align-items-center head-bg ">
            <div className="col-md-4 offset-md-1 text-light">
                <h1 className='text-capitalize text-light '>
                    Welcome to <br />Web builder web site
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, hic eaque facere culpa earum totam! Tempore asperiores sunt blanditiis soluta.</p>
                <button className='btn btn-primary text-uppercase'>More</button>
            </div>
            <div className="col-md-6">
                <img src={homeimage} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default MineHeader;