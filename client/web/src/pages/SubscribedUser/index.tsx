import React, { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import { fetchRequestedUsers } from "@/apis/users";

const SubscribedUser: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchRequestedUsers();
                const memberUsers = data.filter((user: any) => user.role === "MEMBER");
                setUsers(memberUsers);
            } catch (error) {
                console.error("Error loading users:", error);
            }
        };
        loadUsers();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(
        (user) => user.memberName.toLowerCase().includes(searchTerm.toLowerCase()) || user.memberId.includes(searchTerm)
    );

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <H1 text='입주 예정자 정보 조회' />
                    <Styled.FilterAndSearchContainer>
                        <Styled.TotalCount>총 {filteredUsers.length}명</Styled.TotalCount>

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
                                <th>이름</th>
                                <th>이메일</th>
                                <th>연락처</th>
                                <th>아파트 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.memberId}>
                                    <td>{user.memberId}</td>
                                    <td>{user.memberName}</td>
                                    <td>{user.username}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{`${user.apartmentName}, ${user.apartmentBuildingNumber}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Styled.UserTable>
                </Styled.MainContent>
            </Styled.ContentArea>
        </Styled.PageContainer>
    );
};

export default SubscribedUser;
