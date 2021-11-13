import React from 'react';
import HomeServices from '../HomeServices/HomeServices';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import ShowReviews from '../ShowReviews/ShowReviews';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <TopSlider></TopSlider>
            <Banner></Banner>
            <Partners></Partners>
            <HomeServices />
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default Home;