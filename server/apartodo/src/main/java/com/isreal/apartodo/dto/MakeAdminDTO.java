package com.isreal.apartodo.dto;

import lombok.Data;

@Data
public class MakeAdminDTO {
    private String username;

    private String password;

    private String memberName;

    private String phoneNumber;

    private String authDocument;

    private String apartmentName;

    private String apartmentInformation;

    private String partnersInformation;
}
