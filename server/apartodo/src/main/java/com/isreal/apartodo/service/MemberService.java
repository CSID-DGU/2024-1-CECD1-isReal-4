package com.isreal.apartodo.service;

import com.isreal.apartodo.document.ChecklistDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.ChecklistDTO;
import com.isreal.apartodo.repository.ChecklistRepository;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ChecklistRepository checklistRepository;

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
}
