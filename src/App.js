import {Outlet, Route, Routes} from "react-router-dom";

import './App.css';
import {Loyout} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Loyout/>}>
                    <Route path={'usersPage'} element={<UsersPage/>}/>
                    <Route path={'postsPage'} element={<PostsPage/>}/>
                    <Route path={'commentsPage'} element={<CommentsPage/>}/>
                    <Route path={'carsPage'} element={<CarsPage/>}/>
                </Route>
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;
