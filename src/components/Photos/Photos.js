import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {fotoService} from "../../service/foto.service";
import {Photo} from "../Photo/Photo";

const Photos = () => {

    const {id} = useParams();
    // console.log(id);


    const [fotos, setFotos] = useState([]);
    useEffect(()=>{
    fotoService.getById(id)
        .then(value => setFotos([...value]))
    },[id])

    return (
        <div>
            {fotos.map(foto=><Photo key={foto.id} foto={foto}/>)}
        </div>
    );
};

export {Photos};