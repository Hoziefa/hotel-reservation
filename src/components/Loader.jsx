import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.onload = () => setLoading(false);
    }, []);

    return createPortal(
        <div className={`loader ${loading ? "active" : ""}`}>
            <img src={loadingGif} alt="loader" />
        </div>,

        document.getElementById("loader"),
    );
};

export default Loader;
