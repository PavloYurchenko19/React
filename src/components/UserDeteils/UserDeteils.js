import React from 'react';
import {useLocation} from "react-router-dom";

const UserDeteils = () => {

    const {state} = useLocation();
    console.log(state);

    return (
        <div>


        </div>
    );
};

export {UserDeteils};