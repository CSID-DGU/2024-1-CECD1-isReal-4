/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import * as Styled from "./style.ts";
import H4 from "@/components/Common/Font/Heading/H4/index.tsx";
import H6 from "@/components/Common/Font/Heading/H6/index.tsx";
import { useNavigate } from "react-router-dom";

export default function LoginBody() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [ID, setID] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginClick() {
        alert("Login Button Clicked");
    }

    function handleSignUpClick() {
        navigate("/signup");
    }

    return (
        <Styled.Container>
            <Styled.InputContainer>
                <Styled.Wrapper>
                    <Styled.Input type='text' placeholder='아이디' value={ID} onChange={(e) => setID(e.target.value)} />
                </Styled.Wrapper>
                <Styled.Wrapper>
                    <Styled.Input
                        type={showPassword ? "text" : "password"}
                        placeholder='비밀번호'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Styled.ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                    </Styled.ShowPasswordButton>
                </Styled.Wrapper>
            </Styled.InputContainer>
            <Styled.ButtonContainer>
                <Styled.LoginButton onClick={handleLoginClick}>
                    <H4 text='로그인 하기' />
                </Styled.LoginButton>
            </Styled.ButtonContainer>
            <Styled.SignUpContainer>
                <Styled.SignUpText>
                    <H6 text='아직 회원이 아니신가요?' />
                </Styled.SignUpText>
                <Styled.SignUpButton onClick={handleSignUpClick}>
                    <H6 text='회원가입' />
                </Styled.SignUpButton>
            </Styled.SignUpContainer>
        </Styled.Container>
    );
}
