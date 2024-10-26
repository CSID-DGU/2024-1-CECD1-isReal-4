import * as Styled from "./style";
import React, { useState } from "react";
import H1 from "@/components/Common/Font/Heading/H1";
import H3 from "@/components/Common/Font/Heading/H3";
import { useNavigate } from "react-router-dom";
import { postFormLogin } from "@/apis/auth";
import Cookies from "js-cookie";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await postFormLogin({ username, password });

            if (response.status === 200) {
                // `Authorization` 헤더에서 토큰을 가져오기
                const authorizationHeader = response.headers?.authorization;

                if (authorizationHeader && authorizationHeader.startsWith("Bearer")) {
                    const accessToken = authorizationHeader.split(" ")[1];
                    console.log("accessToken:", accessToken);

                    // 토큰을 쿠키에 저장
                    Cookies.set("access_token", accessToken);
                } else {
                    console.log("Authorization 헤더가 없거나 형식이 잘못되었습니다.");
                    alert("로그인에 실패했습니다: 올바른 인증 토큰을 찾을 수 없습니다.");
                    return;
                }

                console.log("로그인에 성공했습니다.");
                navigate("/subscribed-user"); // 로그인 성공 시 홈으로 이동
            } else {
                console.log("로그인에 실패했습니다. 실패 코드: ", response.status);
                alert(`로그인 실패: 서버에서 실패 응답을 받았습니다. (코드: ${response.status})`);
            }
        } catch (error) {
            if (error.response) {
                // 서버에서 오류 응답을 받은 경우
                console.log("로그인 오류: ", error.response.data);
                if (error.response.status === 403) {
                    alert("권한이 없습니다. 관리자에게 문의하세요.");
                } else if (error.response.status === 401) {
                    alert("인증 오류: 잘못된 사용자 정보입니다.");
                } else {
                    alert(`로그인 실패: ${error.response.data.message || "알 수 없는 오류"}`);
                }
            } else {
                // 서버에 연결되지 않은 경우 또는 기타 네트워크 오류
                console.log("로그인 오류: 네트워크 또는 서버 오류", error.message);
                alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            }
        }
    };

    const isFormValid = username !== "" && password !== "";

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
                            <H3 text='아이디' />
                        </Styled.InputGroupSection>

                        <Styled.Input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='아이디를 입력해주세요'
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
