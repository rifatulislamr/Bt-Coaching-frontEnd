import React from 'react'
import { useParams } from 'react-router-dom'

function TeacherSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Teachers / {aID}</h1>
        </div>
    )
}

export default TeacherSection
