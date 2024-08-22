import React from 'react';
import * as Styled from "./style.ts"

interface AnswerItemProps {
    author: string;
    content: string;
    time: string;
}

const Answer: React.FC<AnswerItemProps> = ({ author, content, time }) => {
    return (
        <Styled.AnswerContainer>
            <Styled.AvatarPlaceholder />
            <Styled.AnswerContent>
                <Styled.AnswerHeader>
                    <Styled.Author>{author}</Styled.Author>
                    <Styled.Time>{time} ago</Styled.Time>
                </Styled.AnswerHeader>
                <Styled.Content>{content}</Styled.Content>
            </Styled.AnswerContent>
        </Styled.AnswerContainer>
    );
};

export default Answer;
