import Users from "../../componets/Users/Users";
import UserDetailes from "../../componets/UserDetailes/UserDetailes";
import style from './UserPage.module.css'
import {Outlet} from "react-router-dom";

const UsersPage = () => {



    return (
        <div className={style.user_page_main}>
            <div className={style.users__left}>

                <Users/>
            </div>
            <div className={style.users__right}>

                <Outlet/>

            </div>


        </div>
    );
};

export {UsersPage};