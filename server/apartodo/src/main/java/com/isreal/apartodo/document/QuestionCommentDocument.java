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
@Document(collection = "question_comment")
public class QuestionCommentDocument {
    @Id
    private String questionCommentId;

    @Field("username")
    private String username; // 작성자 이메일

    @Field("member_name")
    private String memberName;

    @Field("role")
    private Role role;

    @Field("apartment_name")
    private String apartmentName;

    @Field("apartment_building_number")
    private String apartmentBuildingNumber;

    @Field("create_at")
    private String createAt;

    @Field("content")
    private String content;
}
