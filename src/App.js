import './App.css';
import {Route, Routes} from "react-router-dom";
import {EpiseDetails, Episodes, Loyout} from "./compontnts";

function App() {


  return (
      <div>

        <Routes>
            <Route path={'/'} element={<Loyout/>}>
                <Route path={'episodes'} element={<Episodes/>}>
                    <Route path={":id"} element={<EpiseDetails/>}/>
                </Route>

            </Route>
        </Routes>



      </div>
  );
}

export default App;
