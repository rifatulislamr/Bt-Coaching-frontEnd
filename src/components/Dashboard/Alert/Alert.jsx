import React from 'react';

const Alert = () => {
    return (
        <div className='font-serif shadow-xl rounded-lg p-2  border-t-green-700 border-t-4 mt-10 mb-10 mr-4'>
            <h1>You have a/an <span className='text-red-700'>UNPAID</span> Bill- #0011. Due Date:2024-04-10 </h1>
            <button className='hover:bg-gradient-to-r from-blue-500 to-red-500 bg-slate-600 p-3 rounded-full uppercase mt-4 text-white'>Pay now</button>
        </div>
    );
};

export default Alert;