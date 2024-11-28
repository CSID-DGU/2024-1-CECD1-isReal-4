import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { useNavigate, Link } from "react-router-dom";
import userManage from "@/assets/icons/userManage.png";
import userSearch from "@/assets/icons/userSearch.png";
import defectData from "@/assets/icons/defectData.png";
import approvedData from "@/assets/icons/approvedData.png";
import qna from "@/assets/icons/Q&A.png";
import notice from "@/assets/icons/notice.png";
import makeAdmin from "@/assets/icons/makeAdmin.png";
import { checkSuperAdmin } from "@/apis/auth";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        const verifySuperAdmin = async () => {
            try {
                const isAdmin = await checkSuperAdmin();
                setIsSuperAdmin(isAdmin);
            } catch (error) {
                console.error("슈퍼 어드민 확인 실패:", error);
            }
        };
        verifySuperAdmin();
    }, []);

    return (
        <Styled.SidebarContainer>
            <Styled.Logo>시행•시공사 포털</Styled.Logo>
            <Styled.MenuList>
                <Styled.MenuItem onClick={() => navigate("/requested-user")}>
                    <Styled.MenuIcon src={userManage} alt='입주 예정자 신청 관리' />
                    입주 예정자 신청 관리
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/subscribed-user")}>
                    <Styled.MenuIcon src={userSearch} alt='입주 예정자 정보 조회' />
                    입주 예정자 정보 조회
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/requested-defect")}>
                    <Styled.MenuIcon src={defectData} alt='신청된 하자 데이터 관리' />
                    신청된 하자 데이터 관리
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/approved-defect")}>
                    <Styled.MenuIcon src={approvedData} alt='승인된 하자 데이터 관리' />
                    승인된 하자 데이터 관리
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.MenuIcon src={qna} alt='Q&A 게시판' />
                    Q&A 게시판
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.MenuIcon src={notice} alt='공지사항 게시판' />
                    공지사항 게시판
                </Styled.MenuItem>
                {/* 슈퍼 어드민 전용 메뉴(navigate의 경우 초기 화면이 공백으로 표시되는 문제가 있어 Link로 교체) */}
                {isSuperAdmin && (
                    <Styled.MenuItem>
                        <Link to='/create-admin' style={{ textDecoration: "none", color: "inherit" }}>
                            <Styled.MenuIcon src={makeAdmin} alt='시행•시공사 계정 생성' />
                            시행•시공사 계정 생성
                        </Link>
                    </Styled.MenuItem>
                )}
            </Styled.MenuList>
        </Styled.SidebarContainer>
    );
};

export default Sidebar;
