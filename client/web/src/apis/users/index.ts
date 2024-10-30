import authInstance from "@/apis/base/authInstance";

/**
 * @description 1-1. 신청된 입주예정자 회원가입 조회 API
 */

export const fetchRequestedUsers = async () => {
    try {
        const response = await authInstance.get("/admin/find-join-requests");
        console.log("신청된 사용자 데이터 조회 완료:", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching requested users:", error);
        throw error;
    }
};

/**
 * @description 1-2. 신청된 입주예정자의 회원가입을 승인하는 API
 */

export const approveUser = async (requestBody: any) => {
    try {
        const response = await authInstance.post("/admin/approve-join-request", requestBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("사용자 승인 응답: ", response);
        return response.data;
    } catch (error) {
        console.error("승인 API 호출 오류:", error);
        throw error;
    }
};

/**
 * @description 1-3. 신청된 입주예정자의 회원가입을 거절하는 API
 */

export const rejectUser = async (requestBody: any) => {
    try {
        const response = await authInstance.post("/admin/reject-join-request", requestBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("사용자 거절 응답: ", response);
        return response.data;
    } catch (error) {
        console.error("거절 API 호출 오류:", error);
        throw error;
    }
};
