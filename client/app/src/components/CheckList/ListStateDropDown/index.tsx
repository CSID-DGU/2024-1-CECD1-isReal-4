import { useState } from 'react';
import * as Styled from "./style"


// React 컴포넌트 정의
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('전체');

    // 드롭다운 항목 리스트
    const menuItems = ['전체','등록됨', '등록 신청', '심사 중', '거절됨'];

    // 드롭다운 열기/닫기 핸들러
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // 항목 선택 핸들러
    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <Styled.DropdownContainer>
            <Styled.DropdownButton onClick={toggleDropdown}>
                {selectedItem}
            </Styled.DropdownButton>
            {isOpen && (
                <Styled.DropdownMenu>
                    {menuItems.map((item) => (
                        <Styled.DropdownItem key={item} onClick={() => handleItemClick(item)}>
                            {item}
                        </Styled.DropdownItem>
                    ))}
                </Styled.DropdownMenu>
            )}
        </Styled.DropdownContainer>
    );
};

export default Dropdown;