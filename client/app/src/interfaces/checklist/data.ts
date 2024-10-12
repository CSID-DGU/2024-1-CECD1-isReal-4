import {TChecklist} from "@/interfaces/checklist/types.ts";

/*
사용자가 체크리스트를 작성할 때 기본적으로 제공해 주는 템플릿입니다.
*/

export const initialChecklist: TChecklist = {
    createAt: "2024-10-04T10:00:00",
    sections: [
        {
            name: "현관/전실",
            items: null,
            subSections: [
                {
                    name: "천장",
                    items: null,
                    detailSections: [
                        {
                            name: "전등",
                            items: [
                                {
                                    id: "1",
                                    description: "외관상태(부착상태, 파손유무 등) 이상 유무, 자동센서 작동 이상 유무",
                                    checked: false,
                                    appendText: "전등 작동 정상",
                                    appendImages: []
                                },
                                {
                                    id: "2",
                                    description: "전등 밝기 및 색상 확인",
                                    checked: false,
                                    appendText: "",
                                    appendImages: []
                                }
                            ]
                        },
                        {
                            name: "센서",
                            items: [
                                {
                                    id: "3",
                                    description: "센서 정상 작동 여부 확인",
                                    checked: false,
                                    appendText: "",
                                    appendImages: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "벽",
                    items: null,
                    detailSections: [
                        {
                            name: "도장 상태",
                            items: [
                                {
                                    id: "4",
                                    description: "벽 도장 상태 확인",
                                    checked: false,
                                    appendText: "도장 상태 양호",
                                    appendImages: []
                                }
                            ]
                        },
                        {
                            name: "오염 여부",
                            items: [
                                {
                                    id: "5",
                                    description: "벽 오염 여부 확인",
                                    checked: false,
                                    appendText: "",
                                    appendImages: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "바닥",
            items: [
                {
                    id: "6",
                    description: "바닥재 상태, 곰팡이 여부 확인",
                    checked: false,
                    appendText: "곰팡이 발견됨",
                    appendImages: []
                }
            ],
            subSections: null
        },
        {
            name: "창문",
            items: null,
            subSections: [
                {
                    name: "창문 유리",
                    items: [
                        {
                            id: "7",
                            description: "창문 유리 파손 여부 확인",
                            checked: false,
                            appendText: "",
                            appendImages: []
                        }
                    ],
                    detailSections: null
                },
                {
                    name: "창문 틀",
                    items: [
                        {
                            id: "8",
                            description: "창문 틀 상태 확인",
                            checked: false,
                            appendText: "창문 틀 문제 없음",
                            appendImages: []
                        }
                    ],
                    detailSections: null
                }
            ]
        }
    ]
};