import './App.css';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {Loyout, Users} from "./components";

function App() {
  return (
      <div>
          <Routes>
              <Route index path={"/"} <Navigate to={<Loyout/>}/>
                  <Route path={'/'} element={<Loyout/>}>

                      <Route path={'/users'} element={<Users/>}/>
                  </Route>
          </Routes>
          <Outlet/>

      </div>
  );
}

export default App;
