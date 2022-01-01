import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

const Explore2 = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ExploreHeader></ExploreHeader>
            <AvailableProducts></AvailableProducts>
        </div>
    );
};

export default Explore2;