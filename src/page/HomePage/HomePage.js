import React from 'react';
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Outlet/>

        </div>
    );
};

export {HomePage};