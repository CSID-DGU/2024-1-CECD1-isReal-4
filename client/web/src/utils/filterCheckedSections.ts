export const filterCheckedSections = (sections: SectionState[]): SectionState[] => {
    return sections
        .map((section) => {
            const filteredSubSections = section.subSections
                ?.map((subSection) => {
                    const filteredDetailSections = subSection.detailSections
                        ?.map((detailSection) => {
                            let filteredItems = null;

                            // items가 배열인 경우 처리
                            if (Array.isArray(detailSection.items)) {
                                filteredItems = detailSection.items.filter((item) => item.checked);
                            }

                            // items가 객체인 경우 처리
                            if (
                                detailSection.items &&
                                typeof detailSection.items === "object" &&
                                detailSection.items.checked
                            ) {
                                filteredItems = [detailSection.items]; // 객체를 배열로 변환
                            }

                            // checked가 true인 items가 있는 detailSection만 반환
                            if (filteredItems && filteredItems.length > 0) {
                                return { ...detailSection, items: filteredItems };
                            }
                            return null; // checked가 true인 항목이 없는 경우 제거
                        })
                        .filter(Boolean); // null 제거

                    let filteredItems = null;

                    // items가 배열인 경우 처리
                    if (Array.isArray(subSection.items)) {
                        filteredItems = subSection.items.filter((item) => item.checked);
                    }

                    // items가 객체인 경우 처리
                    if (subSection.items && typeof subSection.items === "object" && subSection.items.checked) {
                        filteredItems = [subSection.items]; // 객체를 배열로 변환
                    }

                    // checked가 true인 items 또는 detailSections가 있는 subSection만 반환
                    if (
                        (filteredItems && filteredItems.length > 0) ||
                        (filteredDetailSections && filteredDetailSections.length > 0)
                    ) {
                        return { ...subSection, items: filteredItems, detailSections: filteredDetailSections };
                    }
                    return null; // checked가 true인 항목이 없는 경우 제거
                })
                .filter(Boolean); // null 제거

            let filteredItems = null;

            // items가 배열인 경우 처리
            if (Array.isArray(section.items)) {
                filteredItems = section.items.filter((item) => item.checked);
            }

            // items가 객체인 경우 처리
            if (section.items && typeof section.items === "object" && section.items.checked) {
                filteredItems = [section.items]; // 객체를 배열로 변환
            }

            // checked가 true인 items 또는 subSections가 있는 section만 반환
            if (
                (filteredItems && filteredItems.length > 0) ||
                (filteredSubSections && filteredSubSections.length > 0)
            ) {
                return { ...section, items: filteredItems, subSections: filteredSubSections };
            }
            return null; // checked가 true인 항목이 없는 경우 제거
        })
        .filter(Boolean); // null 제거
};
