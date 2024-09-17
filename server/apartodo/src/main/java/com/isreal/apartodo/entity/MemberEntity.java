package com.isreal.apartodo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String memberName;
    private String phoneNumber;
    private String apartmentName;
    private String apartmentBuildingNumber;

    @Column(columnDefinition = "TEXT")
    private String authDocument;
}
