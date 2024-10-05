package com.isreal.apartodo.service;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.MemberRepository;
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

    public List<MemberDocument> findJoinRequests(String apartmentName) {
        return memberRepository.findByApartmentNameAndRole(apartmentName, Role.WAIT, Sort.by(Sort.Direction.ASC, "memberId"));
    }

    public void approveJoinRequest(MemberDocument member) {
        member.setRole(Role.MEMBER);

        memberRepository.save(member);
    }
}
