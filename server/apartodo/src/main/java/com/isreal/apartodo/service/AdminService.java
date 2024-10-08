package com.isreal.apartodo.service;

import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.document.RejectionDocument;
import com.isreal.apartodo.dto.JoinRejectDTO;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.FaultRepository;
import com.isreal.apartodo.repository.MemberRepository;
import com.isreal.apartodo.repository.RejectionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminService {

    private final MemberRepository memberRepository;
    private final FaultRepository faultRepository;
    private final RejectionRepository rejectionRepository;

    public List<MemberDocument> findJoinRequests(String username) {
        String apartmentName = memberRepository.findByUsername(username).getApartmentName();
        return memberRepository.findByApartmentNameAndRole(apartmentName, Role.WAIT, Sort.by(Sort.Direction.DESC, "memberId"));
    }

    public void approveJoinRequest(MemberDocument member) {
        member.setRole(Role.MEMBER);

        memberRepository.save(member);
    }

    public List<FaultDocument> findFaultRequests(String username) {
        String apartmentName = memberRepository.findByUsername(username).getApartmentName();
        return faultRepository.findByApartmentNameAndApprovalStatus(apartmentName, "PENDING", Sort.by(Sort.Direction.DESC, "faultId"));
    }

    public void joinReject(JoinRejectDTO joinRejectDTO, String adminUsername) {
        // 회원의 정보를 가져옴
        MemberDocument member = joinRejectDTO.getMember();

        // 관리자의 정보를 데이터베이스에서 조회
        MemberDocument admin = memberRepository.findByUsername(adminUsername);

        // 회원의 role을 DENY로 변경
        member.setRole(Role.DENY);
        memberRepository.save(member);  // 변경된 역할을 데이터베이스에 저장

        // RejectionDocument 생성
        RejectionDocument rejectionDocument = RejectionDocument.builder()
                .username(member.getUsername())                   // 회원의 username (입주 예정자)
                .adminName(admin.getMemberName())                 // 관리자의 이름
                .adminPhoneNumber(admin.getPhoneNumber())         // 관리자의 전화번호
                .adminMail(admin.getUsername())                   // 관리자의 이메일
                .rejection(joinRejectDTO.getRejection())          // 거절 사유
                .createAt(joinRejectDTO.getCreateAt())            // 거절된 시간
                .build();

        // RejectionDocument 저장
        rejectionRepository.save(rejectionDocument);
    }

    public RejectionDocument showRejection(String username) {
        return rejectionRepository.findByUsername(username);
    }

    public void faultReject(FaultDocument fault, String username) {
        // username을 통해 회원 정보를 조회하여 memberName을 가져옴
        MemberDocument reviewer = memberRepository.findByUsername(username);

        // faultDocument의 reviewer와 approvalStatus 업데이트
        fault.setReviewer(reviewer.getMemberName());  // reviewer에 관리자의 이름 저장
        fault.setApprovalStatus("Reject");            // 승인 상태를 Reject로 설정

        // 변경된 FaultDocument를 데이터베이스에 저장
        faultRepository.save(fault);
    }
}
