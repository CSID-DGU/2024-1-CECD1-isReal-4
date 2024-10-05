package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.ChecklistDocument;
import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.dto.ChecklistDTO;
import com.isreal.apartodo.dto.FaultRequestDTO;
import com.isreal.apartodo.service.MemberService;
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
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/add-checklist")
    public ChecklistDocument addChecklist(@RequestBody ChecklistDTO checklistDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String username = auth.getAuthority();

        return memberService.addCheckList(checklistDTO, username);
    }

    @GetMapping("/find-checklists")
    public List<ChecklistDocument> findChecklists() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String username = auth.getAuthority();

        return memberService.findChecklists(username);
    }

    @PostMapping("/fault-request")
    public void faultRequest(@RequestBody FaultRequestDTO faultRequestDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String username = auth.getAuthority();

        memberService.faultRequest(faultRequestDTO, username);
    }

    @GetMapping("/find-faults")
    public List<FaultDocument> findFaults() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String username = auth.getAuthority();

        return memberService.findFaults(username);
    }
}
