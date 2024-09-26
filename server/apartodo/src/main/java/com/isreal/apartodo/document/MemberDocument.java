package com.isreal.apartodo.document;

import com.isreal.apartodo.dto.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "member")
public class MemberDocument {
    @Id
    private String memberId;

    private String username;

    private String password;


    private Role role;

    private String memberName;

    private String phoneNumber;

    private String apartmentName;

    private String apartmentBuildingNumber;

    private String authDocument;
}