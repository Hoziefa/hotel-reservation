import React from "react";
import { Link } from "react-router-dom";

const Room = ({ id, name, price, images: [src] }) => (
    <li className="room" key={id}>
        <div className="img-container">
            <img src={src} alt="" />

            <div className="price-top">
                <strong>${price}</strong>
                <small>Per Night</small>
            </div>

            <Link to={`/rooms/${id}`} className="btn-primary room-link">
                Features
            </Link>
        </div>

        <h4 className="room-info">{name}</h4>
    </li>
);

export default Room;
