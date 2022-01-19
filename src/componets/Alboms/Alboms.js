import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../axios.service/user.service";
import {albom} from "../../config/Albom";

const Alboms = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);
    const [albomUser, setAlbomUser] = useState({})
    const [number, setNumber] = useState(0)

    useEffect(() => {
        let filterFotoId = albom.filter(value => value.id.toString() === id);
        filterFotoId.map(foto => setAlbomUser({...foto}))
        setNumber(0)

    }, [id])
    let foto = albomUser.foto


    function nextFoto(number) {
        if (number !== foto.length - 1) {

            setNumber(number += 1);

        }
    }

    function previousFoto(number) {
        if (number !== 0) {

            setNumber(number -= 1);
        }
    }


    useEffect(() => {
        userService.getById(id)
            .then(value => setUser({...value}))
    }, [id])


    return (
        < >

            {user && (
                <>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>

                    <button id={'btn1'} onClick={() => previousFoto(number)}>previous Foto</button>
                    <img src={foto[number]} alt=""/>
                    <button id={'btn2'} onClick={() => nextFoto(number)}>next Foto</button>

                </>
            )

            }


        </>
    );
};

export default Alboms;