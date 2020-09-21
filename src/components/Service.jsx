import React from "react";

const Service = ({ icon, title, text }) => {
    return (
        <article className="service">
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, maxime!"}</p>
        </article>
    );
};

export default Service;
