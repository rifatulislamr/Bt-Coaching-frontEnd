import React from 'react'
import { useParams } from 'react-router-dom';

function SettingSection() {
    const { aID } = useParams();
    return (
        <div>
            <h1>Setting / {aID}</h1>
        </div>
    )
}

export default SettingSection
