import { Route, Routes } from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";
import MyPage from "@/pages/MyPage";
// 로그인, 회원가입
import LogIn from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import UploadDoc from "@/pages/UploadDoc";
import SignUpBody from "./components/SignUp/SignUpBody";
//  QnA
import QnA from "@/pages/Question/QuestionList";
import QuestionWrite from "@/pages/Question/QuestionWrite";
import QuestionDetail from "@/pages/Question/QuestionDetail";
// 공지사항
import AnnouncementList from "@/pages/Announcement/AnnouncementList";
import AnnouncementWrite from "@/pages/Announcement/AnnouncementWrite";
import AnnouncementDetail from "@/pages/Announcement/AnnouncementDetail";
// CheckList
import ListSelection from "@/pages/CheckList/ListSelection";
import RegisteredCheckList from "@/pages/CheckList/RegisteredCheckList";
import MyCheckLists from "@/pages/CheckList/MyCheckLists";
import WriteCheckList from "@/pages/CheckList/WriteCheckList";

export default function Router() {
    return (
        <Routes>
            <Route path='/entry' element={<Entry />} />
            <Route path='/' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />}>
                <Route index element={<SignUpBody />} />
                <Route path='uploadDoc' element={<UploadDoc />} />
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/question' element={<QnA />} />
            <Route path='/question/write' element={<QuestionWrite/>} />
            <Route path='/question/:id' element={<QuestionDetail/>} />
            <Route path='/announcement' element={<AnnouncementList />} />
            <Route path='/announcement/write' element={<AnnouncementWrite/>} />
            <Route path='/announcement/:id' element={<AnnouncementDetail/>} />

            <Route path='/listSelection' element={<ListSelection />} />
            <Route path='/registeredCheckList' element={<RegisteredCheckList />} />
            <Route path='/myCheckList' element={<MyCheckLists />} />
            <Route path='/writeCheckList' element={<WriteCheckList />} />
        </Routes>
    );
}
