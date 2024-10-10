import { TChecklist } from './types';
/*
export const initialChecklist: TSection[] = [
    {
        id: "1",
        name: "현관/전실",
        subSections: {
            "천장": [
                {
                    id: "1-1-1",
                    description: "외관상태(부착상태, 파손유무등) 이상 유무, 자동센서 작동 이상 유무",
                    checked: true
                },
                {
                    id: "1-1-2",
                    description: "도장상태, 오염, 곰팡이, 시공불량등",
                    checked: false
                }
            ],
            "벽": [
                {
                    id: "1-2-1",
                    description: "외관상태(부착상태, 긁힘, 찌그러짐, 표면파손, 오염등), 작동상태(개폐기능)",
                    checked: true
                },
                {
                    id: "1-2-2",
                    description: "문틀/문표면 불량, 문의 밀폐 상태, 말발굽 미설치등",
                    checked: true
                }
            ],
            "현관 중문/문틀": [
                {
                    category: "외관상태, 작동상태, 문 손잡이 기능 상태",
                    items: [
                        {
                            id: "1-3-1",
                            description: "현관 방화문이 현관바닥에 닿는지, 완전히 개폐해 본다. 개폐기능",
                            checked: true
                        },
                        {
                            id: "1-3-2",
                            description: "문손잡이 기능상태",
                            checked: false
                        }
                    ]
                },
                {
                    category: "찍힘, 들뜸, 파손, 오염, 유리고정 상태",
                    items: [
                        {
                            id: "1-3-3",
                            description: "유리고정 상태",
                            checked: true
                        }
                    ]
                }
            ]
        }
    }
];

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
                            items: {
                                description: "외관상태(부착상태, 파손유무등) 이상 유무, 자동센서 작동 이상 유무",
                                checked: true,
                                appendText: "",
                                appendImages: []
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "바닥",
            items: {
                description: "바닥재 상태, 곰팡이 여부 확인",
                checked: false,
                appendText: "곰팡이 발견됨",
                appendImages: ["image3.png"]
            },
            subSections: null
        }
    ]
};