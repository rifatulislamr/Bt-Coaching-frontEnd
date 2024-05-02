import React from 'react'
import { useParams } from 'react-router-dom'

function ScheduleSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Schedule / {aID}</h1>
        </div>
    )
}

export default ScheduleSection
