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
@Document(collection = "rejection")
public class RejectionDocument {
    @Id
    private String rejectionId;

    @Field("username")
    private String username; // 입주예정자 이메일

    @Field("admin_name")
    private String adminName; // 거절한 관리자 이름

    @Field("admin_phone_number")
    private String adminPhoneNumber; // 거절한 관리자 전화번호

    @Field("admin_mail")
    private String adminMail; // 거절한 관리자 이메일

    @Field("rejection")
    private String rejection; // 거절 사유
}
