import React from 'react';
import { BsCashCoin, BsClipboard2CheckFill, BsPeopleFill, BsPersonCircle } from 'react-icons/bs';

const Card = ({ item }) => {
    const { title, content, iconName } = item;

    return (
        <>
            <div className={`card  shadow-2xl  hover:cursor-pointer h-auto rounded-xl p-6 bg-white border-2   hover:rounded-3xl hover:bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-700 hover:text-white hover:shadow-amber-300 hover:shadow-2xl`}>

                <h2 className='text-2xl flex gap-2 items-center'>
                    <span className=''>{
                        iconName === 'student' ? <BsPeopleFill /> : iconName === 'teacher' ? <BsPersonCircle /> : iconName === 'attendance' ? <BsClipboard2CheckFill
                        /> : iconName === 'money' ? <BsCashCoin /> : null
                    }</span>
                    {title}</h2>
                <p className='font-bold text-center mt-5 text-2xl'>{content}</p>
                        <p>riad</p>
                        <p>riad</p>


            </div>

        </>
    );
};

export default Card;
