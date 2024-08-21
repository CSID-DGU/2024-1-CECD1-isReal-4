import { Outlet } from "react-router-dom";
import SignUpHeader from "../../components/SignUp/Header/index.tsx";
import * as Styled from "./style.ts";

export default function SignUp() {
    return (
        <Styled.Container>
            <Styled.Header>
                <SignUpHeader />
            </Styled.Header>
            <Styled.Body>
                <Outlet />
            </Styled.Body>
        </Styled.Container>
    );
}
