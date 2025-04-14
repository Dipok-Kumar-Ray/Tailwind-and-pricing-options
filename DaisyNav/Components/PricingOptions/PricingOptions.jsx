import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({PricingPromise}) => {

       const pricingData = use(PricingPromise)
    
    return (
        <div >
            <h2 className='text-5xl'>Get out Membership</h2>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>

                    )
                } */}

                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }

            </div>
        </div>
    );
};

export default PricingOptions;