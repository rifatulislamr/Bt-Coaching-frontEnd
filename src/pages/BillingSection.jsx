import React from 'react'
import { useParams } from 'react-router-dom'

function BillingSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Billing / {aID}</h1>
        </div>
    )
}

export default BillingSection
