import {Outlet} from "react-router-dom";


import Posts from "../../componets/Posts/Posts";
import style from './PostsPege.module.css'

const PostsPage = () => {

    return (

        <div className={style.post__page_main}>
            <div className={style.posts__page}>
                <Posts/>
            </div>
            <div className={style.post__detail}>
                <Outlet/>
            </div>

        </div>
    );
};

export {PostsPage};