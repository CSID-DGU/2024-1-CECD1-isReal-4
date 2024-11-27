import { create } from "zustand"

interface ModalState {
    isOpen: boolean;
    isSmallModalOpen: boolean;
    defectData: any;
    rejectReason: string;
    openModal: (defect: any) => void;
    closeModal: () => void;
    openSmallModal: () => void;
    closeSmallModal: () => void;
    setRejectReason: (reason: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    isSmallModalOpen: false,
    defectData: null,
    rejectReason: "",
    openModal: (defect) => set({ isOpen: true, defectData: defect }),
    closeModal: () => set({ isOpen: false, defectData: null }),
    openSmallModal: () => set({ isSmallModalOpen: true }),
    closeSmallModal: () => set({ isSmallModalOpen: false, rejectReason: "" }),
    setRejectReason: (reason) => set({ rejectReason: reason }),
}));