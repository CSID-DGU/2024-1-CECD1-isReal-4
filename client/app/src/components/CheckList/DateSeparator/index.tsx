import React from 'react';
import * as Styled from './style';

interface DateSeparatorProps {
    date: string;
}

export const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
    return <Styled.DateSeparator>{date}</Styled.DateSeparator>;
};

export default DateSeparator;