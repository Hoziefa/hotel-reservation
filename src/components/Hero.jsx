import React from "react";

const Hero = ({ hero = "default-hero", children, ...rest }) => (
    <header className={hero} {...rest}>
        {children}
    </header>
);

export default Hero;
