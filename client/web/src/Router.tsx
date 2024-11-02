import { Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth";
import Login from "@/pages/Login";
import RequestedDefect from "@/pages/RequestedDefect";
import ApprovedDefect from "@/pages/ApprovedDefect";
import RequestedUser from "@/pages/RequestedUser";
import SubscribedUser from "@/pages/SubscribedUser";
import MakeAdmin from "@/pages/MakeAdmin";
import { useEffect, useState } from "react";
import { checkSuperAdmin } from "@/apis/auth";

export default function Router() {
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        const verifySuperAdmin = async () => {
            try {
                const isAdmin = await checkSuperAdmin();
                setIsSuperAdmin(isAdmin);
            } catch (error) {
                console.error("슈퍼 어드민 확인 오류:", error);
            }
        };
        verifySuperAdmin();
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/requested-defect' element={<RequestedDefect />} />
            <Route path='/approved-defect' element={<ApprovedDefect />} />
            <Route path='/requested-user' element={<RequestedUser />} />
            <Route path='/subscribed-user' element={<SubscribedUser />} />
            {/* 슈퍼 어드민 전용 페이지 */}
            {isSuperAdmin && <Route path='/create-admin' element={<MakeAdmin />} />}
        </Routes>
    );
}
