package com.isreal.apartodo.dto;

import lombok.Data;

import java.util.List;

@Data
public class FaultRequestDTO {

    private String createAt;
    private List<Fault> faults;

    @Data
    public static class Fault {
        String faultName;
        String description; // 상태
        String appendText; // 추가 설명
        List<String> appendImages; // 추가 이미지
    }
}
