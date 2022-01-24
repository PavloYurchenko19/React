import React, {useEffect, useState} from 'react';
import {RickAndMortyService} from "../../service/rickAndMorty.service";
import {EpisodesService} from "../../service/episodes.service";
import {Episode} from "../Episode/Episode";
import {Outlet} from "react-router-dom";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(()=>{
        EpisodesService.getAll().then(value => setEpisodes([...value.results]))
    },[])

    console.log(episodes);

    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} episodes={episode} />)}
            <Outlet/>

        </div>
    );
};

export {Episodes};