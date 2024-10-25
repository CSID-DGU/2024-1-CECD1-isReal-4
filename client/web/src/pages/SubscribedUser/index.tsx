import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";

const SubscribedUser: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // 예시 데이터
    const users = [
        {
            id: "0001",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
        {
            id: "0002",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
        {
            id: "0003",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
        {
            id: "0004",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
        {
            id: "0005",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
        {
            id: "0006",
            name: "사용자 이름",
            email: "example@email.com",
            phone: "010-0000-0000",
            aptInfo: "아파트 이름, 1단지, 101동, 38평, A타입",
        },
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <H1 text='입주 예정자 정보 조회' />
                    <Styled.FilterAndSearchContainer>
                        <Styled.TotalCount>총 {users.length}명</Styled.TotalCount>

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
                            {users
                                .filter(
                                    (user) =>
                                        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        user.id.includes(searchTerm)
                                )
                                .map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.aptInfo}</td>
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
