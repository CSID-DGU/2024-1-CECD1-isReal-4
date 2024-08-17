import * as Styled from "./style.ts"
import H2 from "@/components/Common/Font/Heading/H2";

export default function AptTitle() {
    let aptName = "사용자가 현재 등록한 아파트 이름";

    return (
        <Styled.AptTitleContainer>
            <H2 text={aptName}/>
        </Styled.AptTitleContainer>
    );
}