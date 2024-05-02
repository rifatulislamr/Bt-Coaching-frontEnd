import React from 'react'
import { useParams } from 'react-router-dom'

function SmsSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>SMS / {aID}</h1>
        </div>
    )
}

export default SmsSection
