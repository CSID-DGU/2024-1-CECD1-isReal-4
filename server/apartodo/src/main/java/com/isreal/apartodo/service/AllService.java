package com.isreal.apartodo.service;

import com.isreal.apartodo.document.ApartmentDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.document.RejectionDocument;
import com.isreal.apartodo.dto.JoinRequestDTO;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.ApartmentRepository;
import com.isreal.apartodo.repository.MemberRepository;
import com.isreal.apartodo.repository.RejectionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AllService {

    private final MemberRepository memberRepository;
    private final ApartmentRepository apartmentRepository;
    private final RejectionRepository rejectionRepository;

    public ResponseEntity<String> joinRequest(JoinRequestDTO joinRequestDTO) {
        if (memberRepository.existsByUsername(joinRequestDTO.getUsername())) {
            return new ResponseEntity<>("Username already exists: " + joinRequestDTO.getUsername(), HttpStatus.CONFLICT);
        }

        MemberDocument memberDocument = MemberDocument.builder()
                .username(joinRequestDTO.getUsername())
                .password(joinRequestDTO.getPassword())
                .role(Role.WAIT)
                .memberName(joinRequestDTO.getMemberName())
                .phoneNumber(joinRequestDTO.getPhoneNumber())
                .apartmentName(joinRequestDTO.getApartmentName())
                .apartmentBuildingNumber(joinRequestDTO.getApartmentBuildingNumber())
                .profileImage(null)
                .authDocument(joinRequestDTO.getAuthDocument())
                .build();

        memberRepository.save(memberDocument);

        return new ResponseEntity<>("Join request successfully", HttpStatus.CREATED);
    }

    public List<ApartmentDocument> findApartments(String apartmentName) {
        return apartmentRepository.findByApartmentNameContainingIgnoreCase(apartmentName);
    }

    public RejectionDocument showRejection(String username) {
        return rejectionRepository.findByUsername(username);
    }

    public MemberDocument findDenyJoinRequest(String username) {
        return memberRepository.findByUsername(username);
    }

    public void joinAgain(MemberDocument member) {
        member.setRole(Role.WAIT);
        memberRepository.save(member);

        rejectionRepository.deleteByUsername(member.getUsername());
    }

    public boolean isExistUsername(String username) {
        return memberRepository.existsByUsername(username);
    }
}
