import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./style.ts";
import SvgButton from "@/components/Common/SvgButton";
import RegisterIcon from "@/assets/icons/Register.svg";
import HomeIcon from "@/assets/icons/home.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import Sub3 from "@/components/Common/Font/Body/Sub3";

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState<string>("home"); // 초기값을 "home"으로 설정

    useEffect(() => {
        // 현재 경로에 따라 selectedNav 설정
        if (location.pathname.includes("/home")) {
            setSelectedNav("home");
        } else if (location.pathname.includes("/register")) {
            setSelectedNav("register");
        } else if (location.pathname.includes("/myPage")) {
            setSelectedNav("myPage");
        }
    }, [location.pathname]);

    function handleNavClick(nav: string) {
        setSelectedNav(nav); // 클릭된 nav 상태로 설정
        switch (nav) {
            case "home":
                navigate("/home");
                break;
            case "register":
                navigate("/register");
                break;
            case "myPage":
                navigate("/myPage");
                break;
            default:
                break;
        }
    }

    return (
        <Styled.Footer>
            <Styled.NavItem isActive={selectedNav === "home"}
                            onClick={() => handleNavClick("home")}>
                <SvgButton src={HomeIcon} width="28px" height="28px" />
                <Sub3 text={"홈"} isActive={selectedNav === "home"} />
            </Styled.NavItem>
            <Styled.NavItem isActive={selectedNav === "register"}
                            onClick={() => handleNavClick("register")}>
                <SvgButton src={RegisterIcon} width="28px" height="28px" />
                <Sub3 text={"등록하기"} isActive={selectedNav === "register"} />
            </Styled.NavItem>
            <Styled.NavItem isActive={selectedNav === "myPage"}
                            onClick={() => handleNavClick("myPage")}>
                <SvgButton src={ProfileIcon} width="28px" height="28px" />
                <Sub3 text={"마이페이지"} isActive={selectedNav === "myPage"} />
            </Styled.NavItem>
        </Styled.Footer>
    );
}