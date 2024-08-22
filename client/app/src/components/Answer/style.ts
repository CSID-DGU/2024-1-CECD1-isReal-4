import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const AvatarPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AnswerContent = styled.div`
  flex: 1;
`;

export const AnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Author = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #888;
`;

export const Content = styled.p`
  font-size: 14px;
  margin: 0;
  color: #333;
`;