import { Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth";
import Login from "@/pages/Login";
import RequestedDefect from "@/pages/RequestedDefect";
import ApprovedDefect from "@/pages/ApprovedDefect";
import RequestedUser from "@/pages/RequestedUser";
import SubscribedUser from "@/pages/SubscribedUser";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/login' element={<Login />} />
            <Route path='/requested-defect' element={<RequestedDefect />} />
            <Route path='/approved-defect' element={<ApprovedDefect />} />
            <Route path='/requested-user' element={<RequestedUser />} />
            <Route path='/subscribed-user' element={<SubscribedUser />} />
        </Routes>
    );
}
