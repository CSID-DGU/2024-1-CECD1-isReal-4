package com.isreal.apartodo.controller;

import com.isreal.apartodo.dto.MakeAdminDTO;
import com.isreal.apartodo.service.SuperAdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/super-admin")
public class SuperAdminController {

    private final SuperAdminService superAdminService;

    @PostMapping("/make-admin")
    public void makeAdmin(@RequestBody MakeAdminDTO makeAdminDTO) {
        superAdminService.makeAdmin(makeAdminDTO);
    }
}
