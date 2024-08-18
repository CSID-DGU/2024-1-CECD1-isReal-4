import { Route, Routes } from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import MyPage from "@/pages/MyPage";
import Login from "@/pages/Login";
import QnA from "@/pages/QnA";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Entry />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/question' element={<QnA />} />
        </Routes>
    );
}
