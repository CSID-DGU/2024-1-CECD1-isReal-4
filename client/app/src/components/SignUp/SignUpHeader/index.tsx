import H1 from "@/components/Common/Font/Heading/H1/index.tsx";
import H4 from "@/components/Common/Font/Heading/H4/index.tsx";
import H6 from "@/components/Common/Font/Heading/H6/index.tsx";
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
                <Styled.BackButton onClick={handleBackClick}>
                    <H4 text='←' />
                </Styled.BackButton>
            </Styled.LeftButton>
            <H1 text='가입 신청' />
            <Styled.RightButton>
                <Styled.LoginButton onClick={handleLoginClick}>
                    <H6 text='로그인' />
                </Styled.LoginButton>
            </Styled.RightButton>
        </Styled.Container>
    );
}
