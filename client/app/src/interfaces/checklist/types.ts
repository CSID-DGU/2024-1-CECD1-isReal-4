/*
export interface TCheckListItem {
    id: string;
    description: string;
    checked: boolean;
}

export interface TCategory {
    category: string;
    items: TCheckListItem[];
}

export interface TSubSection {
    [key: string]: TCheckListItem[] | TCategory[];
}

export interface TSection {
    id: string;
    name: string;
    subSections: TSubSection;
}
*/
// types.ts
export interface TItem {
    description?: string;
    checked: boolean;
    appendText: string;
    appendImages: string[];
}

export interface TDetailSection {
    name: string;
    items: TItem | null;
}

export interface TSubSection {
    name: string;
    items: TItem | null;
    detailSections: TDetailSection[] | null;
}

export interface TSection {
    name: string;
    items: TItem | null;
    subSections: TSubSection[] | null;
}

export interface TChecklist {
    createAt: string;
    sections: TSection[];
}