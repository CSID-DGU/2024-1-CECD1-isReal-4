// stores/useUserStore.ts
import { create } from 'zustand';

interface UserState {
    loginUser: string | null;  // 로그인한 유저의 정보를 저장
    setLoginUser: (user: string) => void;  // 로그인 시 유저를 설정하는 함수
    clearLoginUser: () => void;  // 로그아웃 시 유저를 초기화하는 함수
}

export const useUserStore = create<UserState>((set) => ({
    loginUser: null,  // 초기 상태는 null
    setLoginUser: (user) => set({ loginUser: user }),
    clearLoginUser: () => set({ loginUser: null })
}));