package com.isreal.apartodo.dto;

import com.isreal.apartodo.document.QuestionDocument;
import lombok.Data;

import java.util.List;

@Data
public class MyPageDTO {
    private String username;

    private String memberName;

    private String apartmentName;

    private String apartmentBuildingNumber;

    private String profileImage;

    private int faultCount; // 하자 갯수

    private int questionCount; // 질문글 갯수

    private List<QuestionDocument> questions; // 질문글들
}
