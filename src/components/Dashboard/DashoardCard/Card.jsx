import React from 'react';
import { BsCashCoin, BsClipboard2CheckFill, BsPeopleFill, BsPersonCircle } from 'react-icons/bs';

const Card = ({ item }) => {
    const { title, content, color, iconName } = item;

    return (
        <>
            <div className={`card border-2 p-2 rounded-lg shadow-2xl  bg-${color}-400 hover:cursor-pointer h-auto rounded-xl p-6 border  hover:rounded-3xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:shadow-amber-300 hover:shadow-2xl`}>

                <h2 className='text-3xl flex gap-2 items-center'>
                    <span className=''>{
                        iconName === 'student' ? <BsPeopleFill /> : iconName === 'teacher' ? <BsPersonCircle /> : iconName === 'attendance' ? <BsClipboard2CheckFill
                        /> : iconName === 'money' ? <BsCashCoin /> : null
                    }</span>
                    {title}</h2>
                <p className='font-bold text-center mt-5 text-2xl'>{content}</p>


            </div>

        </>
    );
};

export default Card;
