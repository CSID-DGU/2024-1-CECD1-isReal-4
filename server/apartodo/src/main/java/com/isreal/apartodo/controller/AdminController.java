package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.document.RejectionDocument;
import com.isreal.apartodo.dto.JoinRejectDTO;
import com.isreal.apartodo.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/find-join-requests")
    public List<MemberDocument> findJoinRequests() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.findJoinRequests(username);
    }

    @PostMapping("/approve-join-request")
    public void approveJoinRequest(@RequestBody MemberDocument member) {
        adminService.approveJoinRequest(member);
    }

    @GetMapping("/find-fault-requests")
    public List<FaultDocument> findFaultRequests() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.findFaultRequests(username);
    }

    @PostMapping("/join-reject")
    public void joinReject(@RequestBody JoinRejectDTO joinRejectDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        adminService.joinReject(joinRejectDTO, username);
    }

    @GetMapping("/show-rejection")
    public RejectionDocument showRejection(@RequestParam(name = "username") String username) {
        return adminService.showRejection(username);
    }

    @PostMapping("/fault-reject")
    public void faultReject(@RequestBody FaultDocument fault) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        adminService.faultReject(fault, username);
    }
}
