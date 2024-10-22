package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.*;
import com.isreal.apartodo.dto.JoinRejectDTO;
import com.isreal.apartodo.dto.PartnerDTO;
import com.isreal.apartodo.dto.PostDTO;
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

    @PostMapping("/create-notice")
    public NoticeDocument createNotice(@RequestBody PostDTO postDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.createNotice(postDTO, username);
    }

    @PostMapping("/create-partner")
    public PartnerDocument createPartner(@RequestBody PartnerDTO partnerDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.createPartner(partnerDTO, username);
    }

    @GetMapping("/find-partners")
    public List<PartnerDocument> findPartners() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.findPartners(username);
    }

    @PostMapping("/update-partner")
    public PartnerDocument updatePartner(@RequestBody PartnerDocument partner) {
        return adminService.updatePartner(partner);
    }

    @PostMapping("/delete-partner")
    public void deletePartner(@RequestBody PartnerDocument partner) {
        adminService.deletePartner(partner);
    }

    @GetMapping("/find-fault-checklists")
    public List<FaultChecklistDocument> findFaultChecklists() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.findFaultChecklists(username);
    }

    @PostMapping("/reject-fault-checklist")
    public FaultChecklistDocument rejectFaultChecklist(@RequestBody FaultChecklistDocument faultChecklist) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.rejectFaultChecklist(faultChecklist, username);
    }

    @PostMapping("/fault-approve")
    public FaultChecklistDocument faultApprove(@RequestBody FaultChecklistDocument faultChecklist) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return adminService.faultApprove(faultChecklist, username);
    }
}
