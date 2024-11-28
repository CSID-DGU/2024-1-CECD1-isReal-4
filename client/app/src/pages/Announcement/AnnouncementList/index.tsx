import React, { useState, useEffect } from "react";
import * as Styled from "./style.ts";
import Title from "@/components/Title";
import SearchInput from "@/components/Search";
import Padding from "@/components/Common/Padding";
import ContentList from "@/components/Contents";

interface itemType {
    id: number;
    title: string;
    description: string;
    time: string;
    comments?: number;
}

const AnnouncementList: React.FC = () => {
    const [items, setItems] = useState<itemType[]>([]);
    const [filteredItems, setFilteredItems] = useState<itemType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    // 목데이터를 로드하는 함수
    const loadMockData = () => {
        const mockItems: itemType[] = [
            {
                id: 1,
                title: "정기 점검 안내",
                description: "10월 25일 오전 9시부터 오후 6시까지 정기 점검이 진행됩니다.",
                time: "2024.10.22",
            },
            {
                id: 2,
                title: "주차장 이용 안내",
                description: "추석 연휴 기간 동안 주차장 이용은 선착순으로 운영됩니다.",
                time: "2024.09.10",
            },
            {
                id: 3,
                title: "커뮤니티 시설 이용 시간 변경",
                description: "헬스장 및 라운지 이용 시간이 변경되었습니다. 새로운 시간표를 확인해주세요.",
                time: "2024.11.01",
            },
            {
                id: 4,
                title: "아파트 단지 내 도로 공사 일정",
                description: "10월 30일부터 11월 5일까지 단지 내 도로 공사가 진행됩니다.",
                time: "2024.10.25",
            },
            {
                id: 5,
                title: "이사 지원 서비스 안내",
                description: "입주민 대상 무료 이사 지원 서비스 신청을 받습니다.",
                time: "2024.09.20",
            },
        ];
        setItems(mockItems);
        setFilteredItems(mockItems); // 초기값으로 모든 항목 설정
    };

    useEffect(() => {
        loadMockData(); // 컴포넌트 마운트 시 목데이터를 로드
    }, []);

    const handleSearchChange = (searchValue: string) => {
        const lowerCaseValue = searchValue.toLowerCase();
        setSearchTerm(lowerCaseValue);

        if (lowerCaseValue) {
            const filtered = items.filter((item) =>
                item.title.toLowerCase().includes(lowerCaseValue)
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items); // 검색어가 없으면 전체 항목 표시
        }
    };

    return (
        <Styled.AnnouncementContainer>
            <Title title={"공지사항"} />
            <Padding all={"10px"} />
            <SearchInput
                placeholder={"검색어를 입력하세요."}
                width={"350px"}
                borderRadius={"50px"}
                onChange={(value) => handleSearchChange(value)} // 수정: 문자열 전달
            />
            <ContentList items={filteredItems} location={"announcement"}/>
        </Styled.AnnouncementContainer>
    );
};

export default AnnouncementList;