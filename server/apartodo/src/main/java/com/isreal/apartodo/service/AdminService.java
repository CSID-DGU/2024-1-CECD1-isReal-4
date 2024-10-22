package com.isreal.apartodo.service;

import com.isreal.apartodo.document.*;
import com.isreal.apartodo.dto.*;
import com.isreal.apartodo.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminService {

    private final MemberRepository memberRepository;
    private final FaultRepository faultRepository;
    private final RejectionRepository rejectionRepository;
    private final NoticeRepository noticeRepository;
    private final PartnerRepository partnerRepository;
    private final FaultChecklistRepository faultChecklistRepository;

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
        return faultRepository.findByApartmentNameAndApprovalStatus(apartmentName, ApprovalStatus.PEND, Sort.by(Sort.Direction.DESC, "faultId"));
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
        fault.setApprovalStatus(ApprovalStatus.REJECT);            // 승인 상태를 REJECT로 설정

        // 변경된 FaultDocument를 데이터베이스에 저장
        faultRepository.save(fault);
    }

    public NoticeDocument createNotice(PostDTO postDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // NoticeDocument 생성
        NoticeDocument noticeDocument = NoticeDocument.builder()
                .username(username)                          // 작성자의 이메일
                .memberName(member.getMemberName())           // 작성자의 이름
                .role(member.getRole())                       // 작성자의 역할
                .apartmentName(member.getApartmentName())     // 작성자가 속한 아파트 이름
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 아파트 동호수
                .createAt(postDTO.getCreateAt())              // 작성 시간
                .title(postDTO.getTitle())                    // 공지 제목
                .content(postDTO.getContent())                // 공지 내용
                .appendImages(postDTO.getAppendImages())      // 첨부된 이미지들
                .build();

        // 생성된 NoticeDocument를 저장 후 return
        return noticeRepository.save(noticeDocument);
    }

    public PartnerDocument createPartner(PartnerDTO partnerDTO, String username) {
        // username을 통해 회원 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // apartmentName 추출
        String apartmentName = member.getApartmentName();

        // PartnerDocument 생성
        PartnerDocument partnerDocument = PartnerDocument.builder()
                .apartmentName(apartmentName)                // apartmentName 설정
                .companyName(partnerDTO.getCompanyName())    // 업체명 설정
                .managerName(partnerDTO.getManagerName())    // 담당자 이름 설정
                .phoneNumber(partnerDTO.getPhoneNumber())    // 연락처 설정
                .area(partnerDTO.getArea())                  // 담당 구역 설정
                .build();

        // 생성된 PartnerDocument를 저장 후 반환
        return partnerRepository.save(partnerDocument);
    }

    public List<PartnerDocument> findPartners(String username) {
        // 1. username을 통해 회원 정보를 가져와 apartmentName 추출
        MemberDocument member = memberRepository.findByUsername(username);
        String apartmentName = member.getApartmentName();

        // 2. 해당 apartmentName에 속한 파트너 목록을 내림차순으로 가져옴
        return partnerRepository.findByApartmentName(
                apartmentName,
                Sort.by(Sort.Direction.DESC, "partnerId")
        );
    }

    public PartnerDocument updatePartner(PartnerDocument partner) {
        return partnerRepository.save(partner);
    }

    public void deletePartner(PartnerDocument partner) {
        partnerRepository.deleteById(partner.getPartnerId());
    }

    public List<FaultChecklistDocument> findFaultChecklists(String username) {
        // username으로 회원 정보를 조회하여 apartmentName을 가져옴
        MemberDocument member = memberRepository.findByUsername(username);
        String apartmentName = member.getApartmentName();

        // apartmentName과 일치하는 FaultChecklistDocument 리스트 반환
        return faultChecklistRepository.findByApartmentName(
                apartmentName,
                Sort.by(Sort.Direction.DESC, "faultChecklistId")
        );
    }

    public FaultChecklistDocument rejectFaultChecklist(FaultChecklistDocument faultChecklist, String username) {
        // username으로 관리자 정보를 가져옴
        MemberDocument admin = memberRepository.findByUsername(username);

        // reviewer에 관리자의 이름을 저장
        faultChecklist.setReviewer(admin.getMemberName());

        // approvalStatus를 REJECT로 설정
        faultChecklist.setApprovalStatus(ApprovalStatus.REJECT);

        // 변경된 FaultChecklistDocument를 저장
        return faultChecklistRepository.save(faultChecklist);
    }

    public FaultChecklistDocument faultApprove(FaultChecklistDocument faultChecklist, String username) {
        // 1. username을 통해 관리자의 정보를 조회
        MemberDocument admin = memberRepository.findByUsername(username);

        // 2. FaultChecklistDocument의 approvalStatus를 APPROVE로 설정
        faultChecklist.setApprovalStatus(ApprovalStatus.APPROVE);

        // 3. 관리자의 이름을 reviewer 필드에 저장
        faultChecklist.setReviewer(admin.getMemberName());

        // 4. 업데이트된 FaultChecklistDocument를 저장
        FaultChecklistDocument updatedFaultChecklist = faultChecklistRepository.save(faultChecklist);

        // 5. RestTemplate을 이용해서 POST 방식으로 외부 API에 데이터를 전송
        RestTemplate restTemplate = new RestTemplate();
        String url = "${addblock}";

        // 6. 요청에 사용할 헤더 설정 (JSON 타입)
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // 7. FaultChecklistDocument를 HttpEntity로 변환
        HttpEntity<FaultChecklistDocument> requestEntity = new HttpEntity<>(updatedFaultChecklist, headers);

        // 8. 외부 API로 POST 요청을 전송
        restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        // 9. 수정된 FaultChecklistDocument 반환
        return updatedFaultChecklist;
    }
}
