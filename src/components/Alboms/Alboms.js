import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";


import {albomService} from "../../service/albom.service";
import {Albom} from "../Albom/Albom";

const Alboms = () => {

    const [alboms, setAlboms] = useState([]);

    const {id,userId} = useParams()
    console.log(id);
    console.log(userId);

    useEffect(() => {
        console.log(alboms);

    albomService.getById(id)
        .then(value => setAlboms([...value]))

    },[id]);

    return (
        <div>
            {alboms.map(albom=><Albom key={albom.id} albom={albom}/>)}
            <Outlet/>
        </div>
    );
};

export {Alboms};