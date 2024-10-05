package com.isreal.apartodo.dto;

import lombok.Data;

import java.util.List;

@Data
public class FaultRequestDTO {

    private String createAt;
    private List<Fault> faults;

    @Data
    public static class Fault {
        String name;
        ChecklistDTO.Items items;
    }
}
