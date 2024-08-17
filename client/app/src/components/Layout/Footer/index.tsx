import * as Styled from "./style.ts"
import {useNavigate} from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    function handleHomeClick() {
        navigate("/home");
    }
    function handleRegisterClick() {
        navigate("/register");
    }
    function handleMyPageClick() {
        navigate("/myPage");
    }
    return (
        <Styled.Footer>
            <Styled.NavItem className="active" onClick={handleHomeClick}>
                <svg> {/* Home Icon SVG */} </svg>
                홈
            </Styled.NavItem>
            <Styled.NavItem onClick={handleRegisterClick}>
                <svg> {/* Register Icon SVG */} </svg>
                하자 등록
            </Styled.NavItem>
            <Styled.NavItem onClick={handleMyPageClick}>
                <svg> {/* MyPage Icon SVG */} </svg>
                마이페이지
            </Styled.NavItem>
        </Styled.Footer>
    );
}
