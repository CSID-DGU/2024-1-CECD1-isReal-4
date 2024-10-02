package com.isreal.apartodo.controller;

import com.isreal.apartodo.dto.JoinRequestDTO;
import com.isreal.apartodo.service.AllService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/all")
public class AllController {

    private final AllService allService;

    @PostMapping("/join-request")
    public void joinRequest(@RequestBody JoinRequestDTO joinRequestDTO) {
        allService.joinRequest(joinRequestDTO);
    }
}
