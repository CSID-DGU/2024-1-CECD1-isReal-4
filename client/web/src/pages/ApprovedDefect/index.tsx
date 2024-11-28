import React, { useEffect, useState } from "react";
import DefectModal from "@/components/DefectModal";
import * as Styled from "./style";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import H1 from "@/components/Common/Font/Heading/H1";
import { fetchRequestedDefects } from "@/apis/defects";
import { useDefectModalStore } from "@/stores/useDefectModalStore.ts";

const ApprovedDefect: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [approvedDefects, setApprovedDefects] = useState([]);
    const { isOpen, defectData, openModal, closeModal } = useDefectModalStore();

    // API 호출 및 데이터 로드
    const loadApprovedDefects = async () => {
        try {
            const data = await fetchRequestedDefects();
            const approvedOnly = data.filter((defect: any) => defect.approvalStatus === "APPROVE");
            setApprovedDefects(approvedOnly);
        } catch (error) {
            console.error("Failed to load approved defects:", error);
        }
    };

    // 검색 필터링
    const filteredDefects = approvedDefects.filter(
        (defect: any) =>
            defect.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            defect.faultChecklistId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        loadApprovedDefects();
    }, []);

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
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                {filteredDefects.map((defect: any) => (
                    <tr key={defect.faultChecklistId}>
                        <td>{defect.username}</td>
                        <td>{defect.memberName}</td>
                        <td>
                            {defect.reviewCompletionTime
                                ? new Date(defect.reviewCompletionTime).toLocaleDateString()
                                : "N/A"}
                        </td>
                        <td>{`${defect.apartmentName}, ${defect.apartmentBuildingNumber}`}</td>
                        <td>
                            <button onClick={() => openModal(defect)}>상세 정보 보기</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Styled.Table>

            {/* 모달 */}
            {isOpen && defectData && (
                <DefectModal
                    title='하자 상세 정보'
                    defectData={defectData}
                    onClose={closeModal}
                    showActions={false}
                />
            )}
        </Styled.PageContainer>
    );
};

export default ApprovedDefect;