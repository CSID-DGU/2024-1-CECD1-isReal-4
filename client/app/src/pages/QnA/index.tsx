import * as Styled from "./style.ts"
import Title from "@/components/Title";
import SearchInput from "@/components/Search";
import Padding from "@/components/Common/Padding";
import ContentList from "@/components/Contents";
import WriteQuestionButton from "@/components/Question/FloatButton";

export default function QnA() {
    const items = [
        {
            id: 1,
            title: 'Header',
            description: "He'll want to use your yacht, and I don't want this thing smelling ...",
            time: '8m',
            comments: 0,
        },
        {
            id: 2,
            title: 'Header',
            description: "He'll want to use your yacht, and I don't want this thing smelling ...",
            time: '8m',
            comments: 0,
        },
    ];

    return (
        <Styled.QnAContainer>
            <Title title={"Question"}/>
            <Padding all={"10px"}/>
            <SearchInput placeholder={"Search"} width={"350px"} borderRadius={"50px"}/>
            <ContentList items={items} />
            <WriteQuestionButton/>
        </Styled.QnAContainer>
    )
}