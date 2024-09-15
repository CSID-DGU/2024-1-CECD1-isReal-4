import * as Styled from "./style.ts";
import SvgButton from "@/components/Common/SvgButton";
import H3 from "@/components/Common/Font/Heading/H3";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import RegisterIcon from "@/assets/icons/Register.svg";
import CheckListIcon from "@/assets/icons/CheckList.svg";
import QnAIcon from "@/assets/icons/QnA.svg";
import AnnouncementIcon from "@/assets/icons/Announcement.svg";
import {useNavigate} from "react-router-dom";

export default function Category() {
    function handleCardClick() {
        alert("Card Clicked!");
    }
    const navigate = useNavigate()

    return (
        <Styled.CategoryContainer>
            {/*<Styled.CategoryTitle>Category</Styled.CategoryTitle>*/}
            <Row>
                <Spacer flex={0.1} direction={"vertical"}/>
                <H3 text={"Category"} />
            </Row>
            <Styled.CategoryGrid>
                <Styled.CategoryCard onClick={handleCardClick}>
                    <SvgButton src={RegisterIcon} height={"28px"} width={"28px"} />
                    <Sub1 text={"체크리스트 작성하기"} />
                </Styled.CategoryCard>
                <Styled.CategoryCard onClick={() => navigate("/listSelection")}>
                    <SvgButton src={CheckListIcon} height={"28px"} width={"28px"} />
                    <Sub1 text={"체크리스트 보기"} />
                </Styled.CategoryCard>
                <Styled.CategoryCard onClick={() => navigate("/question")}>
                    <SvgButton src={QnAIcon} height={"28px"} width={"28px"} />
                    <Sub1 text={"Q&A"} />
                </Styled.CategoryCard>
                <Styled.CategoryCard onClick={() => navigate("/announcement")}>
                    <SvgButton src={AnnouncementIcon} height={"28px"} width={"28px"} />
                    <Sub1 text={"공지사항"} />
                </Styled.CategoryCard>
            </Styled.CategoryGrid>
        </Styled.CategoryContainer>
    );
}