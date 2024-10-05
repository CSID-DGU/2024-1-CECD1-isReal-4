package com.isreal.apartodo.controller;

import com.isreal.apartodo.dto.MakeAdminDTO;
import com.isreal.apartodo.service.SuperAdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/super-admin")
public class SuperAdminController {

    private final SuperAdminService superAdminService;

    @PostMapping("/make-admin")
    public ResponseEntity<String> makeAdmin(@RequestBody MakeAdminDTO makeAdminDTO) {
        return superAdminService.makeAdmin(makeAdminDTO);
    }

    @GetMapping("/is-super-admin")
    public boolean isSuperAdmin() {
        return true;
    }
}
