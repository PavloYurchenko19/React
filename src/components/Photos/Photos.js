import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {fotoService} from "../../service/foto.service";
import {Photo} from "../Photo/Photo";

const Photos = () => {

    const {id, userId} = useParams();

    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        fotoService.getById(userId)
            .then(value => setFotos([...value]))
    }, [userId])

    return (
        <div>
            {fotos.map(foto => <Photo key={foto.id} foto={foto}/>)}
        </div>
    );
};

export {Photos};