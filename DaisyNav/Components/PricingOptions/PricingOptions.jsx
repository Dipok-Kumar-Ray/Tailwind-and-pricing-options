import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPromise}) => {

       const pricingData = use(PricingPromise)
    
    return (
        <div >
            <h2 className='text-5xl'>Get out Membership</h2>
            <div className='grid gap-4 md:grid-cols-3'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>

                    )
                }
            </div>
        </div>
    );
};

export default PricingOptions;