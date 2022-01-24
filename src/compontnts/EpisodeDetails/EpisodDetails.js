import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {EpisodesService} from "../../service/episodes.service";
import {Character} from "../Character/Character";

const EpisodDetails = () => {


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
    useEffect(()=>{
        getEpisode()

    },[id])
    console.log(episode);

    return (
        <div>
            {episode && (
                <div>
                    <h1>{episode.id}</h1>
                    <h1>{episode.name}</h1>
                    {episode.characters}
                </div>

            )}

        </div>
    );
};

export {EpisodDetails};