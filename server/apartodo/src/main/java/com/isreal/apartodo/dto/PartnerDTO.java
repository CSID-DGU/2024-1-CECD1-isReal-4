package com.isreal.apartodo.dto;

import lombok.Data;

@Data
public class PartnerDTO {
    private String companyName; // 업체명

    private String managerName; // 담당자 이름

    private String phoneNumber; // 연락처

    private String area; // 담당 구역
}
