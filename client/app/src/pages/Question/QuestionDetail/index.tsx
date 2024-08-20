import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Answer from "@/components/Answer";
import Title from "@/components/Title";

interface ItemType {
    id: number;
    title?: string;
    description: string;
    images?: string[];
    time: string;
    comments: number;
}

const QuestionDetail: React.FC = () => {
    const location = useLocation();
    const item = location.state as ItemType | undefined;

    if (!item) {
        return <div>Item not found</div>;  // 또는 적절한 에러 메시지나 리다이렉트 처리
    }

    return (<>
        <Title title={"질문 상세보기"}/>
        <Container>
            <TitleContainer>
                <DetailTitle>{item.title}</DetailTitle>
                <Time>{item.time} ago</Time>
            </TitleContainer>
            <Description>{item.description}</Description>
            {item.images && (
                <ImageContainer>
                    {item.images.map((image, index) => (
                        <Image key={index} src={image} alt={`image-${index}`} />
                    ))}
                </ImageContainer>
            )}
            <AnswersSection>
                <SectionTitle>답변</SectionTitle>
                <Answer author="관리자" content="He'll want to use your yacht, and I don't want this thing smelling like fish." time="8m" />
            </AnswersSection>
            <CommentInput placeholder="댓글을 입력해주세요" />
        </Container>
        </>
    );
};

export default QuestionDetail;

// Styled Components 그대로 유지

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const DetailTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Time = styled.span`
  font-size: 12px;
  color: #888;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const AnswersSection = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
  box-sizing: border-box;
`;