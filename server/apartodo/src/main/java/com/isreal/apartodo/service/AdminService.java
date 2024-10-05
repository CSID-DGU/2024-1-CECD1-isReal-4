package com.isreal.apartodo.service;

import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
import com.isreal.apartodo.repository.FaultRepository;
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
    private final FaultRepository faultRepository;

    public List<MemberDocument> findJoinRequests(String apartmentName) {
        return memberRepository.findByApartmentNameAndRole(apartmentName, Role.WAIT, Sort.by(Sort.Direction.DESC, "memberId"));
    }

    public void approveJoinRequest(MemberDocument member) {
        member.setRole(Role.MEMBER);

        memberRepository.save(member);
    }

    public List<FaultDocument> findFaultRequests(String apartmentName) {
        return faultRepository.findByApartmentNameAndApprovalStatus(apartmentName, "PENDING", Sort.by(Sort.Direction.DESC, "faultId"));
    }
}
