import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";


import {HomePage, PostsPage, UsersPage} from "./page";
import {Alboms, Comments, Loyout, Photos, UserDeteils, UsersPosts} from "./components";
import {PostsDetails} from "./components/PostsDetails/PostsDetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Loyout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route element={<HomePage/>}>

                        <Route path={'users'} element={<UsersPage/>}>

                            <Route path={':id/albom'} element={<Alboms/>}>
                                <Route path={':userId/photos'} element={<Photos/>}/>
                            </Route>

                            <Route path={':id'} element={<UserDeteils/>}>
                                <Route path={':postId/posts'} element={<UsersPosts/>}/>

                            </Route>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id/detail'} element={<PostsDetails/>}>
                                <Route path={':postId/comment'} element={<Comments/>}/>
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
