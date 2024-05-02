import React from 'react'
import { useParams } from 'react-router-dom'

function PaymentSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Payment / {aID}</h1>
        </div>
    )
}

export default PaymentSection
