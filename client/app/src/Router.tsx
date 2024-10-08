import { Route, Routes } from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import MyPage from "@/pages/MyPage";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import UploadDoc from "@/pages/UploadDoc";
import SignUpBody from "./components/SignUp/SignUpBody";
import QnA from "@/pages/Question/QuestionList";
import QuestionWrite from "@/pages/Question/QuestionWrite";
import QuestionDetail from "@/pages/Question/QuestionDetail";
import AnnouncementList from "@/pages/Announcement/AnnouncementList";
import AnnouncementWrite from "@/pages/Announcement/AnnouncementWrite";
import AnnouncementDetail from "@/pages/Announcement/AnnouncementDetail";

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
            <Route path='/register' element={<Register />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/question' element={<QnA />} />
            <Route path='/question/write' element={<QuestionWrite/>} />
            <Route path='/question/:id' element={<QuestionDetail/>} />
            <Route path='/announcement' element={<AnnouncementList />} />
            <Route path='/announcement/write' element={<AnnouncementWrite/>} />
            <Route path='/announcement/:id' element={<AnnouncementDetail/>} />
        </Routes>
    );
}
