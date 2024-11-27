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

const QuestionList: React.FC = () => {
    const [items, setItems] = useState<itemType[]>([]);
    const [filteredItems, setFilteredItems] = useState<itemType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const loadMockData = () => {
        const mockItems = [
            {
                id: 10,
                title: '입주민 전용 앱 사용법',
                description: '입주민 전용 앱 사용법에 대한 안내를 받을 수 있나요?',
                time: '2024.11.10',
                comments: 1,
            },
            {
                id: 9,
                title: '공동 주차장 이용 관련 문의',
                description: '공동 주차장 사용 시 주차 등록 절차와 규정은 어떻게 되나요?',
                time: '2024.11.05',
                comments: 1,
            },
            {
                id: 8,
                title: '아파트 내에서 반려동물 규정',
                description: '반려동물을 키우고 있습니다. 관련 규정을 알고 싶습니다.',
                time: '2024.11.01',
                comments: 1,
            },
            {
                id: 7,
                title: '입주 기념 이벤트가 있나요?',
                description: '입주 시 제공되는 혜택이나 이벤트가 있는지 궁금합니다.',
                time: '2024.10.28',
                comments: 1,
            },
            {
                id: 6,
                title: '이사 일정 조율 문의',
                description: '이사를 계획하고 있는데 일정 조율이 필요한 경우 어디에 문의해야 하나요?',
                time: '2024.10.20',
                comments: 1,
            },
            {
                id: 5,
                title: '입주민 커뮤니티 서비스 관련 문의',
                description: '입주민 커뮤니티 기능을 어디에서 사용할 수 있나요? 별도 가입이 필요한가요?',
                time: '2024.10.12',
                comments: 1,
            },
            {
                id: 4,
                title: '관리비 납부 방법 문의',
                description: '관리비를 어떻게 납부해야 하나요? 온라인 납부가 가능한가요?',
                time: '2024.10.05',
                comments: 1,
            },
            {
                id: 3,
                title: '하자 보수 신청이 승인되지 않았습니다.',
                description: '하자 보수 신청서를 제출했는데 거절되었습니다. 이유를 알 수 있을까요?',
                time: '2024.10.01',
                comments: 1,
            },
            {
                id: 2,
                title: '아파트 시설 이용 규정에 대해 알고 싶습니다.',
                description: '공동 시설 이용 시 지켜야 할 규정이 궁금합니다. 어디서 확인할 수 있을까요?',
                time: '2024.09.20',
                comments: 1,
            },
            {
                id: 1,
                title: '제가 올린 신청서는 언제 확인되나요?',
                description: '제가 신청서를 등록했는데 아직 확인이 안되어서요. 언제 확인이 될까요?',
                time: '2024.09.15',
                comments: 1,
            },
        ];
        setItems(mockItems);
        setFilteredItems(mockItems);
    };

    // 검색어에 따라 항목 필터링
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredItems(items);
        } else {
            const lowercasedTerm = searchTerm.toLowerCase();
            const filtered = items.filter((item) =>
                item.title.toLowerCase().includes(lowercasedTerm)
            );
            setFilteredItems(filtered);
        }
    }, [searchTerm, items]);

    useEffect(() => {
        loadMockData();
    }, []);

    return (
        <Styled.QnAContainer>
            <Title title={"Q&A"}/>
            <Padding all={"10px"}/>
            <SearchInput
                placeholder={"검색어를 입력하세요."}
                width={"350px"}
                borderRadius={"50px"}
                onChange={(value) => setSearchTerm(value)}
            />
            <ContentList items={filteredItems} location={"question"}/>
            <WriteQuestionButton/>
        </Styled.QnAContainer>
    );
};

export default QuestionList;