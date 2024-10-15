import React, { useState } from "react";
import * as Styled from "./style.ts";
import H4 from "@/components/Common/Font/Heading/H4/index.tsx";
import H6 from "@/components/Common/Font/Heading/H6/index.tsx";
import { useNavigate } from "react-router-dom";
import { convertKoreanToEnglish } from "@/utils/convertKoreanToEnglish.ts";
import { postFormLogin } from "@/apis/auth";
import Cookies from "js-cookie";

export default function LoginBody() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isLoginDisabled = username === "" || password === "";

    // function handleLoginClick() {
    //     console.log(username, password);
    //     navigate("/home");
    // }

    // Login API 호출
    const handleLogin = async () => {
    // console.log(username, password);
        if (!isLoginDisabled) {

            try {
                const response = await postFormLogin({username, password});
                if (response.status === 200) {

                    // 헤더 토큰을 AccessToken에 넣기
                    const authorizationHeader = response.headers?.authorization;
                    if(authorizationHeader && authorizationHeader.startsWith("Bearer")) {
                        const accessToken = authorizationHeader.split(" ")[1];
                        console.log("accessToken:",accessToken);

                        Cookies.set('access_token', accessToken);
                    } else {
                        console.log("Authorization 헤더가 없거나 형식이 잘못되었습니다.");
                    }

                    console.log("로그인에 성공했습니다.")
                    navigate("/home");
                } else {
                    console.log("로그인에 실패했습니다. 실패 코드: ", response.status);
                }
            } catch (error) {
                console.log("로그인 오류: ",error);
                // setIsAlertOpen(true);
                //
                // if (error.response.data.error.message) {
                //     setAlertMessage(error.response.data.error.message);
                // } else {
                //     setAlertMessage("서버와 통신 중 오류가 발생했습니다.");
                // }
                alert("catch error 발생");
            }
        } else {
            // setIsAlertOpen(true);
            // setAlertMessage("이메일 또는 비밀번호를 확인해주세요.")
            alert("else error 발생");
        }
    }

    function handleSignUpClick() {
        navigate("/signup");
    }

    const handleIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const convertedValue = convertKoreanToEnglish(e.target.value);
        setUsername(convertedValue);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const convertedValue = convertKoreanToEnglish(e.target.value);
        setPassword(convertedValue);
    };

    return (
        <Styled.Container>
            <Styled.InputContainer>
                <Styled.Wrapper>
                    <Styled.Input type='text' placeholder='아이디' value={username} onChange={handleIDChange} />
                </Styled.Wrapper>
                <Styled.Wrapper>
                    <Styled.Input
                        type={showPassword ? "text" : "password"}
                        placeholder='비밀번호'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Styled.ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                    </Styled.ShowPasswordButton>
                </Styled.Wrapper>
            </Styled.InputContainer>
            <Styled.ButtonContainer>
                <Styled.LoginButton disabled={isLoginDisabled} onClick={handleLogin} isDisabled={isLoginDisabled}>
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
