import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  axios from 'axios';
import getConfig from './../utils/getConfig';
import PurchaseCard from '../components/Purchases/PurchaseCard';
import './styles/purchases.css'

const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
        .then(res => setPurchasesList(res.data.data.purchases))
        .catch(err => console.log(err))
    },[])

  return (
    <section className='purchase-main'>
        <div className='purchases-container'>
            {
                purchasesList?.map((purchase)=>(
                    <PurchaseCard key={purchase.id} purchase={purchase}/>
                ))
            }
        </div>
    </section>
  )
}

export default Purchases