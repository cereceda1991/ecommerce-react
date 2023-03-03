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
        <section className='purchase-main'>
            <div className='purchases-container'>
                {
                    purchasesList?.map((purchase) => (
                        <PurchaseCard key={purchase.id} purchase={purchase} purchasesList={purchasesList} />
                    ))
                }
            </div>
        </section>
    )
}

export default Purchases