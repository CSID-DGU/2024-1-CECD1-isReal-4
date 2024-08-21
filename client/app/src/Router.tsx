import { Route, Routes } from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import MyPage from "@/pages/MyPage";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import UploadDoc from "@/pages/UploadDoc";
import SignUpBody from "./components/SignUp/SignUpBody";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Entry />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />}>
                <Route index element={<SignUpBody />} />
                <Route path='uploadDoc' element={<UploadDoc />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/myPage' element={<MyPage />} />
        </Routes>
    );
}
