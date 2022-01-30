import './App.css';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Loyout, Users} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
               <Route path={'/'} element={<Loyout/>}>
                   <Route path={'usersPage'} element={<UsersPage/>}>

                   </Route>
                   <Route path={'postsPage'} element={<PostsPage/>}>

                   </Route>
                   <Route path={'commentsPage'} element={<CommentsPage/>}>

                   </Route>
                   <Route path={'carsPage'} element={<CarsPage/>}>

                   </Route>
               </Route>
            </Routes>
            <Outlet/>

        </div>
    );
}

export default App;
