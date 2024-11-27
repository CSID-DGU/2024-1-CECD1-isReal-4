import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Style from "./style.ts"
import Answer from "@/components/Answer";
import Title from "@/components/Title";
import Row from "@/components/Common/Row";

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
        <Style.Container>
            <Style.TitleContainer>
                <Style.DetailTitle>{item.title}</Style.DetailTitle>
                <Style.Time>{item.time}</Style.Time>
            </Style.TitleContainer>
            <Style.Description>{item.description}</Style.Description>
            {item.images && (
                <Style.ImageContainer>
                    {item.images.map((image, index) => (
                        <Style.Image key={index} src={image} alt={`image-${index}`} />
                    ))}
                </Style.ImageContainer>
            )}
            <Style.AnswersSection>
                <Style.SectionTitle>답변</Style.SectionTitle>
                <Answer author="관리자" content="확인 후에 알려드리겠습니다." time="2024.11.27" />
            </Style.AnswersSection>
            <Row alignItems={"center"} justifyContent={"center"}>
            <Style.CommentInput placeholder="댓글을 입력해주세요" />
            <Style.CommentButton>등록</Style.CommentButton>
            </Row>
        </Style.Container>
        </>
    );
};

export default QuestionDetail;

