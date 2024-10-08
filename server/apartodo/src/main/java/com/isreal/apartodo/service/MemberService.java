package com.isreal.apartodo.service;

import com.isreal.apartodo.document.ChecklistDocument;
import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.document.QuestionDocument;
import com.isreal.apartodo.dto.ChecklistDTO;
import com.isreal.apartodo.dto.FaultRequestDTO;
import com.isreal.apartodo.dto.PostDTO;
import com.isreal.apartodo.repository.ChecklistRepository;
import com.isreal.apartodo.repository.FaultRepository;
import com.isreal.apartodo.repository.MemberRepository;
import com.isreal.apartodo.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ChecklistRepository checklistRepository;
    private final FaultRepository faultRepository;
    private final QuestionRepository questionRepository;

    public ChecklistDocument addCheckList(ChecklistDTO checklistDTO, String username) {
        MemberDocument member = memberRepository.findByUsername(username);
        String memberName = member.getMemberName();
        String apartmentName = member.getApartmentName();

        ChecklistDocument checklistDocument = ChecklistDocument.builder()
                .createAt(checklistDTO.getCreateAt())
                .sections(checklistDTO.getSections())
                .username(username)
                .memberName(memberName)
                .apartmentName(apartmentName)
                .build();

        return checklistRepository.save(checklistDocument);
    }

    public List<ChecklistDocument> findChecklists(String username) {
        return checklistRepository.findByUsername(username, Sort.by(Sort.Direction.DESC, "checklistId"));
    }

    public void faultRequest(FaultRequestDTO faultRequestDTO, String username) {
        // username으로 Member 정보 조회
        MemberDocument member = memberRepository.findByUsername(username);
        String memberName = member.getMemberName();
        String phoneNumber = member.getPhoneNumber();
        String apartmentName = member.getApartmentName();
        String apartmentBuildingNumber = member.getApartmentBuildingNumber();

        // FaultRequestDTO의 faults 리스트를 순회하며 각각 FaultDocument로 변환 후 저장
        for (FaultRequestDTO.Fault fault : faultRequestDTO.getFaults()) {
            FaultDocument faultDocument = FaultDocument.builder()
                    .createAt(faultRequestDTO.getCreateAt())               // 신청한 시간
                    .faultName(fault.getFaultName())                       // 하자 이름
                    .description(fault.getDescription())                   // 상태
                    .appendText(fault.getAppendText())                     // 추가 설명
                    .appendImages(fault.getAppendImages())                 // 추가 이미지
                    .username(username)                                    // 입주 예정자 이메일
                    .memberName(memberName)                                // 입주 예정자 이름
                    .phoneNumber(phoneNumber)                              // 입주 예정자 핸드폰 번호
                    .apartmentName(apartmentName)                          // 아파트 이름
                    .apartmentBuildingNumber(apartmentBuildingNumber)      // 동호수
                    .reviewer(null)                                        // 검토자 정보 없음
                    .reviewComment(null)                                   // 검토 코멘트 없음
                    .reviewCompletionTime(null)                            // 검토 시간 없음
                    .approvalStatus("PENDING")                             // 기본 승인 상태 "PENDING"
                    .build();

            // FaultDocument 저장
            faultRepository.save(faultDocument);
        }
    }

    public List<FaultDocument> findFaults(String username) {
        return faultRepository.findByUsername(username, Sort.by(Sort.Direction.DESC, "faultId"));
    }

    public QuestionDocument createQuestion(PostDTO postDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // QuestionDocument 생성
        QuestionDocument questionDocument = QuestionDocument.builder()
                .username(username)                          // 작성자의 이메일
                .memberName(member.getMemberName())           // 작성자의 이름
                .role(member.getRole())                       // 작성자의 역할
                .apartmentName(member.getApartmentName())     // 작성자가 속한 아파트 이름
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 아파트 동호수
                .createAt(postDTO.getCreateAt())              // 작성 시간
                .title(postDTO.getTitle())                    // 게시물 제목
                .content(postDTO.getContent())                // 게시물 내용
                .appendImages(postDTO.getAppendImages())      // 게시물에 첨부된 이미지들
                .build();

        // 생성된 QuestionDocument를 저장 후 return
        return questionRepository.save(questionDocument);
    }
}
