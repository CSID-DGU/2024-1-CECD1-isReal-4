import { create } from 'zustand';
import { ChecklistState, SectionState } from "@/interfaces/checklist/types.ts";

export const useChecklistStore = create<ChecklistState>((set, get) => ({
    createAt: "", // 초기값 설정
    sections: [],

    // 초기 체크리스트 데이터 설정
    initializeChecklist: (sections: SectionState[]) => set({
        createAt: new Date().toISOString(),  // 현재 시간을 createAt으로 설정
        sections
    }),
    // 체크리스트 항목 업데이트
    // @ts-ignore

    setChecklistItem: (sectionIndex, subSectionIndex, detailSectionIndex, itemIndex, updatedItem) => {
        set((state) => {
            const updatedSections = [...state.sections];
            const section = updatedSections[sectionIndex];

            if (section.subSections && subSectionIndex !== null) {
                const subSection = section.subSections[subSectionIndex];

                if (detailSectionIndex !== null && subSection.detailSections) {
                    const detailSection = subSection.detailSections[detailSectionIndex];
                    detailSection.items[itemIndex] = updatedItem;
                } else if (subSection.items) {
                    subSection.items[itemIndex] = updatedItem;
                }
            } else if (section.items) {
                section.items[itemIndex] = updatedItem;
            }

            return { sections: updatedSections };
        });
    },

    // 전체 체크리스트 데이터 반환
    getChecklistData: () => get().sections,
}));

export default useChecklistStore;