import React from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import Service from "./Service";

const Services = () => (
    <section className="services">
        <SectionTitle title="services" />

        <div className="services-center">
            <Service icon={<FaCocktail />} title="Free Cocktails" />
            <Service icon={<FaHiking />} title="Endless Hiking" />
            <Service icon={<FaShuttleVan />} title="Free Shuttle" />
            <Service icon={<FaBeer />} title="Juicy Drinks" />
        </div>
    </section>
);

export default Services;
