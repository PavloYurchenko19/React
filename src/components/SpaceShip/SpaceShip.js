import React from 'react';

import '../SpaceShip/SpaceShip.css'

const SpaceShip = (props) => {
    let {launch_year, mission_name, mission_patch_small} = props;

    return (
        <div>
            <div className={'ship'}>
                <div>

                    <h4>{mission_name}</h4>
                    <p>{launch_year}</p>

                </div>

                <img src={mission_patch_small} alt={mission_name}/>

            </div>

        </div>
    );
};

export default SpaceShip;