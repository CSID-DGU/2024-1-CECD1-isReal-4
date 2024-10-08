package com.isreal.apartodo.document;

import com.isreal.apartodo.dto.Role;
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
@Document(collection = "member")
public class MemberDocument {
    @Id
    private String memberId;

    @Field("username")
    private String username;

    @Field("password")
    private String password;

    @Field("role")
    private Role role;

    @Field("member_name")
    private String memberName;

    @Field("phone_number")
    private String phoneNumber;

    @Field("apartment_name")
    private String apartmentName;

    @Field("apartment_building_number")
    private String apartmentBuildingNumber;

    @Field("profile_image")
    private String profileImage;

    @Field("auth_document")
    private String authDocument;
}