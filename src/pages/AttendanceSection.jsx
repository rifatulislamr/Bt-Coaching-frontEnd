import React from 'react'
import { useParams } from 'react-router-dom';

function AttendanceSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Attendance / {aID}</h1>
        </div>
    )
}

export default AttendanceSection
