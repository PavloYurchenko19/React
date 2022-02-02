import './App.module.css';
import {Form, Quantity, TodoArr} from "./components";
import style from './App.module.css'

function App() {
    return (

        <div className={style.main__app}>
            <div className={style.header}>
                <Quantity/>
                <Form/>
            </div>
            <TodoArr/>
        </div>
    );
}

export default App;
