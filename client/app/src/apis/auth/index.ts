import authInstance from "@/apis/base/authInstance.ts";
import publicInstance from "@/apis/base/publicInstance.ts";

/**
 * @description 1-1. 일반 로그인
 * @param data
 */
export const postFormLogin = async (data: { username: string; password: string }) => {
    const formData = new FormData();

    formData.append("username", data.username);
    formData.append("password", data.password);

    const response = await publicInstance.post("/login", formData, {
        headers: {
            "Content-type": "multipart/form-data",
        }
    });
    console.log(response);

    return response;
}

/**
 * @description 1-2. 로그아웃
 */
export const logout = async () => {
    const response = await authInstance.post("/auth/logout");

    return response.data;
}

/**
 * @description 2-1. 이메일 검증하기 (Authentication Code) 발급
 */
export const validateEmail = async (email: string) => {
    const response = await publicInstance.post("/auth/validations/email", {
        email: email,
        is_duplicate_check: true,
    });

    return response.data;
}

/**
 * @description 2-2. 인증코드 검증하기 (Temporary Token) 발급
 */
export const validateAuthCode = async (email: string, authenticationCode: string) => {
    const response = await publicInstance.post("/auth/validations/authentication-code", {
        email: email,
        authentication_code: authenticationCode
    });

    return response.data;
}

/**
 * @description 2-3. 일반 회원가입
 */
export const postRegister = async (data: { nickname: string, password: string, temporaryToken: string }) => {
    const response = await authInstance.post("/auth/sign-up", {
        nickname: data.nickname,
        password: data.password,
        temporary_token: data.temporaryToken,
    });

    return response.data;
}

/**
 * @description 2-4. 회원 탈퇴
 */
export const withdrawal = async () => {
    return await authInstance.post("/auth/withdrawal");
}

/**
 * @description 2-5. 회원 탈퇴
 */
export const findApartments = async () => {
    try{
        const response = await publicInstance.get("/all/find-apartments?apartment-name=Greenwood");
        console.log("findApartments?",response.data);
        return response.data;
    } catch (error) {
        console.error("아파트 검색 오류:", error);
        throw error;
    }
}

/**
 * @description 3-1. 슈퍼 어드민 확인
 */
export const checkSuperAdmin = async () => {
    try {
        const response = await authInstance.get("/super-admin/is-super-admin");
        console.log("isAdmin?",response.data);
        return response.data;
    } catch (error) {
        console.error("슈퍼 어드민 확인 오류:", error);
        throw error;
    }
};