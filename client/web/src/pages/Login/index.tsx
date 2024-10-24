import * as Styled from "./style";
import React, { useState } from "react";
import H1 from "@/components/Common/Font/Heading/H1";
import H3 from "@/components/Common/Font/Heading/H3";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        alert("로그인 버튼 클릭");
    };

    const isFormValid = email !== "" && password !== "";

    return (
        <Styled.LoginContainer>
            <Styled.WelcomeSection>
                <H1 text='AparTodo의' />
                <H1 text='시행•시공사 관리 페이지 입니다' />
            </Styled.WelcomeSection>

            <Styled.LoginSection>
                <Styled.Form onSubmit={handleSubmit}>
                    <Styled.InputGroup>
                        <Styled.InputGroupSection>
                            <H3 text='이메일' />
                        </Styled.InputGroupSection>

                        <Styled.Input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='이메일을 입력해주세요'
                            required
                        />
                    </Styled.InputGroup>

                    <Styled.InputGroup>
                        <Styled.InputGroupSection>
                            <H3 text='비밀번호' />
                        </Styled.InputGroupSection>
                        <Styled.Input
                            type={showPassword ? "text" : "password"}
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='비밀번호를 입력해주세요'
                            required
                        />
                        <Styled.ShowPasswordBtn type='button' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "숨기기" : "보이기"}
                        </Styled.ShowPasswordBtn>
                    </Styled.InputGroup>

                    <Styled.SignInButton type='submit' disabled={!isFormValid}>
                        로그인
                    </Styled.SignInButton>
                </Styled.Form>
            </Styled.LoginSection>
        </Styled.LoginContainer>
    );
}
