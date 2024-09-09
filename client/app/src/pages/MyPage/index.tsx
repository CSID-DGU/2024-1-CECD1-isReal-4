import * as Styled from "./style.ts";
import MyPageHeader from "@/components/MyPage/MyPageHeader/index.tsx";
import MyPageBody from "@/components/MyPage/MyPageBody/index.tsx";

export default function MyPage() {
    return (
        <Styled.Container>
            <MyPageHeader />
            <MyPageBody />
        </Styled.Container>
    );
}
