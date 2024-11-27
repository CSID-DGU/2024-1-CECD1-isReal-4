import { create } from "zustand";

interface UserModalState {
    isOpen: boolean;
    isSmallModalOpen: boolean;
    selectedUser: any | null;
    rejectReason: string;
    openModal: (user: any) => void;
    closeModal: () => void;
    openSmallModal: () => void;
    closeSmallModal: () => void;
    setRejectReason: (reason: string) => void;
}

export const useUserModalStore = create<UserModalState>((set) => ({
    isOpen: false,
    isSmallModalOpen: false,
    selectedUser: null,
    rejectReason: "",
    openModal: (user) => set({ isOpen: true, selectedUser: user }),
    closeModal: () => set({ isOpen: false, selectedUser: null, rejectReason: "" }),
    openSmallModal: () => set({ isSmallModalOpen: true }),
    closeSmallModal: () => set({ isSmallModalOpen: false, rejectReason: "" }),
    setRejectReason: (reason) => set({ rejectReason: reason }),
}));