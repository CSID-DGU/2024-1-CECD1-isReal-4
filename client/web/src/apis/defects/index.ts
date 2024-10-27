import authInstance from "@/apis/base/authInstance";

/**
 * @description 1-1. 신청된 하자 데이터 조회 API
 */
export const fetchRequestedDefects = async () => {
    try {
        const response = await authInstance.get("/admin/find-fault-checklists");
        console.log("신청된 하자 데이터 조회 완료:", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching requested defects:", error);
        throw error;
    }
};

/**
 * @description 1-2. 선택한 하자를 승인하는 API
 */

export const approveDefect = async (requestBody: any) => {
    try {
        const response = await authInstance.post("/admin/fault-approve", requestBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("하자 승인 응답: ", response);
        return response.data;
    } catch (error) {
        console.error("승인 API 호출 오류:", error);
        throw error;
    }
};

/**
 * @description 1-3. 선택한 하자를 거절하는 API
 */

export const rejectDefect = async (requestBody: any) => {
    try {
        const response = await authInstance.post("/admin/reject-fault-checklist", requestBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("하자 거절 응답: ", response);
        return response.data;
    } catch (error) {
        console.error("거절 API 호출 오류:", error);
        throw error;
    }
};
