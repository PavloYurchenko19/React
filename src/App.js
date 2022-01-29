import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {Users} from "./components";

function App() {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<HomePage/>}>
                  <Route path={'/users'} element={<Users/>}/>
              </Route>
          </Routes>
          <Outlet/>

      </div>
  );
}

export default App;
