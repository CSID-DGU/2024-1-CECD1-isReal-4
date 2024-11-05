import { create } from "zustand";

export interface SignUpState {
    username: string;
    password: string;
    memberName: string;
    phoneNumber: string;
    apartmentName: string;
    apartmentBuildingNumber: string;
    authDocument: File | null;
    setField: (field: keyof SignUpState, value: any) => void;
}

export const useSignUpStore = create<SignUpState>((set) => ({
    username: "",
    password: "",
    memberName: "",
    phoneNumber: "",
    apartmentName: "",
    apartmentBuildingNumber: "",
    authDocument: null,

    setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));