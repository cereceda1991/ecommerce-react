import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PurchaseCard from '../components/Purchases/PurchaseCard';
import './styles/purchases.css'
import getToken from './../utils/getConfig';

const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

        axios.get(url, getToken())
            .then(res => setPurchasesList(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='purchase__main'>
            <div className='purchases__container'>
                <div className='card__purchases-title'>
                    <h4>Date</h4>
                    <h4>Purchase Id</h4>
                    <h4>Product</h4>
                    <h4>Name</h4>
                    <h4>Unit Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total Price</h4>
                </div>
                <div>
                    {
                        purchasesList
                            ?.sort((a, b) => b.id - a.id) // Ordenar la matriz por ID de mayor a menor
                            .map((purchase) => (
                                <PurchaseCard key={purchase.id} purchase={purchase} />
                            ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Purchases;
