import './App.css';
import {Route, Routes} from "react-router-dom";
import {EpisodDetails, Episodes, Loyout, NextOrPreviousPage} from "./compontnts";

function App() {


  return (
      <div>

        <Routes>
            <Route path={'/'} element={<Loyout/>}>
                <Route path={'episode'} element={<Episodes/>}>
                    <Route path={":id/episodDetails"} element={<EpisodDetails/>}/>
                </Route>

                <Route path={'nextOrPreviousPage'} element={<NextOrPreviousPage/>}/>
            </Route>
        </Routes>



      </div>
  );
}

export default App;
