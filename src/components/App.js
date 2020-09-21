import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import roomContext from "../contexts/roomContext";
import _RoomsList from "../data";

import NavBar from "./NavBar";
import Loader from "./Loader";
import GoTopBtn from "./GoTopBtn";
import Home from "./Home";
import Footer from "./Footer";
import Rooms from "./Rooms";
import RoomDetails from "./RoomDetails";
import NotFound from "./NotFound";

const App = () => {
    const roomsList = useState(
        _RoomsList.map(({ sys: { id }, fields: { images, ...rest } }) => ({
            id,
            images: images.map(({ fields: { file: { url } } = {} }) => url),
            ...rest,
        })),
    );

    const filteredRooms = useState([...roomsList[0]]);

    return (
        <roomContext.Provider value={{ roomsList, filteredRooms }}>
            <BrowserRouter>
                <NavBar />
                <Loader />
                <GoTopBtn />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/rooms/:id" component={RoomDetails} />
                    <Route exact path="/notfound" component={NotFound} />

                    <Redirect to="/notfound" />
                </Switch>

                <Footer />
            </BrowserRouter>
        </roomContext.Provider>
    );
};

export default App;
