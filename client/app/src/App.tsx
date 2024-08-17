
import {BrowserRouter} from "react-router-dom";
import Router from "./Router"
import Footer from "@/components/Layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <Router />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;