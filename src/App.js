import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Detail, EpisodeDetails, Episodes, Loyout, NextOrPreviousPage} from "./compontnts";

function App() {


  return (
      <div>

        <Routes>
            <Route path={'/'} element={<Loyout/>}>
                <Route index <Navigate/>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={"episodDetails"} element={<EpisodeDetails/>}>
                    <Route path={'detail'} element={<Detail/>}/>
                </Route>

            </Route>
        </Routes>



      </div>
  );
}

export default App;
