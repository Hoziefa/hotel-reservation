import React, { useContext } from "react";
import { Link } from "react-router-dom";
import roomContext from "../contexts/roomContext";

import Hero from "./Hero";

const SingleRoom = ({ match: { params: { id } = {} } }) => {
    const [rooms] = useContext(roomContext).roomsList;

    const room = rooms.find(({ id: roomID }) => roomID === id);

    const { name, description, price, size, capacity, pets, extras, breakfast, images: [mainImg, ...restImgs] } = room;

    return (
        <>
            <Hero hero="rooms-hero" style={{ backgroundImage: `url(${mainImg})` }}>
                <div className="banner">
                    <h2>{name}</h2>
                    <hr />
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            </Hero>

            <section className="single-room">
                <div className="single-room-images">
                    {restImgs.map((src, idx) => (
                        <img key={idx} src={src} alt={name} />
                    ))}
                </div>

                <div className="single-room-info">
                    <div className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </div>

                    <div className="info">
                        <h3>Info</h3>

                        <h6>
                            <strong>price:</strong> ${price}
                        </h6>

                        <h6>
                            <strong>size:</strong> {size} SQFT
                        </h6>

                        <h6>
                            <strong>max capacity:</strong> {`${capacity} ${capacity > 1 ? "people" : "person"}`}
                        </h6>

                        <h6>
                            <strong>pets:</strong> {pets ? "pets allowed" : "no pets allowed"}
                        </h6>

                        <h6>
                            <strong>breakfast:</strong> {`free breakfast ${breakfast ? "included" : "not included"}`}
                        </h6>
                    </div>
                </div>

                <div className="room-extras">
                    <h3>extras</h3>

                    <ul className="extras">
                        {extras.map(extra => (
                            <li key={extra}>{extra}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default SingleRoom;
