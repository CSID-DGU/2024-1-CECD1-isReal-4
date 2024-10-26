import authInstance from "@/apis/base/authInstance";

/**
 * @description 1-1. 신청된 하자 데이터 조회 API
 */
export const fetchRequestedDefects = async () => {
    try {
        const response = await authInstance.get("/admin/find-fault-checklists");
        console.log("Response received:", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching requested defects:", error);
        throw error;
    }
};

/**
 * @description 1-2. 선택한 하자를 승인하는 API
 */

export const approveDefect = async (defectData: any) => {
    const requestBody = {
        faultChecklistId: defectData.faultChecklistId,
        createAt: defectData.createAt,
        sections: defectData.sections,
        username: defectData.username,
        memberName: defectData.memberName,
        apartmentName: defectData.apartmentName,
        phoneNumber: defectData.phoneNumber,
        apartmentBuildingNumber: defectData.apartmentBuildingNumber,
        reviewer: defectData.reviewer || "관리자이름", // 필요 시 기본 값 설정
        reviewComment: defectData.reviewComment || "승인됨",
        reviewCompletionTime: new Date().toISOString(),
        approvalStatus: "APPROVED",
    };

    const response = await authInstance.post("/admin/approve-defect", requestBody, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log("Approve Defect Response: ", response);
    return response.data;
};
