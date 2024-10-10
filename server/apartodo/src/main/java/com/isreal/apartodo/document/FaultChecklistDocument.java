package com.isreal.apartodo.document;

import com.isreal.apartodo.dto.ChecklistDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "fault_checklist")
public class FaultChecklistDocument {
    @Id
    private String faultChecklistId;

    @Field("create_at")
    private String createAt;

    @Field("sections")
    private List<ChecklistDTO.Section> sections;

    @Field("username")
    private String username; // 입주예정자 이메일

    @Field("member_name")
    private String memberName; // 입주예정자 이름

    @Field("apartment_name")
    private String apartmentName;

    @Field("phone_number")
    private String phoneNumber; // 입주예정자 핸드폰 번호

    @Field("apartment_building_number")
    private String apartmentBuildingNumber; // 동호수

    @Field("reviewer")
    private String reviewer; // 관리자 이름

    @Field("review_comment")
    private String reviewComment; // 거절시 거절사유

    @Field("review_completion_time")
    private String reviewCompletionTime; // 검토한 시간

    @Field("approval_status")
    private String approvalStatus; // 승인 여부
}
