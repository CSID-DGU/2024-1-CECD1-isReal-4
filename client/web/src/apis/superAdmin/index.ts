import { authInstance } from "@/apis/base/authInstance";

/**
 * @description 1-1. 시행•시공사 관리자 계정 생성 API
 */
export const createAdmin = async (adminData: {
    username: string;
    password: string;
    memberName: string;
    phoneNumber: string;
    authDocument: string;
    apartmentName: string;
    apartmentInformation: string;
}) => {
    try {
        const response = await authInstance.post("/super-admin/make-admin", adminData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Admin 생성 성공:", response);
        return response.data;
    } catch (error) {
        console.error("Admin 생성 실패:", error);
        throw error;
    }
};
