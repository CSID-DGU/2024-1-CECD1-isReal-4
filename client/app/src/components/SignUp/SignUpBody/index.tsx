import { ChangeEvent, useState } from "react";
import * as Styled from "./style.ts";
import { useNavigate } from "react-router-dom";
import { convertKoreanToEnglish } from "@/utils/convertKoreanToEnglish.ts";
import { findApartments, validateEmail } from "@/apis/auth";
import { useSignUpStore, SignUpState } from "@/stores/useSignUpStore.ts"


export default function SignUpBody() {
    const navigate = useNavigate();
    const {
        username,
        password,
        memberName,
        phoneNumber,
        apartmentName,
        apartmentBuildingNumber,
        setField,
    } = useSignUpStore();
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [emailMessage, setEmailMessage] = useState<string>("");
    const [passwordMessage, setPasswordMessage] = useState<string>("");
    const [unique, setUnique] = useState<boolean>(false);
    const [match, setMatch] = useState<boolean>(false);


    const isFormCompleted = (): boolean => {
        return (
            username !== "" &&
            password !== "" &&
            memberName !== "" &&
            phoneNumber !== "" &&
            apartmentName !== "" &&
            apartmentBuildingNumber !== ""&&
                unique && match
        );
    };

    const handleDuplicateCheckClick = async () => {
        try {
            const response = await validateEmail(username);
            if (response) {
                setEmailMessage("이미 사용 중인 이메일입니다.");
                setUnique(false);
            } else {
                setEmailMessage("사용 가능한 이메일입니다.");
                setUnique(true);
            }
        } catch (error) {
            console.error("Failed to validate email:", error);
            setEmailMessage("이메일 확인 중 오류가 발생했습니다.");
        }
    };

    const handleInputChange = (field: keyof SignUpState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value = e.target.value;

        if (field === "username") {
            // 이메일 유효성 검사: @를 포함하고, . 뒤에 최소 2글자 이상이어야 함
            const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(value)) {
                setEmailMessage("유효하지 않은 이메일입니다.");
                setEmailValid(false);
            } else {
                setEmailMessage("사용할 수 있는 이메일입니다.");
                setEmailValid(true);
            }
        }

        if (field === "password") {
            value = convertKoreanToEnglish(value);
            const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
            if (!passwordPattern.test(value)) {
                setPasswordMessage("비밀번호는 숫자, 영어, 특수문자를 포함한 8~20자여야 합니다.");
                setMatch(false);
            } else {
                setPasswordMessage("사용할 수 있는 비밀번호입니다.");
                setMatch(true)
            }
        } else if (field === "phoneNumber") {
            value = value.replace(/[^0-9]/g, "");
            if (value.length > 3 && value.length <= 7) {
                value = `${value.slice(0, 3)}-${value.slice(3)}`;
            } else if (value.length > 7) {
                value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
            }
        }
        setField(field, value);
    };

    const handleMoveUploadDocClick = () => {
        navigate("/signup/uploadDoc");
    };

    return (
        <Styled.Container>
            <Styled.InputContainer>
                <Styled.Label>이메일</Styled.Label>
                <Styled.SideButtonWrapper>
                    <Styled.Input
                        type="text"
                        placeholder="이메일 형식으로 입력해주세요."
                        value={username}
                        onChange={handleInputChange("username")}
                    />
                    <Styled.CheckButton onClick={handleDuplicateCheckClick} disabled={!emailValid}>중복 확인</Styled.CheckButton>
                </Styled.SideButtonWrapper>
                {emailMessage && <Styled.CommnMessageText>{emailMessage}</Styled.CommnMessageText>}
            </Styled.InputContainer>

            <Styled.InputContainer>
                <Styled.Label>비밀번호</Styled.Label>
                <Styled.Input
                    type="password"
                    placeholder="사용하실 비밀번호를 입력해주세요"
                    value={password}
                    onChange={handleInputChange("password")}
                />
                {passwordMessage && <Styled.MessageText match={match}>{passwordMessage}</Styled.MessageText>}
            </Styled.InputContainer>

            <Styled.InputContainer>
                <Styled.Label>이름</Styled.Label>
                <Styled.Input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={memberName}
                    onChange={handleInputChange("memberName")}
                />
            </Styled.InputContainer>

            <Styled.InputContainer>
                <Styled.Label>휴대전화</Styled.Label>
                <Styled.Input
                    type="text"
                    placeholder="010-1234-5678 형식으로 입력해주세요"
                    value={phoneNumber}
                    onChange={handleInputChange("phoneNumber")}
                />
            </Styled.InputContainer>

            <Styled.InputContainer>
                <Styled.Label>아파트명</Styled.Label>
                <Styled.Select
                    value={apartmentName}
                    onChange={handleInputChange("apartmentName")}
                >
                    <option value="">아파트 선택</option>
                    <option value="더펜트하우스청담">더펜트하우스청담</option>
                    <option value="한강자이">한강자이</option>
                    <option value="한남더힐">한남더힐</option>
                </Styled.Select>
            </Styled.InputContainer>

            <Styled.InputContainer>
                <Styled.Label>동</Styled.Label>
                <Styled.Input
                    type="text"
                    placeholder="동 입력"
                    value={apartmentBuildingNumber}
                    onChange={handleInputChange("apartmentBuildingNumber")}
                />
            </Styled.InputContainer>
            <Styled.ButtonContainer>
                <Styled.UploadDocButton onClick={handleMoveUploadDocClick} disabled={!isFormCompleted()}>
                    다음
                </Styled.UploadDocButton>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}