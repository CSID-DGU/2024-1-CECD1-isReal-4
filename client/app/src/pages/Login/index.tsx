import LoginHeader from "@/components/Login/LoginHeader";
import * as Styled from "./style.ts";

export default function index() {
    return (
        <Styled.LoginContainer>
            {" "}
            <LoginHeader />
        </Styled.LoginContainer>
    );
}
