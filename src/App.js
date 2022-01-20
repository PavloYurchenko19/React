import {Route, Routes} from "react-router-dom";


import {Home, PostsPage, UsersPage} from "./pages";
import {Layout,UserDetailes,UserPosts,PostDetail,Comments,Alboms} from "./componets/index";

import './App.module.css'


function App() {

    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Home/>}/>
                    <Route path={'users'} element={<UsersPage/>}>

                        <Route path={':id/albom'} element={<Alboms/>}/>
                        <Route path={':id'} element={<UserDetailes/>}>

                            <Route path={':id'} element={<UserPosts/>}/>

                        </Route>

                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>

                        <Route path={':id'} element={<PostDetail/>}>

                            <Route path={':id'} element={<Comments/>}/>
                        </Route>


                    </Route>
                </Route>
            </Routes>

        </>
    )

}

export default App;
