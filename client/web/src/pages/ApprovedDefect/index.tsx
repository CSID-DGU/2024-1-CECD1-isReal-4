import React, { useState } from "react";
import Modal from "@/components/Modal";
import * as Styled from "./style";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import H1 from "@/components/Common/Font/Heading/H1";

const ApprovedDefect: React.FC = () => {
    // 예시 데이터
    const approvedDefects = [
        {
            id: 1,
            name: "힘들어요",
            date: "28 December 2022",
            aptInfo: "아파트 이름, 1단지, 101동",
            defectId: "D003",
        },
        {
            id: 2,
            name: "진짜에요",
            date: "29 December 2022",
            aptInfo: "아파트 이름, 2단지, 102동",
            defectId: "D004",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(approvedDefects);
    const [selectedDefect, setSelectedDefect] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = approvedDefects.filter(
            (defect) =>
                defect.name.toLowerCase().includes(searchValue) || defect.defectId.toLowerCase().includes(searchValue)
        );
        setFilteredData(filtered);
    };

    // 모달 열기 핸들러
    const handleOpenModal = (defect: any) => {
        setSelectedDefect(defect);
        setIsModalOpen(true);
    };

    // 모달 닫기 핸들러
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDefect(null);
    };

    return (
        <Styled.PageContainer>
            <Header />
            <H1 text='승인된 하자 데이터 관리' />
            <Styled.SearchContainer>
                <Sidebar />
                <Styled.SearchInput
                    type='text'
                    placeholder='검색어 입력'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </Styled.SearchContainer>

            <Styled.Table>
                <thead>
                    <tr>
                        <th>입주 예정자 ID</th>
                        <th>이름</th>
                        <th>승인 날짜</th>
                        <th>아파트 정보</th>
                        <th>상세 정보</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((defect) => (
                        <tr key={defect.id}>
                            <td>{defect.defectId}</td>
                            <td>{defect.name}</td>
                            <td>{defect.date}</td>
                            <td>{defect.aptInfo}</td>
                            <td>
                                <button onClick={() => handleOpenModal(defect)}>상세 정보 보기</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Styled.Table>

            {/* 모달 */}
            {isModalOpen && selectedDefect && (
                <Modal
                    title='하자 상세 정보'
                    defectData={selectedDefect}
                    onClose={handleCloseModal}
                    showActions={false}
                />
            )}
        </Styled.PageContainer>
    );
};

export default ApprovedDefect;
