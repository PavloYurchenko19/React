import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {EpisodesService} from "../../service/episodes.service";

const EpiseDetails = () => {


    const [episode, setEpisode] = useState(null);

    const {id} = useParams();

    const {state} = useLocation();

    useEffect(() => {
        setEpisode({...state})

    }, [id])

    const getEpisode = async () => {


        if (!state) {
            try {
                let getByIdEpisod = await EpisodesService.getById(id);
               await setEpisode(getByIdEpisod)
            } catch (error) {
                console.log(error.response.data);
            }

        }
    }
    getEpisode()
    console.log(episode);

    return (
        <div>

        </div>
    );
};

export {EpiseDetails};