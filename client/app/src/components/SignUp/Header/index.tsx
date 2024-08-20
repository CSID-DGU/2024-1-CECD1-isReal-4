import H1 from "@/components/Common/Font/Heading/H1";
import H4 from "@/components/Common/Font/Heading/H4";
import H6 from "@/components/Common/Font/Heading/H6";
import * as Styled from "./style.ts";
import { useNavigate } from "react-router-dom";

export default function SignUpHeader() {
    const navigate = useNavigate();

    function handleLoginClick() {
        navigate("/login");
    }

    function handleBackClick() {
        navigate(-1);
    }

    return (
        <Styled.Container>
            <Styled.LeftButton>
                <Styled.Button onClick={handleBackClick}>
                    <H4 text='←' />
                </Styled.Button>
            </Styled.LeftButton>
            <H1 text='가입 신청' />
            <Styled.RightButton>
                <Styled.Button onClick={handleLoginClick}>
                    <H6 text='로그인' />
                </Styled.Button>
            </Styled.RightButton>
        </Styled.Container>
    );
}
