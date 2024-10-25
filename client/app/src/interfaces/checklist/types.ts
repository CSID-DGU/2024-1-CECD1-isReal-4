export interface ChecklistItemState {
    id: string;
    description: string;
    checked: boolean;
    appendText: string;
    appendImages: string[];
}

export interface DetailSectionState {
    name: string;
    items: ChecklistItemState[];  // 동일한 타입 사용
}

export interface SubSectionState {
    name: string;
    detailSections?: DetailSectionState[] | null;  // null 허용
    items?: ChecklistItemState[] | null;  // null 허용
}

export interface SectionState {
    name: string;
    subSections?: SubSectionState[] | null;  // null 허용
    items?: ChecklistItemState[] | null;  // null 허용
}

export interface ChecklistState {
    createAt: string;  // 생성 시간 필드
    sections: SectionState[];
    initializeChecklist: (sections: SectionState[]) => void;
    setChecklistItem: (
        sectionIndex: number,
        subSectionIndex: number | null,
        detailSectionIndex: number | null,
        description: string,
        itemIndex: number,
        updatedItem: ChecklistItemState
    ) => void;
    getChecklistData: () => SectionState[];
}