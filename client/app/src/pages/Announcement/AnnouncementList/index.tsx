import React, { useState, useEffect } from 'react';
import * as Styled from "./style.ts";
import Title from "@/components/Title";
import SearchInput from "@/components/Search";
import Padding from "@/components/Common/Padding";
import ContentList from "@/components/Contents";
import WriteQuestionButton from "@/components/Question/FloatButton";

interface itemType {
    id: number;
    title: string;
    description: string;
    time: string;
    comments: number;
}

const AnnouncementList: React.FC = () => {
    const [items, setItems] = useState<itemType[]>([]);

    // 목데이터를 로드하는 함수
    const loadMockData = () => {
        const mockItems: itemType[] = [
            {
                id: 1,
                title: 'Header',
                description: "He'll want to use your yacht, and I don't want this thing smelling ...",
                time: '8m',
                comments: 0,
            },
            {
                id: 2,
                title: 'Header',
                description: "He'll want to use your yacht, and I don't want this thing smelling ...",
                time: '8m',
                comments: 0,
            },
        ];
        setItems(mockItems);
    };

    useEffect(() => {
        loadMockData(); // 컴포넌트 마운트 시 목데이터를 로드
    }, []);

    return (
        <Styled.AnnouncementContainer>
            <Title title={"Announcement"}/>
            <Padding all={"10px"}/>
            <SearchInput placeholder={"Search"} width={"350px"} borderRadius={"50px"}/>
            <ContentList items={items} />
            <WriteQuestionButton/>
        </Styled.AnnouncementContainer>
    );
};

export default AnnouncementList;