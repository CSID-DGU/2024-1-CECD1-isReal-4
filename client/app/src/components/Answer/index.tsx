import React from 'react';
import styled from 'styled-components';

interface AnswerItemProps {
    author: string;
    content: string;
    time: string;
}

const Answer: React.FC<AnswerItemProps> = ({ author, content, time }) => {
    return (
        <AnswerContainer>
            <AvatarPlaceholder />
            <AnswerContent>
                <AnswerHeader>
                    <Author>{author}</Author>
                    <Time>{time} ago</Time>
                </AnswerHeader>
                <Content>{content}</Content>
            </AnswerContent>
        </AnswerContainer>
    );
};

export default Answer;

// Styled Components
const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const AvatarPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-right: 10px;
`;

const AnswerContent = styled.div`
  flex: 1;
`;

const AnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Author = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const Time = styled.span`
  font-size: 12px;
  color: #888;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 0;
  color: #333;
`;