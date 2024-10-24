import { Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth";
import Login from "@/pages/Login";
import RequestedDefect from "@/pages/RequestedDefect";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/login' element={<Login />} />
            <Route path='/requested-defect' element={<RequestedDefect />} />
        </Routes>
    );
}
