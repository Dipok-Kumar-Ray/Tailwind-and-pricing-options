import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature}) => {
    console.log(feature);
    return (
        <p className='flex mt-4'> <CircleCheckBig  className='mr-2' /> {feature}</p>
    );
};

export default PricingFeature;