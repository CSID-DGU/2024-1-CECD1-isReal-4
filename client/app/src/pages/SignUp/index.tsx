import { Outlet } from "react-router-dom";
import * as Styled from "./style.ts";
import SignUpHeader from "@/components/SignUp/SignUpHeader/index.tsx";

export default function SignUp() {
    return (
        <Styled.Container>
            <SignUpHeader />
            <Outlet />
        </Styled.Container>
    );
}
