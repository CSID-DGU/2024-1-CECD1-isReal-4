import AuthInstance from "@/apis/base/authInstance.ts";

/**
 * @description 5-1. 내 정보 가져오기
 */
export const getMyInfo = async () => {
    try {
        const response = await AuthInstance.get("/member/my-page");
        console.log("Get My Info's res: ",response);
        return response.data
    } catch(error) {
        console.error("Failed to get my info: ",error);
        throw error;
    }
}

/**
 * @description 5-2. 프로필 사진 수정하기
 */
export const updateProfileImage = async ( profileImage: string ) => {
    const response = await AuthInstance.post("/member/update-profile", { profileImage }, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    console.log("Update Profile Image's res: ",response);
    return response.data;
}