import * as Styled from "./style.ts"
import Avatar from "@/assets/icons/Avatar.svg"
import Alarm from "@/assets/icons/Alarm.svg"
import SvgButton from "@/components/Common/SvgButton";

export default function HomeHeader() {
    return(
        <Styled.Container>
            <Styled.LeftButton>
                <SvgButton src={Avatar} height={"48px"} width={"48px"}/>
            </Styled.LeftButton>
            <Styled.RightButton>
                <SvgButton src={Alarm} height={"48px"} width={"48px"}/>
            </Styled.RightButton>
        </Styled.Container>
    )
}