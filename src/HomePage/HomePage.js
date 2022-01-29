import React from 'react';
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Outlet/>
            Home page

        </div>
    );
};

export default HomePage;