import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const NextOrPreviousPage = () => {

    const {numberPage} = useParams();

    console.log(numberPage);
    return (
        <div>
            dsfasdf


        </div>
    );
};

export {NextOrPreviousPage};