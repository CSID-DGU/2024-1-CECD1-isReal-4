import * as Styled from "./style.ts";
import Home from "@/assets/icons/Home.svg";
import H1 from "@/components/Common/Font/Heading/H1/index.tsx";
import SvgButton from "@/components/Common/SvgButton";
import { useNavigate } from "react-router-dom";

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
    };

    return (
        <Styled.Container>
            <H1 text='로그인' />
            <Styled.RightButton>
                <SvgButton src={Home} height={"36px"} width={"36px"} onClick={handleHomeClick} />
            </Styled.RightButton>
        </Styled.Container>
    );
}
