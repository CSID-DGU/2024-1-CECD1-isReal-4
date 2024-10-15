import * as Styled from "./style.ts"
import Avatar from "@/assets/icons/Avatar.svg"
import Alarm from "@/assets/icons/Alarm.svg"
import SvgButton from "@/components/Common/SvgButton";
import { checkSuperAdmin } from "@/apis/auth";
import Cookies from "js-cookie";


export default function HomeHeader() {

    const myCookie = Cookies.get("access_token");
    console.log("Cookie", myCookie);

    const handleCheckSuperAdmin = async () => {
        const response = await checkSuperAdmin();
        console.log(response);
    }


    return(
        <Styled.Container>
            <Styled.LeftButton onClick={handleCheckSuperAdmin}>
                <SvgButton src={Avatar} height={"48px"} width={"48px"}/>
            </Styled.LeftButton>
            <Styled.RightButton>
                <SvgButton src={Alarm} height={"48px"} width={"48px"}/>
            </Styled.RightButton>
        </Styled.Container>
    )
}