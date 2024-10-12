import HomeHeader from "@/components/Home/HomeHeader";
import AptTitle from "@/components/Home/AptTitle";
import Category from "@/components/Home/Category";
import * as Styled from "./style.ts";


export default function Home() {
  return (
    <Styled.HomeContainer>
        <HomeHeader/>
        <AptTitle/>
        <Category/>
    </Styled.HomeContainer>
  );
}