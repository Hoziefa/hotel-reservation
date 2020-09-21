import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";

const NotFound = () => {
    return (
        <div className="not-found">
            <Hero>
                <div className="banner">
                    <h1>404</h1>
                    <hr />
                    <p>Page Not Found</p>
                    <Link className="btn-primary" to="/">
                        Return Home
                    </Link>
                </div>
            </Hero>
        </div>
    );
};

export default NotFound;
