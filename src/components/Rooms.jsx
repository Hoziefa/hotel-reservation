import React, { useContext, useRef } from "react";
import roomContext from "../contexts/roomContext";

import Hero from "./Hero";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import SectionTitle from "./SectionTitle";

const renderNoRooms = () => (
    <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
    </div>
);

const Rooms = () => {
    const { filteredRooms } = useContext(roomContext);
    const [rooms] = filteredRooms;
    const roomsSection = useRef(null);

    return (
        <>
            <Hero hero="rooms-hero">
                <div className="banner">
                    <h2>Our Rooms</h2>
                    <hr />
                    <button className="btn-primary" onClick={() => roomsSection.current.scrollIntoView()}>
                        Rooms
                    </button>
                </div>
            </Hero>

            <RoomsFilter filteredRooms={filteredRooms} />

            <section className="rooms-list" ref={roomsSection}>
                <SectionTitle title="Our Rooms" />

                {rooms.length ? <RoomsList rooms={rooms} roomsClassName="rooms-list-center" /> : renderNoRooms()}
            </section>
        </>
    );
};

export default Rooms;
