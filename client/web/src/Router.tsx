import { Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth";
import Login from "./pages/Login";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}
