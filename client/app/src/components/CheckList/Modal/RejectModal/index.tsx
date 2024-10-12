import React, {useState } from "react";
import * as S from "./style.ts"
import H1 from "@/components/Common/Font/Heading/H1";
import Column from "@/components/Common/Column";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H3 from "@/components/Common/Font/Heading/H3";

interface RejectModalProps {
    onClose: () => void;
}
export default function RejectModal({ onClose } : RejectModalProps) {
    const [rejectMsg, setRejectMsg] = useState<string>("이러이러한 이유로 심사에서 거절당하셨습니다.");

    return (
        <S.ModalBackground>
            <S.ModalContainer>
                <S.TitleContainer>
                    <H1 text={"등록 거절 사유"} textAlign={"start"}/>
                    <Column>
                        <Sub2 text={rejectMsg}/>
                    </Column>
                </S.TitleContainer>
                <S.ButtonContainer>
                    <S.StyledButton onClick={onClose}>
                        <H3 text={"닫기"}/>
                    </S.StyledButton>
                </S.ButtonContainer>
            </S.ModalContainer>
        </S.ModalBackground>
    )
}