package com.isreal.apartodo.dto;

import lombok.Data;

@Data
public class JoinRequestDTO {
    private String username;

    private String password;

    private String memberName;

    private String phoneNumber;

    private String apartmentName;

    private String apartmentBuildingNumber;

    private String authDocument;
}
