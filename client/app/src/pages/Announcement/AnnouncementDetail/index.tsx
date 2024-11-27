import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Style from "./style.ts"
import Title from "@/components/Title";

interface ItemType {
    id: number;
    title?: string;
    description: string;
    images?: string[];
    time: string;
    comments: number;
}

const AnnouncementDetail: React.FC = () => {
    const location = useLocation();
    const item = location.state as ItemType | undefined;

    if (!item) {
        return <div>Item not found</div>;  // 또는 적절한 에러 메시지나 리다이렉트 처리
    }

    return (<>
        <Title title={"공지사항 상세보기"}/>
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
        </Style.Container>
        </>
    );
};

export default AnnouncementDetail;

