import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import * as Styled from "./style";
import H1 from "@/components/Common/Font/Heading/H1";
import DefectModal from "@/components/DefectModal";
import DefectSmallModal from "@/components/DefectModal/DefectSmallModal";
import { fetchRequestedDefects, approveDefect, rejectDefect } from "@/apis/defects";
import { useDefectModalStore } from "@/stores/useDefectModalStore.ts";

const RequestedDefect: React.FC = () => {
    const [defects, setDefects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDefects, setFilteredDefects] = useState([]);
    const {
        isOpen,
        isSmallModalOpen,
        defectData,
        rejectReason,
        openModal,
        closeModal,
        openSmallModal,
        closeSmallModal,
        setRejectReason,
    } = useDefectModalStore();

    useEffect(() => {
        const loadDefects = async () => {
            try {
                const data = await fetchRequestedDefects();
                const pendingDefects = data.filter((defect: any) => defect.approvalStatus === "PEND");
                setDefects(pendingDefects);
                setFilteredDefects(pendingDefects);
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

    const handleApprove = async () => {
        if (defectData) {
            const requestBody = {
                ...defectData,
                reviewer: defectData.reviewer || "관리자이름",
                reviewComment: "승인됨",
                reviewCompletionTime: new Date().toISOString(),
                approvalStatus: "APPROVE",
            };
            try {
                await approveDefect(requestBody);
                alert("하자가 승인되었습니다.");
                const updatedDefects = defects.filter((d) => d.faultChecklistId !== defectData.faultChecklistId);
                setDefects(updatedDefects);
                setFilteredDefects(updatedDefects);
                closeModal();
            } catch (error) {
                console.error("승인 중 오류 발생:", error);
                alert("하자 승인에 실패했습니다.");
            }
        }
    };

    const handleReject = async () => {
        if (defectData) {
            const requestBody = {
                ...defectData,
                reviewer: "관리자이름",
                reviewComment: rejectReason,
                reviewCompletionTime: new Date().toISOString(),
                approvalStatus: "REJECT",
            };
            try {
                await rejectDefect(requestBody);
                alert("하자가 거절되었습니다.");
                const updatedDefects = defects.filter((d) => d.faultChecklistId !== defectData.faultChecklistId);
                setDefects(updatedDefects);
                setFilteredDefects(updatedDefects);
                closeModal();
                closeSmallModal();
            } catch (error) {
                console.error("거절 중 오류 발생:", error);
                alert("하자 거절에 실패했습니다.");
            }
        }
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
                                    <button onClick={() => openModal(defect)}>신청서 열람하기</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Styled.DefectTable>
                </Styled.MainContent>
            </Styled.ContentArea>

            {isOpen && defectData && (
                <DefectModal
                    title='하자 신청서'
                    defectData={defectData}
                    onClose={closeModal}
                    onApprove={handleApprove}
                    onReject={openSmallModal}
                    showActions={true}
                />
            )}

            {isSmallModalOpen && (
                <DefectSmallModal
                    title='거절 사유 입력'
                    rejectReason={rejectReason}
                    onClose={closeSmallModal}
                    onSave={handleReject}
                    onRejectReasonChange={(e) => setRejectReason(e.target.value)}
                />
            )}
        </Styled.PageContainer>
    );
};

export default RequestedDefect;