import React from 'react';
import * as Styled from './style';

interface ListItemProps {
    item: {
        id: number;
        title: string;
        faultCount: number;
        createdAt: string;
    };
    onClick: (item: any) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ item, onClick }) => {
    return (
        <Styled.ListItem onClick={() => onClick(item)}>
            <Styled.ListIcon />
            <Styled.ListText>
                {item.createdAt}에 등록된 하자 리스트 하자 개수: {item.faultCount}개
            </Styled.ListText>
        </Styled.ListItem>
    );
};

export default ListItem;