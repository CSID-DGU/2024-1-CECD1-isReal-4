import React from 'react';
import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem';
import DateSeparator from '../DateSeparator';

interface ListContentItem {
    id: number;
    title: string;
    faultCount: number;
    createdAt: string;
}

const mockData: ListContentItem[] = [
    { id: 1, title: '하자 리스트 1', faultCount: 6, createdAt: '2024.05.28' },
    { id: 2, title: '하자 리스트 2', faultCount: 6, createdAt: '2024.05.28' },
    { id: 3, title: '하자 리스트 3', faultCount: 6, createdAt: '2024.05.28' },
    { id: 4, title: '하자 리스트 4', faultCount: 6, createdAt: '2024.05.27' },
    { id: 5, title: '하자 리스트 5', faultCount: 6, createdAt: '2024.05.27' },
];

export default function ListContents() {
    const navigate = useNavigate();
    const handleItemClick = (item: ListContentItem) => {
        navigate(`/registeredCheckListDetail/${item.id}`, { state: item });
    };

    // 날짜별로 그룹화된 데이터
    const groupedData = mockData.reduce((acc, item) => {
        if (!acc[item.createdAt]) acc[item.createdAt] = [];
        acc[item.createdAt].push(item);
        return acc;
    }, {} as Record<string, ListContentItem[]>);

    return (
        <Styled.CheckListContentContainer>
            {Object.keys(groupedData).map((date) => (
                <React.Fragment key={date}>
                    <DateSeparator date={date} />
                    {groupedData[date].map((item) => (
                        <ListItem key={item.id} item={item} onClick={handleItemClick} />
                    ))}
                </React.Fragment>
            ))}
        </Styled.CheckListContentContainer>
    );
}