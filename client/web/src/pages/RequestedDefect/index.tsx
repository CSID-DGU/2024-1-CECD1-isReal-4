import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import Modal from "@/components/Modal";
import SmallModal from "@/components/Modal/SmallModal";

const RequestedDefect: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDefect, setSelectedDefect] = useState<any>(null);
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false); // 두 번째 모달 상태
    const [rejectReason, setRejectReason] = useState(""); // 거절 사유 상태

    // 예시 데이터
    const defects = [
        { id: 1, user: "user1", date: "28 December 2022", aptInfo: "아파트 이름, 1단지, 101동" },
        { id: 2, user: "user2", date: "29 December 2022", aptInfo: "아파트 이름, 2단지, 102동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
        { id: 3, user: "user3", date: "30 December 2022", aptInfo: "아파트 이름, 3단지, 103동" },
    ];

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

    // 작은 모달 열기 (거절 버튼 클릭 시)
    const handleOpenSmallModal = () => {
        setIsSmallModalOpen(true); // 작은 모달 열기
    };

    // 작은 모달 닫기
    const handleCloseSmallModal = () => {
        setIsSmallModalOpen(false);
        setRejectReason(""); // 거절 사유 초기화
    };

    // 작은 모달에서 거절 사유 저장 (저장 버튼 클릭 시)
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
                    <H1 text='신청된 하자 목록 관리' />
                    <Styled.DefectTable>
                        <thead>
                            <tr>
                                <th>입주예정자 ID</th>
                                <th>이름</th>
                                <th>등록 날짜</th>
                                <th>아파트 정보</th>
                                <th>신청서 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {defects.map((defect) => (
                                <tr key={defect.id}>
                                    <td>{defect.user}</td>
                                    <td>사용자 이름</td>
                                    <td>{defect.date}</td>
                                    <td>{defect.aptInfo}</td>
                                    <td>
                                        <button onClick={() => handleOpenModal(defect.id)}>신청서 열람</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Styled.DefectTable>
                </Styled.MainContent>
            </Styled.ContentArea>

            {/* 첫 번째 모달 */}
            {isModalOpen && selectedDefect && (
                <Modal
                    title='신청된 하자 신청서'
                    defectData={selectedDefect}
                    onClose={handleCloseModal}
                    onApprove={handleApproveModal}
                    onReject={handleOpenSmallModal}
                />
            )}

            {/* 작은 모달 (거절 사유 입력용) */}
            {isSmallModalOpen && (
                <SmallModal
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
