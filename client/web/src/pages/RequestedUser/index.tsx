import React, { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import UserModal from "@/components/UserModal";
import UserSmallModal from "@/components/UserModal/UserSmallModal";
import { fetchRequestedUsers, approveUser, rejectUser } from "@/apis/users";
import { useUserModalStore } from "@/stores/useUserModalStore";

const RequestedUser: React.FC = () => {
    const {
        openModal,
        closeModal,
        selectedUser,
        isSmallModalOpen,
        openSmallModal,
        closeSmallModal,
    } = useUserModalStore();

    const [filterStatus, setFilterStatus] = useState<string>("전체");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadUsers = async () => {
            setIsLoading(true);
            try {
                const data = await fetchRequestedUsers();
                const filteredData = data.filter((user) => user.role !== "MEMBER");
                setUsers(filteredData);
            } catch (error) {
                console.error("Failed to load users:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadUsers();
    }, []);

    const getUserStatus = (role: string): string => {
        switch (role) {
            case "WAIT":
                return "미확인";
            case "DENY":
                return "거절됨";
            default:
                return "미확인";
        }
    };

    const filterUsers = (): any[] => {
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

    const handleApprove = async () => {
        if (selectedUser) {
            try {
                await approveUser(selectedUser);
                alert("승인되었습니다.");
                setUsers((prev) => prev.filter((user) => user.memberId !== selectedUser.memberId));
                closeModal();
            } catch (error) {
                console.error("승인 중 오류 발생:", error);
                alert("승인에 실패했습니다.");
            }
        }
    };

    const handleSaveRejectReason = async (reason: string) => {
        if (selectedUser) {
            try {
                await rejectUser({ ...selectedUser, rejection: reason });
                alert("거절되었습니다.");
                setUsers((prev) => prev.filter((user) => user.memberId !== selectedUser.memberId));
                closeSmallModal();
                closeModal();
            } catch (error) {
                console.error("거절 중 오류 발생:", error);
                alert("거절에 실패했습니다.");
            }
        }
    };

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <H1 text="입주 예정자 신청 관리" />
                    <Styled.FilterAndSearchContainer>
                        <Styled.FilterButtons>
                            <Styled.FilterButton
                                onClick={() => setFilterStatus("전체")}
                                active={filterStatus === "전체"}
                            >
                                전체
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => setFilterStatus("미확인")}
                                active={filterStatus === "미확인"}
                            >
                                미확인
                            </Styled.FilterButton>
                            <Styled.FilterButton
                                onClick={() => setFilterStatus("거절됨")}
                                active={filterStatus === "거절됨"}
                            >
                                거절됨
                            </Styled.FilterButton>
                        </Styled.FilterButtons>
                        <Styled.SearchContainer>
                            <Styled.SearchInput
                                type="text"
                                placeholder="검색어 입력"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Styled.SearchContainer>
                    </Styled.FilterAndSearchContainer>

                    <Styled.UserTable>
                        <thead>
                        <tr>
                            <th>입주 예정자 ID</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>상태</th>
                            <th>상세 정보</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={5} style={{textAlign: "center"}}>
                                    로딩 중입니다...
                                </td>
                            </tr>
                        ) : filterUsers().length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{textAlign: "center"}}>
                                    검색 결과가 없습니다.
                                </td>
                            </tr>
                        ) : (
                            filterUsers().map((user) => (
                                <tr key={user.memberId}>
                                    <td>{user.username}</td>
                                    <td>{user.memberName}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <Styled.StatusText status={user.role}>
                                            {getUserStatus(user.role)}
                                        </Styled.StatusText>
                                    </td>
                                    <td>
                                        <button onClick={() => openModal(user)}>신청서 열람하기</button>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </Styled.UserTable>
                </Styled.MainContent>
            </Styled.ContentArea>

            <UserModal
                onApprove={handleApprove}
                onReject={() => {
                    openSmallModal();
                }}
            />

            {isSmallModalOpen && (
                <UserSmallModal
                    onClose={closeSmallModal}
                    onSave={handleSaveRejectReason}
                />
            )}
        </Styled.PageContainer>
    );
};

export default RequestedUser;