import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import {HomePage, PostsPage, UsersPage} from "./page";
import {Alboms, Loyout, UserDeteils} from "./components";
import {PostsDetails} from "./components/PostsDetails/PostsDetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Loyout/>}>
                    <Route element={<HomePage/>}>

                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id/albom'} element={<Alboms/>}/>
                            <Route path={':id/details'} element={<UserDeteils/>}/>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id/details'} element={<PostsDetails/>}/>
                        </Route>


                    </Route>


                </Route>
            </Routes>

        </div>
    );
}

export default App;
