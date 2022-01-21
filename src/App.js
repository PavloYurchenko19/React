import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage, PostsPage, UsersPage} from "./page";
import {Alboms, Photos, Loyout, UserDeteils, UsersPosts, Comments} from "./components";
import {PostsDetails} from "./components/PostsDetails/PostsDetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Loyout/>}>
                    <Route element={<HomePage/>}>

                        <Route path={'users'} element={<UsersPage/>}>

                            <Route path={':id/albom'} element={<Alboms/>}>
                                <Route path={':userId/photos'} element={<Photos/>}/>
                            </Route>

                            <Route path={':id'} element={<UserDeteils/>}>
                                <Route path={':id'} element={<UsersPosts/>}/>

                            </Route>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id/detail'} element={<PostsDetails/>}>
                                <Route path={':id/comment' } elemetn={<Comments/>}/>
                            </Route>
                        </Route>


                    </Route>


                </Route>
            </Routes>

        </div>
    );
}

export default App;
