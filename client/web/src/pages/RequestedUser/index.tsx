import React, { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import UserModal from "@/components/UserModal";
import UserSmallModal from "@/components/UserModal/UserSmallModal";
import { fetchRequestedUsers, approveUser, rejectUser } from "@/apis/users";

const RequestedUser: React.FC = () => {
    const [filterStatus, setFilterStatus] = useState("전체"); // 상태 필터 (전체, 거절됨, 미확인)
    const [searchTerm, setSearchTerm] = useState("");
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isUserSmallModalOpen, setIsUserSmallModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [rejectReason, setRejectReason] = useState("");
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchRequestedUsers();
                const filteredData = data.filter((user) => user.role !== "MEMBER");
                setUsers(filteredData);
            } catch (error) {
                console.error("Failed to load users:", error);
            }
        };
        loadUsers();
    }, []);

    const getUserStatus = (role: string) => {
        switch (role) {
            case "WAIT":
                return "미확인";
            case "DENY":
                return "거절됨";
            default:
                return "미확인";
        }
    };

    const filterUsers = () => {
        let filtered = users;

        if (filterStatus !== "전체") {
            filtered = filtered.filter((user) => getUserStatus(user.role) === filterStatus);
        }

        if (searchTerm) {
            filtered = filtered.filter(
                (user) =>
                    user.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered;
    };

    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleOpenUserModal = (user: any) => {
        setSelectedUser(user);
        setIsUserModalOpen(true);
    };

    const handleCloseUserModal = () => {
        setIsUserModalOpen(false);
        setSelectedUser(null);
    };

    const handleOpenUserSmallModal = () => {
        setIsUserSmallModalOpen(true);
    };

    const handleCloseUserSmallModal = () => {
        setIsUserSmallModalOpen(false);
        setRejectReason("");
    };

    const handleSaveRejectReason = async (reason: string) => {
        if (selectedUser) {
            const requestBody = {
                member: {
                    memberId: selectedUser.memberId,
                    username: selectedUser.username,
                    role: selectedUser.role,
                    memberName: selectedUser.memberName,
                    phoneNumber: selectedUser.phoneNumber,
                    apartmentName: selectedUser.apartmentName,
                    apartmentBuildingNumber: selectedUser.apartmentBuildingNumber,
                    profileImage: selectedUser.profileImage,
                    authDocument: selectedUser.authDocument,
                },
                rejection: reason,
                createAt: new Date().toISOString(),
            };

            try {
                await rejectUser(requestBody);
                alert("회원가입이 거절되었습니다.");

                const updatedUsers = users.filter((user) => user.memberId !== selectedUser.memberId);
                setUsers(updatedUsers);
                handleCloseUserModal();
                setRejectReason("");
            } catch (error) {
                console.error("거절 중 오류 발생:", error);
                alert("회원가입 거절에 실패했습니다.");
            }
        }
    };

    const handleApprove = async () => {
        if (selectedUser) {
            const requestBody = {
                memberId: selectedUser.memberId,
                username: selectedUser.username,
                role: selectedUser.role,
                memberName: selectedUser.memberName,
                phoneNumber: selectedUser.phoneNumber,
                apartmentName: selectedUser.apartmentName,
                apartmentBuildingNumber: selectedUser.apartmentBuildingNumber,
                profileImage: selectedUser.profileImage,
                authDocument: selectedUser.authDocument,
            };

            try {
                await approveUser(requestBody);
                alert("승인되었습니다.");

                const updatedUsers = users.filter((user) => user.memberId !== selectedUser.memberId);
                setUsers(updatedUsers);
                setIsUserModalOpen(false);
            } catch (error) {
                console.error("승인 중 오류 발생:", error);
                alert("승인에 실패했습니다.");
            }
        }
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
                                onClick={() => handleFilterChange("미확인")}
                                active={filterStatus === "미확인"}
                            >
                                미확인
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => handleFilterChange("거절됨")}
                                active={filterStatus === "거절됨"}
                            >
                                거절됨
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
                                <tr key={user.memberId}>
                                    <td>{user.memberId}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <Styled.StatusText status={user.role}>
                                            {getUserStatus(user.role)}
                                        </Styled.StatusText>
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

            {/* 신청서 모달 */}
            {isUserModalOpen && selectedUser && (
                <UserModal
                    onClose={handleCloseUserModal}
                    onReject={handleOpenUserSmallModal}
                    onApprove={handleApprove}
                    selectedUser={selectedUser}
                    isRejected={selectedUser.role === "DENY"}
                />
            )}

            {/* 거절 사유 모달 */}
            {isUserSmallModalOpen && (
                <UserSmallModal onClose={handleCloseUserSmallModal} onSave={handleSaveRejectReason} />
            )}
        </Styled.PageContainer>
    );
};

export default RequestedUser;
