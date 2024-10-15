import { useState, ChangeEvent } from "react";
import * as Styled from "./style.ts";
import { useNavigate } from "react-router-dom";
import { convertKoreanToEnglish } from "@/utils/convertKoreanToEnglish.ts";
import {findApartments} from "@/apis/auth";

export default function SignUpBody() {
    const navigate = useNavigate();

    const [ID, setID] = useState<string>("");
    const [idMessage, setIdMessage] = useState<string>("");
    const [idValid, setIdValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordMessage, setPasswordMessage] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>("");
    const [passwordValid, setPasswordValid] = useState<boolean>(false); // 비밀번호 유효성 여부
    const [email, setEmail] = useState<string>("");
    const [emailMessage, setEmailMessage] = useState<string>("");
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [apartmentName, setApartmentName] = useState<string>("");
    const [selectedDong, setSelectedDong] = useState<string>("");
    const [selectedLine, setSelectedLine] = useState<string>("");
    const [selectedHosu, setSelectedHosu] = useState<string>("");

    const isFormCompleted = (): boolean => {
        return (
            ID !== "" &&
            idValid &&
            password !== "" &&
            confirmPassword !== "" &&
            passwordConfirmMessage === "비밀번호가 일치합니다." &&
            passwordValid &&
            email !== "" &&
            emailValid &&
            phoneNumber !== "" &&
            apartmentName !== "" &&
            selectedDong !== "" &&
            selectedLine !== "" &&
            selectedHosu !== ""
        );
    };

    const handleDuplicateCheckClick = async () => {
        const response = await findApartments();
        console.log(response);
    }

    const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = convertKoreanToEnglish(value);

        setID(value);

        // 아이디 유효성 검사: 영어 소문자, 숫자만 허용, 5~15자
        const idPattern = /^[a-z0-9]+$/;
        if (value.length < 5 || value.length > 15 || !idPattern.test(value)) {
            setIdMessage("사용할 수 없는 아이디입니다.");
            setIdValid(false);
        } else {
            setIdMessage("사용 가능한 아이디입니다.");
            setIdValid(true);
        }
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = convertKoreanToEnglish(value);

        setPassword(value);

        const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if (!passwordPattern.test(value)) {
            setPasswordMessage("비밀번호는 숫자, 영어, 특수문자를 포함한 8~20자여야 합니다.");
            setPasswordValid(false);
        } else {
            setPasswordMessage("사용할 수 있는 비밀번호입니다.");
            setPasswordValid(true);
        }
    };
    function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        value = convertKoreanToEnglish(value);
        setConfirmPassword(value);
        if (value === password) {
            setPasswordConfirmMessage("비밀번호가 일치합니다.");
        } else {
            setPasswordConfirmMessage("비밀번호가 다릅니다.");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        // 이메일 유효성 검사: @를 무조건 포함하고 . 뒤에 최소 2글자 이상이어야 함
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
            setEmailMessage("유효하지 않은 이메일입니다.");
            setEmailValid(false);
        } else {
            setEmailMessage("사용할 수 있는 이메일입니다.");
            setEmailValid(true);
        }
    };

    function handlePhoneNumberChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자는 제거
        if (value.length <= 11) {
            // 최대 길이를 11자로 제한
            let formattedValue = value;
            if (value.length > 3 && value.length <= 7) {
                formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
            } else if (value.length > 7) {
                formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
            }
            setPhoneNumber(formattedValue);
        }
    }

    // function handleApartmentNameSearchClick() {
    //     alert("아파트명 검색 버튼 클릭");
    // }

    function handleMoveUploadDocClick() {
        navigate("/signup/uploadDoc");
    }

    return (
        <Styled.Container>
            <Styled.InputContainer>
                <Styled.Label>아이디</Styled.Label>
                <Styled.SideButtonWrapper>
                    <Styled.Input
                        type='text'
                        placeholder='사용하실 아이디를 입력해주세요'
                        value={ID}
                        onChange={handleIDChange}
                    />
                    <Styled.CheckButton onClick={handleDuplicateCheckClick}>중복 확인</Styled.CheckButton>
                </Styled.SideButtonWrapper>
                {idMessage && <Styled.MessageText match={idValid}>{idMessage}</Styled.MessageText>}
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>비밀번호</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type={showPassword ? "text" : "password"}
                        placeholder='사용하실 비밀번호를 입력해주세요'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Styled.ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                    </Styled.ShowPasswordButton>
                </Styled.CommonWrapper>
                {passwordMessage && <Styled.MessageText match={passwordValid}>{passwordMessage}</Styled.MessageText>}
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>비밀번호 확인</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type='password'
                        placeholder='비밀번호를 다시 한 번 입력해주세요'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </Styled.CommonWrapper>
                {passwordConfirmMessage && (
                    <Styled.MessageText match={confirmPassword === password}>
                        {passwordConfirmMessage}
                    </Styled.MessageText>
                )}
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>이메일</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type='text'
                        placeholder='이메일을 입력해주세요'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Styled.CommonWrapper>
                {emailMessage && <Styled.MessageText match={emailValid}>{emailMessage}</Styled.MessageText>}
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>휴대전화</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type='text'
                        placeholder='전화번호를 입력해주세요'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </Styled.CommonWrapper>
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>아파트명</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Select
                        value={apartmentName}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setApartmentName(e.target.value)}
                    >
                        <option value=''>아파트 선택</option>
                        <option value='101'>더펜트하우스청담</option>
                        <option value='102'>한강자이</option>
                        <option value='103'>한남더힐</option>
                    </Styled.Select>
                </Styled.CommonWrapper>
                {/* <Styled.SideButtonWrapper>
                    <Styled.Input
                        type='text'
                        placeholder='아파트명'
                        value={apartmentName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setApartmentName(e.target.value)}
                    />
                    <Styled.CheckButton onClick={handleApartmentNameSearchClick}>검색</Styled.CheckButton>
                </Styled.SideButtonWrapper> */}
            </Styled.InputContainer>
            <Styled.LineContainer>
                <Styled.LineWrapper>
                    <Styled.Label>동</Styled.Label>
                    <Styled.Select
                        value={selectedDong}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDong(e.target.value)}
                    >
                        <option value=''>동 선택</option>
                        <option value='101'>101동</option>
                        <option value='102'>102동</option>
                        <option value='103'>103동</option>
                    </Styled.Select>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Label>라인</Styled.Label>
                    <Styled.Select
                        value={selectedLine}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedLine(e.target.value)}
                    >
                        <option value=''>라인 선택</option>
                        <option value='A'>A 라인</option>
                        <option value='B'>B 라인</option>
                        <option value='C'>C 라인</option>
                    </Styled.Select>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Label>호수</Styled.Label>
                    <Styled.NumberInput
                        placeholder='호수 입력'
                        value={selectedHosu}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedHosu(e.target.value)}
                    />
                </Styled.LineWrapper>
            </Styled.LineContainer>
            <Styled.ButtonContainer>
                <Styled.UploadDocButton onClick={handleMoveUploadDocClick} disabled={!isFormCompleted()}>
                    인증 서류 업로드하기
                </Styled.UploadDocButton>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}
