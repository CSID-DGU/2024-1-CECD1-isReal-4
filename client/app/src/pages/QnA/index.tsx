import * as Styled from "./style.ts"
import Title from "@/components/Title";
import SearchInput from "@/components/Search";
import Padding from "@/components/Common/Padding";

export default function QnA() {
    return (
        <Styled.QnAContainer>
            <Title title={"Question"}/>
            <Padding all={"10px"}/>
            <SearchInput placeholder={"Search"} width={"350px"} borderRadius={"50px"}/>
        </Styled.QnAContainer>
    )
}