import {Route, Routes} from "react-router-dom";
import {Home, PostsPage, UsersPage} from "./pages";
import Layout from "./componets/Layout/Layout";
import UserDetailes from "./componets/UserDetailes/UserDetailes";
import UserPosts from "./componets/UserPosts/UserPosts";


function App() {

    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailes/>}>
                            <Route path={':id'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>

        </>
    )
        ;
}

export default App;
