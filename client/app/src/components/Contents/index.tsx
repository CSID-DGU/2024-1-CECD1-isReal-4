import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from "./style.ts"
import H5 from "@/components/Common/Font/Heading/H5";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import theme from "@/shared/theme.ts";

interface ContentItem {
    id: number;
    title: string;
    description: string;
    time: string;
    comments?: number;
}

interface ContentListProps {
    items: ContentItem[];
    location: string;
}

const ContentList: React.FC<ContentListProps> = ({ items , location}) => {
    const navigate = useNavigate();
    const handleItemClick = (item: ContentItem) => {
        if(location === 'question') {
            navigate(`/question/${item.id}`, { state: item });
        } else if(location === 'announcement') {
            navigate(`/announcement/${item.id}`, { state: item });
        }
    };

    return (
        <Styled.ListContainer>
            {items.map((item) => (
                <Styled.ListItem key={item.id} onClick={() => handleItemClick(item)}>
                    <Styled.ImagePlaceholder />
                    <Styled.TextContainer>
                        <Styled.Header>
                            <H5 text={item.title} color={theme.colorSystem.black} />
                            <Sub3 text={item.time} color={"#888"}/>
                        </Styled.Header>
                        <Styled.Description>{item.description}</Styled.Description>
                        {item.comments !== undefined && (
                            <Styled.Comments>댓글 {item.comments}</Styled.Comments>
                        )}
                    </Styled.TextContainer>
                </Styled.ListItem>
            ))}
        </Styled.ListContainer>
    );
};

export default ContentList;

