import React from 'react'
import { useParams } from 'react-router-dom'

function TransactionSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Transaction / {aID}</h1>
        </div>
    )
}

export default TransactionSection
