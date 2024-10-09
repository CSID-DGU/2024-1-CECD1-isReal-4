package com.isreal.apartodo.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "partner")
public class PartnerDocument {
    @Id
    private String partnerId;

    @Field("apartment_name")
    private String apartmentName;

    @Field("company_name")
    private String companyName; // 업체명

    @Field("manager_name")
    private String managerName; // 담당자 이름

    @Field("phone_number")
    private String phoneNumber; // 연락처

    @Field("area")
    private String area; // 담당 구역
}
