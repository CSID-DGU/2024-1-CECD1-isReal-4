import LoginHeader from "@/components/LogIn/LogInHeader/index.tsx";
import LoginBody from "@/components/LogIn/LogInBody/index.tsx";
import * as Styled from "./style.ts";

export default function LogIn() {
    return (
        <Styled.LoginContainer>
            {" "}
            <LoginHeader />
            <LoginBody />
        </Styled.LoginContainer>
    );
}
