import React from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import userManage from "@/assets/icons/userManage.png";
import userSearch from "@/assets/icons/userSearch.png";
import defectData from "@/assets/icons/defectData.png";
import approvedData from "@/assets/icons/approvedData.png";
import qna from "@/assets/icons/Q&A.png";
import notice from "@/assets/icons/notice.png";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Styled.SidebarContainer>
            <Styled.Logo>시행•시공사 포털</Styled.Logo>
            <Styled.MenuList>
                <Styled.MenuItem onClick={() => navigate("/requested-defect")}>
                    <Styled.MenuIcon src={userManage} alt='입주 예정자 신청 관리' />
                    입주 예정자 신청 관리
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/")}>
                    <Styled.MenuIcon src={userSearch} alt='입주 예정자 정보 조회' />
                    입주 예정자 정보 조회
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/")}>
                    <Styled.MenuIcon src={defectData} alt='신청된 하자 데이터 관리' />
                    신청된 하자 데이터 관리
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/")}>
                    <Styled.MenuIcon src={approvedData} alt='승인된 하자 데이터 관리' />
                    승인된 하자 데이터 관리
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/")}>
                    <Styled.MenuIcon src={qna} alt='Q&A 게시판' />
                    Q&A 게시판
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/")}>
                    <Styled.MenuIcon src={notice} alt='공지사항 게시판' />
                    공지사항 게시판
                </Styled.MenuItem>
            </Styled.MenuList>
        </Styled.SidebarContainer>
    );
};

export default Sidebar;
