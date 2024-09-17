import Title from "@/components/Title";
import * as Styled from "./style.ts"
import H1 from "@/components/Common/Font/Body/Sub1";
import SvgButton from "@/components/Common/SvgButton";
import CheckListIcon from "@/assets/icons/CheckList.svg";
import RegisterIcon from "@/assets/icons/Register.svg";
import { useNavigate} from "react-router-dom";

export default function CheckListSelection() {
    const navigate = useNavigate();

    return (
        <>
            <Title title={"체크리스트 선택"}/>
            <Styled.CategoryContainer>
                <Styled.CategoryGrid>
                    <Styled.CategoryCard onClick={() => navigate('/registeredCheckList')}>
                        <SvgButton src={CheckListIcon} height={"28px"} width={"28px"} marginBottom={"20px"}/>
                        <H1 text={"등록된 하자"} />
                        <H1 text={"체크리스트 보기"} />
                    </Styled.CategoryCard>
                    <Styled.CategoryCard>
                        <SvgButton src={RegisterIcon} height={"28px"} width={"28px"} marginBottom={"20px"}/>
                        <H1 text={"내가 작성한"} />
                        <H1 text={"하자 체크리스트 보기"} />
                    </Styled.CategoryCard>
                </Styled.CategoryGrid>
            </Styled.CategoryContainer>
        </>
    );
}