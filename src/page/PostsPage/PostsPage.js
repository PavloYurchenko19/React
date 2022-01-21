import {Outlet} from "react-router-dom";
import React from 'react';


import style from './PostsPage.module.css'
import {Posts} from "../../components";

const PostsPage = () => {
    return (
        <div className={style.main__postPage}>
            <div className={style.postPage__left_side}>

                <Posts/>
            </div>
            <div className={style.postPage__right_side}>

                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};