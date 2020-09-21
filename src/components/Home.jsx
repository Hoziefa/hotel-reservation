import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";

const Home = () => {
    return (
        <div className="main-container">
            <Hero>
                <div className="banner">
                    <h1>Luxurious Rooms</h1>
                    <hr />
                    <p>Deluxe Rooms Starts At $299</p>
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </div>
            </Hero>

            <Services />

            <FeaturedRooms />
        </div>
    );
};

export default Home;
