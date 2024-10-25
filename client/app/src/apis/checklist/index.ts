import authInstance from "@/apis/base/authInstance.ts";
import useChecklistStore from "@/stores/useCheckliststore.ts";

/**
 * @description 4-1. 체크리스트 작성하기
 */
export const createChecklist = async () => {
    const { sections } = useChecklistStore.getState();

    const formattedData = {
        createAt: new Date().toISOString(),
        sections: sections.map((section) => ({
            name: section.name,
            items: section.items
                ? {
                    description: section.items[0]?.description || "",
                    checked: section.items[0]?.checked || false,
                    appendText: section.items[0]?.appendText || "",
                    appendImages: section.items[0]?.appendImages || []
                }
                : null,
            subSections: section.subSections?.map((subSection) => ({
                name: subSection.name,
                items: subSection.items
                    ? {
                        description: subSection.items[0]?.description || "",
                        checked: subSection.items[0]?.checked || false,
                        appendText: subSection.items[0]?.appendText || "",
                        appendImages: subSection.items[0]?.appendImages || []
                    }
                    : null,
                detailSections: subSection.detailSections?.map((detailSection) => ({
                    name: detailSection.name,
                    items: {
                        description: detailSection.items[0]?.description || "",
                        checked: detailSection.items[0]?.checked || false,
                        appendText: detailSection.items[0]?.appendText || "",
                        appendImages: detailSection.items[0]?.appendImages || []
                    }
                }))
            }))
        }))
    };

    console.log("formattedData: ", formattedData);

    try {
        const response = await authInstance.post("/member/create-fault-checklist", formattedData, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("Checklist created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to create checklist:", error);
        throw error;
    }
};

/**
 * @description 4-2. 본인 하자 체크리스트 조회
 */
export const findMyChecklists = async () => {
    try{
        const response = await authInstance.get("/member/find-fault-checklists");
        console.log("my checklists?",response.data);
        return response.data;
    } catch (error) {
        console.error("본인 하자 체크리스트 조회 오류:", error);
        throw error;
    }
}