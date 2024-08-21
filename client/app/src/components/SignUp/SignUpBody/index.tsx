import { useState, ChangeEvent } from "react";
import * as Styled from "./style.ts";
import { useNavigate } from "react-router-dom";

export default function SignUpBody() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [ID, setID] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordMessage, setPasswordMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [apartmentName, setApartmentName] = useState<string>("");
    const [selectedDong, setSelectedDong] = useState<string>("");
    const [selectedLine, setSelectedLine] = useState<string>("");
    const [selectedHosu, setSelectedHosu] = useState<string>("");

    const isFormCompleted = (): boolean => {
        return (
            ID !== "" &&
            password !== "" &&
            confirmPassword !== "" &&
            passwordMessage === "비밀번호가 일치합니다." &&
            email !== "" &&
            phoneNumber !== "" &&
            apartmentName !== "" &&
            selectedDong !== "" &&
            selectedLine !== "" &&
            selectedHosu !== ""
        );
    };

    function handleDuplicateCheckClick() {
        alert("중복 확인 버튼 클릭");
    }

    function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setConfirmPassword(value);
        if (value === password) {
            setPasswordMessage("비밀번호가 일치합니다.");
        } else {
            setPasswordMessage("비밀번호가 다릅니다.");
        }
    }

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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setID(e.target.value)}
                    />
                    <Styled.CheckButton onClick={handleDuplicateCheckClick}>중복 확인</Styled.CheckButton>
                </Styled.SideButtonWrapper>
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>비밀번호</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type={showPassword ? "text" : "password"}
                        placeholder='사용하실 비밀번호를 입력해주세요'
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Styled.ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                    </Styled.ShowPasswordButton>
                </Styled.CommonWrapper>
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
                {passwordMessage && (
                    <Styled.MessageText match={confirmPassword === password}>{passwordMessage}</Styled.MessageText>
                )}
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>이메일</Styled.Label>
                <Styled.CommonWrapper>
                    <Styled.Input
                        type='text'
                        placeholder='이메일을 입력해주세요'
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </Styled.CommonWrapper>
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
