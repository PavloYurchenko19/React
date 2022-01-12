import React, {useEffect, useState} from 'react';

import SpaceShip from "../SpaceShip/SpaceShip";

const SpaceShips = () => {

    const [spaceShips, setSpaceShips] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then((value) => {

                    setSpaceShips(value)

                }
            )
    }, []);

    let spaceShip = spaceShips.filter((value => (value.launch_year < '2020')))

    return (
        <div>

            {spaceShip.map(value => <SpaceShip key={value.flight_number} launch_year={value.launch_year}
                                               mission_name={value.mission_name}
                                               mission_patch_small={value.links.mission_patch_small}/>)}

        </div>
    );
};

export default SpaceShips;