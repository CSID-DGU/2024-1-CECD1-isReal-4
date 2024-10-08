package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.ApartmentDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.document.RejectionDocument;
import com.isreal.apartodo.dto.JoinRequestDTO;
import com.isreal.apartodo.service.AllService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class AllController {

    private final AllService allService;

    @PostMapping("/all/join-request")
    public ResponseEntity<String> joinRequest(@RequestBody JoinRequestDTO joinRequestDTO) {
        return allService.joinRequest(joinRequestDTO);
    }

    @GetMapping("/all/find-apartments")
    public List<ApartmentDocument> findApartments(@RequestParam(name = "apartment-name") String apartmentName) {
        return allService.findApartments(apartmentName);
    }

    @GetMapping("/deny/is-deny")
    public boolean isDeny() {
        return true;
    }

    @GetMapping("/wait/is-wait")
    public boolean isWait() {
        return true;
    }

    @GetMapping("/deny/show-rejection")
    public RejectionDocument showRejection() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return allService.showRejection(username);
    }

    @GetMapping("/deny/find-deny-join-request")
    public MemberDocument findDenyJoinRequest() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return allService.findDenyJoinRequest(username);
    }
}
