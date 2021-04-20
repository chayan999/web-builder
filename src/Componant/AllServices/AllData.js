import React, { useEffect, useState } from 'react';
import DashBord from '../DashBord/DashBord';

const AllData = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-shore-26527.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const deleteProduct = (_id) => {
        fetch(`https://intense-shore-26527.herokuapp.com/delete/${_id}`, {

            method: 'DELETE',
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
            })
        })


    }
    return (
        <div>
            <DashBord></DashBord>
            <div className="container mt-5 text-center">
                <h1>Totla services is {services.length}</h1>
                {
                    services.map(order => <ol className="text-center">  Product: {order.name}, Price: {order.price},
                    <button class="btn btn-danger"
                            onClick={() => deleteProduct(`${order._id}`)}>
                            Delete
                    </button>
                        <hr /></ol>)
                }
            </div>
        </div>
    );
};

export default AllData;