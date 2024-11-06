import AuthInstance from "@/apis/base/authInstance.ts";

/**
 * @description 6-1. 멤버_블록체인_이메일로 블록체인 데이터 가져오기
 */
export const getBlockchainDataByEmailFromMember = async () => {
    try{
        const response = await AuthInstance.get("/member/find-blocks-by-username");
        console.log("멤버_이메일로 블록체인 검색",response.data);
    } catch (error) {
        console.error("멤버_이메일로 블록체인 검색에서 에러 발생: ", error);
        throw error;
    }
}

/**
 * @description 6-2. 전체_블록체인_이메일로 블록체인 데이터 가져오기
 */
export const getBlockchainDataByEmail = async (email: string) => {
    try {
        const response = await AuthInstance.get(`/all/find-blocks-by-username?username=${email}`);
        console.log("전체_이메일로 블록체인 검색: ", response);
    } catch (error) {
        console.error("전체_이메일로 블록체인 검색에서 에러 발생: ", error);
        throw error;
    }
}

/**
 * @description 6-3. 멤버_블록체인_아파트 이름으로 블록체인 데이터 가져오기
 */
export const getBlockchainDataByAptNameFromMember= async () => {
    try {
        const response = await AuthInstance.get("/member/find-blocks-by-apartment-name");
        console.log("아파트 이름으로 블록체인 검색: ", response.data);
    } catch (error) {
        console.error("멤버_아파트 이름으로 블록체인 검색에서 에러 발생: ", error);
        throw error;
    }
}

/**
 * @description 6-4. 전체_블록체인_아파트 이름으로 블록체인 데이터 가져오기
 */
export const getBlockchainDataByAptName= async (apartment: string) => {
    try {
        const response = await AuthInstance.get(`/all/find-blocks-by-apartment-name?apartment-name=${apartment}`);
        console.log("전채_아파트 이름으로 블록체인 검색: ", response.data);
    } catch (error) {
        console.error("전체_아파트 이름으로 블록체인 검색에서 에러 발생: ", error);
        throw error;
    }
}