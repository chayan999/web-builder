import React from 'react';
import Payment from '../PaymentSystem/Payment/Payment';


const Shapmint = () => {
    //      const hendelPayment = pamintId => {


    //          }
    //  }
    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-md-6">
                    <form action="" className="from-group">
                        <input type="text" className="form-control" placeholder='Name' />
                        <br />
                        <input type="email" className="form-control" placeholder='Email' />
                        <br />
                        <input type="text" className="form-control" placeholder='Address' />
                        <br />
                    </form>
                </div>
                <div className="col-md-6">
                    <h4 className='text-center'>please pay your bill</h4>
                    <Payment></Payment>
                </div>
            </div>
        </div>
    );
};

export default Shapmint;