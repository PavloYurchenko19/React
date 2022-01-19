import {Outlet} from "react-router-dom";


import Users from "../../componets/Users/Users";
import style from './UserPage.module.css'

const UsersPage = () => {


    return (

        <div className={style.user_page_main}>
            <div className={style.users__left}>

                <Users/>
            </div>
            <div className={style.black__bg}>
                <div className={style.users__right}>

                    <Outlet/>

                </div>
            </div>
        </div>
    );
};

export {UsersPage};