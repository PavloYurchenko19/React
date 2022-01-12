import React from 'react';
import {useEffect, useState} from "react"
import '../SpaceShip/SpaceShip'

const SpaceShips = () => {
    const [spaceShips, setSpaceShips] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpaceShips(value))
    },[]);
    return (
        <div>

        </div>
    );
};

export default SpaceShips;