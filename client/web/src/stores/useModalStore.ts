import { create } from "zustand";

interface ModalState {
    isOpen: boolean;
    defectData: any | null;
    openModal: (data: any) => void;
    closeModal: () => void;
    approveDefect: () => void;
    rejectDefect: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
    isOpen: false,
    defectData: null,

    openModal: (data) => set({ isOpen: true, defectData: data }),

    closeModal: () => set({ isOpen: false, defectData: null }),

    approveDefect: () => {
        const defectData = get().defectData;
        console.log("Defect Approved:", defectData);
        set({ isOpen: false, defectData: null });
    },

    rejectDefect: () => {
        const defectData = get().defectData;
        console.log("Defect Rejected:", defectData);
        set({ isOpen: false, defectData: null });
    },
}));