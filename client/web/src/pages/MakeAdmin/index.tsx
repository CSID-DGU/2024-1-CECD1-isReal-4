import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { createAdmin } from "@/apis/superAdmin";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";

const MakeAdmin: React.FC = () => {
    const [adminData, setAdminData] = useState({
        username: "",
        password: "",
        memberName: "",
        phoneNumber: "",
        authDocument: "",
        apartmentName: "",
        apartmentInformation: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 페이지 로드 시 필요한 초기화 작업 (예: 권한 확인)
        const initialize = async () => {
            // 예: superAdmin 권한 확인 작업
            setLoading(false); // 초기화 작업 완료 후 로딩 해제
        };
        initialize();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phoneNumber") {
            const formattedValue = formatPhoneNumber(value);
            setAdminData((prevData) => ({
                ...prevData,
                [name]: formattedValue,
            }));
        } else {
            setAdminData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const formatPhoneNumber = (value: string) => {
        const onlyNumbers = value.replace(/\D/g, "");
        if (onlyNumbers.length <= 3) return onlyNumbers;
        if (onlyNumbers.length <= 7) return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
        return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString().split(",")[1];
                setAdminData((prevData) => ({
                    ...prevData,
                    authDocument: base64String || "",
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAdmin(adminData);
            alert("Admin 계정이 성공적으로 생성되었습니다.");
            setAdminData({
                username: "",
                password: "",
                memberName: "",
                phoneNumber: "",
                authDocument: "",
                apartmentName: "",
                apartmentInformation: "",
            });
        } catch (error) {
            console.error("Admin 계정 생성 오류:", error);
            alert("Admin 계정 생성에 실패했습니다.");
        }
    };

    if (loading) return <div>로딩 중...</div>;

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <Styled.Title>시행 • 시공사 계정 생성</Styled.Title>
                    <Styled.FormContainer>
                        <Styled.Form>
                            {[
                                { field: "username", label: "이메일", placeholder: "admin@example.com", type: "email" },
                                {
                                    field: "password",
                                    label: "비밀번호",
                                    placeholder: "비밀번호 입력",
                                    type: "password",
                                },
                                { field: "memberName", label: "이름", placeholder: "이름 입력", type: "text" },
                                {
                                    field: "phoneNumber",
                                    label: "연락처",
                                    placeholder: "010-1234-5678",
                                    type: "tel",
                                },
                                {
                                    field: "authDocument",
                                    label: "인증 문서 (파일 첨부)",
                                    type: "file",
                                    onChange: handleFileChange,
                                    accept: "image/*,application/pdf",
                                },
                                {
                                    field: "apartmentName",
                                    label: "아파트 이름",
                                    placeholder: "Green Apartments",
                                    type: "text",
                                },
                                {
                                    field: "apartmentInformation",
                                    label: "아파트 정보",
                                    placeholder: "서울특별시 강남구 청담동 123",
                                    type: "text",
                                },
                            ].map((item, index) => (
                                <Styled.FormField key={index}>
                                    <label>{item.label}</label>
                                    {item.type === "file" ? (
                                        <input
                                            type={item.type}
                                            name={item.field}
                                            onChange={handleFileChange}
                                            accept={item.accept}
                                        />
                                    ) : (
                                        <input
                                            type={item.type}
                                            name={item.field}
                                            value={(adminData as any)[item.field]}
                                            onChange={handleChange}
                                            placeholder={item.placeholder}
                                        />
                                    )}
                                </Styled.FormField>
                            ))}
                            <Styled.SubmitButton onClick={handleSubmit}>계정 생성</Styled.SubmitButton>
                        </Styled.Form>
                    </Styled.FormContainer>
                </Styled.MainContent>
            </Styled.ContentArea>
        </Styled.PageContainer>
    );
};

export default MakeAdmin;
