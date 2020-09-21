import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.onscroll = () => (window.pageYOffset > window.innerHeight ? setShow(true) : setShow(false));
    }, []);

    return (
        <div className={`go-top-container ${show ? "active" : ""}`} onClick={() => document.body.scrollIntoView()}>
            <FaArrowUp />
        </div>
    );
};

export default GoTopBtn;
