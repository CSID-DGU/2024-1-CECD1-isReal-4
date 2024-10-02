package com.isreal.apartodo.service;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.JoinRequestDTO;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AllService {

    private final MemberRepository memberRepository;

    public void joinRequest(JoinRequestDTO joinRequestDTO) {
        MemberDocument memberDocument = MemberDocument.builder()
                .username(joinRequestDTO.getUsername())
                .password(joinRequestDTO.getPassword())
                .role(Role.WAIT)
                .memberName(joinRequestDTO.getMemberName())
                .phoneNumber(joinRequestDTO.getPhoneNumber())
                .apartmentName(joinRequestDTO.getApartmentName())
                .apartmentBuildingNumber(joinRequestDTO.getApartmentBuildingNumber())
                .authDocument(joinRequestDTO.getAuthDocument())
                .build();

        memberRepository.save(memberDocument);
    }
}
