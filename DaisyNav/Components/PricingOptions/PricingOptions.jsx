import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPromise}) => {

       const pricingData = use(PricingPromise)
    
    return (
        <div>
            <h2 className='text-5xl'>Get out Membership</h2>
            <div>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>

                    )
                }
            </div>
        </div>
    );
};

export default PricingOptions;