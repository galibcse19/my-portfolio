import React from 'react';

const SharedTitle = ({title}) => {
    return (
        <div className='py-6'>
            <h2 className='font-bold text-center lg:text-3xl text-2xl mb-4 text-[#9E31F1]'>{title}</h2>
            <hr />
        </div>
    );
};

export default SharedTitle;