import LoginHeader from "@/components/Login/LoginHeader";
import LoginBody from "@/components/Login/LoginBody";
import * as Styled from "./style.ts";

export default function index() {
    return (
        <Styled.LoginContainer>
            {" "}
            <LoginHeader />
            <LoginBody />
        </Styled.LoginContainer>
    );
}
