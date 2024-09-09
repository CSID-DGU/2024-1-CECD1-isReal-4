import * as Styled from "./style.ts";
import H1 from "@/components/Common/Font/Heading/H1/index.tsx";

export default function LoginHeader() {
    return (
        <Styled.Container>
            <H1 text='로그인' />
        </Styled.Container>
    );
}
