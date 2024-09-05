import React, { useState, useEffect } from 'react';
import * as Styled from "./style";
import { useNavigate, useLocation } from "react-router-dom";

interface userRoleType {
    role: "admin" | "client";
}

const WriteQuestionButton: React.FC = () => {
    const [isQuestion, setIsQuestion] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const role: userRoleType = { role: "admin" }; // 또는 { role: "client" };

    useEffect(() => {
        if (location.pathname.includes("/question")) {
            setIsQuestion(true);
        } else if (location.pathname.includes("/announcement")) {
            setIsQuestion(false);
        }
    }, [location.pathname]);

    // role과 URL을 기반으로 버튼 표시 여부 결정
    useEffect(() => {
        if (role.role === "client" && location.pathname.includes("/question")) {
            setIsVisible(true);
        } else if (role.role === "admin" && location.pathname.includes("/announcement")) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [role, location.pathname]);

    function goToQuestionWrite() {
        navigate("/question/write");
    }

    function goToAnnouncementWrite() {
        navigate("/announcement/write");
    }

    return (
        isVisible && (
            <Styled.ButtonContainer onClick={isQuestion ? goToQuestionWrite : goToAnnouncementWrite}>
                <Styled.Button>
                    {isQuestion ? "질문 작성하기" : "공지사항 작성하기"}
                </Styled.Button>
            </Styled.ButtonContainer>
        )
    );
};

export default WriteQuestionButton;