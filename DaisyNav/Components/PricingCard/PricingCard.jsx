import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
        const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-100 rounded-2xl p-4'>
            {/* card header */}
            <div >
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            {/* card body */}

            <div className='bg-amber-200 rounded-2xl mt-9 p-4 flex-1' >
            <p>{description}</p>
            {
                features.map((feature, index) => <PricingFeature key={index} feature={feature} ></PricingFeature>)
            }
            </div>
            <button className="btn w-full bg-amber-950 text-white rounded-3xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;