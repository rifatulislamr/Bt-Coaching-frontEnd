import React from 'react'
import { useParams } from 'react-router-dom'

function ExamSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1> Exam / {aID}</h1>
        </div>
    )
}

export default ExamSection
