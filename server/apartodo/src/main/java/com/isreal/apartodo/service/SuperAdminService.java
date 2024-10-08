package com.isreal.apartodo.service;

import com.isreal.apartodo.document.ApartmentDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.MakeAdminDTO;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.ApartmentRepository;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SuperAdminService {

    private final ApartmentRepository apartmentRepository;
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public ResponseEntity<String> makeAdmin(MakeAdminDTO makeAdminDTO) {
        if (memberRepository.existsByUsername(makeAdminDTO.getUsername())) {
            return new ResponseEntity<>("Username already exists: " + makeAdminDTO.getUsername(), HttpStatus.CONFLICT);
        }

        if (apartmentRepository.existsByApartmentName(makeAdminDTO.getApartmentName())) {
            return new ResponseEntity<>("Apartment name already exists: " + makeAdminDTO.getApartmentName(), HttpStatus.CONFLICT);
        }

        MemberDocument memberDocument = MemberDocument.builder()
                .memberId(null)
                .username(makeAdminDTO.getUsername())
                .password(passwordEncoder.encode(makeAdminDTO.getPassword()))
                .role(Role.ADMIN)
                .memberName(makeAdminDTO.getMemberName())
                .phoneNumber(makeAdminDTO.getPhoneNumber())
                .apartmentName(makeAdminDTO.getApartmentName())
                .apartmentBuildingNumber("")
                .profileImage(null)
                .authDocument(makeAdminDTO.getAuthDocument())
                .build();
        memberRepository.save(memberDocument);

        ApartmentDocument apartmentDocument = ApartmentDocument.builder()
                .apartmentId(null)
                .apartmentName(makeAdminDTO.getApartmentName())
                .apartmentInformation(makeAdminDTO.getApartmentInformation())
                .build();
        apartmentRepository.save(apartmentDocument);

        return new ResponseEntity<>("Admin created successfully", HttpStatus.CREATED);
    }
}
