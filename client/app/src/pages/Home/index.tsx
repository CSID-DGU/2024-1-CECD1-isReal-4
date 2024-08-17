import HomeHeader from "@/components/Home/HomeHeader";
import AptTitle from "@/components/Home/AptTitle";
import * as Styled from "./style.ts";


export default function Home() {
  return (
    <Styled.HomeContainer>
      <HomeHeader/>
      <AptTitle/>
    </Styled.HomeContainer>
  );
}