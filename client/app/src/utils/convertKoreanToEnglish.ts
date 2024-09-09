// 한글 -> 영어로 변환하는 함수
const koreanToEnglishMap: { [key: string]: string } = {
    ㅂ: "q",
    ㅈ: "w",
    ㄷ: "e",
    ㄱ: "r",
    ㅅ: "t",
    ㅛ: "y",
    ㅕ: "u",
    ㅑ: "i",
    ㅐ: "o",
    ㅔ: "p",
    ㅁ: "a",
    ㄴ: "s",
    ㅇ: "d",
    ㄹ: "f",
    ㅎ: "g",
    ㅗ: "h",
    ㅓ: "j",
    ㅏ: "k",
    ㅣ: "l",
    ㅋ: "z",
    ㅌ: "x",
    ㅊ: "c",
    ㅍ: "v",
    ㅠ: "b",
    ㅜ: "n",
    ㅡ: "m",
    ㅃ: "Q",
    ㅉ: "W",
    ㄸ: "E",
    ㄲ: "R",
    ㅆ: "T",
    ㅒ: "O",
    ㅖ: "P",
};

export const convertKoreanToEnglish = (value: string): string => {
    return value
        .split("")
        .map((char) => koreanToEnglishMap[char] || char)
        .join("");
};
