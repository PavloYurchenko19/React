import React, {useEffect, useState} from 'react';
import {RickAndMortyService} from "../../service/rickAndMorty.service";
import {EpisodesService} from "../../service/episodes.service";
import {Episode} from "../Episode/Episode";
import {NavLink, Outlet} from "react-router-dom";
import {PageService} from "../../service/page.service";

import style from './Episodes.module.css'

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    const [info, setInfo] = useState({});
    const [pages, setPages] = useState(1);

    useEffect(()=>{
        PageService.getById(pages).then(value => setEpisodes([...value.results]))
    },[pages])

    useEffect(()=>{
       EpisodesService.getAll().then(page => setInfo(page.info))
    },[])

    const previousPage = (pageNumber) => {
        if (pageNumber > 1){

            setPages(pageNumber -= 1)
        }
    };

    const nextPage = (pageNumber) => {
      if (pageNumber !== info.pages){
          setPages(pageNumber += 1);
      }
    }

    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} episodes={episode} />)}
                <button  onClick={() => previousPage(pages)}>previous</button>
                <button  onClick={() => nextPage(pages)} >next</button>
            <Outlet/>

        </div>
    );
};

export {Episodes};