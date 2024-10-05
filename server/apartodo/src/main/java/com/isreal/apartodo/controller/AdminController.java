package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/find-join-requests")
    public List<MemberDocument> findJoinRequests() {
        String apartmentName = getApartmentNameFromAuthentication();
        return adminService.findJoinRequests(apartmentName);
    }

    @PostMapping("/approve-join-request")
    public void approveJoinRequest(@RequestBody MemberDocument member) {
        adminService.approveJoinRequest(member);
    }

    @GetMapping("/find-fault-requests")
    public List<FaultDocument> findFaultRequests() {
        String apartmentName = getApartmentNameFromAuthentication();
        return adminService.findFaultRequests(apartmentName);
    }

    private String getApartmentNameFromAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        return auth.getAuthority();
    }
}
