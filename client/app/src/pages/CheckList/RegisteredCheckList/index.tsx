import Title from "@/components/Title";
import ListContents from "@/components/CheckList/ListContents";
import * as Styled from "./style";
import {useState} from "react";


export default function RegisteredCheckList() {
    const [selected, setSelected] = useState('registered');

    const handleClick = (type: string) => {
        setSelected(type);
    };
    return (
      <Styled.RegisteredCheckListWrapper>
        <Title title="등록된 하자 체크리스트" />
              <Styled.ToggleButtonContainer>
                  <Styled.Button
                      isSelected={selected === 'registered'}
                      onClick={() => handleClick('registered')}
                  >
                      등록된
                  </Styled.Button>
                  <Styled.Button
                      isSelected={selected === 'requested'}
                      onClick={() => handleClick('requested')}
                  >
                      신청된
                  </Styled.Button>
                  <Styled.HighlightBar selected={selected} />
              </Styled.ToggleButtonContainer>
          <ListContents/>
      </Styled.RegisteredCheckListWrapper>
    );
}