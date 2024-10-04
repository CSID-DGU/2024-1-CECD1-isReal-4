package com.isreal.apartodo.dto;

import lombok.Data;

import java.util.List;

@Data
public class ChecklistDTO { // 체크리스트 작성

    private String createAt; // 작성 시간
    private List<Section> sections; // 체크리스트 하나당 여러 "Section"들을 가짐, 하나 뿐이면 그냥 하나만 넣기

    @Data
    public static class Section { // 대분류 "현관/전실" 등에 해당됨
        String name; // 현관/전실
        Items items; // 각각 하나의 "Items"를 가짐, "SubSection"이 있으면 NULL
        List<SubSection> subSections; // 여러 "SubSection"들을 가짐, "Section"에서 끝나면 NULL

    }

    @Data
    public static class SubSection { // 중분류 "천장" 등에 해당됨
        String name; // 천장
        Items items; // 각각 하나의 "Items"를 가짐, "DetailSection"이 있으면 NULL
        List<DetailSection> detailSections; // 여러 "DetailSection"들을 가짐, "SubSection"에서 끝나면 NULL
    }

    @Data
    public static class DetailSection { // 소분류 "전등" 등에 해당됨
        String name; // 전등
        Items items; // 각각 하나의 "Items"를 가짐
    }

    @Data
    public static class Items { // 정보들을 기입
        String description; // 상태
        boolean checked; // 체크 여부
        String appendText; // 추가 설명
        List<String> appendImages; // 추가 이미지
    }
}
