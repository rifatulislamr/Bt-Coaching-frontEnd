import React from 'react';
import Card from './Card'; // Assuming Card component is in a separate file


const CardList = () => {
    const cardData = [
        { title: 'Student', content: 539, color: 'green', iconName: 'student' },
        { title: 'Teacher', content: 20, color: 'red', iconName: 'teacher' },
        { title: 'Attendance', content: 75, color: 'green', iconName: 'attendance' },
        { title: 'Fees', content: 235410, color: 'red', iconName: 'money' },

    ];
    return (
        <>
            <div className="card-list grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mr-4">
                {cardData.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </>
    );
};

export default CardList;
