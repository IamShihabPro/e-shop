import React from 'react';
import Hero from '../../components/Hero/Hero';
import Popular from '../../components/Popular/Popular';
import Offers from '../../components/Offers/Offers';
import NewCollection from '../../components/NewCollection/NewCollection';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollection></NewCollection>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;