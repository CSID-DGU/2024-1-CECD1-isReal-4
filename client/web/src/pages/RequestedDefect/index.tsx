import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import DefectModal from "@/components/DefectModal";
import DefectSmallModal from "@/components/DefectModal/DefectSmallModal";
import { fetchRequestedDefects, approveDefect } from "@/apis/defects";

const RequestedDefect: React.FC = () => {
    const [defects, setDefects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDefect, setSelectedDefect] = useState<any>(null);
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDefects, setFilteredDefects] = useState([]);

    // API에서 하자 데이터를 가져오는 함수
    useEffect(() => {
        const loadDefects = async () => {
            try {
                const data = await fetchRequestedDefects(); // API 호출
                setDefects(data);
                setFilteredDefects(data); // 초기 필터 설정
            } catch (error) {
                console.error("Failed to load defects:", error);
            }
        };
        loadDefects();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = defects.filter(
            (defect: any) =>
                defect.memberName.toLowerCase().includes(searchValue) ||
                defect.apartmentName.toLowerCase().includes(searchValue)
        );
        setFilteredDefects(filtered);
    };

    // 신청서 열람 버튼 클릭 시 모달을 열고, 선택된 신청서 데이터 설정
    const handleOpenModal = (defect: any) => {
        console.log("Opening modal with defect:", defect);
        setSelectedDefect(defect);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDefect(null);
    };

    // 모달에서 승인 버튼을 누르면 이 부분이 호출되고 해당 부분에서 승인 로직이 일어날 예정입니다.
    const handleApproveModal = async () => {
        if (selectedDefect) {
            try {
                await approveDefect(selectedDefect);
                alert("하자가 승인되었습니다.");
                // 승인 후 데이터 갱신
                const updatedDefects = defects.filter((d) => d.faultChecklistId !== selectedDefect.faultChecklistId);
                setDefects(updatedDefects);
                setFilteredDefects(updatedDefects);
                setIsModalOpen(false);
            } catch (error) {
                console.error("승인 중 오류 발생:", error);
                alert("하자 승인에 실패했습니다.");
            }
        }
    };

    const handleOpenSmallModal = () => {
        setIsSmallModalOpen(true);
    };

    const handleCloseSmallModal = () => {
        setIsSmallModalOpen(false);
        setRejectReason("");
    };

    // 모달에서 거절 버튼을 누르고 거절 사유를 입력하면 이 부분이 호출되고 해당 부분에서 거절 로직이 일어날 예정입니다.
    const handleSaveRejectReason = () => {
        console.log("거절 사유:", rejectReason);
        setIsSmallModalOpen(false);
        setIsModalOpen(false);
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
                            {filteredDefects.map((defect: any) => (
                                <tr key={defect.faultChecklistId}>
                                    <td>{defect.username}</td>
                                    <td>{defect.memberName}</td>
                                    <td>{new Date(defect.createAt).toLocaleDateString()}</td>
                                    <td>{`${defect.apartmentName}, ${defect.apartmentBuildingNumber}`}</td>
                                    <td>
                                        <button onClick={() => handleOpenModal(defect)}>신청서 열람하기</button>
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
