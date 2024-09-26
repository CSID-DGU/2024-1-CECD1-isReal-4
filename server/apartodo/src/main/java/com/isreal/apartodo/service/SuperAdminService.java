package com.isreal.apartodo.service;

import com.isreal.apartodo.document.ApartmentDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.MakeAdminDTO;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.ApartmentRepository;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SuperAdminService {

    private final ApartmentRepository apartmentRepository;
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public void makeAdmin(MakeAdminDTO makeAdminDTO) {
        MemberDocument memberDocument = MemberDocument.builder()
                .memberId(null)
                .username(makeAdminDTO.getUsername())
                .password(passwordEncoder.encode(makeAdminDTO.getPassword()))
                .role(Role.ADMIN)
                .memberName(makeAdminDTO.getMemberName())
                .phoneNumber(makeAdminDTO.getPhoneNumber())
                .apartmentName(makeAdminDTO.getApartmentName())
                .apartmentBuildingNumber("")
                .authDocument(makeAdminDTO.getAuthDocument())
                .build();
        memberRepository.save(memberDocument);

        ApartmentDocument apartmentDocument = ApartmentDocument.builder()
                .apartmentId(null)
                .apartmentName(makeAdminDTO.getApartmentName())
                .apartmentInformation(makeAdminDTO.getApartmentInformation())
                .partnersInformation(makeAdminDTO.getPartnersInformation())
                .build();
        apartmentRepository.save(apartmentDocument);
    }
}
