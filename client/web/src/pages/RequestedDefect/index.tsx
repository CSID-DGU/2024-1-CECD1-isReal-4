import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import DefectModal from "@/components/DefectModal";
import DefectSmallModal from "@/components/DefectModal/DefectSmallModal";

const RequestedDefect: React.FC = () => {
    // 예시 데이터
    const defects = [
        { id: 1, user: "user1", date: "28 December 2022", aptInfo: "아파트 이름, 1단지, 101동" },
        { id: 2, user: "user2", date: "29 December 2022", aptInfo: "아파트 이름, 2단지, 102동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDefect, setSelectedDefect] = useState<any>(null);
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDefects, setFilteredDefects] = useState(defects);

    // 검색어 입력 핸들러
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        // 검색어에 맞춰 필터링된 데이터 계산
        const filtered = defects.filter(
            (defect) =>
                defect.user.toLowerCase().includes(searchValue) || defect.aptInfo.toLowerCase().includes(searchValue)
        );
        setFilteredDefects(filtered);
    };

    // 신청서 열람 버튼 클릭 시 모달을 열고, 예시 데이터에서 신청서 데이터를 가져옴
    const handleOpenModal = (defectId: number) => {
        const selected = defects.find((defect) => defect.id === defectId);
        setSelectedDefect(selected);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDefect(null); // 선택된 데이터 초기화
    };

    const handleApproveModal = () => {
        console.log("승인되었습니다.");
        setIsModalOpen(false);
    };

    const handleOpenSmallModal = () => {
        setIsSmallModalOpen(true); // 작은 모달 열기
    };

    const handleCloseSmallModal = () => {
        setIsSmallModalOpen(false);
        setRejectReason(""); // 거절 사유 초기화
    };

    const handleSaveRejectReason = () => {
        console.log("거절 사유:", rejectReason);
        setIsSmallModalOpen(false);
        setIsModalOpen(false); // 모든 모달 닫기
    };

    const handleRejectReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRejectReason(e.target.value);
    };

    return (
        <Styled.PageContainer>
            <Header />
            <Styled.ContentArea>
                <Sidebar />
                <Styled.MainContent>
                    <H1 text='신청된 하자 데이터 관리' />

                    {/* 검색 입력 필드 추가 */}
                    <Styled.SearchContainer>
                        <Styled.SearchInput
                            type='text'
                            placeholder='검색어 입력'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Styled.SearchContainer>

                    <Styled.DefectTable>
                        <thead>
                            <tr>
                                <th>입주 예정자 ID</th>
                                <th>이름</th>
                                <th>등록 날짜</th>
                                <th>아파트 정보</th>
                                <th>신청서 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDefects.map((defect) => (
                                <tr key={defect.id}>
                                    <td>{defect.user}</td>
                                    <td>사용자 이름</td>
                                    <td>{defect.date}</td>
                                    <td>{defect.aptInfo}</td>
                                    <td>
                                        <button onClick={() => handleOpenModal(defect.id)}>신청서 열람하기</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Styled.DefectTable>
                </Styled.MainContent>
            </Styled.ContentArea>

            {/* 첫 번째 모달 */}
            {isModalOpen && selectedDefect && (
                <DefectModal
                    title='하자 신청서'
                    defectData={selectedDefect}
                    onClose={handleCloseModal}
                    onApprove={handleApproveModal}
                    onReject={handleOpenSmallModal}
                    showActions={true}
                />
            )}

            {/* 작은 모달 (거절 사유 입력용) */}
            {isSmallModalOpen && (
                <DefectSmallModal
                    title='거절 사유 입력'
                    rejectReason={rejectReason}
                    onClose={handleCloseSmallModal}
                    onSave={handleSaveRejectReason}
                    onRejectReasonChange={handleRejectReasonChange}
                />
            )}
        </Styled.PageContainer>
    );
};

export default RequestedDefect;
