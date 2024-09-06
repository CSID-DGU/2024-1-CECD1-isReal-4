import * as Styled from "./style.ts";
import ArrowLeft from "@/assets/icons/ArrowLeft.svg";
import Alarm from "@/assets/icons/Alarm.svg";
import H1 from "@/components/Common/Font/Heading/H1/index.tsx";
import SvgButton from "@/components/Common/SvgButton";
import { useNavigate } from "react-router-dom";

function MyPageHeader() {
    const navigate = useNavigate();

    const handleArrowClick = () => {
        navigate(-1);
    };

    const handleAlarmClick = () => {
        alert("알람 클릭");
    };

    return (
        <Styled.Container>
            <Styled.LeftButton>
                <SvgButton src={ArrowLeft} height={"32px"} width={"32px"} onClick={handleArrowClick} />
            </Styled.LeftButton>
            <H1 text='마이페이지' />
            <Styled.RightButton>
                <SvgButton src={Alarm} height={"40px"} width={"40px"} onClick={handleAlarmClick} />
            </Styled.RightButton>
        </Styled.Container>
    );
}
export default MyPageHeader;
