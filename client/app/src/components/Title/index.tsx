import * as Styled from "./style";
import {useNavigate} from "react-router-dom";
import SvgButton from "@/components/Common/SvgButton";
import ArrowLeft from "@/assets/icons/ArrowLeft.svg";
import Spacer from "@/components/Common/Spacer";

interface TitleProps {
    title: string;
}

export default function Title(props:TitleProps) {
    const navigate = useNavigate();
    function handleArrowClick() {
        navigate(-1);
    }

    return (
        <Styled.Container>
            <Spacer flex={0.03} direction={"horizontal"}/>
            <SvgButton src={ArrowLeft} onClick={handleArrowClick} width={"24px"} height={"24px"}/>
            <Styled.CenterTitleContainer>
                {props.title}
            </Styled.CenterTitleContainer>
        </Styled.Container>

    )
}