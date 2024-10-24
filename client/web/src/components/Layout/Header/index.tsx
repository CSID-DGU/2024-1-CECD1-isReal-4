import React from "react";
import * as Styled from "./style";
import SvgButton from "@/components/Common/SvgButton";
import Avatar from "@/assets/icons/Avatar.svg";

const index: React.FC = () => {
    return (
        <Styled.HeaderContainer>
            <Styled.Icon>
                <SvgButton src={Avatar} height={"36px"} width={"36px"} />
            </Styled.Icon>
        </Styled.HeaderContainer>
    );
};

export default index;
