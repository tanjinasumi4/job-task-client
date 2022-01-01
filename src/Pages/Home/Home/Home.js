import React from 'react';
// import DisplayReviews from '../../DisplayReview/DisplayReviews/DisplayReviews';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <Explore></Explore>
           <Footer></Footer>
        </div>
    );
};

export default Home;