
import {BrowserRouter} from "react-router-dom";
import Router from "./Router"


function App() {

    // Footer를 숨기고 싶은 경로 설정

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;