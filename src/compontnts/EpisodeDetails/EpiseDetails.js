import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {EpisodesService} from "../../service/episodes.service";

const EpiseDetails = () => {


    const [episode, setEpisode] = useState(null);

    const {id} = useParams();

    const {state} = useLocation();
console.log(state);

// useEffect(()=>{
//     setEpisode({...state})
// },[id])

const getEpisode = async () => {

}
    if (!state){
        try {
            await EpisodesService.getById(id)

        }catch (error){
            console.log(error.response.data);
        }

    }
    console.log(episode);

    return (
        <div>

        </div>
    );
};

export {EpiseDetails};