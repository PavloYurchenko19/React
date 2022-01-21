import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";


import {albomService} from "../../service/albom.service";
import {Albom} from "../Albom/Albom";
import style from "./Alboms.module.css";

const Alboms = () => {

    const [alboms, setAlboms] = useState([]);

    const {id, userId} = useParams()


    useEffect(() => {

        albomService.getById(id)
            .then(value => setAlboms([...value]))

    }, [id]);

    return (
        <div className={style.photo__main}>

            {alboms.map(albom => <Albom key={albom.id} albom={albom}/>)}

            <Outlet/>
        </div>
    );
};

export {Alboms};