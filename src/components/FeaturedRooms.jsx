import React, { useContext } from "react";
import roomContext from "../contexts/roomContext";

import SectionTitle from "./SectionTitle";
import RoomsList from "./RoomsList";

const FeaturedRooms = () => {
    const [rooms] = useContext(roomContext).roomsList;

    return (
        <section className="featured-rooms">
            <SectionTitle title="featured rooms" />
            <RoomsList rooms={rooms.filter(({ featured }) => featured)} roomsClassName="featured-rooms-center" />
        </section>
    );
};

export default FeaturedRooms;
