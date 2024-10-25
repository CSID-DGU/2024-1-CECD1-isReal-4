import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import UserModal from "@/components/UserModal";
import UserSmallModal from "@/components/UserModal/UserSmallModal";

const RequestedUser: React.FC = () => {
    const [filterStatus, setFilterStatus] = useState("전체"); // 상태 필터 (전체, 승인됨, 거절됨, 미확인)
    const [searchTerm, setSearchTerm] = useState("");
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isUserSmallModalOpen, setIsUserSmallModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [rejectReason, setRejectReason] = useState("");

    // 예시 데이터
    const users = [
        {
            id: "0001",
            date: "28 December 2022",
            status: "승인",
            name: "홍길동",
            email: "hong@example.com",
            phone: "010-0000-0000",
            images: [
                "https://via.placeholder.com/200",
                "https://via.placeholder.com/200",
                "https://via.placeholder.com/200",
                "https://via.placeholder.com/200",
            ],
        },
        {
            id: "0002",
            date: "28 December 2022",
            status: "거절",
            name: "김철수",
            email: "kim@example.com",
            phone: "010-0000-0000",
            images: ["https://via.placeholder.com/200"],
        },
        {
            id: "0003",
            date: "28 December 2022",
            status: "미확인",
            name: "이영희",
            email: "lee@example.com",
            phone: "010-0000-0000",
            images: [],
        },
    ];

    const filterUsers = () => {
        let filtered = users;

        if (filterStatus !== "전체") {
            filtered = filtered.filter((user) => user.status === filterStatus);
        }

        if (searchTerm) {
            filtered = filtered.filter((user) => user.id.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return filtered;
    };

    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // 신청서 열람 모달 열기
    const handleOpenUserModal = (user: any) => {
        setSelectedUser(user);
        setIsUserModalOpen(true);
    };

    // 신청서 모달 닫기
    const handleCloseUserModal = () => {
        setIsUserModalOpen(false);
        setSelectedUser(null);
    };

    // 거절 사유 모달 열기
    const handleOpenUserSmallModal = () => {
        setIsUserSmallModalOpen(true);
    };

    // 거절 사유 모달 닫기
    const handleCloseUserSmallModal = () => {
        setIsUserSmallModalOpen(false);
        setRejectReason("");
    };

    // 거절 사유 저장 핸들러
    const handleSaveRejectReason = (reason: string) => {
        console.log("거절 사유:", reason);
        handleCloseUserSmallModal();
        handleCloseUserModal();
    };

    // 승인 처리 핸들러
    const handleApprove = () => {
        console.log("승인되었습니다.");
        handleCloseUserModal();
    };

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <H1 text='입주 예정자 신청 관리' />
                    <Styled.FilterAndSearchContainer>
                        <Styled.FilterButtons>
                            <Styled.FilterButton
                                onClick={() => handleFilterChange("전체")}
                                active={filterStatus === "전체"}
                            >
                                전체
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => handleFilterChange("승인")}
                                active={filterStatus === "승인"}
                            >
                                승인됨
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => handleFilterChange("거절")}
                                active={filterStatus === "거절"}
                            >
                                거절됨
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => handleFilterChange("미확인")}
                                active={filterStatus === "미확인"}
                            >
                                미확인
                            </Styled.FilterButton>
                        </Styled.FilterButtons>

                        {/* 검색창 */}
                        <Styled.SearchContainer>
                            <Styled.SearchInput
                                type='text'
                                placeholder='검색어 입력'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </Styled.SearchContainer>
                    </Styled.FilterAndSearchContainer>

                    <Styled.UserTable>
                        <thead>
                            <tr>
                                <th>입주 예정자 ID</th>
                                <th>신청 일자</th>
                                <th>상태</th>
                                <th>상세 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterUsers().map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.date}</td>
                                    <td>
                                        <Styled.StatusText status={user.status}>{user.status}</Styled.StatusText>
                                    </td>
                                    <td>
                                        <button onClick={() => handleOpenUserModal(user)}>신청서 열람하기</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Styled.UserTable>
                </Styled.MainContent>
            </Styled.ContentArea>

            {isUserModalOpen && selectedUser && (
                <UserModal
                    onClose={handleCloseUserModal}
                    onReject={handleOpenUserSmallModal}
                    onApprove={handleApprove}
                    selectedUser={selectedUser}
                />
            )}

            {isUserSmallModalOpen && (
                <UserSmallModal onClose={handleCloseUserSmallModal} onSave={handleSaveRejectReason} />
            )}
        </Styled.PageContainer>
    );
};

export default RequestedUser;
