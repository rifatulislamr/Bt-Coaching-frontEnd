import React from 'react'
import { useParams } from 'react-router-dom';

function StudentSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Student / {aID}</h1>

        </div>
    )
}

export default StudentSection
