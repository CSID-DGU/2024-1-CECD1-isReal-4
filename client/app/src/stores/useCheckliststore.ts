import { create } from 'zustand';

interface ChecklistItemState {
    checked: boolean;
    appendText: string;
    images: string[];
}

interface DetailSectionState {
    name: string;
    items: ChecklistItemState[];
}

interface SubSectionState {
    name: string;
    detailSections?: DetailSectionState[];  // 선택적 속성
    items?: ChecklistItemState[];  // 선택적 속성
}

interface SectionState {
    name: string;
    subSections?: SubSectionState[];  // 선택적 속성
    items?: ChecklistItemState[];  // 선택적 속성
}

interface ChecklistState {
    sections: SectionState[];
    setChecklistItem: (sectionIndex: number, subSectionIndex: number | null, detailSectionIndex: number | null, itemIndex: number, updatedItem: ChecklistItemState) => void;
    initializeChecklist: (sections: SectionState[]) => void;
    getChecklistData: () => SectionState[];
}

export const useChecklistStore = create<ChecklistState>((set, get) => ({
    sections: [],

    // 초기 체크리스트 데이터 설정
    initializeChecklist: (sections) => set({ sections }),

    // 체크리스트 항목 업데이트
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