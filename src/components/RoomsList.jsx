import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms = [], roomsClassName }) => <ul className={roomsClassName}>{rooms.map(Room)}</ul>;

export default RoomsList;
