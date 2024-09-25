import Title from "@/components/Title";
import ListContents from "@/components/CheckList/ListContents";
import ListStateDropDown from "@/components/CheckList/ListStateDropDown";
import Column from "@/components/Common/Column";

export default function MyCheckLists() {
    return (
        <Column alignItems={'center'}>
            <Title title="내가 작성한 체크리스트" />
            <ListStateDropDown/>
            <ListContents/>
        </Column>
    )
}